// Classes principais
class GameState {    constructor() {
        this.team1 = '';
        this.team2 = '';
        this.team1Points = 0;
        this.team2Points = 0;
        this.team1CorrectAnswers = 0; // Track correct answers count
        this.team2CorrectAnswers = 0; // Track correct answers count
        this.currentRound = 1;
        this.totalRounds = 10;
        this.activeTeam = 1; // 1 ou 2
        this.currentCard = null;
        this.revealedClues = 0;
        this.difficulty = 'medium'; // 'easy', 'medium', 'hard', 'cult', 'random', 'escolhalivre'
        this.timeLimit = 0; // 0 = sem limite, 60 = 1 min, etc.
        this.timeRemaining = 0;
        this.usedCards = [];
        this.gameHistory = [];
        this.gameStartTime = null; // Track when the game started
        this.currentRoundDifficulty = 'medium'; // Dificuldade específica da rodada atual (para modo escolha livre)
        this.currentRoundMultiplier = 1; // Multiplicador de pontos da rodada atual
        this.isProcessingAnswer = false; // Previne múltiplas submissões rápidas
        this.isRevealingClue = false; // Previne múltiplos cliques rápidos no botão revelar pista
    }// Salva o estado do jogo no localStorage
    save() {
        localStorage.setItem('perfilGameState', JSON.stringify({
            team1: this.team1,
            team2: this.team2,
            team1Points: this.team1Points,
            team2Points: this.team2Points,
            currentRound: this.currentRound,
            activeTeam: this.activeTeam,
            currentCard: this.currentCard,
            revealedClues: this.revealedClues,
            difficulty: this.difficulty,
            timeLimit: this.timeLimit,
            timeRemaining: this.timeRemaining,
            usedCards: this.usedCards,
            currentRoundDifficulty: this.currentRoundDifficulty,
            currentRoundMultiplier: this.currentRoundMultiplier
        }));
        
        showNotification('Jogo salvo com sucesso!', 'success');
    }    // Carrega o estado do jogo do localStorage
    load() {
        const savedState = localStorage.getItem('perfilGameState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.team1 = state.team1;
            this.team2 = state.team2;
            this.team1Points = state.team1Points;
            this.team2Points = state.team2Points;
            this.currentRound = state.currentRound;
            this.activeTeam = state.activeTeam;
            this.currentCard = state.currentCard;
            this.revealedClues = state.revealedClues;
            this.difficulty = state.difficulty;
            this.timeLimit = state.timeLimit || 0;
            this.timeRemaining = state.timeRemaining || 0;
            this.usedCards = state.usedCards || [];
            this.currentRoundDifficulty = state.currentRoundDifficulty || 'medium';
            this.currentRoundMultiplier = state.currentRoundMultiplier || 1;
            
            showNotification('Jogo carregado com sucesso!', 'success');
            return true;
        }
        return false;
    }

    // Salva o resultado do jogo no histórico
    saveToHistory() {
        const gameResult = {
            date: new Date().toLocaleDateString(),
            team1: this.team1,
            team2: this.team2,
            team1Points: this.team1Points,
            team2Points: this.team2Points,
            winner: this.team1Points > this.team2Points ? this.team1 : 
                   this.team2Points > this.team1Points ? this.team2 : 'Empate'
        };

        let history = this.loadHistory();
        history.unshift(gameResult); // Adiciona no início
        
        // Limita a 10 jogos no histórico
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        
        localStorage.setItem('perfilGameHistory', JSON.stringify(history));
        this.gameHistory = history;
    }

    // Carrega o histórico de jogos
    loadHistory() {
        const savedHistory = localStorage.getItem('perfilGameHistory');
        if (savedHistory) {
            this.gameHistory = JSON.parse(savedHistory);
            return this.gameHistory;
        }
        return [];
    }    // Limpa o histórico de cartas usadas
    resetUsedCards() {
        this.usedCards = [];
        localStorage.setItem('perfilUsedCards', JSON.stringify(this.usedCards));
        showNotification('Histórico de cartas limpo!', 'success');
        updateCardStats(); // Atualiza as estatísticas após limpar
    }    // Seleciona uma nova carta
    getNewCard() {
        let availableCards = [];
        
        // Determina qual dificuldade usar
        let difficultyToUse = this.difficulty;
        if (this.difficulty === 'escolhalivre') {
            difficultyToUse = this.currentRoundDifficulty;
        }
        
        // Seleciona o banco de dados apropriado baseado na dificuldade
        if (difficultyToUse === 'easy') {
            availableCards = databaseEasy.filter(card => !this.usedCards.includes(card.answer));
        } else if (difficultyToUse === 'medium') {
            availableCards = databaseMedium.filter(card => !this.usedCards.includes(card.answer));
        } else if (difficultyToUse === 'hard') {
            availableCards = databaseHard.filter(card => !this.usedCards.includes(card.answer));
        } else if (difficultyToUse === 'cult') {
            availableCards = databaseCult.filter(card => !this.usedCards.includes(card.answer));
        } else if (this.difficulty === 'random') {
            // Modo random: 20% fácil, 50% médio, 25% difícil, 5% cult
            const random = Math.random();
            if (random < 0.2) {
                availableCards = databaseEasy.filter(card => !this.usedCards.includes(card.answer));
            } else if (random < 0.7) {
                availableCards = databaseMedium.filter(card => !this.usedCards.includes(card.answer));
            } else if (random < 0.95) {
                availableCards = databaseHard.filter(card => !this.usedCards.includes(card.answer));
            } else {
                availableCards = databaseCult.filter(card => !this.usedCards.includes(card.answer));
            }
        }
        
        // Se não houver cartas disponíveis, use todas as cartas
        if (availableCards.length === 0) {
            showNotification('Todas as cartas já foram usadas. Reiniciando...', 'error');
            this.resetUsedCards();
            return this.getNewCard();
        }
        
        // Seleciona uma carta aleatória
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const selectedCard = availableCards[randomIndex];
          // Adiciona a carta à lista de usadas
        this.usedCards.push(selectedCard.answer);
        localStorage.setItem('perfilUsedCards', JSON.stringify(this.usedCards));
        
        // Se estamos na tela inicial, atualiza as estatísticas
        if (!document.getElementById('start-screen').classList.contains('hidden')) {
            updateCardStats();
        }
        
        return selectedCard;
    }

