// static/js/script.js
function getRandomColor() {
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC733"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function letraAleatoria() {
    const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var letra = abecedario[Math.floor(Math.random() * abecedario.length)];
    return letra;
}

window.onload = function () {
    document.getElementById('letra').textContent = letraAleatoria();
    document.getElementById("letra").style.color = getRandomColor();
};
