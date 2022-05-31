
    function playermovehdlr(){
    alert("button pressed");
}


const NUMBER_OF_ROWS    = 6;

const RED               = 1;

const YELLOW            = 2;

const RC  = "img/red_checker.png"

const YC  = "img/yellow_checker.png"



var A = Array(NUMBER_OF_ROWS).fill(0);

var B = Array(NUMBER_OF_ROWS).fill(0);

var C = Array(NUMBER_OF_ROWS).fill(0);

var D = Array(NUMBER_OF_ROWS).fill(0);

var E = Array(NUMBER_OF_ROWS).fill(0);

var F = Array(NUMBER_OF_ROWS).fill(0);

var G = Array(NUMBER_OF_ROWS).fill(0);

var board = [A, B, C, D, E, F, G];

var currentPlayer;

var currentMove;

var columnString;

var fourVertical = new RegExp("1{4}|2{4}");



//first player is red

currentPlayer = RED;





//process moves until winner or number of moves is 42

for(var i = 0; i < 42; i++){



//update move buttons

//   change .player background-color

//   remove buttons for full columns

//      for every button

//          if button column full

//             disable/hide button



//get currentPlayer move

//on button click

//   hide buttons

//   record player move




//update board

    board[currentMove][board[currentMove].lastIndexOf(0)] = currentPlayer;


//update webpage with new move

//   assign currentPlayer's checker

//   image to appropriate place









//check for winner


//go left to right: j = 0 to 6

    for(var j=0; j<7;j++){


//go bottom to top: k = 0 to 5

        for(var k=0; k<6; k++){




//check for 4 in a row vertically

//Check for string of 4 straight

//of appropriate color in 1 column

//fourVertical is a regex

            columnString = board[currentMove].join('');

            if(fourVertical.test(columnString)){

                if(currentPlayer == RED){

//red wins

                };

//yellow wins

            };//close fourVertical test






//check for 4 in a row horizontally

//For every one of current player's color

//in column check next 3 rows at same

//position for appropriate color

            if((j <= 3) &&

                (board[j][k]   == currentPlayer) &&

                (board[j+1][k] == currentPlayer) &&

                (board[j+2][k] == currentPlayer) &&

                (board[j+3][k] == currentPlayer)){

                if(currentPlayer == RED){

//red wins

                };

//yellow wins

            };//close j<=3





//check for 4 in a row diagonally

//check down diagon

            if(((j <= 3) && (k >= 3)) &&

                (board[j][k]     == currentPlayer) &&

                (board[j+1][k-1] == currentPlayer) &&

                (board[j+2][k-2] == currentPlayer) &&

                (board[j+3][k-3] == currentPlayer)){

                if(currentPlayer == RED){

//red wins ;

                };

//yellow wins

            };//close j<=3


//check up diagonal

            if(((j <= 3) && (k <= 3)) &&

                (board[j][k]     == currentPlayer) &&

                (board[j+1][k+1] == currentPlayer) &&

                (board[j+2][k+2] == currentPlayer) &&

                (board[j+3][k+3] == currentPlayer)){

                if(currentPlayer == RED){

//red wins

                };

//yellow wins

            };//close. j<=3 k <= 3

        };//close k

    };//close j



    if(i==41){

        ;//output draw message

        break;

    }




//flip between players 1 and 2

    currentPlayer = currentPlayer ^ 0b11;



}; //close i - process moves for





document.getElementById("gameBoard").rows[2].cells[1].innerHTML = "<IMG src=\"img/red_checker.png\">"

