const tiles = document.querySelectorAll(".tile");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

const winningCombos = [
    // Row wins
    { combo: [1, 2, 3], strikeClass: "strike-row-1" },
    { combo: [4, 5, 6], strikeClass: "strike-row-2" },
    { combo: [7, 8, 9], strikeClass: "strike-row-3" },

    //Column Wins
    { combo: [1, 4, 7], strikeClass: "strike-column-1" },
    { combo: [2, 5, 8], strikeClass: "strike-column-2" },
    { combo: [3, 6, 9], strikeClass: "strike-column-3" },

    // Diagonal Wins
    { combo: [1, 5, 9], strikeClass: "strike-diag-1" },
    { combo: [3, 5, 7], strikeClass: "strike-diag-2" },
];

// Game Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById('game-over-text');
const playAgain = document.getElementById('play-again');
playAgain.addEventListener("click", startNewGame);

// Game Sounds
const gameOverSound = new Audio("sounds/game_over.wav");
const clickSound = new Audio("sounds/click.wav");

// Game Logic
tiles.forEach(tile => tile.addEventListener("click", tileClick));

function setHoverText() {
    tiles.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile) => {
        if (tile.innerText == "") {
            tile.classList.add(hoverClass);
        }
    });
}

setHoverText();

function tileClick(event) {
    if (gameOverArea.classList.contains("visible")) {
        return;
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != "") {
        return;
    }

    if (turn === PLAYER_X) {
        tile.innerText = PLAYER_X;
        boardState[tileNumber - 1] = PLAYER_X;
        turn = PLAYER_O;
    } else {
        tile.innerText = PLAYER_O;
        boardState[tileNumber - 1] = PLAYER_O;
        turn = PLAYER_X;
    }

    clickSound.play();
    setHoverText();
    checkWinner();
}

// Check to see if someone has won
function checkWinner() {
    for (const winningCombo of winningCombos) {
        const { combo, strikeClass } = winningCombo;
        const tileValue1 = boardState[combo[0] - 1];
        const tileValue2 = boardState[combo[1] - 1];
        const tileValue3 = boardState[combo[2] - 1];

        if (
            tileValue1 != null &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ) {
            strike.classList.add(strikeClass);
            gameOverScreen(tileValue1);
            return;
        }

    // Check for a drawn game
    const allTilesFilled = boardState.every((tile) => tile !== null);
    if (allTilesFilled) {
        gameOverScreen(null);
    }
    }
}

// When the game is over
function gameOverScreen(winnerText) {
    let text = "Draw!";
    if (winnerText != null) {
        text = `Winner is ${winnerText}!`;
    }
    gameOverArea.className = "visible";
    gameOverText.innerText = text;
    gameOverSound.play();
}

function startNewGame() {
    strike.className = "strike";
    gameOverArea.className = "hidden";
    boardState.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    turn = PLAYER_X;
    setHoverText();
}