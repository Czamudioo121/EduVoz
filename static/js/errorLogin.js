// static/js/login.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario recargue la página

        let formData = new FormData(this);
        fetch('/inicioSesion', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "error") {
                alert(data.message); // Muestra el mensaje de error como alerta
            }else if (data.role=="Docente") {
                window.location.href = "/docente";
            } else if (data.role=="Tutor") {
                window.location.href = "/alumno";
            }else if (data.role=="Administrador") {
                window.location.href = "/admin";
            }else {
                window.location.href = "/"; // Redirige si es exitoso
            }
        })
        .catch(error => console.error("Error en la petición:", error));
    });
});
