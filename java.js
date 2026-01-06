//VARIABLES


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






function playGame()
{
//VARIABLES
    let humanScore = 0;
    let computerScore = 0;

    const roundOneX= getHumanChoice();
    const roundOneY = getComputerChoice();

    const roundTwoX= getHumanChoice();
    const roundTwoY = getComputerChoice();


    function roundResult()
    {
        alert("okay go again!");
    }
//PLAYROUND FUNCTION
        function playRound(a, b) {
        console.log("YOUR GUESS: " + a);
        console.log("MY GUESS: " + b);



        //B = ROCK
            if ((a == "rock") && (b == "rock"))
            {
                console.log(b = "you tied!");
            }

            else if ((a == "paper") && (b == "rock"))
            {
                console.log(b = "you win! paper beats rock :(");
                humanScore++
            }

            else if ((a == "scissors") && (b == "rock"))
            {
                console.log(b = "you lost! rock beats scissors :)");
                computerScore++
            }

        //B = PAPER
            else if ((a == "rock") && (b == "paper"))
            {
                console.log(b = "you lost! paper beats rock :)");
                computerScore++
            }

            else if ((a == "paper") && (b == "paper"))
            {
                console.log(b = "you tied!");
            }

            else if ((a == "scissors") && (b == "paper"))
            {
                console.log(b = "you win! scissors beats paper :(");
                humanScore++
            }

        //B = SCISSORS
            else if ((a == "rock") && (b == "scissors"))
            {
                console.log(b = "you win! rock beats scissors :(");
                humanScore++
            }

            else if ((a == "paper") && (b == "scissors"))
            {
                console.log(b = "you lost! scissors beats paper :)");
                computerScore++
            }

            else if ((a == "scissors") && (b == "scissors"))
            {
                console.log(b = "you tied!");
            }
        //ELSE
            else
            {
                console.log(b = "please enter a valid answer :(");
            }
            console.log("YOUR SCORE " + humanScore);
        console.log("MY SCORE " +computerScore);
        }
    playRound(roundOneX, roundOneY);
    roundResult();
    playRound(roundTwoX, roundTwoY);

}

playGame();

// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

//     Create a new function named playGame. OKAY!
//     Move your playRound function and score variables so that they’re declared inside of the new playGame function OKAY!
//     Play 5 rounds by calling playRound 5 times.
//         Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
//         Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
//         If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.



























