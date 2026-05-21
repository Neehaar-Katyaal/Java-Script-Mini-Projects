let gamePattern = [];
let userPattern = [];
let started = false;
let level = 1;

document.addEventListener("keydown", function() {
    if(!started) {
        started = true;
        playGame();
    }
});

function playGame() {

    document.querySelector("#level-title").textContent = "Level " + level;
    let random = Math.floor(Math.random() * 4);
    let button = document.querySelectorAll(".btn")[random];

    gamePattern.push(button);
    animateAndPlaySound(button);

    userInput();
}

function userInput() {
    userPattern = [];
    $(".btn").off("click").on("click", function() {
        userPattern.push(this);
        animateAndPlaySound(this);

        validateUserInput();
    });
}

function validateUserInput() {
    let i = 0;
    while(i < userPattern.length) {
        if(userPattern[i] != gamePattern[i]) {
            gameOver();
            return;
        }
        i++;
    }
    if(userPattern.length == gamePattern.length) {
        level++;
        setTimeout(function() {
            playGame();
        }, 1000);
    }
}

function animateAndPlaySound(button) {

    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 200);

    let audio = new Audio("./sounds/" + button.id + ".mp3");
    audio.play();
}

function gameOver() {
    $("#level-title").text("Game Over, Press Any Key To Restart");
    started = false;
    level = 1;
    gamePattern = [];
    userPattern = [];

    document.querySelector("body").classList.add("game-over");
    setTimeout(function() {
        document.querySelector("body").classList.remove("game-over");
    }, 100);

    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
}