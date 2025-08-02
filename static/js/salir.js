function salirDelEjercicio() {
    localStorage.removeItem('total');
    localStorage.removeItem('bien');
    window.history.back(); // o redirige a donde quieras, ej: window.location.href = '/menu';
  }
  