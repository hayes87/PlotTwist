// Interface de controle para modo multi-usuário
class MultiUserVoiceControls {
    constructor(compact = false) {
        this.isActive = false;
        this.compact = compact;
        this.createControlPanel();
        this.bindEvents();
    }

    createControlPanel() {
        if (this.compact) {
            this.createCompactControls();
        } else {
            this.createFullControls();
        }
    }

    createCompactControls() {
        // Versão compacta para uso durante o jogo
        const container = document.getElementById('multiuser-voice-container');
        if (!container) return;

        this.controlPanel = document.createElement('div');
        this.controlPanel.className = 'multiuser-controls-compact-panel';
        this.controlPanel.innerHTML = `
            <label class="multiuser-toggle-compact">
                <input type="checkbox" id="multiuser-toggle-compact">
                <span class="multiuser-slider-compact"></span>
            </label>
            <span class="multiuser-label-compact">Grupo</span>
            <span class="multiuser-status-compact" id="multiuser-status-compact">OFF</span>
        `;

        container.appendChild(this.controlPanel);
    }

    createFullControls() {
        // Versão completa para uso na configuração
        // Cria um botão toggle na interface
        const gameHeader = document.querySelector('.game-header') || document.querySelector('h1') || document.body;
        
        this.controlPanel = document.createElement('div');
        this.controlPanel.className = 'multiuser-controls';
        this.controlPanel.innerHTML = `
            <div class="multiuser-toggle-container">
                <label class="multiuser-toggle-label">
                    <span class="toggle-text">🎤 Modo Multi-Usuário</span>
                    <div class="group-mode-toggle">
                        <input type="checkbox" id="multiuser-toggle">
                        <span class="toggle-slider"></span>
                    </div>
                </label>
                <div class="multiuser-info" style="display: none;">
                    <div class="info-panel">
                        <h4>🎤 Modo Grupo Ativo</h4>
                        <div class="setting-item">
                            <span>Filtros rigorosos</span>
                            <span class="status-dot active"></span>
                        </div>
                        <div class="setting-item">
                            <span>Palavras de ativação</span>
                            <span class="status-dot active"></span>
                        </div>
                        <div class="setting-item">
                            <span>Cooldown: 3s</span>
                            <span class="status-dot active"></span>
                        </div>
                        <div class="activation-words">
                            <small>Palavras de ativação:</small>
                            <div class="words-list">
                                <span class="word-tag">resposta</span>
                                <span class="word-tag">eu sei</span>
                                <span class="word-tag">é o</span>
                                <span class="word-tag">é a</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adiciona na tela de configuração se existir
        const setupContainer = document.querySelector('.setup-container');
        if (setupContainer) {
            // Adiciona após os controles de voz se existirem
            const voiceSetup = setupContainer.querySelector('.voice-setup');
            if (voiceSetup) {
                voiceSetup.appendChild(this.controlPanel);
            } else {
                setupContainer.appendChild(this.controlPanel);
            }
        } else {
            // Fallback: adiciona no gameHeader ou body
            gameHeader.appendChild(this.controlPanel);
        }
    }

    addInlineStyles() {
        if (document.getElementById('multiuser-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'multiuser-styles';
        styles.textContent = `
            .multiuser-controls {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px;
                border-radius: 12px;
                margin: 15px 0;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .multiuser-controls::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                transition: left 0.5s;
            }

            .multiuser-controls:hover::before {
                left: 100%;
            }

            .multiuser-toggle-container {
                position: relative;
                z-index: 1;
            }

            .multiuser-toggle-label {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                user-select: none;
            }

            .toggle-text {
                font-size: 16px;
                font-weight: 600;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }

            .group-mode-toggle {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 34px;
            }

            .group-mode-toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .toggle-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.3);
                transition: .4s;
                border-radius: 34px;
                border: 2px solid rgba(255, 255, 255, 0.5);
            }

            .toggle-slider:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 2px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            .group-mode-toggle input:checked + .toggle-slider {
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                border-color: white;
            }

            .group-mode-toggle input:checked + .toggle-slider:before {
                transform: translateX(26px);
            }

            .multiuser-info {
                margin-top: 15px;
                animation: slideDown 0.3s ease-out;
            }

            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .info-panel {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                padding: 12px;
                backdrop-filter: blur(10px);
            }

            .info-panel h4 {
                margin: 0 0 10px 0;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .setting-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 6px 0;
                font-size: 13px;
            }

            .status-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #ccc;
            }

            .status-dot.active {
                background: #4ecdc4;
                box-shadow: 0 0 6px rgba(78, 205, 196, 0.6);
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.5;
                }
            }

            .activation-words {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 6px;
                padding: 8px;
                margin-top: 8px;
            }

            .activation-words small {
                font-size: 11px;
                opacity: 0.8;
            }

            .words-list {
                margin-top: 5px;
            }

            .word-tag {
                background: rgba(255, 255, 255, 0.2);
                color: white;
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 11px;
                margin: 2px;
                display: inline-block;
                border: 1px solid rgba(255, 255, 255, 0.3);
            }

            .multiuser-indicator {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                color: white;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: slideIn 0.5s ease-out;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            .multiuser-controls-compact-panel {
                display: flex;
                align-items: center;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                padding: 10px;
                margin: 10px 0;
                backdrop-filter: blur(8px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }

            .multiuser-toggle-compact {
                position: relative;
                display: inline-block;
                width: 40px;
                height: 24px;
                margin-right: 10px;
            }

            .multiuser-toggle-compact input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .multiuser-slider-compact {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.3);
                transition: .4s;
                border-radius: 24px;
                border: 2px solid rgba(255, 255, 255, 0.5);
            }

            .multiuser-slider-compact:before {
                position: absolute;
                content: "";
                height: 20px;
                width: 20px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            .multiuser-controls-compact-panel .multiuser-label-compact {
                font-size: 14px;
                color: white;
                margin-right: 8px;
            }

            .multiuser-controls-compact-panel .multiuser-status-compact {
                font-size: 14px;
                color: #4ecdc4;
                font-weight: bold;
            }

            .multiuser-controls-compact-panel input:checked + .multiuser-slider-compact {
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                border-color: white;
            }

            .multiuser-controls-compact-panel input:checked + .multiuser-slider-compact:before {
                transform: translateX(16px);
            }
        `;

        document.head.appendChild(styles);
    }

    bindEvents() {
        const toggle = this.controlPanel.querySelector('#multiuser-toggle');
        const infoPanel = this.controlPanel.querySelector('.multiuser-info');

        toggle.addEventListener('change', (e) => {
            this.isActive = e.target.checked;
            
            if (this.isActive) {
                this.activateMultiUserMode();
                infoPanel.style.display = 'block';
                this.showIndicator();
            } else {
                this.deactivateMultiUserMode();
                infoPanel.style.display = 'none';
                this.hideIndicator();
            }
        });

        // Eventos para os controles compactos
        const toggleCompact = this.controlPanel.querySelector('#multiuser-toggle-compact');
        const statusCompact = document.getElementById('multiuser-status-compact');

        if (toggleCompact) {
            toggleCompact.addEventListener('change', (e) => {
                this.isActive = e.target.checked;
                
                if (this.isActive) {
                    this.activateMultiUserMode();
                    statusCompact.innerText = 'ON';
                    this.showIndicator();
                } else {
                    this.deactivateMultiUserMode();
                    statusCompact.innerText = 'OFF';
                    this.hideIndicator();
                }
            });
        }
    }

    activateMultiUserMode() {
        try {
            // Ativa o sistema multi-usuário
            if (typeof enableMultiUserVoice === 'function') {
                enableMultiUserVoice();
                console.log('🎤 Modo multi-usuário ativado via controle');
            } else {
                console.warn('🎤 Função enableMultiUserVoice não encontrada');
                this.showFallbackNotification();
            }
        } catch (error) {
            console.error('Erro ao ativar modo multi-usuário:', error);
            this.showErrorNotification();
        }
    }

    deactivateMultiUserMode() {
        try {
            // Desativa o sistema multi-usuário
            if (typeof disableMultiUserVoice === 'function') {
                disableMultiUserVoice();
                console.log('🎤 Modo multi-usuário desativado via controle');
            } else {
                console.warn('🎤 Função disableMultiUserVoice não encontrada');
            }
        } catch (error) {
            console.error('Erro ao desativar modo multi-usuário:', error);
        }
    }

    showIndicator() {
        if (this.indicator) return;

        this.indicator = document.createElement('div');
        this.indicator.className = 'multiuser-indicator';
        this.indicator.innerHTML = '🎤 GRUPO';
        document.body.appendChild(this.indicator);
    }

    hideIndicator() {
        if (this.indicator) {
            this.indicator.remove();
            this.indicator = null;
        }
    }

    showFallbackNotification() {
        if (window.showNotification) {
            showNotification(
                '🎤 Modo multi-usuário: Carregue primeiro o script voice-recognition-multiuser.js',
                'warning',
                5000
            );
        }
    }

    showErrorNotification() {
        if (window.showNotification) {
            showNotification(
                '🎤 Erro ao ativar modo multi-usuário. Verifique o console.',
                'error',
                3000
            );
        }
    }

    // Método público para ativar/desativar programaticamente
    setActive(active) {
        const toggle = this.controlPanel.querySelector('#multiuser-toggle');
        if (toggle) {
            toggle.checked = active;
            toggle.dispatchEvent(new Event('change'));
        }
    }

    // Método para verificar se está ativo
    getActive() {
        return this.isActive;
    }
}

// Inicialização automática quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.multiUserControls = new MultiUserVoiceControls();
        console.log('🎤 Controles multi-usuário inicializados');
    }, 2000); // Aguarda outros scripts carregarem
});

// Expor globalmente
window.MultiUserVoiceControls = MultiUserVoiceControls;
