"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author:
      Date:

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");


// Define the grabPiece function
function grabPiece(event) {
  // Set pointerX and pointerY to the clientX and clientY properties of the event object
  pointerX = event.clientX;
  pointerY = event.clientY;

  // Set the value of the touchAction style for the event target to "none"
  event.target.style.touchAction = "none";

  // Increase the value of the zCounter and apply it to the zIndex style of the event target
  zCounter += 1;
  event.target.style.zIndex = zCounter;

  // Set pieceX and pieceY to the offsetLeft and offsetTop properties of the event target
  pieceX = event.target.offsetLeft;
  pieceY = event.target.offsetTop;

  // Ensure the position style is set to allow free movement
  event.target.style.position = 'absolute';

  // Add an event listener for the pointermove event to run the movePiece function
  event.target.addEventListener('pointermove', movePiece);

  // Add an event listener for the pointerup event to run the dropPiece function
  event.target.addEventListener('pointerup', dropPiece);
}

// Define the movePiece function
function movePiece(event) {
  // Calculate the new position
  let deltaX = event.clientX - pointerX;
  let deltaY = event.clientY - pointerY;

  // Update the piece position
  event.target.style.left = pieceX + deltaX + 'px';
  event.target.style.top = pieceY + deltaY + 'px';
}

// Define the dropPiece function
function dropPiece(event) {
  // Remove the event listeners when the piece is dropped
  event.target.removeEventListener('pointermove', movePiece);
  event.target.removeEventListener('pointerup', dropPiece);
}

// Iterate through each item in the pieces NodeList
for (let i = 0; i < pieces.length; i++) {
  // Add an event listener for the 'pointerdown' event
  pieces[i].addEventListener('pointerdown', grabPiece);
}