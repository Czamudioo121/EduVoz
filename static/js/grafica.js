document.addEventListener("DOMContentLoaded", function() {
    // Configurar gráfica de Letras
    var ctxLetras = document.getElementById('graficoLetras').getContext('2d');
    new Chart(ctxLetras, {
        type: 'doughnut',
        data: {
            labels: ['Correctas', 'Incorrectas'],
            datasets: [{
                data: [aciertosLetras, erroresLetras],
                backgroundColor: ['#3ca8f3', '#f33c44'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false, // Desactivar responsive para mantener tamaño fijo
            cutout: '70%',
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Configurar gráfica de Números
    var ctxNumeros = document.getElementById('graficoNumeros').getContext('2d');
    new Chart(ctxNumeros, {
        type: 'doughnut',
        data: {
            labels: ['Correctas', 'Incorrectas'],
            datasets: [{
                data: [aciertosNumeros, erroresNumeros],
                backgroundColor: ['#3ca8f3', '#f33c44'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false, // Desactivar responsive para mantener tamaño fijo
            cutout: '70%',
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
});