    // Verifica se a resposta está correta
    checkAnswer(answer) {
        if (!this.currentCard) return false;
        
        // Normaliza a resposta (remove acentos, converte para minúsculas)
        const normalizedAnswer = this.normalizeText(answer);
        const normalizedCorrect = this.normalizeText(this.currentCard.answer);
        
        // Verifica a resposta principal
        if (normalizedAnswer === normalizedCorrect) {
            return true;
        }
        
        // Verifica respostas alternativas
        if (this.currentCard.alternatives && this.currentCard.alternatives.length > 0) {
            for (const alt of this.currentCard.alternatives) {
                if (this.normalizeText(alt) === normalizedAnswer) {
                    return true;
                }
            }
        }
        
        // Matching aproximado (Levenshtein distance <= 2 para respostas curtas)
        if (normalizedCorrect.length <= 5 && this.levenshteinDistance(normalizedAnswer, normalizedCorrect) <= 1) {
            return true;
        } else if (normalizedCorrect.length > 5 && this.levenshteinDistance(normalizedAnswer, normalizedCorrect) <= 2) {
            return true;
        }
        
        // Verificação por palavras-chave (para respostas parciais)
        const correctWords = normalizedCorrect.split(' ');
        if (correctWords.length > 1) {
            const answerWords = normalizedAnswer.split(' ');
            let matchedWords = 0;
            
            for (const word of answerWords) {
                if (word.length >= 4 && correctWords.includes(word)) { // Ignora palavras pequenas
                    matchedWords++;
                }
            }
            
            // Se mais de 70% das palavras importantes correspondem
            const threshold = correctWords.filter(w => w.length >= 4).length * 0.7;
            if (matchedWords >= threshold && matchedWords >= 2) {
                return true;
            }
        }
        
        return false;
    }

    // Normaliza o texto (remove acentos, converte para minúsculas)
    normalizeText(text) {
        return text.toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // Remove acentos
                .replace(/[^\w\s]/g, '')  // Remove pontuação
                .trim();
    }

    // Calcula a distância de Levenshtein (para matching aproximado)
    levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
      
        const matrix = [];
      
        // Inicializa a primeira linha e coluna da matriz
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
      
        // Preenche o resto da matriz
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                const cost = a[j - 1] === b[i - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,      // deleção
                    matrix[i][j - 1] + 1,      // inserção
                    matrix[i - 1][j - 1] + cost // substituição
                );
            }
        }
      
        return matrix[b.length][a.length];
    }
}

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('perfilTheme') || 'light';
        this.applyTheme();
    }
    
    // Alterna entre temas claro e escuro
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        return this.currentTheme;
    }
    
    // Aplica o tema atual
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('perfilTheme', this.currentTheme);
        
        // Atualiza o ícone do botão de tema
        const themeButton = document.getElementById('toggle-theme-btn');
        if (themeButton) {
            const icon = themeButton.querySelector('i');
            if (icon) {
                if (this.currentTheme === 'dark') {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            }
        }
    }
}

// Funções de utilidade
function playButtonClickSound() {
    if (window.soundManager) {
        window.soundManager.play('click');
    }
}

