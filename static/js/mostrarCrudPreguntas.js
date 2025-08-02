function mostrarFormulario() {
    const valor = document.getElementById("opciones").value;
    document.getElementById("formLetra").style.display = "none";
    document.getElementById("formNumero").style.display = "none";
  
    if (valor === "letra") {
      document.getElementById("formLetra").style.display = "block";
    } else if (valor === "numero") {
      document.getElementById("formNumero").style.display = "block";
    }
  }
  
  function agregarLetra(event) {
    event.preventDefault();
    const letra = document.getElementById("selectLetra").value;
    if (letra) {
      agregarFilaATabla(letra);
      document.getElementById("selectLetra").value = ""; // Limpiar selección
    }
  }
  
  function agregarNumero(event) {
    event.preventDefault();
    const numero = document.getElementById("selectNumero").value;
    if (numero) {
      agregarFilaATabla(numero);
      document.getElementById("selectNumero").value = ""; // Limpiar selección
    }
  }
  
  function agregarFilaATabla(valor) {
    const tabla = document.getElementById("cuerpoTabla");
    const fila = document.createElement("tr");
  
    // 1) Drag-handle
    const celdaHandle = document.createElement("td");
    celdaHandle.className = "drag-handle";
    celdaHandle.innerHTML = "&#9776;"; // ☰
    fila.appendChild(celdaHandle);
  
    // 2) Valor
    const celdaValor = document.createElement("td");
    celdaValor.textContent = valor;
    fila.appendChild(celdaValor);
  
    // 3) Eliminar
    const celdaEliminar = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => tabla.removeChild(fila);
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);
  
    tabla.appendChild(fila);
  }
  
  

  function subirEjercicio(correo_docente) {
    const titulo = document.getElementById("titulo").value.trim();
    const filas = document.querySelectorAll("#cuerpoTabla tr");
    const valores = [];
  
    // Validaciones opcionales
    if (!titulo) {
      alert("Por favor, ingresa un título para el ejercicio.");
      return;
    }
  
    if (filas.length === 0) {
      alert("Agrega al menos un valor antes de subir el ejercicio.");
      return;
    }
  
    // Extraer valores de la tabla
    filas.forEach(fila => {
      const valor = fila.querySelectorAll("td")[1].textContent; // índice 1
      valores.push(valor);
    });
    
  
    // Mostrar en consola
    console.log("Título:", titulo);
    console.log("Valores a enviar:", valores);
    console.log("Correo : ",correo_docente);
  
    // Enviar al backend
    fetch("/subir-ejercicio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correo:correo_docente,
        titulo: titulo,
        valores: valores
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Respuesta del servidor:", data);
      alert("Ejercicio subido correctamente");
      // Opcional: limpiar campos después
      document.getElementById("titulo").value = "";
      document.getElementById("cuerpoTabla").innerHTML = "";
    })
    .catch(error => {
      console.error("Error al subir el ejercicio:", error);
      alert("Hubo un error al enviar el ejercicio.");
    });
  }

  function actualizarEjercicio(id_ejercicio) {
    const titulo = document.getElementById("titulo").value.trim();
    const filas = document.querySelectorAll("#cuerpoTabla tr");
    const valores = [];
  
    if (!titulo) {
      alert("Por favor, ingresa un título para el ejercicio.");
      return;
    }
  
    if (filas.length === 0) {
      alert("Agrega al menos un valor antes de actualizar el ejercicio.");
      return;
    }
  
    filas.forEach(fila => {
      const valor = fila.querySelector("td").textContent;
      valores.push(valor);
    });
  
    fetch("/actualizar-ejercicio", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id_ejercicio,
        titulo: titulo,
        valores: valores
      })
    })
    .then(response => response.json())
    .then(data => {
      alert("Ejercicio actualizado correctamente");
      console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
      console.error("Error al actualizar el ejercicio:", error);
      alert("Hubo un error al actualizar el ejercicio.");
    });
  }
  
  