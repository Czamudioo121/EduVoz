/**
 * Muestra un mensaje de alerta en una ventana modal.
 * @param {string} text - El mensaje a mostrar.
 * @param {string} [url] - (Opcional) URL a la que redirigir al hacer clic en "Continuar".
 */
function mensaje(text, url) {
    // Verifica si ya existe el modal y, de lo contrario, lo crea.
    let modal = document.getElementById("myModal");
    if (!modal) {
      // Crea la capa modal de fondo.
      modal = document.createElement("div");
      modal.id = "myModal";
      document.body.appendChild(modal);
    }
    
    // Limpia cualquier contenido previo dentro del modal.
    modal.innerHTML = "";
  
    // Crea el contenedor de la alerta con estilo.
    const alertBox = document.createElement("div");
    alertBox.className = "alert";
    
    // Agrega un ícono (puedes cambiar el símbolo según el tipo de alerta)
    const icon = document.createElement("span");
    icon.className = "icon";
    icon.textContent = "\u2139"; // Unicode para ícono de información (ℹ)
    alertBox.appendChild(icon);
    
    // Agrega el mensaje al contenedor.
    const msgText = document.createElement("span");
    msgText.className = "msg-text";
    msgText.textContent = text;
    alertBox.appendChild(msgText);
    
    // Agrega el botón de cerrar (una "X") a la alerta.
    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    alertBox.appendChild(closeBtn);
    
    // Si se pasó una URL, agrega un botón de confirmación ("Continuar")
    if (url) {
      const confirmBtn = document.createElement("button");
      confirmBtn.className = "confirm-btn";
      confirmBtn.textContent = "Continuar";
      alertBox.appendChild(confirmBtn);
  
      // Al hacer clic en el botón, cierra la alerta y redirige.
      confirmBtn.addEventListener("click", function() {
        modal.style.display = "none";
        window.location.href = url;
      });
    }
    
    // Agrega el contenedor de la alerta al modal.
    modal.appendChild(alertBox);
    
    // Muestra el modal.
    modal.style.display = "block";
    
    // Eventos para cerrar la alerta:
    // - Al hacer clic en la "X" del aviso.
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
    
    // - Al hacer clic fuera del área de la alerta.
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
  