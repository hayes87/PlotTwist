// Test validation script for voice recognition system
console.log('🔍 Starting voice recognition system validation...');

// Check if scripts are loaded
function checkScriptLoading() {
    const tests = [];
    
    // Check if VoiceRecognition class exists
    if (typeof VoiceRecognition !== 'undefined') {
        tests.push({ name: 'VoiceRecognition class', status: 'PASS', details: 'Class found and available' });
    } else {
        tests.push({ name: 'VoiceRecognition class', status: 'FAIL', details: 'Class not found' });
    }
    
    // Check if MultiUserVoiceRecognition exists (if it's supposed to)
    if (typeof MultiUserVoiceRecognition !== 'undefined') {
        tests.push({ name: 'MultiUserVoiceRecognition class', status: 'PASS', details: 'Multi-user class found' });
    } else {
        tests.push({ name: 'MultiUserVoiceRecognition class', status: 'INFO', details: 'Multi-user class not found (may be expected)' });
    }
    
    return tests;
}

// Test system initialization
function testSystemInitialization() {
    const tests = [];
    
    try {
        const voiceSystem = new VoiceRecognition();
        tests.push({ name: 'System initialization', status: 'PASS', details: 'System created successfully' });
        
        // Test default configuration
        const hasGroupMode = typeof voiceSystem.groupMode !== 'undefined';
        const hasActivationWord = typeof voiceSystem.useActivationWord !== 'undefined';
        
        tests.push({ 
            name: 'Group mode property', 
            status: hasGroupMode ? 'PASS' : 'FAIL', 
            details: hasGroupMode ? `Value: ${voiceSystem.groupMode}` : 'Property not found' 
        });
        
        tests.push({ 
            name: 'Activation word property', 
            status: hasActivationWord ? 'PASS' : 'FAIL', 
            details: hasActivationWord ? `Value: ${voiceSystem.useActivationWord}` : 'Property not found' 
        });
        
        // Test methods
        const hasSetGroupMode = typeof voiceSystem.setGroupMode === 'function';
        const hasShouldProcessSpeech = typeof voiceSystem.shouldProcessSpeech === 'function';
        
        tests.push({ 
            name: 'setGroupMode method', 
            status: hasSetGroupMode ? 'PASS' : 'FAIL', 
            details: hasSetGroupMode ? 'Method available' : 'Method not found' 
        });
        
        tests.push({ 
            name: 'shouldProcessSpeech method', 
            status: hasShouldProcessSpeech ? 'PASS' : 'FAIL', 
            details: hasShouldProcessSpeech ? 'Method available' : 'Method not found' 
        });
        
    } catch (error) {
        tests.push({ name: 'System initialization', status: 'FAIL', details: `Error: ${error.message}` });
    }
    
    return tests;
}

// Test filtering logic
function testFilteringLogic() {
    const tests = [];
    
    try {
        const voiceSystem = new VoiceRecognition();
        
        // Enable strict filtering
        voiceSystem.setGroupMode(true);
        voiceSystem.useActivationWord = true;
        
        // Test cases for activation words
        const testCases = [
            { input: 'resposta batman', expected: true, description: 'With activation word "resposta"' },
            { input: 'batman', expected: false, description: 'Without activation word' },
            { input: 'é o superman', expected: true, description: 'With activation word "é o"' },
            { input: 'eh a mulher maravilha', expected: true, description: 'With activation word "eh"' },
            { input: 'apenas uma resposta qualquer', expected: false, description: 'No valid activation word' }
        ];
        
        let passCount = 0;
        testCases.forEach((testCase, index) => {
            const result = voiceSystem.shouldProcessSpeech(testCase.input, 0.8);
            const passed = result === testCase.expected;
            
            if (passed) passCount++;
            
            tests.push({
                name: `Filter test ${index + 1}`,
                status: passed ? 'PASS' : 'FAIL',
                details: `"${testCase.input}" → ${result} (expected ${testCase.expected}) - ${testCase.description}`
            });
        });
        
        tests.push({
            name: 'Overall filtering accuracy',
            status: passCount === testCases.length ? 'PASS' : 'PARTIAL',
            details: `${passCount}/${testCases.length} tests passed`
        });
        
    } catch (error) {
        tests.push({ name: 'Filtering logic test', status: 'FAIL', details: `Error: ${error.message}` });
    }
    
    return tests;
}

