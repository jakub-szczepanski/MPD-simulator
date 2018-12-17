const pads = Array.from(document.querySelectorAll('.pad'));
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

function startMPD(e) {
    const start = document.querySelector('.start-button');
    
    start.addEventListener('click', function() {
        start.classList.toggle('pressed');
        pads.forEach(pad => pad.classList.toggle('activated'));
    })

}

startMPD();

function playSound(e) {
    const audio = document.querySelector(`audio[data-pad="${e.keyCode}"]`);
    const pad = document.querySelector(`div[data-pad="${e.keyCode}"]`);
    if (!audio) return;
    if (pad.classList.contains('activated')) {
        pad.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    } else {
        e.preventDefault;
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}