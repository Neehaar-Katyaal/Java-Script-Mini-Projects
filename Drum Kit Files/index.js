for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
        // e.target.style.color = "white"; something like this can also be done
        playSound(e.target.textContent);//or can do this.textContent and can remove the (e)
        addAnimation(this);//or can write e.target
    });
}

document.addEventListener("keydown", function(e) {
        playSound(e.key);//or this.key and can remove the (e)
        addAnimation(document.querySelector("." + e.key));
    });

function addAnimation(key) {
    key.classList.add("pressed");
    setTimeout(function() {
        key.classList.remove("pressed");
    }, 100);
}

function playSound(key) {
    // or we can use switch case
    if(key == 'w') {
        const audio = new Audio('./sounds/crash.mp3');
        audio.play();
    }else if(key == 'a') {
        const audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
    }else if(key == 's') {
        const audio = new Audio('./sounds/snare.mp3');
        audio.play();
    }else if(key == 'd') {
        const audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    }else if(key == 'j') {
        const audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
    }else if(key == 'k') {
        const audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
    }else if(key == 'l') {
        const audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
    }
}
