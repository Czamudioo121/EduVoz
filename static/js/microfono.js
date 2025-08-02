// Variables globales
let contador = 0;
let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;
let bien = localStorage.getItem('bien') ? parseInt(localStorage.getItem('bien')) : 0;
const MAX_INTENTOS = 10;

// Mensajes motivadores
const msjCorre = [
  "¡Muy bien! ¡Eres un campeón!",
  "¡Sí! ¡Dijiste la letra correcta!",
  "¡Eso fue perfecto! ¡Bravo!",
  "¡Letra correcta! ¡Eres asombroso!",
  "¡Fantástico! ¡Estás aprendiendo mucho!"
];

const msjError = [
  "¡Buen intento! A veces necesitamos un poco más de práctica.",
  "¡Uy! Parece que esta letra es difícil. Pero tú puedes.",
  "Muy bien, aprender toma tiempo y está bien equivocarse.",
  "¡Estás aprendiendo mucho! Cada intento te hace más fuerte.",
  "No fue esta vez, pero inténtalo de nuevo"
];

function iniciarReconocimiento() {
  if ('webkitSpeechRecognition' in window) {
    const reconocimiento = new webkitSpeechRecognition();
    reconocimiento.lang = 'es-ES';
    reconocimiento.interimResults = false;
    reconocimiento.maxAlternatives = 1;

    // Seleccionamos el botón del micrófono; asegúrate de que en tu HTML exista este elemento
    const btnMicro = document.querySelector('.btn-micro');
    // Añadimos la clase 'active' para activar la transición a rojo
    btnMicro.classList.add('active');

    reconocimiento.onresult = function (event) {
      const textoReconocido = event.results[0][0].transcript.toLowerCase().trim();
      const letraActual = document.getElementById('letra').textContent.toLowerCase();

      // Comparar lo dicho con la letra esperada
      if (textoReconocido === 'letra ' + letraActual || textoReconocido === letraActual) {
        bien++;
        total++;
        localStorage.setItem('bien', bien);
        localStorage.setItem('total', total);

        const indice = Math.floor(Math.random() * msjCorre.length);
        mostrarMensajeEnPantalla('✅ ' + msjCorre[indice], true);
        const audio = new Audio('/static/audio/CorreLetras/' + (indice + 1) + '.mp3');
        audio.play();
      } else {
        contador++;
        if (contador >= 3) {
          total++;
          localStorage.setItem('total', total);

          const indice = Math.floor(Math.random() * msjError.length);
          mostrarMensajeEnPantalla('❌ ' + msjError[indice], false);
          const audio = new Audio('/static/audio/ErrorLetras/' + (indice + 1) + '.mp3');
          audio.play();
        } else {
          mostrarMensajeEnPantalla('❌ Lo siento, dijiste: "' + textoReconocido + '"', false);
          // En este caso, se puede optar por no finalizar el reconocimiento,
          // pero si decides detenerlo, elimina la clase 'active'
          return;
        }
      }

      if (total >= MAX_INTENTOS) {
        localStorage.removeItem('total');
        localStorage.removeItem('bien');
        setTimeout(() => {
          window.location.href = '/acabarActividades?bien=' + bien;
        }, 6000);
      } else {
        localStorage.setItem('total', total);
        setTimeout(() => {
          location.reload();
        }, 6000);
      }
    };

    reconocimiento.onerror = function (event) {
      console.log('Error de reconocimiento de voz:', event.error);
      btnMicro.classList.remove('active');
    };

    // Cuando el reconocimiento termina, se retira la clase 'active' para volver al color original
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
  }, 6000);
}
