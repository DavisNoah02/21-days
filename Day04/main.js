// choice variable
const choices = ["rock", "paper", "scissors"];

// function to take users choice
function playGame(userChoice) {

    // comp choice
  const computerChoice = choices[Math.floor(Math.random() * 3)];

// condition to determine who has won
  if (userChoice === computerChoice) {

    // displays the results 'a tie' if both user and computer choose same choice
    console.log("It's a tie!");

  } 
//   other condition to determine winner
  else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! Computer chose ${computerChoice}.`);
  } else {
    console.log(`You lose! Computer chose ${computerChoice}.`);
  }
}
 //here it is the users choice input
playGame("rock");
