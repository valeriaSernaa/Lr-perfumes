// Esperar a que el contenido HTML esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la imagen por su ID
    var image = document.getElementById("fadeImage");
  
    // Agregar un listener para cuando se haga click en la imagen
    image.addEventListener("click", function() {
      // Agregar la clase que desvanecerá la imagen
      image.classList.add("fade-out");
  
      // Opcional: reiniciar la animación al finalizar
      setTimeout(function() {
        image.classList.remove("fade-out");
      }, 2000); // Tiempo en milisegundos que coincide con la duración de la transición en CSS
    });
  });
  