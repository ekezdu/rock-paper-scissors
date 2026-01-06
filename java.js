//VARIABLES

let humanScore = 0;
let computerScore = 0;


// HUMAN CHOICE

function getHumanChoice()
{
    //VARIABLE
    let humanChoicePrompt = prompt("rock, paper, scissors?").toLowerCase();
    //STATEMENTS
    return humanChoicePrompt;
}
//LOG CHECK
// console.log(humanChoicePrompt);

//COMPUTER CHOICE

function getComputerChoice()
{
    //VARIABLE
    let choice = (Math.floor(Math.random() * 3));
    //STATEMENTS
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
// getComputerChoice();
// // //LOG CHECK
// console.log(getComputerChoice());

//NEXT STEP 



function playRound(a, b) {
  console.log(a);
  console.log(b);
 

  //B = ROCK
    if ((a == "rock") && (b == "rock"))
    {
        console.log(b = "you chose rock, they chose rock");
    }

    else if ((a == "paper") && (b == "rock"))
    {
        console.log(b = "you chose paper, they chose rock");
    }

    else if ((a == "scissors") && (b == "rock"))
    {
        console.log(b = "you chose scissors, they chose rock");
    }

//B = PAPER
    else if ((a == "rock") && (b == "paper"))
    {
        console.log(b = "you chose rock, they chose paper");
    }

    else if ((a == "paper") && (b == "paper"))
    {
        console.log(b = "you chose paper, they chose paper");
    }

    else if ((a == "scissors") && (b == "paper"))
    {
        console.log(b = "you chose scissors, they chose paper");
    }

//B = SCISSORS
    else if ((a == "rock") && (b == "scissors"))
    {
        console.log(b = "you chose rock, they chose scissors");
    }

    else if ((a == "paper") && (b == "scissors"))
    {
        console.log(b = "you chose paper, they chose scissors");
    }

    else if ((a == "scissors") && (b == "scissors"))
    {
        console.log(b = "you chose scissors, they chose scissors");
    }
//ELSE
    else
    {
        console.log(b = "please enter a valid answer :(");
    }
}


const x = getHumanChoice();
const y = getComputerChoice();


playRound(x, y);
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

//     Create a new function named playRound. OKAY.

//     Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments. OKAY.

//     Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations. OKAY.

//     Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.

//     Increment the humanScore or computerScore variable based on the round winner.



// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

//     Create a new function named playGame.
//     Move your playRound function and score variables so that they’re declared inside of the new playGame function
//     Play 5 rounds by calling playRound 5 times.
//         Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
//         Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
//         If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.




























// function playRound(humanChoice, computerChoice) {
//   console.log(humanChoice);
//   console.log(computerChoice);
// }


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


// playRound(humanSelection, computerSelection);