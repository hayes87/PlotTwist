// Controles simples para modo multi-usuário
class SimpleMultiUserControls {
    constructor() {
        this.isActive = false;
        this.init();
    }

    init() {
        this.createCompactControls();
        this.bindEvents();
    }

    createCompactControls() {
        const container = document.getElementById('multiuser-voice-container');
        if (!container) return;

        container.innerHTML = `
            <div class="multiuser-compact-toggle">
                <label class="multiuser-toggle-compact">
                    <input type="checkbox" id="multiuser-toggle-compact">
                    <span class="multiuser-slider-compact"></span>
                </label>
                <span class="multiuser-label-compact">Grupo</span>
                <span class="multiuser-status-compact" id="multiuser-status-compact">OFF</span>
            </div>
        `;
    }

    bindEvents() {
        const toggle = document.getElementById('multiuser-toggle-compact');
        const status = document.getElementById('multiuser-status-compact');
        
        if (!toggle) return;

        toggle.addEventListener('change', (e) => {
            this.isActive = e.target.checked;
            
            if (this.isActive) {
                this.activateMultiUserMode();
                status.textContent = 'ON';
                status.classList.add('active');
            } else {
                this.deactivateMultiUserMode();
                status.textContent = 'OFF';
                status.classList.remove('active');
            }
        });
    }    activateMultiUserMode() {
        try {
            if (window.voiceRecognition && window.voiceRecognition.setGroupMode) {
                window.voiceRecognition.setGroupMode(true);
                console.log('🎤 Modo multi-usuário ativado');
                
                if (window.showNotification) {
                    showNotification('🎤 Modo Grupo Ativado - Filtros rigorosos habilitados', 'success', 3000);
                }
            } else {
                console.warn('🎤 Sistema de reconhecimento de voz não encontrado');
                if (window.showNotification) {
                    showNotification('🎤 Sistema de voz não está disponível', 'warning', 5000);
                }
            }
        } catch (error) {
            console.error('Erro ao ativar modo multi-usuário:', error);
        }
    }    deactivateMultiUserMode() {
        try {
            if (window.voiceRecognition && window.voiceRecognition.setGroupMode) {
                window.voiceRecognition.setGroupMode(false);
                console.log('🎤 Modo multi-usuário desativado');
                
                if (window.showNotification) {
                    showNotification('🎤 Modo Grupo Desativado', 'info', 2000);
                }
            }
        } catch (error) {
            console.error('Erro ao desativar modo multi-usuário:', error);
        }
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Aguarda um pouco para garantir que outros scripts carregaram
    setTimeout(() => {
        if (document.getElementById('multiuser-voice-container')) {
            window.simpleMultiUserControls = new SimpleMultiUserControls();
            console.log('🎤 Controles simples multi-usuário inicializados');
        }
    }, 1000);
});

// Expor globalmente
window.SimpleMultiUserControls = SimpleMultiUserControls;
