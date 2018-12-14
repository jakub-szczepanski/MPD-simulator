function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-pad="${e.keyCode}"]`);
    const pad = document.querySelector(`div[data-pad="${e.keyCode}"]`);
    if (!audio) return;

    pad.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const pads = Array.from(document.querySelectorAll('.pad'));

pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);