function showNotification(message, type = 'info', inCard = false) {
    if (inCard) {
        // Notificação que sobrepõe o card
        const cardContainer = document.querySelector('.card-container');
        if (!cardContainer) return; // Se não estiver na tela do jogo
        
        // Remove notificações anteriores
        const oldNotifications = cardContainer.querySelectorAll('.card-notification');
        oldNotifications.forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = `card-notification ${type}`;
        
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-message">${message}</div>
        `;
        
        cardContainer.appendChild(notification);
        
        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    } else {
        // Notificação padrão
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-message">${message}</div>
        `;
        
        container.appendChild(notification);
        
        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

function createConfetti() {
    const container = document.body; // Use body instead of game-container for fullscreen effect
    const colors = ['#3a86ff', '#4caf50', '#ff6b6b', '#ffd166', '#118ab2'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`; // Use viewport width
        confetti.style.top = `${Math.random() * 20}vh`; // Use viewport height
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Formas variadas
        const shape = Math.floor(Math.random() * 3);
        if (shape === 0) {
            confetti.style.borderRadius = '50%'; // Círculo
        } else if (shape === 1) {
            confetti.style.borderRadius = '0'; // Quadrado
        } else {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.borderLeft = `${size/2}px solid transparent`;
            confetti.style.borderRight = `${size/2}px solid transparent`;
            confetti.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
            confetti.style.backgroundColor = 'transparent';
        }
        
        // Animação personalizada com duração variável
        const duration = 5;
        confetti.style.animation = `confetti ${duration}s ease-out forwards`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        
        container.appendChild(confetti);
        
        // Remove confetti após a animação
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000 + 500);
    }
}

// Inicializa as variáveis globais
let gameState = new GameState();
let themeManager = new ThemeManager();
let timerInterval = null;

// Event Listeners para elementos da interface
document.addEventListener('DOMContentLoaded', () => {
    // Carrega o histórico de cartas usadas
    const savedUsedCards = localStorage.getItem('perfilUsedCards');
    if (savedUsedCards) {
        gameState.usedCards = JSON.parse(savedUsedCards);
    }
    
    // Carrega o histórico de jogos
    gameState.loadHistory();
    updateGameHistory();
    
    // Atualiza as estatísticas de cartas
    updateCardStats();
      // Botões da tela inicial
    document.getElementById('start-game-btn').addEventListener('click', () => {
        playButtonClickSound();
        startGame();
    });
    document.getElementById('load-game-btn').addEventListener('click', () => {
        playButtonClickSound();
        loadGame();
    });    document.getElementById('toggle-theme-btn').addEventListener('click', () => {
        playButtonClickSound();
        toggleTheme();
    });
    document.getElementById('reset-cards-btn').addEventListener('click', () => {
        playButtonClickSound();
        gameState.resetUsedCards();
    });
    // Botões de dificuldade
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const difficultyDescriptions = {
        "easy": "Filmes e séries populares e fáceis de adivinhar",
        "medium": "Filmes e séries conhecidos com nível médio de dificuldade",
        "hard": "Filmes e séries mais desafiadores e menos mainstream",
        "cult": "Filmes e séries cult, alternativos e menos conhecidos",
        "random": "Mistura aleatória de todos os níveis de dificuldade",
        "escolhalivre": "Ganhe um bonus no placar de acordo com a dificuldade: Fácil: 50%, Médio: 75%, Difícil: 100%, Master: 125%"
    };
      const difficultyDescription = document.getElementById('difficulty-description');
      difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            playButtonClickSound();
            // Remove a classe 'selected' de todos os botões
            difficultyButtons.forEach(btn => btn.classList.remove('selected'));
            // Adiciona a classe 'selected' ao botão clicado
            button.classList.add('selected');
            // Define a dificuldade
            const difficulty = button.dataset.difficulty;
            gameState.difficulty = difficulty;
            // Atualiza a descrição
            difficultyDescription.textContent = difficultyDescriptions[difficulty];
            // Grava a seleção de dificuldade
            recordButtonSelection('difficulty', difficulty);
        });
    });
    
    // Seleciona a dificuldade média por padrão
    document.querySelector('[data-difficulty="medium"]').classList.add('selected');
    difficultyDescription.textContent = difficultyDescriptions["medium"];    // Botões de número de rodadas
    const roundsButtons = document.querySelectorAll('.rounds-btn');
    roundsButtons.forEach(button => {
        button.addEventListener('click', () => {
            playButtonClickSound();
            roundsButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            gameState.totalRounds = parseInt(button.dataset.rounds);
            recordButtonSelection('rounds', button.dataset.rounds);
        });
    });

    // Seleciona 10 rodadas por padrão
    document.querySelector('[data-rounds="10"]').classList.add('selected');
    gameState.totalRounds = 10;    // Botões da tela de jogo
    document.getElementById('save-game-btn').addEventListener('click', () => {
        playButtonClickSound();
        saveGame();
    });
    document.getElementById('back-to-menu-btn').addEventListener('click', () => {
        playButtonClickSound();
        backToMenu();
    });
    document.getElementById('reveal-clue-btn').addEventListener('click', () => {
        playButtonClickSound();
        revealClue();
    });
    document.getElementById('submit-answer-btn').addEventListener('click', () => {
        playButtonClickSound();
        submitAnswer();    });
    document.getElementById('show-answer-btn').addEventListener('click', () => {
        playButtonClickSound();
        showAnswer();
    });
    
    // Campo de resposta (Enter para enviar)
    document.getElementById('answer-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitAnswer();
        }
    });      // Botões da tela de resultado
    document.getElementById('new-game-btn').addEventListener('click', () => {
        playButtonClickSound();
        recordButtonSelection('result_action', 'new_game');
        setupNewGame();
    });
    document.getElementById('return-menu-btn').addEventListener('click', () => {
        playButtonClickSound();
        recordButtonSelection('result_action', 'return_menu');
        backToMenu();
    });
      // Botões de seleção de dificuldade (modo escolha livre)
    const difficultySelectionButtons = document.querySelectorAll('.difficulty-selection-btn');
    difficultySelectionButtons.forEach(button => {        button.addEventListener('click', () => {
            playButtonClickSound();
            const selectedDifficulty = button.dataset.difficulty;
            const points = parseFloat(button.dataset.points);
            
            // Define a dificuldade e multiplicador da rodada atual
            gameState.currentRoundDifficulty = selectedDifficulty;
            gameState.currentRoundMultiplier = points;
            
            // Esconde a tela de seleção de dificuldade
            document.getElementById('difficulty-selection-screen').classList.add('hidden');
            
            // Mostra a tela do jogo e inicia a rodada
            document.getElementById('game-screen').classList.remove('hidden');
            startNewRoundWithCard();
        });
    });
});

// Nomes de equipes divertidos em português
const sillyTeamNames = [
    "Os Papagaios Falantes",
    "Esquadrão Abacaxi",
    "Guerreiros do Sofá",
    "Turma da Pipoca",
    "Os Macarronadas",
    "Dragões de Pijama",
    "Liga dos Preguiçosos",
    "Força-Tarefa Cafézinho",
    "Esquadrão Anti-Spoiler",
    "Os Mestres do Controle Remoto",
    "Tropa do Biscoito",
    "Aliança da Soneca",
    "Batalhão das Coxinhas",
    "União dos Procrastinadores",
    "Vingadores do Netflix"
];

// Função para obter um nome de equipe aleatório
function getRandomTeamName(usedNames = []) {
    const availableNames = sillyTeamNames.filter(name => !usedNames.includes(name));
    if (availableNames.length === 0) return "Equipe Misteriosa";
    return availableNames[Math.floor(Math.random() * availableNames.length)];
}

// Função para gravar seleção de botão
function recordButtonSelection(buttonType, buttonValue) {
    try {
        const selections = JSON.parse(localStorage.getItem('perfilButtonSelections') || '{}');
        selections[buttonType] = {
            value: buttonValue,
            timestamp: Date.now(),
            count: (selections[buttonType]?.count || 0) + 1
        };
        localStorage.setItem('perfilButtonSelections', JSON.stringify(selections));
    } catch (error) {
        console.log('Erro ao salvar seleção de botão:', error);
    }
}

// Funções principais do jogo
function startGame() {
    // Obtém os nomes das equipes
    const team1Input = document.getElementById('team1').value.trim();
    const team2Input = document.getElementById('team2').value.trim();
    
    let team1Name, team2Name;
    
    if (!team1Input && !team2Input) {
        // Se ambos os campos estão vazios, usa nomes aleatórios diferentes
        team1Name = getRandomTeamName();
        team2Name = getRandomTeamName([team1Name]);
    } else if (!team1Input) {
        // Se apenas o primeiro campo está vazio
        team1Name = getRandomTeamName([team2Input]);
    } else if (!team2Input) {
        // Se apenas o segundo campo está vazio
        team2Name = getRandomTeamName([team1Input]);
    } else {
        // Se ambos os campos têm valores
        team1Name = team1Input;
        team2Name = team2Input;
    }
    
    // Inicializa o estado do jogo
    gameState = new GameState();
    gameState.team1 = team1Name;
    gameState.team2 = team2Name;
    gameState.gameStartTime = Date.now(); // Track when the game started
    
    // Obtém o tempo limite selecionado
    const selectedTimerBtn = document.querySelector('.timer-btn.selected');
    if (selectedTimerBtn) {
        gameState.timeLimit = parseInt(selectedTimerBtn.dataset.time);
    }// Obtém o número de rodadas selecionado
    const selectedRoundsBtn = document.querySelector('.rounds-btn.selected');
    if (selectedRoundsBtn) {
        gameState.totalRounds = parseInt(selectedRoundsBtn.dataset.rounds);
    }
    
    // Obtém a dificuldade selecionada
    const selectedDifficultyBtn = document.querySelector('.difficulty-btn.selected');
    if (selectedDifficultyBtn) {
        gameState.difficulty = selectedDifficultyBtn.dataset.difficulty;
    }
    
    // Carrega o histórico de cartas usadas
    const savedUsedCards = localStorage.getItem('perfilUsedCards');
    if (savedUsedCards) {
        gameState.usedCards = JSON.parse(savedUsedCards);
    }
    
    // Inicia o jogo
    showGameScreen();
    newRound();
}

function loadGame() {
    if (gameState.load()) {
        showGameScreen();
        updateGameUI();
    } else {
        showNotification('Nenhum jogo salvo encontrado!', 'error');
    }
}

function saveGame() {
    gameState.save();
}

function backToMenu() {
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    // Atualiza as estatísticas de cartas ao voltar para o menu
    updateCardStats();
}

function toggleTheme() {
    const newTheme = themeManager.toggleTheme();
    showNotification(`Tema ${newTheme === 'dark' ? 'escuro' : 'claro'} ativado!`);
}

function showGameScreen() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    // Atualiza os nomes das equipes na interface
    document.getElementById('team1-name').textContent = gameState.team1;
    document.getElementById('team2-name').textContent = gameState.team2;
    document.getElementById('team1-points').textContent = gameState.team1Points;
    document.getElementById('team2-points').textContent = gameState.team2Points;
    
    // Destaca a equipe ativa
    if (gameState.activeTeam === 1) {
        document.getElementById('team1-display').classList.add('active-team');
        document.getElementById('team2-display').classList.remove('active-team');
    } else {
        document.getElementById('team1-display').classList.remove('active-team');
        document.getElementById('team2-display').classList.add('active-team');
    }
      // Configura o timer
    const timerDisplay = document.getElementById('timer-display');
    if (gameState.timeLimit > 0) {
        if (gameState.timeRemaining <= 0) {
            gameState.timeRemaining = gameState.timeLimit;
        }
        updateTimerDisplay();
        timerDisplay.classList.remove('hidden');
    } else {
        timerDisplay.classList.add('hidden');
    }
}

function showResultScreen() {
    // Play game over sound
    if (window.soundManager) {
        window.soundManager.play('gameOver');
    }
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    // Calculate game duration
    const gameDuration = gameState.gameStartTime ? Date.now() - gameState.gameStartTime : 0;
    const durationMinutes = Math.floor(gameDuration / 60000);
    const durationSeconds = Math.floor((gameDuration % 60000) / 1000);
    
    // Update game statistics
    document.getElementById('game-duration').textContent = 
        `${durationMinutes.toString().padStart(2, '0')}:${durationSeconds.toString().padStart(2, '0')}`;
    document.getElementById('total-rounds-played').textContent = gameState.totalRounds;
    
    // Hide all sections initially except header
    document.getElementById('tally-animation').classList.remove('hidden');
    document.getElementById('final-scores').classList.add('hidden');
    document.getElementById('winner-announcement').classList.add('hidden');
    document.getElementById('game-summary').classList.add('hidden');
    document.getElementById('result-buttons').classList.add('hidden');
    
    // Start the animated sequence
    setTimeout(() => {
        animateScoreTally();
    }, 500);
}

// Helper function to show sections with animation
function showSection(sectionId, delay = 0) {
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        section.classList.remove('hidden');
    }, delay);
}

// Animate the score tally progress bar
function animateScoreTally() {
    const tallyBar = document.getElementById('tally-bar');
    let progress = 0;
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const increment = 100 / (duration / interval);
    
    const progressInterval = setInterval(() => {
        progress += increment;
        tallyBar.style.width = `${Math.min(progress, 100)}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            // Hide tally animation and show scores
            setTimeout(() => {
                document.getElementById('tally-animation').classList.add('hidden');
                showScores();
            }, 500);
        }
    }, interval);
}

