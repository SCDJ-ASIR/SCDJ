/********* Comienzo Script Ediciones Especiales Página DOOM ***********/
/* Cuando se pulsa el botón correspondiente se ejecuta la función que tiene asignada, la cual cambia la imagen y el texto
para mostrar la edición que indica el botón */
function cambiar_edicion1(){
  document.getElementById("imagen_edicion_doom").src="../img/doom/edicion_deluxe.jpg";
  document.getElementById("texto_edicion_doom").innerHTML="Manda a todos al infierno con la Edicion Deluxe de DOOM Eternal. La cual incluye:<br>- Pase uno con dos complementos para el modo historia.<br>- Armadura del Slayer demoniaco.<br>- Paquete de sonidos clasicos para armas.";
}
function cambiar_edicion2(){
  document.getElementById("imagen_edicion_doom").src="../img/doom/edicion_estandar.jpg";
  document.getElementById("texto_edicion_doom").innerHTML="La edicion estandar incluye una copia gratuita de DOOM 64 y el paquete Rip and Tear, formado por:<br> - El skin de revenant DOOT.<br> - El nivel maestro “Base de sectarios”.<br> - La skin de escopeta original.";
}
function cambiar_edicion3(){
  document.getElementById("imagen_edicion_doom").src="../img/doom/edicion_coleccionista.jpg";
  document.getElementById("texto_edicion_doom").innerHTML="El paquete definitivo para cualquier fan de DOOM, la edicion coleccionista contiene la edicion deluxe y un increible surtido de contenido:<br>- Una replica del casco del DOOM Slayer.<br>- Una cinta de casete de la banda sonora del juego compuesta por Mick Gordon.<br>- Un libro con la historia del juego e ilustraciones.";
}
/********* Fin Script Ediciones Especiales Página DOOM ***********/