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
    square.innerHTML = startPiece
    square.setAttribute("square-id",i)
    square.classList.add("brown")
    gameBoard.append(square)
  });
};

createBoard()