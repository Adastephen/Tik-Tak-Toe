// to create html with 3x3 grid element
// each cell should have a click handler to play the game
// cell should return either X or O
// create a win list of 3 cells to win the game
// if x in three click align with win list return x player wins
// if o in three click align with win list return o player wins
// call functions on pages load to initializae game
// attach click handler to cell element to play games

const table = document.querySelector(".table-row");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let x = document.createElement('p');
let o = document.createElement('p');

// assign letters to x and o
let xLet = 'X';
let oLet = 'O';
xLet.style.cssText = 'color: black; font-size: 24px;';
oLet.style.cssText = 'color: white; font-size: 24px;';

x.textContent = xLet;
o.textContent = oLet;


// list of all valids cells
let winList = [
    [two, five, eight],
    [one, four, seven],
    [three, six, nine],
    [four, five, six],
    [three, five, seven],
    [one, five, nine]
];

const cellData = document.querySelectorAll(".tabledata");
cellData.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      let currentPlayer = xLet;
      function switchPlayer() {
        currentPlayer = currentPlayer === xLet ? oLet : xLet;
      }
      box.textContent = currentPlayer;
      switchPlayer();
    }
  });
});
table.appendChild(cellData);


// function checkWin() {
// const board = ['', '', '', '', '', '', '', '', ''];




// const div1 = document.createElement('div');
// div1.addEventListener('click', ()=> {
//     div1.textContent = xLet;
// })
// one.appendChild(div1);

// const div2 = document.createElement('div');

// function player1(PlayerObj){
//     this.PlayerObj = firstPlayer;

// }

// function lists() {
    
// }