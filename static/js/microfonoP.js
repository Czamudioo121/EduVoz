let contador = 0;
let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;
let bien = localStorage.getItem('bien') ? parseInt(localStorage.getItem('bien')) : 0;

// Mensajes para letras
const msjErrorLetras = [
    "¡Buen intento! A veces necesitamos un poco más de práctica.",
    "¡Uy! Parece que esta letra es difícil. Pero tú puedes.",
    "Muy bien, aprender toma tiempo y está bien equivocarse.",
    "¡Estás aprendiendo mucho! Cada intento te hace más fuerte.",
    "No fue esta vez, pero inténtalo de nuevo"
];

const msjCorreLetras = [
    "¡Muy bien! ¡Eres un campeón!",
    "¡Sí! ¡Dijiste la letra correcta!",
    "¡Eso fue perfecto! ¡Bravo!",
    "¡Letra correcta! ¡Eres asombroso!",
    "¡Fantástico! ¡Estás aprendiendo mucho!"
];

// Mensajes para números
const msjErrorNumeros = [
    "¡Buen intento! No te preocupes, a veces necesitamos un poco más de práctica.",
    "¡Uy! Parece que este número es muy difícil. Pero tú puedes con él.",
    "Muy bien, a veces aprender toma tiempo, y está bien.",
    "¡Estás aprendiendo mucho! A veces no sale a la primera, pero cada intento te hace más fuerte.",
    "No fue esta vez, pero intenta a la otra"
];

const msjCorreNumeros = [
    "¡Muy bien! ¡Eres un campeón!",
    "¡Sííí! ¡Dijiste el número correcto!",
    "¡Eso fue perfecto! ¡Bravo!",
    "¡Número correcto! ¡Eres asombroso!",
    "¡Fantástico! ¡Estás aprendiendo mucho!"
];

// Equivalencias de palabras a números
const equivalenciasNumeros = {
    "uno": "1",
    "dos": "2",
    "tres": "3",
    "cuatro": "4",
    "cinco": "5",
    "seis": "6",
    "siete": "7",
    "ocho": "8",
    "nueve": "9",
    "diez": "10"
};

function esNumero(valor) {
    return !isNaN(valor);
}

function normalizarTextoReconocido(texto) {
    let limpio = texto.toLowerCase().trim();

    limpio = limpio
        .replace(/^la\s+/, '')
        .replace(/^el\s+/, '')
        .replace(/^número\s+/, '')
        .replace(/^numero\s+/, '')
        .replace(/^letra\s+/, '')
        .replace(/^la letra\s+/, '')
        .replace(/^el número\s+/, '');

    return equivalenciasNumeros[limpio] || limpio;
}

function iniciarReconocimiento() {
    if ('webkitSpeechRecognition' in window) {
        const reconocimiento = new webkitSpeechRecognition();
        reconocimiento.lang = 'es-ES';
        reconocimiento.interimResults = false;
        reconocimiento.maxAlternatives = 1;

        const btnMicro = document.querySelector('.btn-micro');
        btnMicro.classList.add('active');

        reconocimiento.onresult = function (event) {
            const textoReconocido = event.results[0][0].transcript;
            const textoNormalizado = normalizarTextoReconocido(textoReconocido);
            const letraEsperada = typeof letraActual === 'function' ? letraActual() : '';
            const esUnNumero = esNumero(letraEsperada);

            if (textoNormalizado === letraEsperada) {
                contador = 0; // ✅ Reiniciamos los intentos al acertar
                bien++;
                total++;
                localStorage.setItem('bien', bien);
                localStorage.setItem('total', total);

                const indice = Math.floor(Math.random() * (esUnNumero ? msjCorreNumeros.length : msjCorreLetras.length));
                const mensaje = esUnNumero ? msjCorreNumeros[indice] : msjCorreLetras[indice];
                mostrarMensajeEnPantalla('✅ ' + mensaje, true);

                const audioPath = esUnNumero
                    ? '/static/audio/CorreNumeros/' + (indice + 1) + '.mp3'
                    : '/static/audio/CorreLetras/' + (indice + 1) + '.mp3';

                const audio = new Audio(audioPath);
                audio.play();

                setTimeout(() => {
                    avanzarLetra();
                }, 6000);
            } else {
                contador++;

                if (contador >= 3) {
                    contador = 0; // ✅ Reiniciamos para el próximo elemento
                    total++;
                    localStorage.setItem('total', total);

                    const indice = Math.floor(Math.random() * (esUnNumero ? msjErrorNumeros.length : msjErrorLetras.length));
                    const mensaje = esUnNumero ? msjErrorNumeros[indice] : msjErrorLetras[indice];
                    mostrarMensajeEnPantalla('❌ ' + mensaje, false);

                    const audioPath = esUnNumero
                        ? '/static/audio/ErrorNumeros/' + (indice + 1) + '.mp3'
                        : '/static/audio/ErrorLetras/' + (indice + 1) + '.mp3';

                    const audio = new Audio(audioPath);
                    audio.play();

                    setTimeout(() => {
                        avanzarLetra();
                    }, 6000);
                } else {
                    mostrarMensajeEnPantalla('❌ Lo siento, dijiste: "' + textoNormalizado + '"', false);
                }
            }
        };

        reconocimiento.onerror = function (event) {
            console.log('Error de reconocimiento de voz:', event.error);
            btnMicro.classList.remove('active');
        };

        reconocimiento.onend = function () {
            btnMicro.classList.remove('active');
        };

        reconocimiento.start();
    } else {
        alert('Tu navegador no soporta el reconocimiento de voz.');
    }
}

function mostrarMensajeEnPantalla(texto, esCorrecto) {
    const mensajeDiv = document.getElementById("mensajeError");
    mensajeDiv.innerText = texto;
    mensajeDiv.className = esCorrecto ? "correcto" : "incorrecto";
    mensajeDiv.style.display = "block";

    setTimeout(() => {
        mensajeDiv.style.display = "none";
    }, 6000);
}
