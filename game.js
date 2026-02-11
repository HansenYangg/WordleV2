// Word list for the game
const WORD_LIST = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
    'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
    'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AVOID', 'AWAKE',
    'AWARD', 'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING',
    'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLIND', 'BLOCK', 'BLOOD',
    'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BRAVE', 'BREAD', 'BREAK', 'BREED',
    'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUYER', 'CABLE', 'CALIF', 'CARRY',
    'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK',
    'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR',
    'CLICK', 'CLOCK', 'CLOSE', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT',
    'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE', 'CYCLE',
    'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING', 'DOUBT',
    'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE',
    'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY',
    'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH',
    'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED',
    'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND',
    'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN',
    'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GREAT', 'GREEN',
    'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART',
    'HEAVY', 'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX',
    'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL',
    'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL',
    'LEMON', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE',
    'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH',
    'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL',
    'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVIE', 'MUSIC', 'NEEDS',
    'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN',
    'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE',
    'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE',
    'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT',
    'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO',
    'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY', 'REFER', 'RIGHT', 'RIVAL', 'RIVER',
    'ROBIN', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE',
    'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET',
    'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT',
    'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE',
    'SMITH', 'SMOKE', 'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK',
    'SPEED', 'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND',
    'START', 'STATE', 'STEAM', 'STEEL', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE',
    'STORM', 'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER',
    'SWEET', 'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEETH', 'TERRY', 'TEXAS', 'THANK',
    'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE',
    'THREE', 'THREW', 'THROW', 'TIGER', 'TIGHT', 'TIMES', 'TIRED', 'TITLE', 'TODAY', 'TOPIC',
    'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TRAIT', 'TREAT', 'TREND',
    'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TROOP', 'TRUCK', 'TRULY', 'TRUNK', 'TRUST',
    'TRUTH', 'TWICE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN',
    'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE',
    'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE',
    'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WRITE',
    'WRONG', 'WROTE', 'YIELD', 'YOUNG', 'YOUTH'
];

// Game State
let targetWord = '';
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let timer = 60;
let timerInterval = null;
let score = 0;
let combo = 1;
let streak = parseInt(localStorage.getItem('wordleStreak')) || 0;
let timeBoostCount = 2;
let revealLetterCount = 1;
let startTime = null;
let correctLettersInRow = 0;

// DOM Elements
const gameBoard = document.getElementById('gameBoard');
const keyboard = document.getElementById('keyboard');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const comboDisplay = document.getElementById('combo');
const streakDisplay = document.getElementById('streak');
const messageContainer = document.getElementById('messageContainer');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeBtn');
const newGameBtn = document.getElementById('newGameBtn');
const howToPlayBtn = document.getElementById('howToPlayBtn');
const timeBoostBtn = document.getElementById('timeBoost');
const revealLetterBtn = document.getElementById('revealLetter');
const timeBoostCountDisplay = document.getElementById('timeBoostCount');
const revealLetterCountDisplay = document.getElementById('revealLetterCount');
const particlesContainer = document.getElementById('particles');

// Keyboard Layout
const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
];

// Initialize Game
function init() {
    createBoard();
    createKeyboard();
    newGame();
    updatePowerUpDisplay();
    createParticles();

    // Event Listeners
    document.addEventListener('keydown', handleKeyPress);
    newGameBtn.addEventListener('click', newGame);
    howToPlayBtn.addEventListener('click', showInstructions);
    closeBtn.addEventListener('click', closeModal);
    timeBoostBtn.addEventListener('click', useTimeBoost);
    revealLetterBtn.addEventListener('click', useRevealLetter);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Create Game Board
function createBoard() {
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }
}

// Create Keyboard
function createKeyboard() {
    keys.forEach(row => {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keyboard-row';
        row.forEach(key => {
            const keyBtn = document.createElement('button');
            keyBtn.className = 'key';
            keyBtn.textContent = key === 'BACK' ? '⌫' : key;
            keyBtn.dataset.key = key;
            if (key === 'ENTER' || key === 'BACK') {
                keyBtn.classList.add('wide');
            }
            keyBtn.addEventListener('click', () => handleKey(key));
            keyboardRow.appendChild(keyBtn);
        });
        keyboard.appendChild(keyboardRow);
    });
}

// New Game
function newGame() {
    targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    console.log('Target word:', targetWord); // For testing

    currentRow = 0;
    currentTile = 0;
    gameOver = false;
    timer = 60;
    score = 0;
    combo = 1;
    correctLettersInRow = 0;
    startTime = Date.now();

    // Reset board
    document.querySelectorAll('.tile').forEach(tile => {
        tile.textContent = '';
        tile.className = 'tile';
    });

    // Reset keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });

    // Start timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 100);

    updateDisplay();
}

// Update Timer
function updateTimer() {
    timer -= 0.1;
    timerDisplay.textContent = timer.toFixed(1);

    // Color coding
    timerDisplay.classList.remove('warning', 'danger');
    if (timer <= 10) {
        timerDisplay.classList.add('danger');
    } else if (timer <= 20) {
        timerDisplay.classList.add('warning');
    }

    if (timer <= 0) {
        timer = 0;
        timerDisplay.textContent = '0.0';
        endGame(false);
    }
}

