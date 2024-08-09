document.addEventListener('keydown',(e) =>{
    const audio = document.querySelector(`#audio${e.keyCode}`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const keyElement = document.querySelector(`#key${e.keyCode}`);
    keyElement.classList.add('playing');
});