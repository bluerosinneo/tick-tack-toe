(function () {
    window.onload = function () {
        console.log("hey");

        // what assignment suggested
        // Players are X and O
        let currentPlayer = 'X';


        let playerXSelections = [];
        let playerOSelections = [];


        const winningCombinations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];

        

        // get all td elements from the DOM and store in cellElementArray
        const cellElementArray = document.querySelectorAll('td');
        const whoIsUp = document.querySelector('#whoIsUP');

        alert("New Game!");
        whoIsUp.innerHTML = "Player X is up";



        // write for loop to iterate over cellElementArray
        for (let k = 0; k < cellElementArray.length; k++) {
            // set cellElementArray[i] to currentCell variable
            // let currentCell = cellElementArray[i]
            // add an event listener to the currentCell
            cellElementArray[k].addEventListener('click', function (event) {
                // for a little more readability
                const clickedCellElement = event.target;
                let clickedID = parseInt(clickedCellElement.id);

                // console.log("You clicked on cell number: "+clickedCellElement.id)
                
                if(currentPlayer === "X"){
                    
                    if(clickedCellElement.innerHTML == ""){
                        clickedCellElement.innerHTML = "X";
                        playerXSelections.push(parseInt(clickedCellElement.id));
                        if(checkWin(winningCombinations, playerXSelections)){
                            alert("Player X Wins");
                            alert("New Game!");
                            whoIsUp.innerHTML = "Player O is up";
                            newGame();
                        }
                        currentPlayer = "O";
                        whoIsUp.innerHTML = "Player O is up";
                        // console.log(playerXSelections);
                    }
                }
                else{
                    if(!playerXSelections.includes(clickedID) && !playerOSelections.includes(clickedID)){
                        clickedCellElement.innerHTML = "O";
                        playerOSelections.push(parseInt(clickedCellElement.id));
                        if(checkWin(winningCombinations, playerOSelections)){
                            // console.log("Player O Wins");
                            alert("New Game!");
                            whoIsUp.innerHTML = "Player X is up";
                            newGame();
                        }
                        currentPlayer = "X";
                        whoIsUp.innerHTML = "Player X is up";
                        // console.log(playerOSelections);
                    }
                }

                if(checkDraw(playerXSelections,playerOSelections)){
                    alert("Uh Oh, Draw");
                    alert ("New Game!");
                    newGame();
                }

            });
        }

        function newGame(){
            currentPlayer = 'X';

            playerXSelections = [];
            playerOSelections = [];
            
            for (let k = 0; k < cellElementArray.length; k++) {
                cellElementArray[k].innerHTML = "";
            }

        }

        function checkDraw(playerSelections1, playerSelections2){
            if( (playerSelections1.length + playerSelections2.length) >= 9){
                return true;
            }
            else{
                return false;
            }

        }

        function checkWin(winningCombination, playerSelections){

            for(let winCondition of winningCombination){
                // console.log(winCondition);
                let winCounter = 0;
                for(let value of winCondition){

                    if(playerSelections.includes(value)){

                        winCounter = winCounter + 1;
                    }
                    // else {
                    //     break
                    // };
                }

                if(winCounter == 3){
                    return true;
                }
            }
            return false;
        }



    };
})();


