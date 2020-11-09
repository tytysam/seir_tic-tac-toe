// ==============
// Tic-Tac-Toe
// ==============

// Cached DOM Nodes
const grid = document.querySelectorAll(".tile");
const h2 = document.querySelector("h2");
const reset = document.getElementById("reset-button");
const blankTile = document.querySelectorAll(".display");

// Initialize Player Tracker + Move Tracker
let playerTracker = 1;
let move = "";

// New Game / Reset Function
const newGame = () => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].innerText = "";
  }
};

// Determine Player Move
const getMove = () => {
  if (playerTracker % 2 === 0) {
    move = "o";
    h2.innerText = "x is next!";
  } else {
    move = "x";
    h2.innerText = "o is next!";
  }
  return playerTracker++;
};

// Gameplay + DOM Manipulation
const makeMove = (e) => {
  // If player has already played here, alert.
  if (e.target.innerText.length > 0) {
    alert("You have already player here.");
  } else {
    getMove();
    const displayMove = document.createElement("p");
    displayMove.setAttribute("id", "player-move");
    displayMove.innerText = move;
    e.target.appendChild(displayMove);
  }
};

// Event Listeners
reset.addEventListener("click", newGame);

for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", makeMove);
}