// Test configuration persistence
function testConfigurationPersistence() {
    const tests = [];
    
    try {
        const voiceSystem = new VoiceRecognition();
        
        // Test saving configuration
        voiceSystem.setGroupMode(true);
        voiceSystem.useActivationWord = true;
        
        // Check if values are saved to localStorage
        const groupModeStored = localStorage.getItem('voiceGroupMode');
        const activationWordStored = localStorage.getItem('voiceActivationWord');
        
        tests.push({
            name: 'Group mode persistence',
            status: groupModeStored !== null ? 'PASS' : 'FAIL',
            details: groupModeStored !== null ? `Stored value: ${groupModeStored}` : 'Not stored in localStorage'
        });
        
        tests.push({
            name: 'Activation word persistence',
            status: activationWordStored !== null ? 'PASS' : 'FAIL',
            details: activationWordStored !== null ? `Stored value: ${activationWordStored}` : 'Not stored in localStorage'
        });
        
        // Test loading configuration
        if (typeof voiceSystem.loadSettings === 'function') {
            voiceSystem.loadSettings();
            tests.push({ name: 'Configuration loading', status: 'PASS', details: 'loadSettings method executed successfully' });
        } else {
            tests.push({ name: 'Configuration loading', status: 'FAIL', details: 'loadSettings method not found' });
        }
        
    } catch (error) {
        tests.push({ name: 'Configuration persistence test', status: 'FAIL', details: `Error: ${error.message}` });
    }
    
    return tests;
}

// Main validation function
function runValidation() {
    console.log('🎯 Running comprehensive validation...');
    
    const allTests = [
        ...checkScriptLoading(),
        ...testSystemInitialization(),
        ...testFilteringLogic(),
        ...testConfigurationPersistence()
    ];
    
    // Generate summary
    const passed = allTests.filter(t => t.status === 'PASS').length;
    const failed = allTests.filter(t => t.status === 'FAIL').length;
    const partial = allTests.filter(t => t.status === 'PARTIAL').length;
    const info = allTests.filter(t => t.status === 'INFO').length;
    
    console.log('\n📋 VALIDATION RESULTS:');
    console.log('====================');
    
    allTests.forEach(test => {
        const icon = {
            'PASS': '✅',
            'FAIL': '❌',
            'PARTIAL': '⚠️',
            'INFO': 'ℹ️'
        }[test.status];
        
        console.log(`${icon} ${test.name}: ${test.details}`);
    });
    
    console.log('\n📊 SUMMARY:');
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⚠️ Partial: ${partial}`);
    console.log(`ℹ️ Info: ${info}`);
    
    const successRate = ((passed + partial) / allTests.length * 100).toFixed(1);
    console.log(`🎯 Success Rate: ${successRate}%`);
    
    if (failed === 0 && passed > 0) {
        console.log('\n🎉 ALL CRITICAL TESTS PASSED! System is working correctly.');
    } else if (failed > 0) {
        console.log('\n⚠️ Some tests failed. Please review the issues above.');
    }
    
    return {
        total: allTests.length,
        passed,
        failed,
        partial,
        info,
        successRate: parseFloat(successRate),
        allTests
    };
}

// Export for browser use
if (typeof window !== 'undefined') {
    window.runValidation = runValidation;
}

// Auto-run if this script is loaded directly
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            console.log('🚀 Auto-running validation...');
            runValidation();
        }, 1000);
    });
}
