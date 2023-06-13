import { rook,knight,bishop,queen,king,pawn } from "./pieces.js"

const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8
let playerGo = 'black'
playerDisplay.textContent = 'black'

const startPieces = [
rook, knight, bishop, queen, king, bishop,  knight, rook,
pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
'', '', '', '', '', '', '', '', 
'', '', '', '', '', '', '', '', 
'', '', '', '', '', '', '', '', 
'', '', '', '', '', '', '', '',  
pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
rook, knight, bishop, queen, king, bishop,  knight, rook

]

const createBoard = () => {
  startPieces.forEach((startPiece, i) => {

    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = startPiece;
    square.firstChild?.setAttribute("draggable", true);
    square.setAttribute("square-id", i);
    square.classList.add("brown");
    
    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "brown" : "grey");
    } else {
      square.classList.add(i % 2 === 0 ? "grey" : "brown");
    }

    if (i <= 15) {
      square.firstChild.firstChild.classList.add("black");
    }

    if (i >= 48) {
      square.firstChild.firstChild.classList.add("white");
    }

    gameBoard.append(square);
  });
};
createBoard();


const squareAll = document.querySelectorAll(".square");


let startPostitonId;
let draggedElement;

const changePlayer = () => {
  if (playerGo === "black") {
    reverseIds();
    playerGo = "white";
    playerDisplay.textContent = "white";
  } else {
    revertIds();
    playerGo = "black";
    playerDisplay.textContent = "black";
  }
};

const dragStart = (e) => {
  startPostitonId = e.target.parentNode.getAttribute("square-id");
  draggedElement = e.target;
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragDrop = (e) => {
  e.stopPropagation();
  const correctGo = draggedElement.firstChild.classList.contains(playerGo);
  const taken = e.target.classList.contains("piece");
  const valid = checkIfValid(e.target);
  const opponentGo = playerGo === "white" ? "black" : "white";
  const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo);

  if (correctGo) {
    if (takenByOpponent && valid) {
      e.target.parentNode.append(draggedElement);
      e.target.remove();

      changePlayer();
      return;
    }

    if (taken && !takenByOpponent) {
      infoDisplay.textContent = "cannot go here";
      setTimeout(() => (infoDisplay.textContent = ""), 2000);
      return;
    }

    if (valid) {
      e.target.parentNode.append(draggedElement);
      changePlayer();
      return;
    }
  }

  checkIfValid = (target) => {
    console.log(target);
  };

  //e.target.append(draggedElement)
  //e.target.parentNode.append(draggedElement);
  //e.target.remove();

  changePlayer();
};

const reverseIds = () => {
  const squareAll = document.querySelectorAll(".square");

  squareAll.forEach((square, i) => {
    square.setAttribute("square-id", width * width - 1 - i);
  });
};

const revertIds = () => {
  const squareAll = document.querySelectorAll(".square");

  squareAll.forEach((square, i) => {
    square.setAttribute("square-id", i);
  });
};

squareAll.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});