// Show and animate the final scores
function showScores() {
    // Show the scores section
    showSection('final-scores');
    
    // Update team names and correct answers
    document.getElementById('final-team1-name').textContent = gameState.team1;
    document.getElementById('final-team2-name').textContent = gameState.team2;
    document.getElementById('team1-correct-answers').textContent = gameState.team1CorrectAnswers || 0;
    document.getElementById('team2-correct-answers').textContent = gameState.team2CorrectAnswers || 0;
    
    // Animate score counting for both teams
    animateCounter('final-team1-points', gameState.team1Points, 1500);
    animateCounter('final-team2-points', gameState.team2Points, 1500);
    
    // Determine winner and highlight
    let winner = '';
    if (gameState.team1Points > gameState.team2Points) {
        winner = 'team1';
        document.getElementById('final-team1-container').classList.add('winner');
    } else if (gameState.team2Points > gameState.team1Points) {
        winner = 'team2';
        document.getElementById('final-team2-container').classList.add('winner');
    }
    
    // Show winner announcement after scores finish animating
    setTimeout(() => {
        showWinnerAnnouncement(winner);
    }, 2000);
}

// Show the winner announcement with confetti
function showWinnerAnnouncement(winner) {
    let winnerMessage = '';
    if (winner === 'team1') {
        winnerMessage = `<i class="fas fa-trophy"></i> ${gameState.team1} venceu!`;
    } else if (winner === 'team2') {
        winnerMessage = `<i class="fas fa-trophy"></i> ${gameState.team2} venceu!`;
    } else {
        winnerMessage = '<i class="fas fa-handshake"></i> Empate!';
    }
    
    document.getElementById('winner-announcement').innerHTML = winnerMessage;
    showSection('winner-announcement');
    
    // Trigger confetti explosion at the climactic moment
    createConfetti();
    
    // Show game summary after winner announcement
    setTimeout(() => {
        showGameSummary();
    }, 1500);
}

// Show the game summary with statistics
function showGameSummary() {
    // Populate game summary data
    const difficultyNames = {
        'easy': 'Fácil',
        'medium': 'Médio', 
        'hard': 'Difícil',
        'cult': 'Cult',
        'random': 'Aleatório',
        'escolhalivre': 'Escolha Livre'
    };
    
    document.getElementById('game-difficulty').textContent = difficultyNames[gameState.difficulty] || gameState.difficulty;
    
    // Handle time limit display
    const timeLimitStat = document.getElementById('time-limit-stat');
    if (gameState.timeLimit > 0) {
        const minutes = Math.floor(gameState.timeLimit / 60);
        const seconds = gameState.timeLimit % 60;
        const timeText = minutes > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')}` : `${seconds}s`;
        document.getElementById('game-time-limit').textContent = timeText;
        timeLimitStat.style.display = 'flex';
    } else {
        document.getElementById('game-time-limit').textContent = 'Sem limite';
        timeLimitStat.style.display = 'flex';
    }
    
    // Calculate total points
    const totalPoints = gameState.team1Points + gameState.team2Points;
    document.getElementById('total-points').textContent = totalPoints;
    
    showSection('game-summary');
    
    // Show result buttons last
    setTimeout(() => {
        showSection('result-buttons');
        
        // Save to history after everything is displayed
        gameState.saveToHistory();
        updateGameHistory();
    }, 1000);
}

// Animate a counter from 0 to target value
function animateCounter(elementId, targetValue, duration) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 60fps
    let currentValue = startValue;
    
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
        }
        element.textContent = Math.floor(currentValue);
    }, 16);
}

function newRound() {
    // Play round start sound
    if (window.soundManager) {
        window.soundManager.play('roundStart');
    }
    
    // Se estamos no modo escolha livre, mostra a tela de seleção de dificuldade
    if (gameState.difficulty === 'escolhalivre') {
        showDifficultySelection();
        return;
    }
    
    // Continua com a lógica normal da rodada
    startNewRoundWithCard();
}

function startNewRoundWithCard() {
    // Reset processing flags for the new round
    gameState.isProcessingAnswer = false;
    gameState.isRevealingClue = false;
    
    // Seleciona uma nova carta
    gameState.currentCard = gameState.getNewCard();
    gameState.revealedClues = 0;
    
    // Limpa o container de pistas
    const cluesContainer = document.getElementById('clues-container');
    cluesContainer.innerHTML = '';
    
    // Limpa o campo de resposta
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.value = '';
    }
    
    // Atualiza a interface do jogo
    updateGameUI();
    
    // Salva o estado do jogo
    gameState.save();
}

