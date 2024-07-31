let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector(".reset-button");
let newGameBtn = document.querySelector(".newgame-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8],

];
const resetGame = () => {
    turnO = true; 
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){      // player O turn
            box.innerText = "O"
            turnO = false;
        }else {        // player X turn
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;  // to disable the button when clicked one time because when it will be click again it wont change from O-X or X-O

        checkWinner();
    })  
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

showWinner = (winner) => {
        msg.innerText = `Congratulations winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
}



checkWinner = () => {
    for( let pattern of winPatterns){
       
        let pos1Val = boxes[pattern[0]].innerText;   // for checking the inner text of boxes inside that index
        let pos2Val = boxes[pattern[1]].innerText;   
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val)
            }
        }
    }
   }


   newGameBtn.addEventListener("click", (resetGame));
   reset_button.addEventListener("click", (resetGame))