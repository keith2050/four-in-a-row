function processPlayerMoves(){

//This function assumes the players are 

//moving correctly in alternate order.

//Access to board is board[column][row]

//This function returns the winner

//This code assumes red goes first followed

//by yellow,


 

  const NUMBER_OF_ROWS    = 6;

  const RED               = 1;

  const YELLOW            = 2;

  

  var A = Array(NUMBER_OF_ROWS).fill(00);

  var B = Array(NUMBER_OF_ROWS).fill(0);

  var C = Array(NUMBER_OF_ROWS).fill(0);

  var D = Array(NUMBER_OF_ROWS).fill(0);

  var E = Array(NUMBER_OF_ROWS).fill(0);

  var F = Array(NUMBER_OF_ROWS).fill(0);

  var G = Array(NUMBER_OF_ROWS).fill(0);

  var board = [A, B, C, D, E, F, G];

  var currentPlayer;

  var currentMove; //a number 

  var columnString;

  var moveNumber=0;

  var fourVertical = new RegExp("1{4}|2{4}”)

  
//draw board
  

  

//play game
while(i++ < 43){

     



///////////——————-————-

/////.  Get player move (how input?)

/////.  Move will be a number from 1 to 7

/////.   Representing the column that the 

/////.   players piece was dropped.

//////////———————————-

    
//insert player move on board data-structure
board[currentMove][board[currentMove].lastIndexOf(0)] = currentPlayer;


//////////——————————————-/

////////// place player move on board graphically

////////// graphics code here

//////////——————————————-/



//////////——————————

//////////check for 4 in a row

//////////——————————


     //check for 4 in a row

     //go left to right: j = 0 to 6

     for(var j=0; j<7;j++){

        //Go bottom to top: k = 0 to 5

        for(var k=0; k<6; k++){

    

        //check for 4 in a row vertically

        //Check for string of 4 straight

        //of appropriate color in 1 column

        columnString = board[currentMove].join('');

        if(fourVertical.test(columnString))

          if(currentPlayer == RED){

             return "Red";

          }

          else{

             return "Yellow";

          };

        };

       

    

       //check for 4 in a row horizontally

       // If(j>=4)

       //For every one of appropriate color 

       //in row check next 3 rows at same 

       //position for appropriate color

        if((j <= 3) && (board[j][k] == currentPlayer)){

           if((board[j+1][k] == currentPlayer) && 

              (board[j+2][k] == currentPlayer) && 

              (board[j+3][k] == currentPlayer)){

             if(currentPlayer == RED){

                return "Red";

             }

             else{

                return "Yellow";

             };

           };


        };

    

      //if j <= 4 check for 4 in a row diagonally

      if(j <= 3){

       // console.log("here")

        if((k >= 3) && (board[j][k] == currentPlayer)){

        //check for down diagonal

           if((board[j+1][k-1] == currentPlayer) &&

              (board[j+2][k-2] == currentPlayer) &&

              (board[j+3][k-3] == currentPlayer)){

              if(currentPlayer == RED){

                return "Red";

              }

              else{

                return "Yellow";

              };

           };

        };

      };

          

    if(j <= 3){

        if((k <= 3) && (board[j][k] == currentPlayer)){

        //check for up diagonal

           if((board[j+1][k+1] == currentPlayer) &&

              (board[j+2][k+2] == currentPlayer) &&

              (board[j+3][k+3] == currentPlayer)){

              if(currentPlayer == RED){

                return "Red";

              }

              else{

                return "Yellow";

              };

            };

          };

        };

    };//close k for statement

  };//close j for statement

    

  //flip between players 1 and 2 

  currentPlayer = currentPlayer ^ 0b11;

  }; //close process moves for statement

  

  return "Draw";

  

}//close function whoIsWinner
