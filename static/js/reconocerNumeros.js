// Variables globales
let contador = 0;
let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;
let bien = localStorage.getItem('bien') ? parseInt(localStorage.getItem('bien')) : 0;
const MAX_INTENTOS = 10;

// Mensajes
const msjError = [
    "¡Buen intento! No te preocupes, a veces necesitamos un poco más de práctica.",
    "¡Uy! Parece que este número es muy difícil. Pero tú puedes con él.",
    "Muy bien, a veces aprender toma tiempo, y está bien.",
    "¡Estás aprendiendo mucho! A veces no sale a la primera, pero cada intento te hace más fuerte.",
    "No fue esta vez, pero intenta a la otra"
];

const msjCorre = [
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

// Normaliza texto reconociendo frases comunes
function normalizarTextoReconocido(texto) {
    let limpio = texto.toLowerCase().trim();

    limpio = limpio
        .replace(/^el\s+/, '')
        .replace(/^la\s+/, '')
        .replace(/^número\s+/, '')
        .replace(/^numero\s+/, '')
        .replace(/^el número\s+/, '')
        .replace(/^la número\s+/, '');

    return equivalenciasNumeros[limpio] || limpio;
}

// Función principal
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
            const numeroEsperado = document.getElementById('numero').textContent;

            if (textoNormalizado === numeroEsperado) {
                bien++;
                total++;
                localStorage.setItem('bien', bien);
                localStorage.setItem('total', total);

                const indice = Math.floor(Math.random() * msjCorre.length);
                mostrarMensajeEnPantalla('✅ ' + msjCorre[indice], true);
                const audio = new Audio('/static/audio/CorreNumeros/' + (indice + 1) + '.mp3');
                audio.play();
            } else {
                contador++;
                if (contador >= 3) {
                    contador = 0;
                    total++;
                    localStorage.setItem('total', total);

                    const indice = Math.floor(Math.random() * msjError.length);
                    mostrarMensajeEnPantalla('❌ ' + msjError[indice], false);
                    const audio = new Audio('/static/audio/ErrorNumeros/' + (indice + 1) + '.mp3');
                    audio.play();
                } else {
                    mostrarMensajeEnPantalla('❌ Lo siento, dijiste: "' + textoNormalizado + '"', false);
                    return;
                }
            }

            if (total >= MAX_INTENTOS) {
                localStorage.removeItem('total');
                localStorage.removeItem('bien');
                setTimeout(() => {
                    window.location.href = '/acabarNumeros?bien=' + bien;
                }, 5000);
            } else {
                localStorage.setItem('total', total);
                setTimeout(() => {
                    location.reload();
                }, 5000);
            }
        };

        reconocimiento.onerror = function (event) {
            console.error('Error de reconocimiento de voz:', event.error);
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

// Mostrar mensaje en pantalla
function mostrarMensajeEnPantalla(texto, esCorrecto) {
    const mensajeDiv = document.getElementById("mensajeError");
    mensajeDiv.innerText = texto;
    mensajeDiv.className = esCorrecto ? "correcto" : "incorrecto";
    mensajeDiv.style.display = "block";

    setTimeout(() => {
        mensajeDiv.style.display = "none";
    }, 5000);
}