function revealClue() {
    // Prevent multiple rapid clicks
    if (gameState.isRevealingClue || !gameState.currentCard || gameState.revealedClues >= gameState.currentCard.clues.length) {
        return;
    }
    
    // Mark that we're revealing a clue
    gameState.isRevealingClue = true;
      // Play reveal clue sound
    if (window.soundManager) {
        window.soundManager.play('reveal');
    }
    
    // Revela a próxima pista
    const cluesContainer = document.getElementById('clues-container');
    const clue = document.createElement('div');
    clue.className = 'clue';
    clue.textContent = gameState.currentCard.clues[gameState.revealedClues];
    cluesContainer.appendChild(clue);
    
    // Inicia o timer na primeira pista revelada
    if (gameState.revealedClues === 0 && gameState.timeLimit > 0) {
        startTimer();
    }
    
    gameState.revealedClues++;
    
    // Atualiza a pontuação atual (considerando o multiplicador se estiver no modo escolha livre)
    let currentPoints = Math.max(11 - gameState.revealedClues, 1);
    if (gameState.difficulty === 'escolhalivre') {
        currentPoints = currentPoints * gameState.currentRoundMultiplier;
    }
    document.getElementById('current-points').textContent = currentPoints;
    
    // Se todas as pistas foram reveladas, desabilita o botão
    if (gameState.revealedClues >= gameState.currentCard.clues.length) {
        document.getElementById('reveal-clue-btn').disabled = true;
    }
    
    // Reset the revealing flag after a brief delay to prevent rapid clicking
    setTimeout(() => {
        gameState.isRevealingClue = false;
    }, 500); // 500ms delay between clue reveals
}

