


let activeTurn = "X";
let gameBoard = document.getElementById("game-board");
let boardPartArray = [];





class BoardPart{
    constructor(id, marked) {
        this.id = id;
        this.marked = marked;
    }
}


/* 
        .board-part{
            background-color: yellow;
            width: 30px;
            height: 30px;
            border : 1px solid black;
            display: inline-block;
            cursor: pointer;
            text-align: center;
            vertical-align: middle;

            margin-top: 1px;
        }
        */ 
/* 
        .board-part div{
            margin: 0;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
 */


function initBoard(){

    let style = document.createElement('style');
    style.innerHTML = `
    .board-part { 
        background-color: yellow;
        width: 30px;
        height: 30px;
        border : 1px solid black;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        margin-top: 1px;
    
    }

    .board-part div{
        margin: 0;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    
    `;
    document.getElementsByTagName('head')[0].appendChild(style);




    let newPart = new BoardPart(0,false);
    boardPartArray.push(newPart);
    

    for(let i=1; i <= 9; i++){
        let newPart = new BoardPart(i,false);
        boardPartArray.push(newPart);

        let boardPart = document.createElement("div");
        boardPart.classList.add("board-part");
        boardPart.innerHTML = "<div></div>";
        boardPart.onclick = function() { markPart(boardPart, i); };

        gameBoard.appendChild(boardPart);

        if(i % 3 == 0){
            let breakTag = document.createElement("br");
            gameBoard.appendChild(breakTag);
        }

    }

}


function markPart(e, id){
    if(boardPartArray[id].marked == false ){
        boardPartArray[id].marked = true;
        if(activeTurn == "X"){
            e.innerHTML = "<div>X</div>";
            activeTurn = "O";
        }else{
            e.innerHTML = "<div>O</div>";
            activeTurn = "X";
        }
        
    }else{
        alert("Already marked");
    }

}







initBoard();
