// Handle Key Press
function handleKeyPress(e) {
    if (gameOver) return;

    const key = e.key.toUpperCase();
    if (key === 'ENTER') {
        handleKey('ENTER');
    } else if (key === 'BACKSPACE') {
        handleKey('BACK');
    } else if (/^[A-Z]$/.test(key)) {
        handleKey(key);
    }
}

// Handle Key
function handleKey(key) {
    if (gameOver) return;

    if (key === 'ENTER') {
        submitGuess();
    } else if (key === 'BACK') {
        deleteLetter();
    } else {
        addLetter(key);
    }
}

// Add Letter
function addLetter(letter) {
    if (currentTile < 5) {
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = letter;
        tile.classList.add('filled');
        currentTile++;
    }
}

// Delete Letter
function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
    }
}

// Submit Guess
function submitGuess() {
    if (currentTile !== 5) {
        showMessage('Not enough letters!', true);
        return;
    }

    const guess = getCurrentGuess();

    if (!WORD_LIST.includes(guess)) {
        showMessage('Not in word list!', true);
        shakeTiles();
        return;
    }

    checkGuess(guess);
}

// Get Current Guess
function getCurrentGuess() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        guess += tile.textContent;
    }
    return guess;
}

// Check Guess
function checkGuess(guess) {
    const result = [];
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');

    // First pass: mark correct letters
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
            correctLettersInRow++;
        }
    }

    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
        if (result[i]) continue;

        const index = targetLetters.indexOf(guessLetters[i]);
        if (index !== -1) {
            result[i] = 'present';
            targetLetters[index] = null;
        } else {
            result[i] = 'absent';
            correctLettersInRow = 0; // Reset combo if wrong letter
        }
    }

    // Update combo
    if (correctLettersInRow >= 3) {
        combo = Math.min(5, 1 + Math.floor(correctLettersInRow / 3));
    } else {
        combo = 1;
    }

    // Animate tiles
    revealTiles(result);

    // Update keyboard
    updateKeyboard(guess, result);

    // Check win/continue
    if (guess === targetWord) {
        setTimeout(() => endGame(true), 1500);
    } else {
        currentRow++;
        currentTile = 0;

        if (currentRow >= 6) {
            setTimeout(() => endGame(false), 1500);
        }
    }

    updateDisplay();
}

// Reveal Tiles
function revealTiles(result) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const tile = document.getElementById(`tile-${currentRow}-${i}`);
            tile.classList.add(result[i]);
        }, i * 300);
    }
}

// Update Keyboard
function updateKeyboard(guess, result) {
    for (let i = 0; i < 5; i++) {
        const letter = guess[i];
        const key = document.querySelector(`[data-key="${letter}"]`);

        if (result[i] === 'correct') {
            key.classList.remove('present', 'absent');
            key.classList.add('correct');
        } else if (result[i] === 'present' && !key.classList.contains('correct')) {
            key.classList.remove('absent');
            key.classList.add('present');
        } else if (result[i] === 'absent' && !key.classList.contains('correct') && !key.classList.contains('present')) {
            key.classList.add('absent');
        }
    }
}

// Shake Tiles
function shakeTiles() {
    const tiles = document.querySelectorAll(`#tile-${currentRow}-0, #tile-${currentRow}-1, #tile-${currentRow}-2, #tile-${currentRow}-3, #tile-${currentRow}-4`);
    tiles.forEach(tile => {
        tile.style.animation = 'shake 0.5s';
        setTimeout(() => {
            tile.style.animation = '';
        }, 500);
    });
}

// Add shake animation to CSS (dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// End Game
function endGame(won) {
    gameOver = true;
    clearInterval(timerInterval);

    if (won) {
        const timeBonus = Math.floor(timer / 10) + 1;
        const baseScore = 100;
        score = baseScore * combo * timeBonus;
        streak++;
        localStorage.setItem('wordleStreak', streak);

        showMessage(`🎉 VICTORY! +${score} points!`, false);
        showWinModal();
        createConfetti();
    } else {
        streak = 0;
        localStorage.setItem('wordleStreak', '0');
        showMessage(`Game Over! The word was ${targetWord}`, true);
        showLoseModal();
    }

    updateDisplay();
}

// Show Message
function showMessage(text, isError = false) {
    const message = document.createElement('div');
    message.className = isError ? 'message error' : 'message';
    message.textContent = text;
    messageContainer.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Update Display
function updateDisplay() {
    scoreDisplay.textContent = score;
    comboDisplay.textContent = `x${combo}`;
    streakDisplay.textContent = streak;
}

// Power-Ups
function useTimeBoost() {
    if (timeBoostCount > 0 && !gameOver) {
        timeBoostCount--;
        timer += 10;
        updatePowerUpDisplay();
        showMessage('⏱️ +10 seconds!', false);
        createPowerUpEffect('cyan');
    }
}

function useRevealLetter() {
    if (revealLetterCount > 0 && !gameOver && currentTile < 5) {
        revealLetterCount--;
        const correctLetter = targetWord[currentTile];
        addLetter(correctLetter);
        updatePowerUpDisplay();
        showMessage(`💡 Revealed: ${correctLetter}`, false);
        createPowerUpEffect('magenta');
    }
}

function updatePowerUpDisplay() {
    timeBoostCountDisplay.textContent = timeBoostCount;
    revealLetterCountDisplay.textContent = revealLetterCount;
    timeBoostBtn.disabled = timeBoostCount === 0;
    revealLetterBtn.disabled = revealLetterCount === 0;
}

// Create Particles
function createParticles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
            particlesContainer.appendChild(particle);
        }, i * 200);
    }
}

