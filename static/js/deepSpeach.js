let mediaRecorder;
let audioChunks = [];

function startRecording(letra) {
    console.log("La letra es: ", letra);
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Solicitar acceso al micrófono
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
          };
  
          mediaRecorder.onstop = () => {
            // Cuando la grabación se detiene, se crea el archivo WAV
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            
            // Subir el archivo de audio y la letra al servidor
            uploadAudio(audioBlob, letra);  // Aquí pasamos la letra
          };
  
          mediaRecorder.start();
          setTimeout(() => {
            mediaRecorder.stop();  // Detener la grabación después de 3 segundos
          }, 3000);  // 3 segundos
  
          console.log('Grabación iniciada...');
        })
        .catch(error => {
          console.error('Error al acceder al micrófono:', error);
        });
    } else {
      alert('Tu navegador no soporta la API de grabación de audio.');
    }
  }  

  function uploadAudio(audioBlob, letra) {
    const formData = new FormData();
    
    // Agregar el archivo de audio
    formData.append('file', audioBlob, 'audio.wav');  
  
    // Agregar la letra
    formData.append('letra', letra);  // Aquí añadimos la letra
  
    // Hacer la solicitud POST para subir el archivo y la letra
    fetch('/subir', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log('Archivo subido exitosamente:', data);
      alert('¡Archivo subido correctamente!');
    })
    .catch(error => {
      console.error('Error al subir el archivo:', error);
      alert('Hubo un error al subir el archivo.');
    });
  }
  