function submitAnswer() {
    // Prevent multiple rapid submissions
    if (gameState.isProcessingAnswer) {
        return;
    }
    
    const answerInput = document.getElementById('answer-input');
    const answer = answerInput.value.trim();
    
    if (!answer) {
        showNotification('Digite uma resposta!', 'error');
        return;
    }
      // Mark that we're processing an answer
    gameState.isProcessingAnswer = true;
    if (gameState.checkAnswer(answer)) {
        // Resposta correta
        // Play success sound
        if (window.soundManager) {
            window.soundManager.play('success');
        }
        
        let basePoints = Math.max(11 - gameState.revealedClues, 1);
        
        // No modo escolha livre, aplica o multiplicador baseado na dificuldade escolhida
        if (gameState.difficulty === 'escolhalivre') {
            basePoints = basePoints * gameState.currentRoundMultiplier;
        }
        
        const points = basePoints;
          // Adiciona os pontos à equipe ativa
        if (gameState.activeTeam === 1) {
            gameState.team1Points += points;
            gameState.team1CorrectAnswers++;
            document.getElementById('team1-points').textContent = gameState.team1Points;
        } else {
            gameState.team2Points += points;
            gameState.team2CorrectAnswers++;
            document.getElementById('team2-points').textContent = gameState.team2Points;
        }
          // Notificação customizada para pontos que dura mais tempo
        const cardContainer = document.querySelector('.card-container');
        if (!cardContainer) return; // Se não estiver na tela do jogo
        
        // Remove notificações anteriores
        const oldNotifications = cardContainer.querySelectorAll('.card-notification');
        oldNotifications.forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = 'card-notification success';
          notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="notification-message">Resposta correta! "${gameState.currentCard.answer}" +${points} pontos</div>
        `;cardContainer.appendChild(notification);
        createConfetti();
          // Avança para a próxima rodada ou finaliza o jogo após exatamente 5 segundos
        // e remove a notificação logo antes de avançar
        setTimeout(() => {
            notification.style.opacity = '0';
            // Esconde a tela do jogo antes de remover a notificação
            document.getElementById('game-screen').classList.add('hidden');
            setTimeout(() => {
                notification.remove();
                // Certifique-se de que o game-screen permaneça oculto
                document.getElementById('game-screen').classList.add('hidden');
                advanceGame();
            }, 300);
        }, 4700);    } else {
        // Resposta incorreta
        // Play error sound
        if (window.soundManager) {
            window.soundManager.play('error');
        }
        
        showNotification('Resposta incorreta!', 'error', true);
        answerInput.value = '';
        // Reset the processing flag to allow new attempts
        gameState.isProcessingAnswer = false;
    }
}

function showAnswer() {
    // Prevent multiple rapid clicks
    if (gameState.isProcessingAnswer) {
        return;
    }
    
    // Mark that we're processing to prevent multiple clicks
    gameState.isProcessingAnswer = true;
    
    const answer = gameState.currentCard ? gameState.currentCard.answer : '';
    
    // Notificação customizada para a resposta que dura mais tempo
    const cardContainer = document.querySelector('.card-container');
    if (!cardContainer) {
        // Reset flag if we can't show notification
        gameState.isProcessingAnswer = false;
        return;
    }
    
    // Remove notificações anteriores
    const oldNotifications = cardContainer.querySelectorAll('.card-notification');
    oldNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = 'card-notification info';
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-info-circle"></i>
        </div>
        <div class="notification-message">A resposta correta é: ${answer}</div>
    `;      cardContainer.appendChild(notification);
      // Avança para a próxima rodada ou finaliza o jogo após exatamente 5 segundos
    // e remove a notificação logo antes de avançar
    setTimeout(() => {
        notification.style.opacity = '0';
        // Esconde a tela do jogo antes de remover a notificação
        document.getElementById('game-screen').classList.add('hidden');
        setTimeout(() => {
            notification.remove();
            // Certifique-se de que o game-screen permaneça oculto
            document.getElementById('game-screen').classList.add('hidden');
            advanceGame();
        }, 300);
    }, 4700); // 4.7s + 0.3s = 5s total
}

function advanceGame() {
    // Reset processing flags for the next round
    gameState.isProcessingAnswer = false;
    gameState.isRevealingClue = false;
    
    // Certifique-se de que a tela do jogo esteja oculta
    document.getElementById('game-screen').classList.add('hidden');
    
    // Alterna a equipe ativa
    gameState.activeTeam = gameState.activeTeam === 1 ? 2 : 1;
    
    // Avança para a próxima rodada
    gameState.currentRound++;
    
    // Verifica se o jogo acabou
    if (gameState.currentRound > gameState.totalRounds) {
        showResultScreen();
    } else {
        showTeamTransition();
    }
}

function showTeamTransition() {
    // Play transition sound
    if (window.soundManager) {
        window.soundManager.play('transition');
    }
    
    // Certifique-se de que a tela do jogo esteja oculta
    document.getElementById('game-screen').classList.add('hidden');
    
    // Mostra a tela de transição
    const transitionScreen = document.getElementById('team-transition-screen');
    transitionScreen.classList.remove('hidden');
    
    // Define o nome da equipe ativa
    const teamName = gameState.activeTeam === 1 ? gameState.team1 : gameState.team2;
    document.getElementById('transition-team-name').textContent = teamName;
    
    // Destaca a cor da equipe na transição
    document.getElementById('transition-team-name').style.color = 
        gameState.activeTeam === 1 ? 'var(--team1-color)' : 'var(--team2-color)';
    document.getElementById('transition-countdown').style.color = 
        gameState.activeTeam === 1 ? 'var(--team1-color)' : 'var(--team2-color)';
    document.getElementById('transition-countdown').style.background = 
        gameState.activeTeam === 1 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(58, 134, 255, 0.1)';
    
    // Inicia a contagem regressiva
    let countdown = 5;
    document.getElementById('transition-countdown').textContent = countdown;
    
    const countInterval = setInterval(() => {
        countdown--;
        document.getElementById('transition-countdown').textContent = countdown;        if (countdown <= 0) {
            clearInterval(countInterval);
            
            // Esconde a tela de transição
            transitionScreen.classList.add('hidden');
            
            // Pequeno atraso antes de mostrar a tela do jogo para garantir que não haja sobreposição
            setTimeout(() => {
                // Certifique-se de que o game-screen esteja configurado corretamente antes de mostrá-lo
                // Atualiza a interface (destaca a equipe ativa)
                if (gameState.activeTeam === 1) {
                    document.getElementById('team1-display').classList.add('active-team');
                    document.getElementById('team2-display').classList.remove('active-team');
                } else {
                    document.getElementById('team1-display').classList.remove('active-team');
                    document.getElementById('team2-display').classList.add('active-team');
                }
                
                // Agora mostra a tela do jogo
                document.getElementById('game-screen').classList.remove('hidden');
                
                // Inicia a nova rodada
                newRound();
                
                // Reset o timer para a próxima rodada, mas não inicie até a primeira pista ser revelada
                if (gameState.timeLimit > 0) {
                    gameState.timeRemaining = gameState.timeLimit;
                    updateTimerDisplay();
                }
            }, 100);
        }
    }, 1000);
}

function showDifficultySelection() {
    // Esconde outras telas
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('team-transition-screen').classList.add('hidden');
    
    // Mostra a tela de seleção de dificuldade
    const difficultyScreen = document.getElementById('difficulty-selection-screen');
    difficultyScreen.classList.remove('hidden');
    
    // Define o nome da equipe ativa
    const teamName = gameState.activeTeam === 1 ? gameState.team1 : gameState.team2;
    document.getElementById('difficulty-selection-team-name').textContent = teamName;
    
    // Destaca a cor da equipe na seleção
    document.getElementById('difficulty-selection-team-name').style.color = 
        gameState.activeTeam === 1 ? 'var(--team1-color)' : 'var(--team2-color)';
}

function setupNewGame() {
    // Mantém os nomes das equipes e a dificuldade, mas reseta o resto
    const team1Name = gameState.team1;
    const team2Name = gameState.team2;
    const difficulty = gameState.difficulty;
    const timeLimit = gameState.timeLimit;
    const totalRounds = gameState.totalRounds;
    
    gameState = new GameState();
    gameState.team1 = team1Name;
    gameState.team2 = team2Name;
    gameState.difficulty = difficulty;
    gameState.timeLimit = timeLimit;
    gameState.totalRounds = totalRounds;
    
    // Carrega o histórico de cartas usadas
    const savedUsedCards = localStorage.getItem('perfilUsedCards');
    if (savedUsedCards) {
        gameState.usedCards = JSON.parse(savedUsedCards);
    }
    
    showGameScreen();
    newRound();
}

function updateGameUI() {
    // Atualiza o número da rodada
    document.getElementById('current-round').textContent = gameState.currentRound;
    document.getElementById('total-rounds-display').textContent = gameState.totalRounds;
    
    // Atualiza os pontos das equipes
    document.getElementById('team1-name').textContent = gameState.team1;
    document.getElementById('team2-name').textContent = gameState.team2;
    document.getElementById('team1-points').textContent = gameState.team1Points;
    document.getElementById('team2-points').textContent = gameState.team2Points;
    
    // Destaca a equipe ativa
    if (gameState.activeTeam === 1) {
        document.getElementById('team1-display').classList.add('active-team');
        document.getElementById('team2-display').classList.remove('active-team');
    } else {
        document.getElementById('team1-display').classList.remove('active-team');
        document.getElementById('team2-display').classList.add('active-team');
    }
    
    // Configura o timer
    const timerDisplay = document.getElementById('timer-display');
    if (gameState.timeLimit > 0) {
        timerDisplay.classList.remove('hidden');
        updateTimerDisplay();
    } else {
        timerDisplay.classList.add('hidden');
    }
    
    // Atualiza o tipo de carta e ícone
    if (gameState.currentCard) {
        const cardTypeElement = document.getElementById('card-type-text');
        const cardIconElement = document.getElementById('card-icon');
        const cardTypeContainer = document.querySelector('.card-type');
        
        cardTypeElement.textContent = gameState.currentCard.type;
        cardIconElement.className = gameState.currentCard.icon;
          // Adiciona a animação de piscar para chamar atenção para a categoria
        cardTypeContainer.style.animation = 'blinkCategory 0.5s ease-in-out 3';
        
        // Remove a animação após ela terminar e então faz o botão Revelar Pista piscar
        setTimeout(() => {
            cardTypeContainer.style.animation = '';
            
            // Faz o botão "Revelar Pista" piscar para guiar o jogador
            const revealButton = document.getElementById('reveal-clue-btn');
            revealButton.style.animation = 'blinkRevealButton 0.6s ease-in-out 3';
            
            // Remove a animação do botão após ela terminar
            setTimeout(() => {
                revealButton.style.animation = '';
            }, 1800); // 0.6s * 3 = 1.8s
        }, 1500); // 0.5s * 3 = 1.5s
        
        // Recria as pistas já reveladas
        const cluesContainer = document.getElementById('clues-container');
        cluesContainer.innerHTML = '';
        
        for (let i = 0; i < gameState.revealedClues; i++) {
            const clue = document.createElement('div');
            clue.className = 'clue';
            clue.textContent = gameState.currentCard.clues[i];
            cluesContainer.appendChild(clue);
        }
          // Atualiza a pontuação atual (considerando o multiplicador se estiver no modo escolha livre)
        let currentPoints = Math.max(11 - gameState.revealedClues, 1);
        if (gameState.difficulty === 'escolhalivre') {
            currentPoints = currentPoints * gameState.currentRoundMultiplier;
        }
        document.getElementById('current-points').textContent = currentPoints;
    }
}

function updateGameHistory() {
    const historyContainer = document.getElementById('game-history');
    historyContainer.innerHTML = '';
    
    const history = gameState.loadHistory();
    
    if (history.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'history-item';
        emptyMessage.textContent = 'Nenhum jogo salvo no histórico.';
        historyContainer.appendChild(emptyMessage);
        return;
    }
    
    history.forEach(game => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <span>${game.date}</span> - 
            <strong>${game.team1}</strong>: ${game.team1Points} vs 
            <strong>${game.team2}</strong>: ${game.team2Points} - 
            Vencedor: <strong>${game.winner}</strong>
        `;
        historyContainer.appendChild(historyItem);
    });
}

// Conta o total de cartas e as cartas restantes
GameState.prototype.getCardsCount = function() {
    const totalEasy = databaseEasy.length;
    const totalMedium = databaseMedium.length;
    const totalHard = databaseHard.length;
    const totalCult = databaseCult.length;
    
    const total = totalEasy + totalMedium + totalHard + totalCult;
    const used = this.usedCards.length;
    const remaining = total - used;
    
    // Calcula o percentual do jogo que ainda pode ser jogado
    // Assumimos que um jogo completo precisa de 10 cartas (totalRounds)
    const minCardsNeeded = this.totalRounds;
    const cardsAvailabilityPercent = Math.min(100, Math.max(0, (remaining / minCardsNeeded) * 100));
    
    return {
        total,
        used,
        remaining,
        availabilityPercent: cardsAvailabilityPercent,
        categories: {
            easy: totalEasy,
            medium: totalMedium,
            hard: totalHard,
            cult: totalCult
        }
    };
};

function updateCardStats() {
    const stats = gameState.getCardsCount();
    const progressBar = document.querySelector('#reset-cards-btn .progress-bar');
    
    // Se temos menos de 100% das cartas necessárias para um jogo completo, 
    // mostramos a barra de progresso vermelha proporcionalmente
    const inversePercent = 100 - stats.availabilityPercent;
    progressBar.style.width = `${inversePercent}%`;
    
    // Atualiza o tooltip com informação detalhada
    const resetButton = document.getElementById('reset-cards-btn');
    resetButton.title = `Cartas usadas: ${stats.used}, Cartas restantes: ${stats.remaining}, Total: ${stats.total}. 
    ${stats.remaining < gameState.totalRounds ? 'Atenção: Não há cartas suficientes para um jogo completo!' : ''}`;
    
    // Notifica o usuário se as cartas estão acabando (menos de 15 cartas disponíveis)
    if (stats.remaining <= 15 && stats.remaining > 0 && document.getElementById('start-screen').classList.contains('hidden') === false) {
        showNotification(`Atenção: Restam apenas ${stats.remaining} cartas! Considere limpar o histórico.`, 'error');
    }
}

function getCardDifficulty(card, selectedGameDifficulty) {
    if (selectedGameDifficulty !== 'random' && selectedGameDifficulty !== 'escolhalivre') {
        return selectedGameDifficulty;
    }
    
    if (selectedGameDifficulty === 'escolhalivre') {
        // Para o modo escolha livre, retorna a dificuldade específica da rodada
        return gameState.currentRoundDifficulty || 'medium';
    }
    
    // If game difficulty is random, we need to check which database the card belongs to.
    if (databaseEasy.some(dbCard => dbCard.answer === card.answer)) return 'easy';
    if (databaseMedium.some(dbCard => dbCard.answer === card.answer)) return 'medium';
    if (databaseHard.some(dbCard => dbCard.answer === card.answer)) return 'hard';
    if (databaseCult.some(dbCard => dbCard.answer === card.answer)) return 'cult';
    return 'unknown'; 
}

function debugGame() {
    console.log("--- DEBUG GAME ---");

    const team1Name = document.getElementById('team1').value.trim() || 'Equipe 1';
    const team2Name = document.getElementById('team2').value.trim() || 'Equipe 2';
    const selectedRounds = gameState.totalRounds;
    const gameDifficultyForSimulation = gameState.difficulty; // Use the selected difficulty for this simulation session

    console.log(`Equipe 1: ${team1Name}`);
    console.log(`Equipe 2: ${team2Name}`);
    console.log(`Total de Rodadas: ${selectedRounds}`);
    console.log(`Dificuldade do Jogo (para esta simulação): ${gameDifficultyForSimulation}`);
    console.log("--------------------");

    const originalUsedCards = [...gameState.usedCards];
    const originalGameDifficultySetting = gameState.difficulty; // Save the actual game's difficulty setting

    let team1DifficultyCounts = { easy: 0, medium: 0, hard: 0, cult: 0, unknown: 0 };
    let team2DifficultyCounts = { easy: 0, medium: 0, hard: 0, cult: 0, unknown: 0 };

    // Helper function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Helper function to get shuffled cards from a database, avoiding already used ones
    function getShuffledCardsFromDb(db, count, initialUsed, difficultyName) {
        const availableCards = db.filter(card => !initialUsed.includes(card.answer));
        shuffleArray(availableCards);
        return availableCards.slice(0, count).map(card => ({ ...card, _sourceDifficulty: difficultyName }));
    }


    if (gameDifficultyForSimulation === 'random') {
        console.log("\\n--- Simulação Modo Random com Distribuição Balanceada ---");

        const difficultySettings = [
            { name: 'easy', percent: 0.20, db: databaseEasy, count: 0, float: 0, frac: 0 },
            { name: 'medium', percent: 0.50, db: databaseMedium, count: 0, float: 0, frac: 0 },
            { name: 'hard', percent: 0.25, db: databaseHard, count: 0, float: 0, frac: 0 },
            { name: 'cult', percent: 0.05, db: databaseCult, count: 0, float: 0, frac: 0 }
        ];

        let totalFlooredCount = 0;
        difficultySettings.forEach(d => {
            d.float = selectedRounds * d.percent;
            d.count = Math.floor(d.float);
            d.frac = d.float - d.count;
            totalFlooredCount += d.count;
        });

        let remainderToDistribute = selectedRounds - totalFlooredCount;
        
        // Sort by fractional part descending, then by original percent descending for tie-breaking
        difficultySettings.sort((a, b) => {
            if (b.frac !== a.frac) return b.frac - a.frac;
            return b.percent - a.percent;
        });

        for (let i = 0; i < remainderToDistribute; i++) {
            difficultySettings[i % difficultySettings.length].count++;
        }
        
        // Final target counts
        const targetCounts = {};
        difficultySettings.forEach(d => targetCounts[d.name] = d.count);

        console.log(`Distribuição Alvo para ${selectedRounds} rodadas:`);
        console.log(`  Fácil: ${targetCounts.easy}, Médio: ${targetCounts.medium}, Difícil: ${targetCounts.hard}, Cult: ${targetCounts.cult}`);
        console.log("--------------------");

        let simulatedDeck = [];
        difficultySettings.forEach(d => {
            const cardsOfType = getShuffledCardsFromDb(d.db, targetCounts[d.name], originalUsedCards, d.name);
            if (cardsOfType.length < targetCounts[d.name]) {
                console.warn(`Atenção: Não há cartas '${d.name}' suficientes. Encontradas: ${cardsOfType.length}, Necessárias: ${targetCounts[d.name]}`);
            }
            simulatedDeck.push(...cardsOfType);
        });

        shuffleArray(simulatedDeck);
        
        if (simulatedDeck.length < selectedRounds) {
            console.warn(`Atenção: O baralho simulado final tem ${simulatedDeck.length} cartas, menos que as ${selectedRounds} rodadas selecionadas devido à falta de cartas únicas disponíveis.`);
        }

        console.log(`\\n--- Cartas para ${team1Name} (Modo Random Simulado) ---`);
        for (let r = 0; r < Math.ceil(selectedRounds / 2); r++) {
            const cardIndex = r * 2;
            if (cardIndex < simulatedDeck.length) {
                const card = simulatedDeck[cardIndex];
                // Use _sourceDifficulty if available, otherwise fallback to getCardDifficulty
                const actualDifficulty = card._sourceDifficulty || getCardDifficulty(card, 'random');
                if (team1DifficultyCounts.hasOwnProperty(actualDifficulty)) {
                    team1DifficultyCounts[actualDifficulty]++;
                } else {
                    team1DifficultyCounts.unknown++;
                }
                console.log(`Rodada ${r * 2 + 1}: "${card.answer}" (Dificuldade Real: ${actualDifficulty})`);
            } else {
                console.log(`Rodada ${r * 2 + 1}: Não há mais cartas no baralho simulado.`);
                break;
            }
        }

        console.log(`\\n--- Cartas para ${team2Name} (Modo Random Simulado) ---`);
        for (let r = 0; r < Math.floor(selectedRounds / 2); r++) {
            const cardIndex = r * 2 + 1;
            if (cardIndex < simulatedDeck.length) {
                const card = simulatedDeck[cardIndex];
                const actualDifficulty = card._sourceDifficulty || getCardDifficulty(card, 'random');
                if (team2DifficultyCounts.hasOwnProperty(actualDifficulty)) {
                    team2DifficultyCounts[actualDifficulty]++;
                } else {
                    team2DifficultyCounts.unknown++;
                }
                console.log(`Rodada ${r * 2 + 2}: "${card.answer}" (Dificuldade Real: ${actualDifficulty})`);
            } else {
                console.log(`Rodada ${r * 2 + 2}: Não há mais cartas no baralho simulado.`);
                break;
            }
        }

    } else { // Logic for non-random (specific) difficulties
        console.log(`\\n--- Simulação Modo ${gameDifficultyForSimulation} ---`);
        // Temporarily set gameState for simulation
        gameState.difficulty = gameDifficultyForSimulation;

        // Simula o jogo para a Equipe 1
        console.log(`\\n--- Cartas para ${team1Name} ---`);
        gameState.usedCards = [...originalUsedCards]; 
        
        for (let i = 0; i < Math.ceil(selectedRounds / 2); i++) {
            const card = gameState.getNewCard(); 
            if (card) {
                const actualDifficulty = getCardDifficulty(card, gameDifficultyForSimulation);
                if (team1DifficultyCounts.hasOwnProperty(actualDifficulty)) {
                    team1DifficultyCounts[actualDifficulty]++;
                } else {
                    team1DifficultyCounts.unknown++;
                }
                console.log(`Rodada ${i * 2 + 1}: "${card.answer}" (Dificuldade: ${actualDifficulty})`);
            } else {
                console.log(`Rodada ${i * 2 + 1}: Não há mais cartas disponíveis.`);
                break;
            }
        }

        // Simula o jogo para a Equipe 2
        console.log(`\\n--- Cartas para ${team2Name} ---`);
        // Setup usedCards for Team 2: must exclude cards Team 1 would have drawn in this simulation
        let tempUsedCardsForTeam2Sim = [...originalUsedCards];
        
        // Simulate Team 1's draws again just to populate tempUsedCardsForTeam2Sim accurately
        let tempSimGameState = new GameState(); // Use a throwaway GameState
        tempSimGameState.usedCards = [...originalUsedCards];
        tempSimGameState.difficulty = gameDifficultyForSimulation;

        for (let i = 0; i < Math.ceil(selectedRounds / 2); i++) {
            const card = tempSimGameState.getNewCard();
            if (card) {
                if (!tempUsedCardsForTeam2Sim.includes(card.answer)) { // Should always be true if getNewCard works
                     tempUsedCardsForTeam2Sim.push(card.answer); // This is redundant if getNewCard updates its own usedCards
                }
            } else { break; }
        }
        // The critical part is that tempSimGameState.usedCards now contains what T1 would have used.
        gameState.usedCards = [...tempSimGameState.usedCards]; // Use this set for T2's simulation
        
        for (let i = 0; i < Math.floor(selectedRounds / 2); i++) {
            const card = gameState.getNewCard();
            if (card) {
                const actualDifficulty = getCardDifficulty(card, gameDifficultyForSimulation);
                 if (team2DifficultyCounts.hasOwnProperty(actualDifficulty)) {
                    team2DifficultyCounts[actualDifficulty]++;
                } else {
                    team2DifficultyCounts.unknown++;
                }
                console.log(`Rodada ${i * 2 + 2}: "${card.answer}" (Dificuldade: ${actualDifficulty})`);
            } else {
                console.log(`Rodada ${i * 2 + 2}: Não há mais cartas disponíveis.`);
                break;
            }
        }
    }

    // Restore original gameState properties
    gameState.usedCards = originalUsedCards;
    gameState.difficulty = originalGameDifficultySetting; // Restore the actual game's difficulty

    console.log("\\n--- Resumo de Dificuldade por Equipe (Simulado) ---");
    console.log(`${team1Name}:`);
    console.log(`  Fácil: ${team1DifficultyCounts.easy}, Médio: ${team1DifficultyCounts.medium}, Difícil: ${team1DifficultyCounts.hard}, Cult: ${team1DifficultyCounts.cult}${team1DifficultyCounts.unknown > 0 ? ', Desconhecido: ' + team1DifficultyCounts.unknown : ''}`);
    
    console.log(`\\n${team2Name}:`);
    console.log(`  Fácil: ${team2DifficultyCounts.easy}, Médio: ${team2DifficultyCounts.medium}, Difícil: ${team2DifficultyCounts.hard}, Cult: ${team2DifficultyCounts.cult}${team2DifficultyCounts.unknown > 0 ? ', Desconhecido: ' + team2DifficultyCounts.unknown : ''}`);

    console.log("--- FIM DEBUG GAME ---");
}

// Funções de UI (mostrar/esconder telas, atualizar placar, etc.)