// Create Confetti
function createConfetti() {
    const colors = ['#00f0ff', '#ff00ff', '#9d00ff', '#39ff14', '#ff6600'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s ease-out forwards';
            confetti.style.boxShadow = `0 0 10px ${confetti.style.backgroundColor}`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Create Power-Up Effect
function createPowerUpEffect(color) {
    const colorMap = {
        'cyan': '#00f0ff',
        'magenta': '#ff00ff'
    };

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = '50%';
        particle.style.top = '30%';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.backgroundColor = colorMap[color];
        particle.style.borderRadius = '50%';
        particle.style.zIndex = '1000';
        particle.style.boxShadow = `0 0 10px ${colorMap[color]}`;

        const angle = (Math.PI * 2 * i) / 10;
        const distance = 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.animation = `powerUpBurst 0.6s ease-out forwards`;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 600);
    }
}

const powerUpStyle = document.createElement('style');
powerUpStyle.textContent = `
    @keyframes powerUpBurst {
        to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
`;
document.head.appendChild(powerUpStyle);

// Modal Functions
function showInstructions() {
    modalTitle.textContent = 'How to Play';
    modalBody.innerHTML = `
        <div class="instructions">
            <h3>🎯 Objective</h3>
            <p>Guess the 5-letter word before time runs out!</p>

            <h3>⚡ The Twist: Speed Rush Mode</h3>
            <ul>
                <li><strong>Timer:</strong> You have 60 seconds to guess the word</li>
                <li><strong>Combo System:</strong> 3+ correct letters in a row increase your multiplier</li>
                <li><strong>Speed Bonus:</strong> Faster guesses = more points!</li>
                <li><strong>Streak:</strong> Win consecutive games to build your streak</li>
            </ul>

            <h3>🎨 Color Guide</h3>
            <div class="color-demo">
                <div class="demo-tile correct">L</div>
                <span>Correct position</span>
            </div>
            <div class="color-demo">
                <div class="demo-tile present">E</div>
                <span>Wrong position</span>
            </div>
            <div class="color-demo">
                <div class="demo-tile absent">X</div>
                <span>Not in word</span>
            </div>

            <h3>🚀 Power-Ups</h3>
            <ul>
                <li><strong>⏱️ Time Boost:</strong> Add 10 seconds to the timer (2 uses)</li>
                <li><strong>💡 Reveal Letter:</strong> Reveal a random correct letter (1 use)</li>
            </ul>

            <h3>💯 Scoring</h3>
            <p>Base score (100) × Combo multiplier × Time bonus = Total Score</p>
            <p>Build combos by getting correct letters in a row!</p>
        </div>
    `;
    modal.classList.add('active');
}

function showWinModal() {
    setTimeout(() => {
        modalTitle.textContent = '🎉 VICTORY!';
        modalBody.innerHTML = `
            <div class="instructions" style="text-align: center;">
                <h3 style="color: var(--neon-green); font-size: 2rem;">YOU WON!</h3>
                <p style="font-size: 1.5rem; margin: 20px 0;">The word was: <strong>${targetWord}</strong></p>
                <p style="font-size: 1.2rem;">Score: <strong style="color: var(--neon-cyan);">${score}</strong></p>
                <p style="font-size: 1.2rem;">Combo: <strong style="color: var(--neon-magenta);">x${combo}</strong></p>
                <p style="font-size: 1.2rem;">Streak: <strong style="color: var(--neon-green);">${streak}</strong></p>
                <p style="margin-top: 30px; font-size: 1rem;">Time remaining: <strong>${timer.toFixed(1)}s</strong></p>
            </div>
        `;
        modal.classList.add('active');
    }, 1500);
}

function showLoseModal() {
    setTimeout(() => {
        modalTitle.textContent = '💀 GAME OVER';
        modalBody.innerHTML = `
            <div class="instructions" style="text-align: center;">
                <h3 style="color: #ff0000; font-size: 2rem;">TIME'S UP!</h3>
                <p style="font-size: 1.5rem; margin: 20px 0;">The word was: <strong>${targetWord}</strong></p>
                <p style="font-size: 1.2rem; margin-top: 30px;">Better luck next time!</p>
                <p style="font-size: 1rem; color: var(--neon-purple);">Your streak was reset to 0</p>
            </div>
        `;
        modal.classList.add('active');
    }, 1500);
}

function closeModal() {
    modal.classList.remove('active');
}

// Initialize game when page loads
init();
