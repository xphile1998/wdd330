let counts = { "65": 0, "83": 0, "68": 0, "70": 0, "71": 0, "72": 0, "74": 0, "75": 0, "76": 0 };

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running if there is no audio
    audio.currentTime = 0; //rewind to the beginning of the sound file
    audio.play();

    if (counts[e.keyCode] < 100) {
        counts[e.keyCode] += 10;
    } else {
        counts[e.keyCode] = 0;
    }

    console.table(counts);

    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skips the function if it's not a transform
    this.classList.remove("playing");
}

// const keys = document.querySelectorAll('.key');
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);