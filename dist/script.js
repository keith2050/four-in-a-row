const NUMBER_OF_ROWS    = 7
const RED               = 1
const YELLOW            = 2
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
var currentPlayer = RED;
var currentMove;
var playerChecker = RC;
var columnString;
var gameWinner;




document.addEventListener("click",playermovehdlr);


function endGame(gameWinner){
    alert("end game procedures");
    alert(gameWinner + " wins");
};




function playermovehdlr(ce){

    //hide buttons
    for(let i = 0;i<7;i++){
        document.getElementById(i).setAttribute("style","visibility:hidden");
    };


    //get player move from event
    currentMove = ce.target.getAttribute("id");


    //update board
    board[currentMove][board[currentMove].lastIndexOf(0)] = currentPlayer;


    var targetRow = document.querySelector("#gameBoard").rows[board[currentMove].lastIndexOf(0) + 1];
    var targetCell = targetRow.cells[currentMove];
    if(currentPlayer==RED){
        targetCell.getElementsByTagName("img")[0].setAttribute("src",RC);
    }
    else{
        targetCell.getElementsByTagName("img")[0].setAttribute("src",YC)
    }


    //check for winner

    //go left to right: j = 0 to 6
    for(var j=0; j<4;j++){

        //go bottom to top: k = 0 to 5
        for(var k=0; k<NUMBER_OF_ROWS; k++){

            //check for 4 in a row horizontally
            if( (board[j][k]   == currentPlayer) &&
                (board[j+1][k] == currentPlayer) &&
                (board[j+2][k] == currentPlayer) &&
                (board[j+3][k] == currentPlayer)){
                if(currentPlayer == RED){
                    endGame("red");
                };
                endGame("yellow");
            };//close j<=3


            //check for 4 in a row vertically
            if( (k <= 3)                         &&
                (board[j][k]   == currentPlayer) &&
                (board[j][k+1] == currentPlayer) &&
                (board[j][k+2] == currentPlayer) &&
                (board[j][k+3] == currentPlayer)){
                if(currentPlayer == RED){
                    endGame("red");
                }
                endGame("yellow");
            };//close j<=3


            //check for 4 in a row diagonally
            //check down diagonal
            if( (k <= 3)                           &&
                (board[j][k]     == currentPlayer) &&
                (board[j+1][k+1] == currentPlayer) &&
                (board[j+2][k+2] == currentPlayer) &&
                (board[j+3][k+3] == currentPlayer)){
                if(currentPlayer == RED){
                    endGame("red");
                };
                endGame("yellow");
            };//close j<=3

            //check up diagonal
            if( (k >= 3)                           &&
                (board[j][k]     == currentPlayer) &&
                (board[j+1][k-1] == currentPlayer) &&
                (board[j+2][k-2] == currentPlayer) &&
                (board[j+3][k-3] == currentPlayer)){
                if(currentPlayer == RED){
                    endGame("red");
                };
                endGame("yellow");
            };//close. j<=3 k <= 3
        };//close k
    };//close j


    /*if(i==41){
        ;//output draw message
        break;
    }*/


//switch players
for(let i = 0;i<7;i++){
    if(document.getElementById(i).getAttribute("class")=="redPlayer"){
        document.getElementById(i).setAttribute("class","yellowPlayer");
        currentPlayer = YELLOW;
        playerChecker = YC;
    }
    else{
        document.getElementById(i).setAttribute("class","redPlayer")
        currentPlayer = RED;
        playerChecker = RC;
    };
};


//show buttons
for(let i = 0;i<7;i++){
    document.getElementById(i).setAttribute("style","visibility:visible");
};

}