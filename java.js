// create a function named getComputerChoice
//getComputerChoice returns "rock" "paper" or "scissors"

//use math.random and math.floor to generate numbers 0, 1, or 2
//if else statements to return rock paper or scissors corresponding with the numbers 


function getComputerChoice(max)
{
    return Math.floor(Math.random()* max);
}

if (getComputerChoice(3) === 0) {
    console.log("rock")
}
    else if (getComputerChoice(3) === 1)
    {
         console.log("paper");
    }
    else if (getComputerChoice(3) === 2)
    {
        console.log("scissors");
    }