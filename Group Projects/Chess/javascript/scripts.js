import { rook,knight,bishop,queen,king,pawn } from "./pieces.js"

const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8

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


const squareAll = document.querySelectorAll("#gameboard .square");

let startPostitonId 
let draggableElement

const dragStart = (e) => {
 startPostitonId = console.log(e.target.parentNode.getAttribute('square-id'));
 draggableElement = e.target
};

const dragOver = (e) => {
    //e.preventDefault()
    console.log(e)
}

squareAll.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragstart", dragStart);
});
