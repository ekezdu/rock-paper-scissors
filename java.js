
// HUMAN CHOICE

function getHumanChoice()
{
    //VARIABLE
    let humanChoicePrompt = prompt("rock, paper, scissors?").toLowerCase();
    //STATEMENTS
    return humanChoicePrompt;
}


///////////////////////////////////

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


//////////////////////////////


//GLOBAL VARIABLE SCORES

    let humanScore = 0;
    let computerScore = 0;

//////////////////////////

//GAMEPLAY CODE

function playGame()
{
//VARIABLES

    const roundOneX= getHumanChoice();
    const roundOneY = getComputerChoice();

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

        }
    playRound(roundOneX, roundOneY);

}

//////////////////////////////////////////////

//ROUND RESULT

function roundResult()
{
    console.log("YOUR SCORE " +humanScore);
    console.log("MY SCORE " +computerScore);
}

////////////////////////////////////////////

//RUN ROUNDS

function runRounds()
{
//ROUND ONE
    if (confirm("lets go!")) 
        {
        playGame();
        } 
        else 
        {
        txt = "You pressed Cancel!";
        } 

    roundResult();

//

alert("your score:" + humanScore + "," + "my score" + computerScore);
//
    if (humanScore > computerScore)
    {
        alert("you won this one!");
    }
    else 
    {
        alert("you lost! >:D");
    }

//ROUND TWO
    if (confirm("another one!")) 
        {
        playGame();
        } 
        else 
        {
        txt = "You pressed Cancel!";
        } 

    roundResult();
//

alert("your score:" + humanScore + "," + "my score" + computerScore);

//

    if (humanScore > computerScore)
    {
        alert("you're winning :(");
    }
    else 
    {
        alert("you lost! mwahahaha!");
    }

//ROUND THREE
    if (confirm("another one!")) 
        {
        playGame();
        } 
        else 
        {
        txt = "You pressed Cancel!";
        } 

    roundResult();
//

alert("your score:" + humanScore + "," + "my score" + computerScore);

//

    if (humanScore > computerScore)
    {
        alert("stop winning D:");
    }
    else 
    {
        alert("i'm winning!!! yayyy!");
    }

//ROUND FOUR
    if (confirm("another one!")) 
        {
        playGame();
        } 
        else 
        {
        txt = "You pressed Cancel!";
        } 

    roundResult();
//

alert("your score:" + humanScore + "," + "my score" + computerScore);

//
    if (humanScore > computerScore)
    {
        alert("nyoooooo");
    }
    else 
    {
        alert("you don't stand a chance!");
    }

//ROUND FIVE
    if (confirm("one more!")) 
        {
        playGame();
        } 
        else 
        {
        txt = "You pressed Cancel!";
        } 

    roundResult();
//

alert("your score:" + humanScore + "," + "my score" + computerScore);

//


    if (humanScore > computerScore)
    {
        alert("waaaah you beat meeeee");
    }
    else 
    {
        alert("you lost! hahahaha!!! yay!!!");
    }

}

//CALL 

runRounds();


////////////////////////////////////

















