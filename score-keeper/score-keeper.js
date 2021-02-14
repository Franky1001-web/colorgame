

const playerOneDisplay = document.querySelector("#player-one-display");
const playerTwoDisplay = document.querySelector("#player-two-display");
const pOneButton = document.querySelector("#player-one-button");
const pTwoButton = document.querySelector("#player-two-button");
const limit = document.querySelector("input");
const reset = document.querySelector("#reset");
let p1Score=0,p2Score=0;
let winningScore=0;
let gameOver=false;
// console.log(limit);
limit.addEventListener("change", () =>{
    winningScore=Number(limit.value);
    p1Score=p2Score=0;
    playerOneDisplay.innerHTML="0";
    playerTwoDisplay.innerHTML="0";
})
pOneButton.addEventListener("click", ()=>{
    if(!gameOver && winningScore!==0){
        p1Score++;
        if(p1Score!==winningScore){
            playerOneDisplay.textContent= p1Score;
            
        }
        else{
            playerOneDisplay.textContent= p1Score;
            gameOver=true;
            playerOneDisplay.classList.add("winner");
            playerTwoDisplay.classList.add("loser");
        }
    }
});
pTwoButton.addEventListener("click", ()=>{
    if(!gameOver && winningScore!==0){
        p2Score++;
        if(p2Score!==winningScore){
            playerTwoDisplay.textContent=p2Score;
            
        }
        else{
            playerTwoDisplay.textContent=p2Score;
            gameOver=true;
            playerOneDisplay.classList.add("loser");
            playerTwoDisplay.classList.add("winner");
        }
    }
});
reset.addEventListener("click", () => {
    p1Score=p2Score=0;
    playerOneDisplay.innerHTML="0";
    playerTwoDisplay.innerHTML="0";
    gameOver=false;
    playerTwoDisplay.classList.remove("winner");
    playerTwoDisplay.classList.remove("loser");
    playerOneDisplay.classList.remove("loser");
    playerOneDisplay.classList.remove("winner");
    limit.value=0;
})