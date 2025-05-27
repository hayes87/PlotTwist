// Sistema de Reconhecimento de Voz para o Jogo Perfil
class VoiceRecognition {    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.isSupported = false;
        this.lastResult = '';
        this.confidenceThreshold = 0.1; // Threshold muito baixo - aceita quase tudo
        this.autoSubmit = true; // Sempre submete automaticamente
        this.alwaysSubmit = true; // Nova opção: sempre submete independente da confiança
        this.language = 'pt-BR';
        this.continuousMode = true; // Sempre escutando
        this.gameActive = false; // Controla se o jogo está ativo
        this.microphonePermissionGranted = false; // Controla se já temos permissão do microfone
        this.restartAttempts = 0; // Conta tentativas de restart para evitar loop infinito
        this.maxRestartAttempts = 3; // Máximo de tentativas antes de parar
        this.shouldRestart = false; // Controla se deve reiniciar após erro
        
        // Estado da interface
        this.voiceButton = null;
        this.answerInput = null;
        this.statusIndicator = null;
        
        this.init();
    }    init() {
        // Verifica se o navegador suporta Web Speech API
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            this.isSupported = true;
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.setupRecognition();
            this.createVoiceInterface();
            
            // Carrega estado da permissão do localStorage
            const savedPermission = localStorage.getItem('microphonePermissionGranted');
            if (savedPermission === 'true') {
                this.microphonePermissionGranted = true;
                console.log('🎤 Permissão do microfone carregada do cache');
            }
            
            console.log('🎤 Sistema de voz inicializado - permissão será verificada quando necessário');
        } else {
            console.warn('Web Speech API não é suportada neste navegador');
            this.showNotSupportedMessage();
        }
    }// Método para verificar permissão sem solicitar
    async checkMicrophonePermission() {
        try {
            const permissions = await navigator.permissions.query({ name: 'microphone' });
            console.log('🎤 Status da permissão do microfone:', permissions.state);
            
            if (permissions.state === 'granted') {
                this.microphonePermissionGranted = true;
                return true;
            } else if (permissions.state === 'denied') {
                this.microphonePermissionGranted = false;
                return false;
            } else {
                // 'prompt' - ainda não foi decidido
                return null;
            }
        } catch (error) {
            console.log('🎤 Não foi possível verificar permissão via API, usando flag interno');
            return this.microphonePermissionGranted;
        }
    }    // Método para solicitar permissão do microfone uma única vez
    async requestMicrophonePermission() {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            this.microphonePermissionGranted = true;
            localStorage.setItem('microphonePermissionGranted', 'true');
            console.log('🎤 Permissão do microfone concedida e salva');
        } catch (error) {
            console.log('🎤 Permissão do microfone não concedida ainda');
            this.microphonePermissionGranted = false;
            localStorage.setItem('microphonePermissionGranted', 'false');
        }
    }// Método para solicitar permissão apenas quando necessário durante o jogo
    async requestMicrophonePermissionForRound() {
        console.log('🎤 Verificando permissão do microfone...');
        
        if (this.microphonePermissionGranted) {
            // Já tem permissão, só inicia
            console.log('🎤 Permissão já concedida, iniciando reconhecimento...');
            try {
                this.recognition.start();
                console.log('🎤 Reconhecimento iniciado (permissão existente)');
            } catch (error) {
                console.error('Erro ao iniciar com permissão existente:', error);
                // Se der erro mesmo tendo permissão, pode ser que a permissão foi revogada
                if (error.name === 'NotAllowedError') {
                    console.log('🎤 Permissão pode ter sido revogada, solicitando novamente...');
                    this.microphonePermissionGranted = false;
                    this.requestMicrophonePermissionForRound(); // Tenta uma vez mais
                }
            }
            return;
        }        // Só solicita permissão se realmente não tiver
        console.log('🎤 Solicitando nova permissão do microfone...');
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            this.microphonePermissionGranted = true;
            localStorage.setItem('microphonePermissionGranted', 'true');
            this.recognition.start();
            console.log('🎤 Permissão concedida e reconhecimento iniciado');
            if (window.showNotification) {
                showNotification('🎤 Reconhecimento de voz ativo', 'info', 3000);
            }
        } catch (error) {
            console.error('Erro ao solicitar permissão do microfone:', error);
            this.microphonePermissionGranted = false;
            localStorage.setItem('microphonePermissionGranted', 'false');
            this.showMicrophoneError();
        }
    }
      setupRecognition() {
        // Configurações do reconhecimento
        this.recognition.continuous = true; // Reconhecimento contínuo
        this.recognition.interimResults = true;
        this.recognition.lang = this.language;
        this.recognition.maxAlternatives = 3;
        
        // Event listeners
        this.recognition.onstart = () => {
            this.isListening = true;
            this.updateVoiceStatus('listening');
            console.log('🎤 Reconhecimento de voz iniciado (modo contínuo)');
        };
        
        this.recognition.onresult = (event) => {
            if (!this.gameActive) return; // Só processa se o jogo estiver ativo
            
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                const confidence = event.results[i][0].confidence;                  if (event.results[i].isFinal) {
                    // Resultado final
                    finalTranscript += transcript.trim();
                    this.lastResult = finalTranscript;
                    
                    // SEMPRE mostra e testa a tentativa detectada
                    this.handleVoiceAttempt(finalTranscript, confidence);
                    
                    // SEMPRE submete se tiver algum texto (removido threshold de confiança)
                    if (finalTranscript.length > 1) { // Só precisa ter pelo menos 2 caracteres
                        console.log('🎤 Resultado final detectado:', finalTranscript);
                        this.handleVoiceResult(finalTranscript, confidence);
                    }
                }else {
                    // Resultado intermediário
                    interimTranscript += transcript;
                    if (interimTranscript.length > 3) { // Só mostra se tiver texto suficiente
                        this.showInterimResult(interimTranscript);
                    }
                }
            }
        };        this.recognition.onerror = (event) => {
            console.error('🎤 Erro no reconhecimento de voz:', event.error);
            this.isListening = false;
            
            // Para erros críticos, desabilita restart
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                this.shouldRestart = false;
                this.handleVoiceError(event.error);
                return;
            }
            
            // Para outros erros, marca que deve restart no onend
            if (event.error === 'aborted') {
                // Se foi abortado intencionalmente, não reinicia
                this.shouldRestart = false;
                console.log('🎤 Reconhecimento abortado intencionalmente');
            } else {
                // Para outros erros, permite restart
                this.shouldRestart = true;
                console.log('🎤 Erro detectado, restart será feito no onend se necessário');
            }
        };        this.recognition.onend = () => {
            this.isListening = false;
            console.log('🎤 Reconhecimento de voz finalizado');
            
            // Só reinicia se foi marcado para restart e as condições estão corretas
            if (this.shouldRestart && this.gameActive && this.continuousMode && this.restartAttempts < this.maxRestartAttempts) {
                this.restartAttempts++;
                console.log(`🎤 Tentativa de restart ${this.restartAttempts}/${this.maxRestartAttempts}`);
                
                setTimeout(() => {
                    if (this.gameActive && this.continuousMode && this.shouldRestart) {
                        this.startRecognitionSafely();
                    }
                }, 1500); // Aumenta o delay para dar tempo de estabilizar
            } else {
                if (this.restartAttempts >= this.maxRestartAttempts) {
                    console.log('🎤 Máximo de tentativas de restart atingido');
                }
                this.updateVoiceStatus('idle');
            }
            
            // Reset do flag de restart após uso
            this.shouldRestart = false;
        };
    }
    
    createVoiceInterface() {
        // Encontra o campo de resposta
        this.answerInput = document.getElementById('answer-input');
        if (!this.answerInput) {
            console.error('Campo de resposta não encontrado');
            return;
        }
        
        // Cria o botão de voz
        this.createVoiceButton();
        
        // Cria o indicador de status
        this.createStatusIndicator();
        
        // Adiciona controles de configuração
        this.createVoiceControls();
        
        // Adiciona atalhos de teclado
        this.setupKeyboardShortcuts();
    }
      createVoiceButton() {
        // Cria o botão de voz que agora serve mais como indicador
        this.voiceButton = document.createElement('button');
        this.voiceButton.id = 'voice-recognition-btn';
        this.voiceButton.className = 'voice-btn always-listening';
        this.voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        this.voiceButton.title = 'Reconhecimento de voz ativo - fale naturalmente';
        
        // Adiciona o botão ao lado do campo de resposta
        const answerContainer = document.querySelector('.answer-container');
        if (answerContainer) {
            answerContainer.insertBefore(this.voiceButton, this.answerInput.nextSibling);
        }
        
        // Event listener do botão (agora só para mostrar status)
        this.voiceButton.addEventListener('click', () => {
            if (this.gameActive) {
                this.showStatusMessage();
            } else {
                if (window.showNotification) {
                    showNotification('🎤 O reconhecimento de voz ficará ativo durante o jogo', 'info');
                }
            }
        });
    }
    
    createStatusIndicator() {
        // Cria o indicador de status
        this.statusIndicator = document.createElement('div');
        this.statusIndicator.id = 'voice-status';
        this.statusIndicator.className = 'voice-status hidden';
        
        const answerContainer = document.querySelector('.answer-container');
        if (answerContainer) {
            answerContainer.appendChild(this.statusIndicator);
        }
    }
    
    createVoiceControls() {
        // Adiciona controles de voz à tela de configuração
        const setupContainer = document.querySelector('.setup-container');
        if (!setupContainer) return;
        
        const voiceSetup = document.createElement('div');
        voiceSetup.className = 'voice-setup';
        voiceSetup.innerHTML = `
            <h3>🎤 Reconhecimento de Voz</h3>
            <div class="voice-controls">
                <div class="voice-option">
                    <label>
                        <input type="checkbox" id="voice-enabled" ${this.isSupported ? 'checked' : 'disabled'}>
                        Ativar reconhecimento de voz
                    </label>
                </div>
                <div class="voice-option">
                    <label>
                        <input type="checkbox" id="voice-auto-submit" ${this.autoSubmit ? 'checked' : ''}>
                        Enviar resposta automaticamente
                    </label>
                </div>                <div class="voice-option">
                    <label for="voice-confidence">Sensibilidade:</label>
                    <input type="range" id="voice-confidence" min="0.2" max="0.8" step="0.1" value="${this.confidenceThreshold}">
                    <span id="confidence-value">${Math.round(this.confidenceThreshold * 100)}%</span>
                </div>
                <div class="voice-option">
                    <label>
                        <input type="checkbox" id="voice-continuous" ${this.continuousMode ? 'checked' : ''}>
                        Reconhecimento contínuo durante o jogo
                    </label>
                </div>
                <div class="voice-status-info">
                    <small>
                        ${this.isSupported 
                            ? '✅ Reconhecimento de voz disponível' 
                            : '❌ Reconhecimento de voz não suportado neste navegador'
                        }
                    </small>
                </div>
            </div>
        `;
        
        // Insere antes da seção de histórico
        const historySection = setupContainer.querySelector('.history-section');
        if (historySection) {
            setupContainer.insertBefore(voiceSetup, historySection);
        } else {
            setupContainer.appendChild(voiceSetup);
        }
        
        // Event listeners dos controles
        this.setupVoiceControls();
    }
      setupVoiceControls() {
        const voiceEnabled = document.getElementById('voice-enabled');
        const autoSubmit = document.getElementById('voice-auto-submit');
        const confidenceSlider = document.getElementById('voice-confidence');
        const confidenceValue = document.getElementById('confidence-value');
        const continuousMode = document.getElementById('voice-continuous');
        
        if (voiceEnabled) {
            voiceEnabled.addEventListener('change', (e) => {
                this.setEnabled(e.target.checked);
            });
        }
        
        if (autoSubmit) {
            autoSubmit.addEventListener('change', (e) => {
                this.autoSubmit = e.target.checked;
                localStorage.setItem('voiceAutoSubmit', this.autoSubmit);
            });
        }
        
        if (continuousMode) {
            continuousMode.addEventListener('change', (e) => {
                this.continuousMode = e.target.checked;
                localStorage.setItem('voiceContinuous', this.continuousMode);
                
                if (!this.continuousMode && this.isListening) {
                    this.stopContinuousListening();
                }
            });
        }
        
        if (confidenceSlider && confidenceValue) {
            confidenceSlider.addEventListener('input', (e) => {
                this.confidenceThreshold = parseFloat(e.target.value);
                confidenceValue.textContent = Math.round(this.confidenceThreshold * 100) + '%';
                localStorage.setItem('voiceConfidence', this.confidenceThreshold);
            });
        }
        
        // Carrega configurações salvas
        this.loadSettings();
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + Space para ativar/desativar reconhecimento
            if (e.ctrlKey && e.code === 'Space' && this.isSupported) {
                e.preventDefault();
                this.toggleListening();
            }
            
            // Escape para parar o reconhecimento
            if (e.key === 'Escape' && this.isListening) {
                this.stopListening();
            }
        });
    }
    
    toggleListening() {
        if (!this.isSupported) {
            this.showNotSupportedMessage();
            return;
        }
        
        if (this.isListening) {
            this.stopListening();
        } else {
            this.startListening();
        }
    }    startListening() {
        if (!this.isSupported || this.isListening) return;
        
        // Se já temos permissão, inicia diretamente
        if (this.microphonePermissionGranted) {
            try {
                this.recognition.start();
            } catch (error) {
                console.error('Erro ao iniciar reconhecimento:', error);
                this.handleVoiceError('not-allowed');
            }
        } else {
            // Solicita permissão se ainda não tiver
            try {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(() => {
                        this.microphonePermissionGranted = true;
                        this.recognition.start();
                    })
                    .catch((error) => {
                        console.error('Erro ao acessar o microfone:', error);
                        this.showMicrophoneError();
                    });
            } catch (error) {
                console.error('Erro ao iniciar reconhecimento:', error);
                this.handleVoiceError('not-allowed');
            }
        }
    }    // Novo método para reconhecimento contínuo
    async startContinuousListening() {
        if (!this.isSupported || !this.continuousMode) return;
        
        this.gameActive = true;
        this.restartAttempts = 0; // Reset contador de tentativas
        
        if (!this.isListening) {
            console.log('🎤 Iniciando reconhecimento contínuo...');
            
            // Verifica primeiro se temos permissão sem solicitar
            const hasPermission = await this.checkMicrophonePermission();
            
            if (hasPermission === true) {
                // Já tem permissão, inicia diretamente
                this.startRecognitionSafely();
            } else if (hasPermission === false) {
                // Permissão negada
                console.log('🎤 Permissão do microfone negada');
                this.showMicrophoneError();
            } else {
                // Permissão ainda não foi decidida, solicita uma vez
                console.log('🎤 Solicitando permissão do microfone...');
                this.requestMicrophonePermissionForRound();
            }
        }
    }
      stopContinuousListening() {
        this.gameActive = false;
        this.restartAttempts = 0; // Reset contador quando parar manualmente
        
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            console.log('🎤 Reconhecimento contínuo parado');
        }
    }
      stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }    // Método seguro para iniciar reconhecimento evitando loops de restart
    startRecognitionSafely() {
        if (!this.isSupported || this.isListening) return;
        
        console.log('🎤 Iniciando reconhecimento de forma segura...');
        
        try {
            this.shouldRestart = true; // Permite restart no onend
            this.recognition.start();
            console.log('🎤 Reconhecimento iniciado com sucesso');
        } catch (error) {
            console.error('🎤 Erro ao iniciar reconhecimento seguro:', error);
            
            // Só solicita permissão se for realmente um erro de permissão
            if (error.name === 'NotAllowedError') {
                console.log('🎤 Erro de permissão detectado, solicitando acesso...');
                this.microphonePermissionGranted = false; // Reset flag de permissão
                this.requestMicrophonePermissionForRound();
            } else if (error.name === 'InvalidStateError') {
                // Se já está rodando, só ignora
                console.log('🎤 Reconhecimento já está ativo, ignorando...');
                this.isListening = true; // Corrige o estado
            } else {
                // Para outros erros, não reinicia
                console.log('🎤 Erro não relacionado à permissão, não reiniciando...');
                this.shouldRestart = false;
            }
        }
    }
      handleVoiceResult(transcript, confidence) {
        console.log(`🎤 SUBMETENDO: "${transcript}" (confiança: ${confidence.toFixed(2)})`);
        
        // Atualiza o campo de entrada
        this.updateAnswerInput(transcript, false);
        
        // Mostra feedback visual de submissão
        this.showVoiceSubmission(transcript, confidence);
          // SEMPRE envia automaticamente, independente da confiança
        console.log('🎤 Verificando condições para submissão...');
        console.log('gameState existe:', !!window.gameState);
        console.log('isProcessingAnswer:', window.gameState?.isProcessingAnswer);
        console.log('submitAnswer existe:', typeof submitAnswer);
        
        // Submete automaticamente se não estiver processando uma resposta
        if (!window.gameState?.isProcessingAnswer) {
            console.log('🎤 Submetendo automaticamente...');
            setTimeout(() => {
                if (typeof submitAnswer === 'function') {
                    submitAnswer();
                    console.log('🎤 submitAnswer() executado com sucesso!');
                } else {
                    console.error('🎤 Função submitAnswer não encontrada!');
                    // Tenta submeter manualmente clicando no botão como fallback
                    const submitBtn = document.getElementById('submit-btn');
                    if (submitBtn && !submitBtn.disabled) {
                        submitBtn.click();
                        console.log('🎤 Fallback: clicou no botão submit');
                    }
                }
            }, 300); // Delay ainda menor para resposta mais rápida
        } else {
            console.log('🎤 Não submetendo - já processando uma resposta');
        }
    }
    
    // Novo método para mostrar submissão
    showVoiceSubmission(transcript, confidence) {
        this.updateVoiceStatus('success');
        
        // Mostra notificação de submissão
        if (window.showNotification) {
            const confidencePercent = Math.round(confidence * 100);
            showNotification(`🎤 Testando: "${transcript}" (${confidencePercent}%)`, 'info', false, 2000);
        }
        
        // Reset status após alguns segundos
        setTimeout(() => {
            if (this.gameActive && this.continuousMode) {
                this.updateVoiceStatus('listening');
            } else {
                this.updateVoiceStatus('idle');
            }
        }, 1500);
    }
    
    // Novo método para mostrar tentativas detectadas
    handleVoiceAttempt(transcript, confidence) {
        console.log(`🎤 Tentativa detectada: "${transcript}" (confiança: ${confidence.toFixed(2)})`);
        
        // Sempre mostra a tentativa, mesmo com baixa confiança
        const confidencePercent = Math.round(confidence * 100);
        
        if (window.showNotification) {
            if (confidence >= this.confidenceThreshold) {
                // Tentativa com boa confiança
                showNotification(`🎤 Resposta: "${transcript}"`, 'success', 2000);
            } else {
                // Tentativa com baixa confiança
                showNotification(`🎤 Ouvi: "${transcript}" (${confidencePercent}%)`, 'warning', 2000);
            }
        }
        
        // Atualiza temporariamente o campo de entrada para mostrar o que foi ouvido
        if (this.answerInput && confidence >= 0.3) { // Threshold muito baixo só para mostrar
            const originalValue = this.answerInput.value;
            this.answerInput.value = transcript;
            this.answerInput.classList.add('voice-detected');
            
            // Se não for para submeter, volta o valor original após um tempo
            if (confidence < this.confidenceThreshold) {
                setTimeout(() => {
                    if (this.answerInput.value === transcript) {
                        this.answerInput.value = originalValue;
                        this.answerInput.classList.remove('voice-detected');
                    }
                }, 2000);
            }
        }
    }
    
    // Novo método para mostrar resultado intermediário
    showInterimResult(transcript) {
        if (this.answerInput && transcript.trim().length > 2) {
            // Mostra feedback visual sutil para texto intermediário
            this.answerInput.classList.add('voice-interim');
            
            // Remove a classe após um tempo
            setTimeout(() => {
                this.answerInput.classList.remove('voice-interim');
            }, 1000);
        }
    }
    
    updateAnswerInput(text, isInterim = false) {
        if (this.answerInput) {
            this.answerInput.value = text;
            
            // Visual feedback para texto intermediário
            if (isInterim) {
                this.answerInput.classList.add('voice-interim');
            } else {
                this.answerInput.classList.remove('voice-interim');
            }
        }
    }
      updateVoiceStatus(status) {
        if (!this.statusIndicator) return;
        
        this.statusIndicator.classList.remove('hidden', 'listening', 'success', 'error');
        
        switch (status) {
            case 'listening':
                this.statusIndicator.classList.add('listening');
                this.statusIndicator.innerHTML = '<i class="fas fa-microphone pulse"></i> Escutando...';
                this.voiceButton.classList.add('active', 'continuous');
                break;
            case 'success':
                this.statusIndicator.classList.add('success');
                this.statusIndicator.innerHTML = '<i class="fas fa-check"></i> Detectado!';
                // Mantém o botão ativo no modo contínuo
                if (!this.continuousMode) {
                    this.voiceButton.classList.remove('active');
                }
                break;
            case 'error':
                this.statusIndicator.classList.add('error');
                this.statusIndicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erro';
                this.voiceButton.classList.remove('active', 'continuous');
                break;
            case 'idle':
            default:
                if (this.gameActive && this.continuousMode) {
                    this.statusIndicator.classList.remove('hidden');
                    this.statusIndicator.innerHTML = '<i class="fas fa-microphone"></i> Pronto para ouvir';
                    this.voiceButton.classList.add('ready');
                } else {
                    this.statusIndicator.classList.add('hidden');
                    this.voiceButton.classList.remove('active', 'continuous', 'ready');
                }
                break;
        }
    }
    
    showVoiceSuccess(transcript, confidence) {
        this.updateVoiceStatus('success');
        
        // Mostra notificação de sucesso
        if (window.showNotification) {
            const confidencePercent = Math.round(confidence * 100);
            showNotification(`🎤 "${transcript}" (${confidencePercent}% confiança)`, 'success');
        }
        
        // Reset status após alguns segundos
        setTimeout(() => {
            this.updateVoiceStatus('idle');
        }, 2000);
    }
    
    showLowConfidenceMessage(transcript, confidence) {
        const confidencePercent = Math.round(confidence * 100);
        if (window.showNotification) {
            showNotification(
                `🎤 Não entendi bem: "${transcript}" (${confidencePercent}% confiança). Tente novamente.`, 
                'warning'
            );
        }
    }
    
    handleVoiceError(error) {
        this.updateVoiceStatus('error');
        
        let message = '🎤 Erro no reconhecimento de voz';
        
        switch (error) {
            case 'not-allowed':
                message = '🎤 Permissão de microfone negada. Permita o acesso ao microfone.';
                break;
            case 'no-speech':
                message = '🎤 Nenhuma fala detectada. Tente falar mais claramente.';
                break;
            case 'audio-capture':
                message = '🎤 Erro de captura de áudio. Verifique seu microfone.';
                break;
            case 'network':
                message = '🎤 Erro de rede. Verifique sua conexão com a internet.';
                break;
            case 'aborted':
                message = '🎤 Reconhecimento cancelado.';
                break;
        }
        
        if (window.showNotification) {
            showNotification(message, 'error');
        }
        
        // Reset status após alguns segundos
        setTimeout(() => {
            this.updateVoiceStatus('idle');
        }, 3000);
    }
    
    showNotSupportedMessage() {
        if (window.showNotification) {
            showNotification(
                '🎤 Reconhecimento de voz não é suportado neste navegador. Use Chrome, Edge ou Safari.',
                'warning'
            );
        }
    }
    
    showMicrophoneError() {
        if (window.showNotification) {
            showNotification(
                '🎤 Não foi possível acessar o microfone. Verifique as permissões do navegador.',
                'error'
            );
        }
    }
    
    setEnabled(enabled) {
        if (enabled && !this.isSupported) {
            this.showNotSupportedMessage();
            return;
        }
        
        if (this.voiceButton) {
            this.voiceButton.style.display = enabled ? 'block' : 'none';
        }
        
        localStorage.setItem('voiceEnabled', enabled);
    }
      loadSettings() {
        // Carrega configurações do localStorage
        const saved = {
            enabled: localStorage.getItem('voiceEnabled') !== 'false',
            autoSubmit: localStorage.getItem('voiceAutoSubmit') !== 'false',
            continuous: localStorage.getItem('voiceContinuous') !== 'false',
            confidence: parseFloat(localStorage.getItem('voiceConfidence')) || 0.4
        };
        
        this.autoSubmit = saved.autoSubmit;
        this.continuousMode = saved.continuous;
        this.confidenceThreshold = saved.confidence;
        
        // Atualiza interface
        const voiceEnabled = document.getElementById('voice-enabled');
        const autoSubmitCheckbox = document.getElementById('voice-auto-submit');
        const continuousCheckbox = document.getElementById('voice-continuous');
        const confidenceSlider = document.getElementById('voice-confidence');
        const confidenceValue = document.getElementById('confidence-value');
        
        if (voiceEnabled) voiceEnabled.checked = saved.enabled && this.isSupported;
        if (autoSubmitCheckbox) autoSubmitCheckbox.checked = saved.autoSubmit;
        if (continuousCheckbox) continuousCheckbox.checked = saved.continuous;
        if (confidenceSlider) confidenceSlider.value = saved.confidence;
        if (confidenceValue) confidenceValue.textContent = Math.round(saved.confidence * 100) + '%';
        
        this.setEnabled(saved.enabled);
    }
    
    // Método para mostrar mensagem de status
    showStatusMessage() {
        if (!this.isSupported) {
            this.showNotSupportedMessage();
            return;
        }
        
        let message = '';
        if (this.gameActive && this.isListening) {
            message = '🎤 Reconhecimento ativo - fale suas respostas naturalmente';
        } else if (this.gameActive) {
            message = '🎤 Reconhecimento pronto para ser ativado';
        } else {
            message = '🎤 O reconhecimento ficará ativo durante o jogo';
        }
        
        if (window.showNotification) {
            showNotification(message, 'info');
        }
    }    // Métodos públicos para controle do jogo
    startGameListening() {
        if (this.isSupported && this.continuousMode) {
            this.startContinuousListening();
        }
    }
    
    stopGameListening() {
        this.stopContinuousListening();
    }
    
    // Método público para iniciar escuta via código
    listen() {
        if (this.isSupported && !this.isListening) {
            this.startListening();
        }
    }
    
    // Método público para verificar se está ouvindo
    isCurrentlyListening() {
        return this.isListening;
    }
    
    // Método público para obter o último resultado
    getLastResult() {
        return this.lastResult;
    }
}

