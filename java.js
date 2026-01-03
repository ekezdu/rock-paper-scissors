// create a function named getComputerChoice
//getComputerChoice returns "rock" "paper" or "scissors"

//use math.random and math.floor to generate numbers 0, 1, or 2
//if else statements to return rock paper or scissors corresponding with the numbers 


let result = getComputerChoice(2);


function getComputerChoice(max)
{
    return Math.floor(Math.random()* max);
}
