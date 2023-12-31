// to create html with 3x3 grid element
// each cell should have a click handler to play the game
// cell should return either X or O
// create a win list of 3 cells to win the game
// if x in three click align with win list return x player wins
// if o in three click align with win list return o player wins
// call functions on pages load to initializae game
// attach click handler to cell element to play games

let tableData = document.querySelectorAll("td");
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

x.style.cssText = 'color: black; font-size: 24px;';
o.style.cssText = 'color: white; font-size: 24px;';

x.textContent = xLet;
o.textContent = oLet;


// list of all valids cells
let winList = [
    [one, two, three],
    [two, five, eight],
    [one, four, seven],
    [three, six, nine],
    [four, five, six],
    [three, five, seven],
    [one, five, nine],
    [seven, eight, nine]
];

// one.textContent = 'X';

// one.addEventListener('mouseover', () => {
//    one.style.cssText = 'background-color: black;';
// });

const board = ['', '', '', '', '', '', '', '', ''];

tableData.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.cssText ='background-color:gray;';
    });
    cell.addEventListener('mouseout', () => {
        cell.style.cssText = 'background-color:white;';
    });
    let currentPlayer = xLet;
    const switchPlayer = () => {
        currentPlayer = currentPlayer === xLet ? oLet : xLet;
        
    }
    cell.textContent = switchPlayer();
});
            // for (let i = 0; i < winList.length; i++) {
            //     if (winList[i][0] === winList[i][1] && winList[i][1] === winList[i][2] && winList[i][0] === xLet) {
            //         alert('X wins');
            //     } else if (winList[i][0] === winList[i][1] && winList[i][1] === winList[i][2] && winList[i][0] === oLet) {
            //         alert('O wins');
            //     }
    //  });
//     });
// });



    // tableRow[i].appendChild(x);
    // tableRow[i].appendChild(o);

// function checkWin() {

// if (board[0] === board[1] && board[1] === board[2] && board[0]!== '') {
//     return board[0];

// }


// const cellData = document.querySelectorAll(".tabledata");
// cellData.forEach(box => {
//   box.addEventListener("click", () => {
//     if (box.textContent === "") {
//       let currentPlayer = xLet;
//       function switchPlayer() {
//         currentPlayer = currentPlayer === xLet ? oLet : xLet;
//       }
//       box.textContent = currentPlayer;
//       switchPlayer();
//     }
//   });
// });\
// tableRow.appendChild(cellData);







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