"use strict";

/**
 * Class representing the Pig Dice Game.
 * Handles game state, player/computer turns, and DOM updates.
 */
class PigGame {
  constructor() {
    this.player = true; //Indicates if it's the player's turn
    this.current = 0; //Current turn score
    this.playerScore = 0; //Player's total score
    this.computerScore = 0; //Computer's total score
    this.computerThrows = []; //Dice throws for the computer turn
    this.gameOver = false; //Indicates whether the game has ended
  }

  /**
   * Starts a new game and resets the UI.
   * @returns {void}
   */
  newGame() {
    this.player = true;
    this.gameOver = false;
    document.querySelector(".btn--new").classList.add("fade-out");
    document.querySelector(".btn--rules").classList.add("fade-out");
    document.querySelector(".logo").classList.add("fade-out");
    setTimeout(() => {
      document.querySelector(".btn--new").classList.add("hidden");
      document.querySelector(".btn--rules").classList.add("hidden");
      document.querySelector(".logo").classList.add("hidden");
    }, 1000);

    setTimeout(() => {
      document.querySelector(".dice").classList.remove("hidden");
      document.querySelector(".btn--roll").classList.remove("hidden");
      document.querySelector(".btn--hold").classList.remove("hidden");
      document.getElementById("current--0").textContent = "0";
      document.getElementById("current--1").textContent = "0";
      document.getElementById("score--0").textContent = "0";
      document.getElementById("score--1").textContent = "0";
      document.querySelector(".player-win").classList.add("hidden");
      document.querySelector(".player-loser").classList.add("hidden");
      document.querySelector(".computer-win").classList.add("hidden");
      document.querySelector(".computer-loser").classList.add("hidden");
      let current = document.querySelectorAll(
        ".current-throw, .current-label, .current-score"
      );
      for (let e of current) e.classList.remove("hidden");
      this.playerScore = 0;
      this.computerScore = 0;
      const imageDice = document.getElementById("dice");
      imageDice.src = "img/dice-start.png";
    }, 1000);
  }

  /**
   * Handles rolling the dice for the current player.
   * @returns {void}
   */
  roll() {
    const imageDice = document.getElementById("dice");
    imageDice.classList.remove("animate-roll", "animate-appear");
    imageDice.src = "img/dice-start.png";
    imageDice.classList.add("animate-roll");
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 6 + 1);
      imageDice.src = `img/dice-${randomNum}.png`;
      imageDice.classList.add("animate-appear");

      randomNum > 1
        ? (this.current += randomNum)
        : ((this.current = 0), (this.player = false));
      if (this.player) {
        document.getElementById("current--0").textContent = this.current;
      } else {
        document.getElementById("current--0").textContent = this.current;
        this.computerTurn();
      }
      console.log(this.current);
      console.log(this.player);
    }, 1500);
  }

  /**
   * Holds the current score and switches turns.
   * @returns {void}
   */
  hold() {
    if (this.gameOver) return;

    if (this.player) {
      this.playerScore += this.current;
      document.getElementById("score--0").textContent = this.playerScore;
      this.current = 0;
      document.getElementById("current--0").textContent = this.current;
      this.checkScore();
      this.player = !this.player;
      console.log(this.player);
      this.computerTurn();
    } else {
      this.computerScore += this.current;
      document.getElementById("score--1").textContent = this.computerScore;
      this.checkScore();
      this.current = 0;
      this.player = !this.player;
      console.log(this.player);
    }
  }

  /**
   * Runs the computer's turn logic until it decides randomly to stop or rolls 1.
   * @returns {void}
   */
  computerTurn() {
    while (!this.player) {
      let randomNum = Math.floor(Math.random() * 6 + 1);

      this.showComputerThrows(randomNum);

      randomNum > 1
        ? (this.current += randomNum)
        : ((this.current = 0), (this.player = true));

      console.log(randomNum);

      let shouldStop = Math.random() < 0.3; // 30%

      if (shouldStop) {
        this.hold();
        this.showComputerThrows(randomNum);
        break;
      }
    }
  }

  /**
   * Checks if either player has won the game.
   * Ends the game if a score reaches 100.
   * @returns {void}
   */
  checkScore() {
    if (this.playerScore >= 100) {
      this.endGame();
      document.querySelector(".player-win").classList.remove("hidden");
      document.querySelector(".computer-loser").classList.remove("hidden");
      this.gameOver = true; //New
      return;
    }
    if (this.computerScore >= 100) {
      this.endGame();
      document.querySelector(".computer-win").classList.remove("hidden");
      document.querySelector(".player-loser").classList.remove("hidden");
      this.gameOver = true;
      return;
    }
  }

  /**
   * Ends the game and resets UI elements to the initial state.
   * @returns {void}
   */
  endGame() {
    let current = document.querySelectorAll(
      ".current-throw, .current-label, .current-score"
    );
    for (let e of current) e.classList.add("hidden");

    document.querySelector(".dice").classList.add("hidden");
    document.querySelector(".btn--roll").classList.add("hidden");
    document.querySelector(".btn--hold").classList.add("hidden");
    setTimeout(() => {
      document.querySelector(".btn--new").classList.remove("hidden");
      document.querySelector(".btn--rules").classList.remove("hidden");
      document.querySelector(".logo").classList.remove("hidden");
      document.querySelector(".btn--new").classList.remove("fade-out");
      document.querySelector(".btn--rules").classList.remove("fade-out");
      document.querySelector(".logo").classList.remove("fade-out");
    }, 1000);
  }

  /**
   * Updates the UI to show the computer's current throws.
   * @param {number} randomNum - The number rolled by the computer.
   * @returns {void}
   */
  showComputerThrows(randomNum) {
    if (!this.player) {
      this.computerThrows.push(randomNum);
      document.getElementById("current--1").innerHTML =
        this.computerThrows.join(", ");
      if (randomNum === 1) {
        this.computerThrows.length = 0;
      }
    } else this.computerThrows.length = 0;
  }
}

const pigGame = new PigGame();

document
  .querySelector(".btn--new")
  .addEventListener("click", () => pigGame.newGame());

document
  .querySelector(".btn--roll")
  .addEventListener("click", () => pigGame.roll());

document
  .querySelector(".btn--hold")
  .addEventListener("click", () => pigGame.hold());

document
  .querySelector(".btn--rules")
  .addEventListener("click", () =>
    document.querySelector(".modal").classList.remove("hidden")
  );

document
  .querySelector(".close-modal")
  .addEventListener("click", () =>
    document.querySelector(".modal").classList.add("hidden")
  );
