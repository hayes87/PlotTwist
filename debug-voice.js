// Debug script for voice recognition
console.log('🔧 Debug: Verificando sistema de reconhecimento de voz...');

// Check if voice recognition is loaded
if (window.voiceRecognition) {
    console.log('✅ VoiceRecognition instance found');
    console.log('🎤 isSupported:', window.voiceRecognition.isSupported);
    console.log('🎤 microphonePermissionGranted:', window.voiceRecognition.microphonePermissionGranted);
    console.log('🎤 isListening:', window.voiceRecognition.isListening);
    console.log('🎤 gameActive:', window.voiceRecognition.gameActive);
    console.log('🎤 continuousMode:', window.voiceRecognition.continuousMode);
    
    // Check recognition object
    if (window.voiceRecognition.recognition) {
        console.log('✅ SpeechRecognition object created');
    } else {
        console.log('❌ SpeechRecognition object not found');
    }
    
    // Test microphone permission
    window.voiceRecognition.checkMicrophonePermission().then(permission => {
        console.log('🎤 Microphone permission status:', permission);
    });
    
} else {
    console.log('❌ VoiceRecognition instance not found');
}

// Check if speech recognition is supported
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    console.log('✅ Speech Recognition API is supported');
} else {
    console.log('❌ Speech Recognition API is not supported');
}

// Test basic functionality
function testVoiceRecognition() {
    console.log('🧪 Testing voice recognition...');
    
    if (!window.voiceRecognition) {
        console.log('❌ Cannot test - voiceRecognition not available');
        return;
    }
    
    // Test status check
    console.log('🧪 Testing status check...');
    if (typeof window.getVoiceStatus === 'function') {
        console.log('🔧 Voice status:', window.getVoiceStatus());
    }
    
    // Test game integration
    console.log('🧪 Testing game integration...');
    if (typeof window.initializeVoiceForGame === 'function') {
        const result = window.initializeVoiceForGame();
        console.log('🔧 Game integration result:', result);
    }
    
    // Simulate starting the game
    console.log('🧪 Testing game start simulation...');
    window.voiceRecognition.gameActive = true;
    
    // Test starting continuous listening
    if (window.voiceRecognition.isSupported) {
        console.log('🧪 Testing start continuous listening...');
        window.voiceRecognition.startContinuousListening();
        
        setTimeout(() => {
            console.log('🔧 After 2 seconds - isListening:', window.voiceRecognition.isListening);
        }, 2000);
    }
}

// Run test after a short delay to ensure everything is loaded
setTimeout(testVoiceRecognition, 2000);

// Also expose test function globally
window.testVoiceRecognition = testVoiceRecognition;
