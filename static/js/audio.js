function reproducirAudio() {
    var valor = document.getElementById('letra').textContent;

    // Verificamos si es número
    if (!isNaN(valor)) {
        // Reproducir audio de número
        var audio = new Audio('/static/audio/numeros/' + valor + '.mp3');
        audio.play();
    } else {
        // Reproducir audio de letra
        var audio = new Audio('/static/audio/letras/' + valor.toUpperCase() + '.mp3');
        audio.play();
    }
}
