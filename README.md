# 🚀 Wordle Neon Rush

A futuristic, cyberpunk-themed Wordle clone with a **speed rush twist**! Race against the clock, build combos, and dominate the leaderboards in this neon-powered word puzzle experience.

![Wordle Neon Rush](https://img.shields.io/badge/Status-Ready%20to%20Play-00f0ff?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-ff00ff?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-9d00ff?style=for-the-badge)

## ✨ The Twist: Speed Rush Mode

Unlike traditional Wordle, **Wordle Neon Rush** adds these exciting features:

### ⏱️ **Timer System**
- **60 seconds** to guess the word!
- Time pressure adds intensity to every guess
- Speed bonus: Faster guesses = higher scores

### 🔥 **Combo Multiplier**
- Get **3+ correct letters in a row** to activate combo mode
- Multipliers up to **x5** for consecutive correct letters
- Strategic guessing rewards skill

### 🎯 **Power-Ups**
- **⏱️ Time Boost** (2 uses): Add 10 seconds to your timer
- **💡 Reveal Letter** (1 use): Reveal a correct letter position

### 📊 **Streak Tracking**
- Win consecutive games to build your streak
- Streaks save locally and persist across sessions
- Challenge yourself to beat your record!

### 🎨 **Futuristic Cyberpunk UI**
- Neon colors (cyan, magenta, purple, green)
- Glowing effects and smooth animations
- Particle effects and confetti celebrations
- Responsive design for all screen sizes

## 🎮 How to Play

1. **Guess the 5-letter word** in 6 attempts or less
2. **Type** your guess using your keyboard or click the on-screen keys
3. **Press ENTER** to submit your guess
4. **Watch the colors** to guide your next guess:
   - 🟢 **Green (Neon)** = Correct letter in correct position
   - 🟣 **Magenta** = Correct letter in wrong position
   - ⚫ **Gray** = Letter not in word

5. **Beat the timer** before 60 seconds run out!
6. **Use power-ups** strategically to help you win

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser! No installation required.

Supported browsers:
- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)

### Installation & Running Locally

#### Option 1: Simple File Open (Easiest)

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/HansenYangg/WordleV2.git
   cd WordleV2
   ```

2. **Open `index.html` in your browser**
   - Double-click `index.html`, or
   - Right-click → Open with → Your browser

3. **Start playing!** 🎉

#### Option 2: Local Server (Recommended)

For the best experience, run a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (npx):**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

#### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
WordleV2/
│
├── index.html          # Main HTML structure
├── styles.css          # Futuristic cyberpunk styling
├── game.js            # Game logic, timer, combos, power-ups
└── README.md          # This file!
```

## 🎯 Features

- ✅ **60-second timer** with visual warnings
- ✅ **Combo system** (up to x5 multiplier)
- ✅ **Power-up system** (Time Boost, Reveal Letter)
- ✅ **Streak tracking** (persists with localStorage)
- ✅ **Dynamic scoring** (Base × Combo × Time Bonus)
- ✅ **500+ word dictionary**
- ✅ **Fully responsive** design
- ✅ **Keyboard support** (physical + virtual)
- ✅ **Smooth animations** and particle effects
- ✅ **Confetti celebrations** on win
- ✅ **Neon cyberpunk aesthetic**
- ✅ **Sound-ready** (visual feedback included)

## 🎨 Design Philosophy

**Wordle Neon Rush** embraces a futuristic cyberpunk aesthetic:

- **Color Palette**: Neon cyan, magenta, purple, and green against a dark space background
- **Typography**: Orbitron for headers, Rajdhani for body text
- **Effects**: Glowing borders, animated particles, smooth transitions
- **Theme**: Retro-futuristic with a modern twist

## 💯 Scoring System

```
Final Score = Base Score (100) × Combo Multiplier × Time Bonus
```

- **Base Score**: 100 points for winning
- **Combo Multiplier**: 1x to 5x (based on consecutive correct letters)
- **Time Bonus**: 1x to 6x (based on time remaining)

**Example:**
- Win with 42 seconds left and 4x combo
- Score = 100 × 4 × 5 = **2,000 points!**

## 🎮 Controls

### Keyboard Controls
- **A-Z**: Type letters
- **Enter**: Submit guess
- **Backspace**: Delete last letter

### Mouse Controls
- Click on-screen keyboard
- Click power-up buttons
- Click "NEW GAME" to restart

## 🛠️ Customization

Want to modify the game? Here are some easy tweaks:

### Change Timer Duration
In `game.js`, line 17:
```javascript
let timer = 60; // Change to desired seconds
```

### Add More Words
In `game.js`, add words to the `WORD_LIST` array (must be 5 letters, uppercase).

### Modify Power-Up Counts
In `game.js`, lines 21-22:
```javascript
let timeBoostCount = 2; // Change starting count
let revealLetterCount = 1; // Change starting count
```

### Change Colors
In `styles.css`, modify the CSS variables:
```css
:root {
    --neon-cyan: #00f0ff;
    --neon-magenta: #ff00ff;
    --neon-purple: #9d00ff;
    /* ... */
}
```

## 🐛 Known Issues

None at the moment! If you find a bug, please [open an issue](https://github.com/HansenYangg/WordleV2/issues).

## 🚀 Future Enhancements

Potential features for future versions:
- 🔊 Sound effects and background music
- 🏆 Global leaderboard
- 🎯 Daily challenges
- 👥 Multiplayer mode
- 🌐 Multiple language support
- 📱 PWA (Progressive Web App) support
- 🎮 Difficulty levels
- 📊 Detailed statistics page

## 📜 License

This project is licensed under the MIT License - feel free to use, modify, and distribute!

## 🙏 Credits

Created with ⚡ by the power of neon and caffeine.

Inspired by:
- Original Wordle by Josh Wardle
- Cyberpunk aesthetics
- Retro-futuristic design

## 🌟 Support

If you enjoy Wordle Neon Rush, consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 🔄 Sharing with friends

## 📞 Contact

Questions? Suggestions? Reach out!

- GitHub: [@HansenYangg](https://github.com/HansenYangg)
- Repository: [WordleV2](https://github.com/HansenYangg/WordleV2)

---

<div align="center">

**Made with 💜 and lots of ⚡**

*Race against time. Build your combo. Dominate the board.*

</div>
