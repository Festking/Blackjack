let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
//let message = document.getElementById('message-el')
let message = document.querySelector("#message-el");
let playCards = document.querySelector("#play-cards");
let sumEl = document.querySelector("#sum_el");

// Object declaration
let player = {
  name: "Festus",
  chips: 200,
};

let playerMsg = document.getElementById("player-el");
playerMsg.textContent = player.name + ": $" + player.chips;

function startGame() {
  let jack1 = getRandomCard();
  let jack2 = getRandomCard();
  cards = [jack1, jack2];
  sum = jack1 + jack2;
  isAlive = true; // Remove 'let' to avoid shadowing
  renderGame();
}

function renderGame() {
  playCards.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    playCards.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    msg = "Do you want to draw a new card?";
    message.textContent = msg;
    hasBlackJack = false;
    isAlive = true;
  } else if (sum === 21) {
    msg = "Congratulations, You've got Blackjack!";
    message.textContent = msg;
    alert("Congratulations, You've got Blackjack!");
    hasBlackJack = true;
    isAlive = true;
  } else {
    msg = "You're out of the game";
    isAlive = false;
    message.textContent = msg;
  }

  console.log(msg);
  console.log("Won Black Jack: " + hasBlackJack);
  console.log("Online:" + isAlive);
}

function newGame() {
  if (isAlive && !hasBlackJack) {
    let jack3 = getRandomCard();
    cards.push(jack3);
    sum += jack3;
    console.log(sum);
    renderGame();
  } else if (sum > 21) {
    console.log("You've passed 21! Please restart the game.");
    alert("You've passed 21! Please restart the game.");
  } else if (hasBlackJack) {
    console.log("You already have 21! Please restart the game.");
    alert("You already have 21! Please restart the game.");
  } else if (!isAlive) {
    console.log("You need to start a new game first!");
    alert("You need to start a new game first!");
  }
}

function getRandomCard() {
  let randomPick = Math.floor(Math.random() * 13) + 1;

  // Turning One to 11 and Eleven above to 10
  if (randomPick === 1) {
    return 11;
  } else if (randomPick > 10) {
    return 10;
  } else {
    return randomPick;
  }
}
