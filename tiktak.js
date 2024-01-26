// to create html with 3x3 grid element
// each cell should have a click handler to play the game
// cell should return either X or O
// create a win list of 3 cells to win the game
// if x in three click align with win list return x player wins
// if o in three click align with win list return o player wins
// call functions on pages load to initialize game
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
// let xLet = 'X';
// let oLet = 'O';

// x.style.cssText = 'color: black; font-size: 24px;';
// o.style.cssText = 'color: white; font-size: 24px;';

x.textContent = 'X';
o.textContent = 'O';


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

// mouse hover color change
function hoverColor() {
    tableData.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.cssText ='background-color:gray;';
        });
        cell.addEventListener('mouseout', () => {
            cell.style.cssText = 'background-color:white;';
        });
    });
};  
hoverColor();

// check win functions
function checkWin() {
    for (let i = 0; i < winList.length; i++) {
        if (winList[i][0].textContent === winList[i][1].textContent && winList[i][1].textContent === winList[i][2].textContent) {
            if (winList[i][0].textContent === 'X') {
                alert('X wins');
                return true;
            }
            else if (winList[i][0].textContent === 'O') {
                alert('O wins');
                return true;
            }
        }
    };
    return false;
};
// checkWin();

// random number functions that work behind the comuter layer
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function iterList (list){
    let theList = [];
    for (let a = 0; a < list.length; a++) {
        if (list[a].textContent === '') {
            theList.push(list[a]);
        }
    }
    return theList;
}

let myList = [one, two, three, four, five, six, seven, eight, nine];
let status = false;
// let randomElement = getRandomElement(myList);

// function clickHandlerComputer() {
tableData.forEach(cell => {
    cell.addEventListener('click', () => {
        if (status === true) {
            return;
        }
        if (cell.textContent === '') {
            cell.textContent = 'X';
            status = checkWin();
            if (status) {
                return;
            }
            let aList = iterList(myList);
            if (aList.length > 0){
                let aElement = getRandomElement(aList);
                aElement.textContent = 'O';
                status = checkWin();
            }
        }
    });
    // checkWin();
});
// }
// clickHandlerComputer();

function computerSwitch() {
    tableData.forEach(cell => {
        if (cell.textContent === '') {
            randomElement.textContent = 'O';
        }
        else {
            cell.textContent === 'X';
        }
    });
};






























// let currentPlayer = xLet; // Start with 'X'

// function clickHandler() {
//     tableData.forEach(cell => {
//         cell.addEventListener('click', () => {
//             if (cell.textContent === '') {
//                     cell.textContent = 'X';

//                     players = [
//                         createPlayer(cell.textContent ==='X' ? cell.textContent ==='X' : "Player 1", "X"),

//                         // createPlayer(document.querySelector("#player2").value ? document.querySelector("#player2").value : "Player 2", "O"),
//                     //   ];
//                 }
//                 else {
//                     cell.textContent = 'O';
//                 }
//                 // cell.textContent = currentPlayer;

//                 // Switch to the next player for the next turn
//                 // currentPlayer = (currentPlayer === xLet) ? oLet : xLet;
//             })
//             // checkWin();
//         });
//     };