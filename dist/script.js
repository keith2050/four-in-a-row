const NUMBER_OF_ROWS    = 6
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
var fourVertical = new RegExp("1{4}|2{4}");





document.addEventListener("click",playermovehdlr);









function playermovehdlr(ce){

    //hide buttons
    for(let i = 0;i<7;i++){
        document.getElementById(i).setAttribute("style","visibility:hidden");
    };

    //get player move from event
    currentMove = ce.target.getAttribute("id");




    //update board
    board[currentMove][board[currentMove].lastIndexOf(0)] = currentPlayer;




    document.querySelector("#gameBoard").rows[board[currentMove].lastIndexOf(0)].cells[currentMove].innerText= "hello"




    //check for victory

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