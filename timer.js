// Timer functionality
function startTimer() {
    // Clear any existing timer
    clearInterval(timerInterval);
    
    // Set up the timer display
    const timerDisplay = document.getElementById('timer-display');
    
    // If no time limit, hide the timer and return
    if (gameState.timeLimit === 0) {
        timerDisplay.classList.add('hidden');
        return;
    }
    
    // Initialize or reset the time remaining
    if (gameState.timeRemaining <= 0) {
        gameState.timeRemaining = gameState.timeLimit;
    }
    
    // Show the timer
    timerDisplay.classList.remove('hidden');
    updateTimerDisplay();
    
    // Start the interval
    timerInterval = setInterval(() => {
        // Decrease time remaining
        gameState.timeRemaining--;
        
        // Update display
        updateTimerDisplay();
        
        // Check if time's up
        if (gameState.timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer-display');
    const timerCountdown = document.getElementById('timer-countdown');
    
    // Format the time (MM:SS)
    const minutes = Math.floor(gameState.timeRemaining / 60);
    const seconds = gameState.timeRemaining % 60;
    timerCountdown.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Add warning classes based on time remaining
    timerDisplay.classList.remove('warning', 'danger');
    if (gameState.timeRemaining <= 10) {
        timerDisplay.classList.add('danger');
    } else if (gameState.timeRemaining <= 30) {
        timerDisplay.classList.add('warning');
    }
}

function handleTimeUp() {
    showNotification('Tempo esgotado!', 'error', true);
    showAnswer(); // Automatically show the answer when time is up
}

// Override the newRound function to prepare the timer
const originalNewRound = newRound;
newRound = function() {
    // Call the original function
    originalNewRound();
    
    // Prepare the timer (don't start it yet)
    prepareTimer();
};

// Prepare the timer (set it up but don't start it)
function prepareTimer() {
    // Clear any existing timer
    clearInterval(timerInterval);
    
    // Set up the timer display
    const timerDisplay = document.getElementById('timer-display');
    
    // If no time limit, hide the timer and return
    if (gameState.timeLimit === 0) {
        timerDisplay.classList.add('hidden');
        return;
    }
    
    // Initialize the time remaining
    gameState.timeRemaining = gameState.timeLimit;
    
    // Show the timer but don't start counting yet
    timerDisplay.classList.remove('hidden');
    updateTimerDisplay();
}

// Override the advanceGame function to clear the timer
const originalAdvanceGame = advanceGame;
advanceGame = function() {
    // Clear the timer
    clearInterval(timerInterval);
    
    // Call the original function
    originalAdvanceGame();
};

// Add event listeners for timer buttons
document.addEventListener('DOMContentLoaded', function() {
    const timerButtons = document.querySelectorAll('.timer-btn');    timerButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'selected' class from all buttons
            timerButtons.forEach(btn => btn.classList.remove('selected'));
            // Add the 'selected' class to the clicked button
            button.classList.add('selected');
            // Set the time limit
            gameState.timeLimit = parseInt(button.dataset.time);
            // Record the button selection
            recordButtonSelection('timer', button.dataset.time);
        });
    });
    
    // Select "Sem Limite" by default
    document.querySelector('[data-time="0"]').classList.add('selected');
});
