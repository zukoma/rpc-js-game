const hand_options = ["rock", "paper", "scissors"]
var computer_score = 0
var player_score = 0


function compare_results(user, computer){
    if (user === computer){
        return "Its a tie!";
    } else if (user === "rock" && computer === "paper"){
        return "Computer wins. Paper beats rock.";
    } else if (user === "rock" && computer === "scissors"){
        return "Player wins. Rock beats scissors";
    } else if (user === "paper" && computer === "rock"){
        return "Player wins. Paper beats rock";
    } else if (user === "paper" && computer === "scissors"){
        return "Computer wins. Scissors beat paper.";
    } else if (user === "scissors" && computer === "rock"){
        return "Computer wins. Rock beats scissors.";
    } else if (user === "scissors" && computer === "paper"){
        return "Player wins. Scissors beat paper";
    }
}


function playRound(player_input){
    let player_input_lower = player_input.toLowerCase();
    if (hand_options.includes(player_input_lower.toLowerCase())){
        let computer_input = hand_options[Math.floor(Math.random() * hand_options.length)]

        console.log(`Player choice: ${player_input_lower}`);
        console.log(`Computer choice: ${computer_input}`);

        return compare_results(player_input_lower, computer_input);
    } else {console.log("Wrong choice")}
}

for (let i = 0; i < 5; i++) {
    let player_input = prompt("Enter rock, paper or scissors.");
    console.log(`=== Round: ${i+1} ===`);
    let round_results = playRound(player_input);
    console.log(round_results);

    if (round_results[0] === "C"){
        computer_score++;
        console.log(`Player score: ${player_score}, Computer_score: ${computer_score}`);
    } else if (round_results[0] === "P"){
        player_score++;
        console.log(`Player score: ${player_score}, Computer_score: ${computer_score}`);
    } else {
        console.log(`Player score: ${player_score}, Computer_score: ${computer_score}`);
    }
}

