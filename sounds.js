// Sound Management System for Perfil Game
class SoundManager {
    constructor() {
        this.soundEnabled = localStorage.getItem('perfilSoundEnabled') !== 'false'; // Default to true
        this.volume = parseFloat(localStorage.getItem('perfilSoundVolume')) || 0.5; // Default to 50%
        this.sounds = {};
        
        // Initialize sound library with Web Audio API fallback
        this.audioContext = null;
        this.initAudioContext();
        
        // Create sound effects using oscillator (no external files needed)
        this.createSoundEffects();
        
        // Apply saved settings
        this.updateUI();
    }
    
    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported, using HTML5 audio fallback');
        }
    }
    
    // Create synthesized sound effects
    createSoundEffects() {
        this.soundEffects = {
            // Success sound - bright chime
            success: () => this.playTone([523.25, 659.25, 783.99], [0.1, 0.1, 0.2], 'sine'),
            
            // Error sound - descending buzz
            error: () => this.playTone([220, 196, 174], [0.1, 0.1, 0.2], 'sawtooth'),
            
            // Button click - quick pop
            click: () => this.playTone([800], [0.1], 'sine'),
            
            // Reveal clue - gentle ping
            reveal: () => this.playTone([440, 523.25], [0.1, 0.15], 'sine'),
            
            // Round start - fanfare
            roundStart: () => this.playTone([523.25, 659.25, 783.99, 1046.5], [0.15, 0.15, 0.15, 0.3], 'triangle'),
            
            // Game over - victory fanfare
            gameOver: () => this.playTone([392, 523.25, 659.25, 783.99, 1046.5], [0.2, 0.2, 0.2, 0.2, 0.4], 'sine'),
            
            // Timer warning - urgent beep
            timerWarning: () => this.playTone([1000], [0.2], 'square'),
            
            // Timer danger - rapid beeps
            timerDanger: () => {
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => this.playTone([1200], [0.1], 'square'), i * 150);
                }
            },
            
            // Time up - alarm
            timeUp: () => this.playTone([800, 600, 400], [0.3, 0.3, 0.5], 'sawtooth'),
            
            // Whoosh transition
            transition: () => this.playNoise(0.3, 'highpass', 2000)
        };
    }
    
    // Play a tone with specified frequencies, durations, and waveform
    playTone(frequencies, durations, waveform = 'sine') {
        if (!this.soundEnabled || !this.audioContext) return;
        
        let startTime = this.audioContext.currentTime;
        
        frequencies.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(freq, startTime);
            oscillator.type = waveform;
            
            // Volume envelope
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, startTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + durations[index]);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + durations[index]);
            
            startTime += durations[index] * 0.8; // Slight overlap
        });
    }
    
    // Play filtered noise for whoosh effects
    playNoise(duration, filterType = 'lowpass', frequency = 1000) {
        if (!this.soundEnabled || !this.audioContext) return;
        
        const bufferSize = this.audioContext.sampleRate * duration;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const source = this.audioContext.createBufferSource();
        const filter = this.audioContext.createBiquadFilter();
        const gainNode = this.audioContext.createGain();
        
        source.buffer = buffer;
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        filter.type = filterType;
        filter.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        
        // Volume envelope
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume * 0.2, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        source.start();
        source.stop(this.audioContext.currentTime + duration);
    }
      // Public methods to play sound effects
    playSound(soundName) {
        if (this.soundEffects[soundName]) {
            // Resume audio context if suspended (required by some browsers)
            if (this.audioContext && this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            this.soundEffects[soundName]();
        }
    }
    
    // Alias for playSound for compatibility
    play(soundName) {
        this.playSound(soundName);
    }
    
    // Toggle sound on/off
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('perfilSoundEnabled', this.soundEnabled);
        this.updateUI();
        
        // Play a test sound when enabling
        if (this.soundEnabled) {
            setTimeout(() => this.playSound('click'), 100);
        }
        
        return this.soundEnabled;
    }
    
    // Set volume (0.0 to 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        localStorage.setItem('perfilSoundVolume', this.volume);
        this.updateUI();
        
        // Play a test sound
        if (this.soundEnabled) {
            this.playSound('click');
        }
    }
    
    // Update UI elements
    updateUI() {
        const soundToggle = document.getElementById('sound-toggle-btn');
        const volumeSlider = document.getElementById('volume-slider');
        
        if (soundToggle) {
            const icon = soundToggle.querySelector('i');
            if (icon) {
                icon.className = this.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            }
            soundToggle.title = this.soundEnabled ? 'Desativar som' : 'Ativar som';
        }
        
        if (volumeSlider) {
            volumeSlider.value = this.volume * 100;
            volumeSlider.disabled = !this.soundEnabled;
        }
    }
}

// Initialize sound manager
let soundManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    soundManager = new SoundManager();
    
    // Export for global use
    window.soundManager = soundManager;
    
    // Add event listeners for sound controls
    const soundToggle = document.getElementById('sound-toggle-btn');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            // Play click sound before toggling (only if currently enabled)
            if (soundManager.soundEnabled && soundManager.audioContext) {
                soundManager.play('click');
            }
            const enabled = soundManager.toggleSound();
            showNotification(enabled ? 'Som ativado!' : 'Som desativado!', 'info');
        });
    }
    
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            soundManager.setVolume(e.target.value / 100);
        });
    }
});
