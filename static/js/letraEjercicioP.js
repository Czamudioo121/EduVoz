function getRandomColor() {
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC733"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Este arreglo debe ser definido en tu HTML como variable global con:
// <script>const letrasPermitidas = {{ ejercicio|tojson }};</script>

let indiceLetra = 0;

function mostrarLetraActual() {
    if (!letrasPermitidas || letrasPermitidas.length === 0) {
        console.error("No hay letras disponibles.");
        return;
    }

    const letra = letrasPermitidas[indiceLetra];
    const elementoLetra = document.getElementById('letra');
    elementoLetra.textContent = letra;
    elementoLetra.style.color = getRandomColor();
}

function avanzarLetra() {
    indiceLetra++;
    if (indiceLetra >= letrasPermitidas.length) {
        const bien = parseInt(localStorage.getItem('bien')) || 0;
        const total = parseInt(localStorage.getItem('total')) || 0;
        const errores = total - bien;

        // Limpiar datos del localStorage
        localStorage.removeItem('total');
        localStorage.removeItem('bien');

        // Redirigir al finalizar el ejercicio
        window.location.href = '/acabarActividadesP?bien=' + bien + '&mal=' + errores;
        return;
    }

    mostrarLetraActual();
}

// Estas funciones se exponen para que microfonoP.js las use
window.avanzarLetra = avanzarLetra;
window.letraActual = () => letrasPermitidas[indiceLetra].toLowerCase();

window.onload = function () {
    mostrarLetraActual();
};
