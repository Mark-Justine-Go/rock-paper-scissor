humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);

    switch(randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function playRound(choice){
    const computer = getComputerChoice();

    switch(choice){
        case "rock":
            if(computer === "paper"){
                console.log("You lose, paper beats rock!");
                computerScore++;
            }else if(computer === "scissor"){
                console.log("You win, rock beats scissor!");
                humanScore++;
            }else{
                console.log("Tie! both played rock");
            }
            break
        case "paper":
            if(computer === "rock"){
                console.log("You win, paper beats rock!");
                humanScore++;
            }else if(computer === "scissor"){
                console.log("You lose, scissor beats paper!");
                computerScore++;
            }else{
                console.log("Tie! both played paper");
            }
            break
        case "scissor":
            if(computer === "rock"){
                console.log("You lose, rock beats scissor!");
                computerScore++;
            }else if(computer === "paper"){
                console.log("You win, scissor beats paper!");
                humanScore++;
            }else{
                console.log("Tie! both played scissor");
            }
            break
    }

    const humanScoreElem = document.querySelector("#humanScore");
    const computerScoreElem = document.querySelector("#computerScore");
    humanScoreElem.textContent = humanScore;
    computerScoreElem.textContent = computerScore;

    if(humanScore === 5 || computerScore === 5){
        const scoreElem = document.createElement("div");
        const overlay = document.createElement("div");
        const newGameButton = document.createElement("button");
        const rootElem = document.querySelector("body");

        overlay.classList.add("overlay");
        scoreElem.classList.add("winnerPrompt");
        newGameButton.classList.add("newGameButton");

        newGameButton.addEventListener("click", ()=>location.reload());

        scoreElem.textContent = `${(humanScore > computerScore) ? "Human" : "Computer"} wins!`;
        newGameButton.textContent = "Restart";

        scoreElem.appendChild(newGameButton);
        rootElem.appendChild(overlay);
        rootElem.appendChild(scoreElem);
    }

}

let choicesElement = document.querySelectorAll(".choices > div");

choicesElement.forEach((element)=>{
    let choice = element.id;
    
    element.addEventListener("click", () => playRound(choice));
})

