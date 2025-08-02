function reproducirAudio() {
    var letra = document.getElementById('numero').textContent;
    var audio = new Audio('/static/audio/numeros/' + letra + '.mp3');
    audio.play(); // Reproduce el audio
}