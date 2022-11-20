"use strict";
// console.log(document.querySelector(".message").textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener(
  "click",
  function () {
    const guess = Number(document.querySelector(".guess").value);

    //when there is no input
    if (!guess) {
      // document.querySelector(".message").textContent = "➖no number";
      displayMessage("➖no number");
      //when the input is correct
    } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      // document.querySelector(".message").textContent = "🎉 CONGRATS YOU WON!";
      displayMessage("🎉 CONGRATS YOU WON!");
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "20rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector(".message").textContent =
        //   guess > secretNumber ? "TOO HIGH!" : "TOO LOW!";
        displayMessage(guess > secretNumber ? "TOO HIGH!" : "TOO LOW!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        // document.querySelector(".message").textContent =
        //   "OOPS😢 YOU LOST THE GAME";
        displayMessage("OOPS😢 YOU LOST THE GAME");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
  //when the input is high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "TOO HIGH!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "OOPS😢 YOU LOST THE GAME";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //when the input is low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "TOO LOW!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "OOPS😢 YOU LOST THE GAME";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
);

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
});
