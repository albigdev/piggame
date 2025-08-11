# 🐷 Pig Game 🎲

This is my first Javascript game learning project written in Javascript:
A fun and interactive **Pig Dice Game**.
Play against the computer and see who can score **100 points** first.
But beware, if you roll a **1**, you lose all your points for the turn! 😱

Live demo: https://pigluck.netlify.app/

## 🚀 How to Play

1. **Start the Game** 🆕  
   Click the **New Game** button to reset scores and begin.

2. **Roll the Dice** 🎲

   - Click **Roll** to roll the dice.
   - If you roll **2–6**, the number is added to your **current turn score**.
   - If you roll a **1**, you lose all points for the turn and your opponent plays.

3. **Hold** ✋

   - Click **Hold** to add your current points to your **total score**.
   - The turn goes to your opponent (compiter).

4. **Computer Turn** 🤖
   The computer rolls automatically, deciding randomly when to stop.

5. **Winning** 🏆
   The first to reach **100 points** wins the game.

---

## 🛠️ Technologies Used

- **HTML5** 🖼️ — Structure and layout
- **CSS3** 🎨 — Styling, animations, and transitions (Flex container, modal window)
- **Vanilla JavaScript** ⚡ — Game logic and DOM manipulation, Event listeners and UI updates
- **Responsive design** 📱 - The game looks good on all screens sizes

---

## 📦 Main Components

- **PigGame Class** 🎮 — Core game logic and state management
- **UI Elements** 🖼️ — Buttons, score displays, dice image
- **Animations** ✨ — Dice rolling and fade-in/out transitions
- **Rules Modal** 📜 — Displays game rules in a pop-up

---

## 🔑 Main Functions

- `newGame()` — Resets the game state and UI
- `roll()` — Rolls the dice for the current player
- `hold()` — Adds current score to total score and switches turn
- `computerTurn()` — Handles the computer's rolling and decision-making (it can be adjusted)
- `checkScore()` — Checks for a winner
- `endGame()` — Stops the game and displays results
- `showComputerThrows()` — Displays the computer's rolled values

---

## 🎯 Features

- ✅ Smooth dice animations
- ✅ Automatic computer opponent
- ✅ Winning/losing animations
- ✅ Reset game button
- ✅ Rules modal

---

## 🗺️ Future Plans / To-Do

- [ ] Add difficulty levels for the computer 🤖
- [ ] Allow multiplayer mode over the network 🌐
- [ ] Add sound effects 🔊
- [ ] Save high scores in local storage 📂
- [ ] Option to change winning score limit 🎯

---

## 🛠️ Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/pig-game.git
   ```

## 🙌 Acknowledgments

I learned HTML, CSS and Javascript from Jonas Schmedtmann (web developer, designer and teacher) I owe it to him that I learned these things, I recommend him to everyone, he is an excellent teacher.
