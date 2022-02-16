const hand_options = ["Rock", "Paper", "Scissors"]
let computer_score = 0
let player_score = 0


function compare_results(user, computer){
    if (user === computer){
        return "Its a tie!";
    } else if (user === "Rock" && computer === "Paper"){
        return "Computer wins. Paper beats rock.";
    } else if (user === "Rock" && computer === "Scissors"){
        return "Player wins. Rock beats scissors";
    } else if (user === "Paper" && computer === "Rock"){
        return "Player wins. Paper beats rock";
    } else if (user === "Paper" && computer === "Scissors"){
        return "Computer wins. Scissors beat paper.";
    } else if (user === "Scissors" && computer === "Rock"){
        return "Computer wins. Rock beats scissors.";
    } else if (user === "Scissors" && computer === "Paper"){
        return "Player wins. Scissors beat paper";
    }
}


function playRound(player_input){
    let computer_input = hand_options[Math.floor(Math.random() * hand_options.length)]

    let round_results = compare_results(player_input, computer_input);

    if (round_results[0] === "C"){
        changeResults(round_results);
        changeScore("computer");
        computer_score ++
    } else if (round_results[0] === "P"){
        changeResults(round_results);
        changeScore("player");
        player_score ++
    } else changeResults(round_results);

    if (player_score == 5){
        changeScore('reset');
        alert("PLAYER WINS");
    }else if (computer_score == 5){
        changeScore('reset');
        alert("COMPUTER WINS");
    }
}


function changeResults(winner_text){
    return document.getElementById("results-text").innerHTML = winner_text;
}


function changeScore(winner){
    if (winner == "reset"){
        document.getElementById('computer').innerHTML = 0;
        document.getElementById('player').innerHTML = 0;
        computer_score = 0;
        player_score = 0;
        return null;
    }
    let current_score = document.getElementById(winner).innerHTML
    return document.getElementById(winner).innerHTML = parseInt(current_score) + 1;
}


function playGame(e){
    let player_input = e.target.innerText;
    playRound(player_input);
}


const buttons = document.querySelectorAll('.button')
window.addEventListener('click', playGame);

