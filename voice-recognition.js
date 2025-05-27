// Sistema de Reconhecimento de Voz para o Jogo Perfil
class VoiceRecognition {    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.isSupported = false;
        this.lastResult = '';
        this.confidenceThreshold = 0.4; // Threshold mais alto para ambientes com ruído
        this.autoSubmit = true; // Sempre submete automaticamente
        this.alwaysSubmit = true; // Nova opção: sempre submete independente da confiança
        this.language = 'pt-BR';
        this.continuousMode = true; // Sempre escutando
        this.gameActive = false; // Controla se o jogo está ativo
        this.microphonePermissionGranted = false; // Controla se já temos permissão do microfone        this.restartAttempts = 0; // Conta tentativas de restart para evitar loop infinito
        this.maxRestartAttempts = 10; // Máximo de tentativas antes de parar (aumentado)
        this.shouldRestart = false; // Controla se deve reiniciar após erro
          // Configurações para ambiente multi-usuário
        this.groupMode = false; // Modo para múltiplas pessoas
        this.activationWords = ['resposta', 'eu sei', 'é o', 'é a', 'eh o', 'eh a']; // Palavras de ativação
        this.useActivationWord = false; // Usar palavra de ativação
        this.voiceTimeout = 3000; // Timeout para considerar fim da fala
        this.minSpeechLength = 3; // Mínimo de caracteres para considerar válido
        this.lastSubmissionTime = 0; // Controle de spam
        this.submissionCooldown = 3000; // Cooldown entre submissões (aumentado)
        this.maxAnswerLength = 50; // Máximo de caracteres para respostas
        this.noiseFilterLevel = 0.7; // Nível de filtro de ruído (0.5-0.9)
        this.speakerChangeDelay = 1000; // Delay para mudança de falante
        this.contextualFiltering = true; // Filtragem contextual ativada
        this.lastSpeakerPattern = null; // Padrão do último falante
        this.consecutiveNoiseCount = 0; // Contador de ruído consecutivo
        this.maxConsecutiveNoise = 3; // Máximo de ruído antes de ajustar sensibilidade
        
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
            this.restartAttempts = 0; // Reset contador quando conseguir iniciar com sucesso
            this.updateVoiceStatus('listening');
            console.log('🎤 Reconhecimento de voz iniciado (modo contínuo)');
        };
        
        this.recognition.onresult = (event) => {
            if (!this.gameActive) return; // Só processa se o jogo estiver ativo
            
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                const confidence = event.results[i][0].confidence;                if (event.results[i].isFinal) {
                    // Resultado final
                    finalTranscript += transcript.trim();
                    this.lastResult = finalTranscript;
                    
                    // Aplica filtragem multi-usuário
                    if (this.shouldProcessSpeech(finalTranscript, confidence)) {
                        // SEMPRE mostra e testa a tentativa detectada
                        this.handleVoiceAttempt(finalTranscript, confidence);
                        
                        // SEMPRE submete se passou pelos filtros
                        console.log('🎤 Resultado final detectado após filtros:', finalTranscript);
                        this.handleVoiceResult(finalTranscript, confidence);
                        
                        // Reset restart attempts após sucesso para evitar restarts desnecessários
                        this.restartAttempts = 0;
                    } else {
                        console.log('🎤 Resultado filtrado:', finalTranscript, 'Confiança:', confidence);
                        this.handleFilteredSpeech(finalTranscript, confidence);
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
            this.isListening = false;
            
            // Para erros críticos, desabilita restart
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                console.error('🎤 Erro crítico no reconhecimento de voz:', event.error);
                this.shouldRestart = false;
                this.handleVoiceError(event.error);
                return;
            }            // Para 'no-speech' - é normal, continua escutando
            if (event.error === 'no-speech') {
                console.log('🎤 Nenhuma fala detectada - isso é normal, continuando...');
                this.shouldRestart = true; // Continua ouvindo normalmente para no-speech
                this.isNoSpeechRestart = true; // Flag especial para não incrementar contador
                return;
            }
            
            // Para 'aborted' - parada intencional
            if (event.error === 'aborted') {
                console.log('🎤 Reconhecimento abortado intencionalmente');
                this.shouldRestart = false;
                this.isNoSpeechRestart = false;
                return;
            }
            
            // Para outros erros técnicos, permite restart
            console.error('🎤 Erro técnico no reconhecimento de voz:', event.error);
            this.shouldRestart = true;
            console.log('🎤 Erro detectado, restart será feito no onend se necessário');
        };        this.recognition.onend = () => {
            this.isListening = false;
            console.log('🎤 Reconhecimento de voz finalizado');
            
            // Para reconhecimento contínuo, sempre reinicia se o jogo estiver ativo
            if (this.gameActive && this.continuousMode && this.restartAttempts < this.maxRestartAttempts) {
                // Verifica se é um restart de no-speech (situação normal)
                if (this.isNoSpeechRestart) {
                    console.log('🎤 Restart normal (no-speech) - situação normal, sem incrementar tentativas');
                    // Para situações normais como "no-speech", reinicia sem contar como erro
                    const delay = 500; // Delay menor para situações normais
                    console.log(`🎤 Agendando restart normal em ${delay}ms...`);
                    
                    // Reset da flag
                    this.isNoSpeechRestart = false;
                    
                    setTimeout(() => {
                        if (this.gameActive && this.continuousMode && !this.isListening) {
                            console.log('🎤 Executando restart normal do reconhecimento...');
                            this.startRecognitionSafely();
                        } else {
                            console.log('🎤 Cancelando restart - condições mudaram');
                        }
                    }, delay);
                } else if (this.shouldRestart) {
                    // Comportamento para erros reais: conta tentativas e usa delay progressivo
                    this.restartAttempts++;
                    console.log(`🎤 Reiniciando reconhecimento após erro ${this.restartAttempts}/${this.maxRestartAttempts}`);
                      // Restart mais rápido e confiável
                    const delay = Math.min(1000 + (this.restartAttempts * 500), 3000); // Delay progressivo
                    console.log(`🎤 Agendando restart em ${delay}ms...`);
                    
                    setTimeout(() => {
                        if (this.gameActive && this.continuousMode && !this.isListening) {
                            console.log('🎤 Executando restart do reconhecimento...');
                            this.startRecognitionSafely();
                        } else {
                            console.log('🎤 Cancelando restart - condições mudaram');
                        }
                    }, delay);
                }} else {
                if (this.restartAttempts >= this.maxRestartAttempts) {
                    console.log('🎤 Máximo de tentativas de restart atingido');
                    if (window.showNotification) {
                        showNotification('🎤 Reconhecimento de voz pausado após várias tentativas. Clique no microfone para reativar.', 'warning', 5000);
                    }
                    // Reset para permitir nova tentativa manual
                    this.restartAttempts = 0;
                }
                this.updateVoiceStatus('idle');
            }
            
            // Reset do flag para próxima iteração
            this.shouldRestart = true;
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
                    //showNotification('🎤 O reconhecimento de voz ficará ativo durante o jogo', 'info');
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
                    <label for="voice-confidence">Confianca Minima:</label>
                    <input type="range" id="voice-confidence" min="0.2" max="0.8" step="0.1" value="${this.confidenceThreshold}">
                    <span id="confidence-value">${Math.round(this.confidenceThreshold * 100)}%</span>
                </div>                <div class="voice-option">
                    <label>
                        <input type="checkbox" id="voice-continuous" ${this.continuousMode ? 'checked' : ''}>
                        Reconhecimento contínuo durante o jogo
                    </label>
                </div>
                <div class="voice-option">
                    <label>
                        <input type="checkbox" id="voice-group-mode" ${this.groupMode ? 'checked' : ''}>
                        Modo grupo (filtros rigorosos para múltiplas pessoas)
                    </label>
                </div>
                <div class="voice-option">
                    <label>
                        <input type="checkbox" id="voice-activation-word" ${this.useActivationWord ? 'checked' : ''}>
                        Usar palavras de ativação ("resposta", "eu sei", etc.)
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
    }    setupVoiceControls() {
        const voiceEnabled = document.getElementById('voice-enabled');
        const autoSubmit = document.getElementById('voice-auto-submit');
        const confidenceSlider = document.getElementById('voice-confidence');
        const confidenceValue = document.getElementById('confidence-value');
        const continuousMode = document.getElementById('voice-continuous');
        const groupMode = document.getElementById('voice-group-mode');
        const activationWord = document.getElementById('voice-activation-word');
        
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
        
        if (groupMode) {
            groupMode.addEventListener('change', (e) => {
                this.setGroupMode(e.target.checked);
                localStorage.setItem('voiceGroupMode', this.groupMode);
                console.log(`🎤 Modo grupo ${this.groupMode ? 'ATIVADO' : 'DESATIVADO'} via interface`);
            });
        }
        
        if (activationWord) {
            activationWord.addEventListener('change', (e) => {
                this.useActivationWord = e.target.checked;
                localStorage.setItem('voiceActivationWord', this.useActivationWord);
                console.log(`🎤 Palavras de ativação ${this.useActivationWord ? 'ATIVADAS' : 'DESATIVADAS'} via interface`);
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
    }
    
    startListening() {
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
            } catch (error) {                console.error('Erro ao iniciar reconhecimento:', error);
                this.handleVoiceError('not-allowed');
            }
        }
    }
    
    // Novo método para reconhecimento contínuo
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
            }        }
    }
    
    stopContinuousListening() {
        this.gameActive = false;
        this.restartAttempts = 0; // Reset contador quando parar manualmente
        
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            console.log('🎤 Reconhecimento contínuo parado');
        }    }
    
    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }
      // Método seguro para iniciar reconhecimento evitando loops de restart
    startRecognitionSafely() {
        if (!this.isSupported) {
            console.log('🎤 Reconhecimento de voz não suportado');
            return;
        }
        
        if (this.isListening) {
            console.log('🎤 Reconhecimento já está ativo');
            return;
        }
        
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
                console.log('🎤 Reconhecimento já está ativo (InvalidStateError), ignorando...');
                this.isListening = true; // Corrige o estado
            } else {
                // Para outros erros, não reinicia
                console.log('🎤 Erro não relacionado à permissão, não reiniciando...');
                this.shouldRestart = false;
                
                // Tenta reiniciar após um delay maior para erros não críticos
                if (this.gameActive && this.continuousMode && this.restartAttempts < this.maxRestartAttempts) {
                    setTimeout(() => {
                        console.log('🎤 Tentando reiniciar após erro técnico...');
                        this.startRecognitionSafely();
                    }, 2000);
                }
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
                    // Limpa o último resultado para permitir a mesma resposta novamente se necessário
                    this.lastResult = '';
                } else {
                    console.error('🎤 Função submitAnswer não encontrada!');
                    // Tenta submeter manualmente clicando no botão como fallback
                    const submitBtn = document.getElementById('submit-btn');
                    if (submitBtn && !submitBtn.disabled) {
                        submitBtn.click();
                        console.log('🎤 Fallback: clicou no botão submit');
                        // Limpa o último resultado para permitir a mesma resposta novamente se necessário
                        this.lastResult = '';
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
                showNotification(`🎤 Ouvi: "${transcript}" (${confidencePercent}%)`, 'warning',false, 2000);
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
            confidence: parseFloat(localStorage.getItem('voiceConfidence')) || 0.4,
            groupMode: localStorage.getItem('voiceGroupMode') === 'true',
            activationWord: localStorage.getItem('voiceActivationWord') === 'true'
        };
        
        this.autoSubmit = saved.autoSubmit;
        this.continuousMode = saved.continuous;
        this.confidenceThreshold = saved.confidence;
        this.groupMode = saved.groupMode;
        this.useActivationWord = saved.activationWord;
        
        console.log('🎤 Configurações carregadas:', {
            groupMode: this.groupMode,
            useActivationWord: this.useActivationWord,
            confidenceThreshold: this.confidenceThreshold
        });
        
        // Atualiza interface
        const voiceEnabled = document.getElementById('voice-enabled');
        const autoSubmitCheckbox = document.getElementById('voice-auto-submit');
        const continuousCheckbox = document.getElementById('voice-continuous');
        const confidenceSlider = document.getElementById('voice-confidence');
        const confidenceValue = document.getElementById('confidence-value');
        const groupModeCheckbox = document.getElementById('voice-group-mode');
        const activationWordCheckbox = document.getElementById('voice-activation-word');
        
        if (voiceEnabled) voiceEnabled.checked = saved.enabled && this.isSupported;
        if (autoSubmitCheckbox) autoSubmitCheckbox.checked = saved.autoSubmit;
        if (continuousCheckbox) continuousCheckbox.checked = saved.continuous;
        if (confidenceSlider) confidenceSlider.value = saved.confidence;
        if (confidenceValue) confidenceValue.textContent = Math.round(saved.confidence * 100) + '%';
        if (groupModeCheckbox) groupModeCheckbox.checked = saved.groupMode;
        if (activationWordCheckbox) activationWordCheckbox.checked = saved.activationWord;
        
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
            showNotification(message, 'info');        }
    }
    
    // Métodos públicos para controle do jogo
    startGameListening() {
        if (this.isSupported && this.continuousMode) {
            this.startContinuousListening();
        }
    }
    
    stopGameListening() {
        this.stopContinuousListening();
    }
      // Método público para forçar restart manual
    restartVoiceRecognition() {
        console.log('🎤 Restart manual solicitado');
        this.restartAttempts = 0; // Reset contador
        this.stopContinuousListening();
        
        setTimeout(() => {
            if (this.gameActive && this.continuousMode) {
                console.log('🎤 Reiniciando reconhecimento manualmente...');
                this.startContinuousListening();
            }
        }, 1000);
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
    
    // ===== MÉTODOS DE FILTRAGEM MULTI-USUÁRIO =====
      shouldProcessSpeech(transcript, confidence) {
        const now = Date.now();
        
        console.log(`🎤 Verificando filtros para: "${transcript}"`);
        console.log(`🎤 Configurações atuais:`, {
            groupMode: this.groupMode,
            useActivationWord: this.useActivationWord,
            confidenceThreshold: this.confidenceThreshold
        });
        
        // 1. Filtro básico de comprimento
        if (transcript.length < this.minSpeechLength) {
            console.log('🎤 Filtro: texto muito curto');
            return false;
        }
        
        // 2. Filtro de comprimento máximo (evita frases muito longas)
        if (transcript.length > this.maxAnswerLength) {
            console.log('🎤 Filtro: texto muito longo');
            return false;
        }
        
        // 3. Cooldown entre submissões
        if (now - this.lastSubmissionTime < this.submissionCooldown) {
            console.log('🎤 Filtro: cooldown ativo');
            return false;
        }
        
        // 4. Filtro de confiança adaptativo
        const adaptiveThreshold = this.getAdaptiveConfidenceThreshold();
        if (confidence < adaptiveThreshold) {
            console.log(`🎤 Filtro: confiança baixa (${confidence.toFixed(2)} < ${adaptiveThreshold.toFixed(2)})`);
            this.consecutiveNoiseCount++;
            return false;
        }
        
        // 5. Filtro de palavras de ativação (se habilitado)
        if (this.useActivationWord && !this.hasActivationWord(transcript)) {
            console.log(`🎤 Filtro: palavra de ativação não encontrada. useActivationWord=${this.useActivationWord}`);
            console.log(`🎤 Palavras de ativação disponíveis:`, this.activationWords);
            return false;
        }
        
        // 6. Filtro contextual (evita ruído, mas NÃO bloqueia repetições)
        if (!this.passesContextualFilter(transcript)) {
            console.log('🎤 Filtro: não passou no filtro contextual');
            return false;
        }
        
        // Se chegou até aqui, pode processar
        this.lastSubmissionTime = now;
        this.consecutiveNoiseCount = 0; // Reset contador de ruído
        console.log(`🎤 Todos os filtros passaram para: "${transcript}"`);
        return true;
    }
    
    getAdaptiveConfidenceThreshold() {
        // Aumenta o threshold se houver muito ruído consecutivo
        let threshold = this.confidenceThreshold;
        
        if (this.consecutiveNoiseCount >= this.maxConsecutiveNoise) {
            threshold = Math.min(0.9, threshold + 0.2); // Aumenta mas não passa de 90%
            console.log('🎤 Threshold adaptativo aumentado para:', threshold.toFixed(2));
        }
        
        return threshold;
    }
      hasActivationWord(transcript) {
        const lowerTranscript = transcript.toLowerCase();
        return this.activationWords.some(word => 
            lowerTranscript.includes(word.toLowerCase())
        );
    }
    
    extractAnswerFromActivation(transcript) {
        const lowerTranscript = transcript.toLowerCase();
        let extractedAnswer = transcript;
        
        // Remove palavras de ativação do início da frase
        for (const activationWord of this.activationWords) {
            const pattern = new RegExp(`^\\s*${activationWord.toLowerCase()}\\s*`, 'i');
            if (pattern.test(lowerTranscript)) {
                extractedAnswer = transcript.replace(pattern, '').trim();
                console.log(`🔍 Removendo palavra de ativação "${activationWord}": "${extractedAnswer}"`);
                break;
            }
        }
        
        return extractedAnswer;
    }
      passesContextualFilter(transcript) {
        const normalizedTranscript = this.normalizeText(transcript);
        
        console.log(`🔍 Verificando filtro contextual para: "${normalizedTranscript}"`);
        
        // 1. Filtro de ruído comum
        if (this.isCommonNoise(normalizedTranscript)) {
            console.log(`🔍 Filtro contextual: detectado como ruído comum`);
            return false;
        }
          // 2. Filtro de palavras muito curtas
        const words = normalizedTranscript.split(' ').filter(w => w.length > 1);
        if (words.length === 0) {
            console.log(`🔍 Filtro contextual: nenhuma palavra válida encontrada`);
            return false;
        }
          // 3. Se tem palavra de ativação, extrair apenas a resposta
        if (this.useActivationWord && this.hasActivationWord(transcript)) {
            const extractedAnswer = this.extractAnswerFromActivation(transcript);
            if (extractedAnswer && extractedAnswer.length >= 2) {
                console.log(`🔍 Filtro contextual: resposta extraída "${extractedAnswer}" - PASSOU`);
                return true;
            }
        }
        
        // 4. Para palavras simples sem ativação, ser mais permissivo
        if (words.length === 1 && words[0].length >= 3) {
            console.log(`🔍 Filtro contextual: palavra simples "${words[0]}" - PASSOU`);
            return true;
        }
        
        console.log(`🔍 Filtro contextual: PASSOU (palavras válidas: ${words.join(', ')})`);
        return true;
    }
    
    normalizeText(text) {
        return text.toLowerCase()
            .replace(/[^\w\sáéíóúâêîôûàèìòùãõç]/g, '') // Remove pontuação
            .replace(/\s+/g, ' ') // Normaliza espaços
            .trim();
    }    isSimilarToLastResult(transcript) {
        if (!this.lastResult) return false;
        
        const lastNormalized = this.normalizeText(this.lastResult);
        const currentNormalized = this.normalizeText(transcript);
        
        const similarity = this.calculateSimilarity(lastNormalized, currentNormalized);
        console.log(`🔍 Similaridade calculada: "${currentNormalized}" vs "${lastNormalized}" = ${similarity.toFixed(3)}`);
          // Verifica similaridade simples (reduzido de 0.8 para 0.95 para ser muito menos agressivo)
        return lastNormalized === currentNormalized || similarity > 0.95;
    }
    
    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }
    
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
    
    isCommonNoise(transcript) {
        const noisePatterns = [
            /^(ah|eh|uhm|hmm|hum|ahn)$/i,
            /^(não|sim|ok|tá|né)$/i,
            /^(oi|ola|tchau|bye)$/i,
            /^[aeiou]{1,3}$/i, // Vogais isoladas
            /^\s*$/,  // Apenas espaços
        ];
        
        return noisePatterns.some(pattern => pattern.test(transcript));
    }
    
    handleFilteredSpeech(transcript, confidence) {
        // Mostra feedback sutil para fala filtrada (sem submeter)
        console.log(`🎤 Filtrado: "${transcript}" (${confidence.toFixed(2)})`);
        
        if (window.showNotification && confidence >= 0.5) {
            // Só mostra se tiver confiança razoável para evitar spam
            const confidencePercent = Math.round(confidence * 100);
            showNotification(`🎤 Ignorado: "${transcript}" (${confidencePercent}%)`, 'info', 1500);
        }
    }
      // Método para ativar/desativar modo grupo
    setGroupMode(enabled) {
        console.log(`🎤 setGroupMode chamado com: ${enabled}`);
        console.log(`🎤 Estado anterior:`, {
            groupMode: this.groupMode,
            useActivationWord: this.useActivationWord,
            confidenceThreshold: this.confidenceThreshold
        });
        
        this.groupMode = enabled;
        
        if (enabled) {
            // Configurações mais restritivas para grupo
            this.confidenceThreshold = Math.max(0.5, this.confidenceThreshold); // Reduzido de 0.6 para 0.5
            this.submissionCooldown = 3000;
            this.useActivationWord = true;
            console.log('🎤 Modo grupo ativado - filtros mais rigorosos');
        } else {
            // Configurações mais permissivas para uso individual
            this.confidenceThreshold = Math.min(0.4, this.confidenceThreshold);
            this.submissionCooldown = 1000;
            this.useActivationWord = false;
            console.log('🎤 Modo individual ativado - filtros mais permissivos');
        }
        
        console.log(`🎤 Estado novo:`, {
            groupMode: this.groupMode,
            useActivationWord: this.useActivationWord,
            confidenceThreshold: this.confidenceThreshold
        });
        
        this.updateGroupModeUI();
    }
    
    updateGroupModeUI() {
        const groupModeToggle = document.getElementById('voice-group-mode');
        if (groupModeToggle) {
            groupModeToggle.checked = this.groupMode;
        }
        
        // Atualiza visual do botão de voz
        if (this.voiceButton) {
            if (this.groupMode) {
                this.voiceButton.classList.add('group-mode');
                this.voiceButton.title = 'Modo grupo - diga uma palavra de ativação antes da resposta';
            } else {
                this.voiceButton.classList.remove('group-mode');
                this.voiceButton.title = 'Reconhecimento de voz ativo - fale naturalmente';
            }
        }
    }
    
    // ===== FIM DOS MÉTODOS DE FILTRAGEM =====
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

// Função de utilidade para restart manual do reconhecimento
window.restartVoice = function() {
    if (window.voiceRecognition && window.voiceRecognition.restartVoiceRecognition) {
        window.voiceRecognition.restartVoiceRecognition();
        console.log('🎤 Restart manual executado');
    } else {
        console.log('❌ Sistema de voz não disponível para restart');
    }
};
