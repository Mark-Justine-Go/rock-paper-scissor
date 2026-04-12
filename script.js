humanScore = 0;
computerScore = 0;

const humanImg = document.querySelector("#humanResultImg");
const computerImg = document.querySelector("#computerResultImg");
const humanScoreElem = document.querySelector("#humanScore");
const computerScoreElem = document.querySelector("#computerScore");
const choicesElement = document.querySelectorAll(".choices > div");

choicesElement.forEach((element)=>{
    let choice = element.id;
    
    element.addEventListener("click", () => playRound(choice));
})

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

    humanImg.src = `images/${choice}.png`;
    computerImg.src = `images/${computer}.png`;

    switch(choice){
        case "rock":
            if(computer === "paper"){
                console.log("You lose, paper beats rock!");
                computerScore++;
            }else if(computer === "scissor"){
                console.log("You win, rock beats scissor!");
                humanScore++;
            }
            break
        case "paper":
            if(computer === "rock"){
                console.log("You win, paper beats rock!");
                humanScore++;
            }else if(computer === "scissor"){
                computerScore++;
            }
            break
        case "scissor":
            if(computer === "rock"){
                computerScore++;
            }else if(computer === "paper"){
                humanScore++;
            }
            break
    }

    humanScoreElem.textContent = "You: "+humanScore;
    computerScoreElem.textContent = "Computer: "+computerScore;

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

