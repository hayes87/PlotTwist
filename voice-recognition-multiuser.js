// Sistema de Reconhecimento de Voz para o Jogo Perfil - Versão Multi-Usuário
class VoiceRecognitionMultiUser {
    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.isSupported = false;
        this.lastResult = '';
        this.confidenceThreshold = 0.5; // Threshold mais alto para ambientes com ruído
        this.autoSubmit = true; // Sempre submete automaticamente
        this.alwaysSubmit = true; // Nova opção: sempre submete independente da confiança
        this.language = 'pt-BR';
        this.continuousMode = true; // Sempre escutando
        this.gameActive = false; // Controla se o jogo está ativo
        this.microphonePermissionGranted = false; // Controla se já temos permissão do microfone
        this.restartAttempts = 0; // Conta tentativas de restart para evitar loop infinito
        this.maxRestartAttempts = 3; // Máximo de tentativas antes de parar
        this.shouldRestart = false; // Controla se deve reiniciar após erro
          // Configurações para ambiente multi-usuário
        this.groupMode = true; // Modo para múltiplas pessoas (ativado por padrão no multi-usuário)
        this.activationWords = ['resposta', 'eu sei', 'é o', 'é a', 'eh o', 'eh a']; // Palavras de ativação
        this.useActivationWord = true; // Usar palavra de ativação (ativado por padrão no multi-usuário)
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
    }

    init() {
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
            
            console.log('🎤 Sistema de voz multi-usuário inicializado');
        } else {
            console.warn('Web Speech API não é suportada neste navegador');
            this.showNotSupportedMessage();
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
            console.log('🎤 Reconhecimento de voz iniciado (modo contínuo multi-usuário)');
        };
        
        this.recognition.onresult = (event) => {
            if (!this.gameActive) return; // Só processa se o jogo estiver ativo
            
            let finalTranscript = '';
            let interimTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                const confidence = event.results[i][0].confidence;
                
                if (event.results[i].isFinal) {
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
                    } else {
                        console.log('🎤 Resultado filtrado:', finalTranscript, 'Confiança:', confidence);
                        this.handleFilteredSpeech(finalTranscript, confidence);
                    }
                } else {
                    // Resultado intermediário
                    interimTranscript += transcript;
                    if (interimTranscript.length > 3) { // Só mostra se tiver texto suficiente
                        this.showInterimResult(interimTranscript);
                    }
                }
            }
        };

        this.recognition.onerror = (event) => {
            this.isListening = false;
            
            // Para erros críticos, desabilita restart
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                console.error('🎤 Erro crítico no reconhecimento de voz:', event.error);
                this.shouldRestart = false;
                this.handleVoiceError(event.error);
                return;
            }
            
            // Para 'no-speech' - é normal, continua escutando
            if (event.error === 'no-speech') {
                console.log('🎤 Nenhuma fala detectada - isso é normal, continuando...');
                return;
            }
            
            // Para 'aborted' - parada intencional
            if (event.error === 'aborted') {
                console.log('🎤 Reconhecimento abortado intencionalmente');
                this.shouldRestart = false;
                return;
            }
            
            // Para outros erros técnicos, permite restart
            console.error('🎤 Erro técnico no reconhecimento de voz:', event.error);
            this.shouldRestart = true;
            console.log('🎤 Erro detectado, restart será feito no onend se necessário');
        };

        this.recognition.onend = () => {
            this.isListening = false;
            console.log('🎤 Reconhecimento de voz finalizado');
            
            // Para reconhecimento contínuo, sempre reinicia se o jogo estiver ativo
            if (this.gameActive && this.continuousMode && this.restartAttempts < this.maxRestartAttempts) {
                if (this.shouldRestart === false) {
                    console.log('🎤 Não reiniciando devido a erro crítico ou parada intencional');
                    this.updateVoiceStatus('idle');
                } else {
                    // Comportamento padrão: sempre reinicia para manter escuta contínua
                    this.restartAttempts++;
                    console.log(`🎤 Reiniciando reconhecimento contínuo ${this.restartAttempts}/${this.maxRestartAttempts}`);
                    
                    setTimeout(() => {
                        if (this.gameActive && this.continuousMode) {
                            this.startRecognitionSafely();
                        }
                    }, 800); // Delay menor para melhor responsividade
                }
            } else {
                if (this.restartAttempts >= this.maxRestartAttempts) {
                    console.log('🎤 Máximo de tentativas de restart atingido');
                }
                this.updateVoiceStatus('idle');
            }
            
            // Reset do flag para próxima iteração
            this.shouldRestart = true;
        };
    }

    // ===== MÉTODOS DE FILTRAGEM MULTI-USUÁRIO =====
      shouldProcessSpeech(transcript, confidence) {
        const now = Date.now();
        
        console.log(`🎤 [MULTI-USER] Verificando filtros para: "${transcript}"`);
        console.log(`🎤 [MULTI-USER] Configurações atuais:`, {
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
        
        // 6. Filtro contextual (evita repetições e ruído)
        if (!this.passesContextualFilter(transcript)) {
            console.log('🎤 Filtro: não passou no filtro contextual');
            return false;
        }
        
        // Se chegou até aqui, pode processar
        this.lastSubmissionTime = now;
        this.consecutiveNoiseCount = 0; // Reset contador de ruído
        console.log(`🎤 [MULTI-USER] Todos os filtros passaram para: "${transcript}"`);
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
    }
      isSimilarToLastResult(transcript) {
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
    
    // ===== MÉTODOS COPIADOS DO ORIGINAL =====
    
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
                return null;
            }
        } catch (error) {
            console.log('🎤 Não foi possível verificar permissão via API, usando flag interno');
            return this.microphonePermissionGranted;
        }
    }

    async requestMicrophonePermissionForRound() {
        console.log('🎤 Verificando permissão do microfone...');
        
        if (this.microphonePermissionGranted) {
            console.log('🎤 Permissão já concedida, iniciando reconhecimento...');
            try {
                this.recognition.start();
                console.log('🎤 Reconhecimento iniciado (permissão existente)');
            } catch (error) {
                console.error('Erro ao iniciar com permissão existente:', error);
                if (error.name === 'NotAllowedError') {
                    console.log('🎤 Permissão pode ter sido revogada, solicitando novamente...');
                    this.microphonePermissionGranted = false;
                    this.requestMicrophonePermissionForRound();
                }
            }
            return;
        }

        console.log('🎤 Solicitando nova permissão do microfone...');
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            this.microphonePermissionGranted = true;
            localStorage.setItem('microphonePermissionGranted', 'true');
            this.recognition.start();
            console.log('🎤 Permissão concedida e reconhecimento iniciado');
            if (window.showNotification) {
                showNotification('🎤 Reconhecimento de voz ativo (modo grupo)', 'info', 3000);
            }
        } catch (error) {
            console.error('Erro ao solicitar permissão do microfone:', error);
            this.microphonePermissionGranted = false;
            localStorage.setItem('microphonePermissionGranted', 'false');
            this.showMicrophoneError();
        }
    }

    startRecognitionSafely() {
        if (!this.isSupported || this.isListening) return;
        
        console.log('🎤 Iniciando reconhecimento de forma segura...');
        
        try {
            this.shouldRestart = true; // Permite restart no onend
            this.recognition.start();
            console.log('🎤 Reconhecimento iniciado com sucesso');
        } catch (error) {
            console.error('🎤 Erro ao iniciar reconhecimento seguro:', error);
            
            if (error.name === 'NotAllowedError') {
                console.log('🎤 Erro de permissão detectado, solicitando acesso...');
                this.microphonePermissionGranted = false;
                this.requestMicrophonePermissionForRound();
            } else if (error.name === 'InvalidStateError') {
                console.log('🎤 Reconhecimento já está ativo, ignorando...');
                this.isListening = true;
            } else {
                console.log('🎤 Erro não relacionado à permissão, não reiniciando...');
                this.shouldRestart = false;
            }
        }
    }

    async startContinuousListening() {
        if (!this.isSupported || !this.continuousMode) return;
        
        this.gameActive = true;
        this.restartAttempts = 0;
        
        if (!this.isListening) {
            console.log('🎤 Iniciando reconhecimento contínuo multi-usuário...');
            
            const hasPermission = await this.checkMicrophonePermission();
            
            if (hasPermission === true) {
                this.startRecognitionSafely();
            } else if (hasPermission === false) {
                console.log('🎤 Permissão do microfone negada');
                this.showMicrophoneError();
            } else {
                console.log('🎤 Solicitando permissão do microfone...');
                this.requestMicrophonePermissionForRound();
            }
        }
    }

    stopContinuousListening() {
        this.gameActive = false;
        this.restartAttempts = 0;
        
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            console.log('🎤 Reconhecimento contínuo parado');
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
            }, 300);
        } else {
            console.log('🎤 Não submetendo - já processando uma resposta');
        }
    }    // Método para ativar/desativar modo grupo
    setGroupMode(enabled) {
        console.log(`🎤 [MULTI-USER] setGroupMode chamado com: ${enabled}`);
        console.log(`🎤 [MULTI-USER] Estado anterior:`, {
            groupMode: this.groupMode,
            useActivationWord: this.useActivationWord,
            confidenceThreshold: this.confidenceThreshold
        });
        
        this.groupMode = enabled;
        
        if (enabled) {
            // Configurações mais restritivas para grupo
            this.confidenceThreshold = Math.max(0.6, this.confidenceThreshold);
            this.submissionCooldown = 3000;
            this.useActivationWord = true;
            console.log('🎤 [MULTI-USER] Modo grupo ativado - filtros mais rigorosos');
        } else {
            // Configurações mais permissivas para uso individual
            this.confidenceThreshold = Math.min(0.4, this.confidenceThreshold);
            this.submissionCooldown = 1000;
            this.useActivationWord = false;
            console.log('🎤 [MULTI-USER] Modo individual ativado - filtros mais permissivos');
        }
        
        console.log(`🎤 [MULTI-USER] Estado novo:`, {
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

    // ===== MÉTODOS DE INTERFACE (SIMPLIFICADOS) =====
    
    createVoiceInterface() {
        console.log('🎤 Interface multi-usuário criada');
        // Interface será criada dinamicamente quando necessário
    }

    updateVoiceStatus(status) {
        console.log('🎤 Status:', status);
        // Status será mostrado através de notificações
    }

    updateAnswerInput(text, isInterim = false) {
        const answerInput = document.getElementById('answer-input');
        if (answerInput) {
            answerInput.value = text;
            
            if (isInterim) {
                answerInput.classList.add('voice-interim');
            } else {
                answerInput.classList.remove('voice-interim');
            }
        }
    }

    showVoiceSubmission(transcript, confidence) {
        if (window.showNotification) {
            const confidencePercent = Math.round(confidence * 100);
            showNotification(`🎤 Testando: "${transcript}" (${confidencePercent}%)`, 'success', 2000);
        }
    }

    handleVoiceAttempt(transcript, confidence) {
        console.log(`🎤 Tentativa detectada: "${transcript}" (confiança: ${confidence.toFixed(2)})`);
        
        const confidencePercent = Math.round(confidence * 100);
        
        if (window.showNotification) {
            if (confidence >= this.confidenceThreshold) {
                showNotification(`🎤 Resposta: "${transcript}"`, 'success', 2000);
            } else {
                showNotification(`🎤 Ouvi: "${transcript}" (${confidencePercent}%)`, 'warning', 2000);
            }
        }
    }

    showInterimResult(transcript) {
        // Feedback visual sutil para texto intermediário
        console.log('🎤 Interim:', transcript);
    }

    handleVoiceError(error) {
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
        }
        
        if (window.showNotification) {
            showNotification(message, 'error');
        }
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

    // ===== MÉTODOS PÚBLICOS =====
    
    startGameListening() {
        if (this.isSupported && this.continuousMode) {
            this.startContinuousListening();
        }
    }
    
    stopGameListening() {
        this.stopContinuousListening();
    }
    
    isCurrentlyListening() {
        return this.isListening;
    }
    
    getLastResult() {
        return this.lastResult;
    }
}

// Função para trocar para o sistema multi-usuário
function enableMultiUserVoice() {
    if (window.voiceRecognition) {
        // Para o sistema atual
        window.voiceRecognition.stopGameListening();
    }
    
    // Cria nova instância multi-usuário
    window.voiceRecognitionMultiUser = new VoiceRecognitionMultiUser();
    window.voiceRecognition = window.voiceRecognitionMultiUser; // Substitui a referência
    
    console.log('🎤 Sistema multi-usuário ativado');
    
    if (window.showNotification) {
        showNotification('🎤 Modo multi-usuário ativado! Filtros rigorosos habilitados.', 'success', 3000);
    }
    
    return window.voiceRecognitionMultiUser;
}

// Função para voltar ao sistema normal
function disableMultiUserVoice() {
    if (window.voiceRecognitionMultiUser) {
        window.voiceRecognitionMultiUser.stopGameListening();
    }
    
    // Volta para o sistema original (seria necessário recriar)
    console.log('🎤 Sistema multi-usuário desativado');
    
    if (window.showNotification) {
        showNotification('🎤 Modo multi-usuário desativado. Reinicie para voltar ao modo normal.', 'info', 3000);
    }
}

// Expor funções globalmente
window.enableMultiUserVoice = enableMultiUserVoice;
window.disableMultiUserVoice = disableMultiUserVoice;
window.VoiceRecognitionMultiUser = VoiceRecognitionMultiUser;
