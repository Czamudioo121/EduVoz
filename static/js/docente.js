document.addEventListener("DOMContentLoaded", function () {
    fetch("/docente/info")
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("No autorizado");
                window.location.href = "/";
            } else {
                document.getElementById("nombreDocente").textContent = data.Nombre + " " + data.Apellido;
            }
        })
        .catch(error => console.error("Error al obtener la información del docente:", error));
});
