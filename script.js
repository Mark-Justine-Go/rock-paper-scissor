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

function getHumanChoice(){
    
}

function playRound(human, computer){
    switch(human){
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

    console.log("Current Scores");
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
}

