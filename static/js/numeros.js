// static/js/script.js
function getRandomColor() {
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC733"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function letraAleatoria() {
    const abecedario = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    var letra = abecedario[Math.floor(Math.random() * abecedario.length)];
    return letra;
}

window.onload = function () {
    document.getElementById('numero').textContent = letraAleatoria();
    document.getElementById("numero").style.color = getRandomColor();
};