// Instância global do reconhecimento de voz
let voiceRecognition = null;

// Inicializa o reconhecimento de voz quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Aguarda um pouco para garantir que outros scripts foram carregados
    setTimeout(() => {
        voiceRecognition = new VoiceRecognition();
        window.voiceRecognition = voiceRecognition; // Torna disponível globalmente
    }, 1000);
});

// Métodos auxiliares para integração com o jogo
function initializeVoiceForGame() {
    if (window.voiceRecognition && window.voiceRecognition.isSupported) {
        console.log('🎤 Sistema de voz integrado com o jogo');
        return true;
    }
    return false;
}

function isVoiceActive() {
    return window.voiceRecognition && window.voiceRecognition.gameActive;
}

function getVoiceStatus() {
    if (!window.voiceRecognition) return 'not-supported';
    if (window.voiceRecognition.gameActive && window.voiceRecognition.isListening) return 'listening';
    if (window.voiceRecognition.gameActive) return 'ready';
    return 'inactive';
}

// Função para o game chamar quando quiser forçar detecção
function requestVoiceDetection() {
    if (window.voiceRecognition && window.voiceRecognition.gameActive) {
        console.log('🎤 Detecção de voz solicitada pelo jogo');
        // Adiciona um pequeno feedback visual
        if (window.voiceRecognition.voiceButton) {
            window.voiceRecognition.voiceButton.classList.add('detecting');
            setTimeout(() => {
                window.voiceRecognition.voiceButton.classList.remove('detecting');
            }, 300);
        }
    }
}

// Função para limpar estado de voz quando resposta é processada
function cleanVoiceState() {
    if (window.voiceRecognition && window.voiceRecognition.answerInput) {
        window.voiceRecognition.answerInput.classList.remove('voice-interim', 'voice-detected');
    }
}

// Expor funções globalmente para uso fácil
window.initializeVoiceForGame = initializeVoiceForGame;
window.isVoiceActive = isVoiceActive;
window.getVoiceStatus = getVoiceStatus;
window.requestVoiceDetection = requestVoiceDetection;
window.cleanVoiceState = cleanVoiceState;
