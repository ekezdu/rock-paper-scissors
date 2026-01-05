//VARIABLES
let choice = (Math.floor(Math.random() * 3));
let humanChoicePrompt = prompt("rock, paper, scissors?");
let humanScore;
let computerScore;


 
// HUMAN CHOICE

function getHumanChoice()
{
    return humanChoicePrompt;
}
//LOG CHECK
console.log(getHumanChoice());

//COMPUTER CHOICE

function getComputerChoice()
{
   if (choice === 0)
   {
        let rock = "rock";
        return rock;
   }
    else if (choice === 1)
    {
        let paper = "paper";
        return paper;
    }
    else 
    {
        let scissors = "scissors";
        return scissors;
    }
    
}
//FUNCTION CALL
getComputerChoice();
//LOG CHECK
console.log(getComputerChoice());

//NEXT STEP 

// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

//     Create a new function named playRound.

//     Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.

//     Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

//     Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.

//     Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) 
{
  // your code here!
}
console.log(humanScore);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

