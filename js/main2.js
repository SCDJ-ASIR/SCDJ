/***** Script Formulario Página Contacto ******/
/* Al validar el formulario se ejecuta la función */
function validar(){
	var nombre, apellidos, correo, telefono;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	telefono = document.getElementById("telefono").value;


	expresion = /\w+@\w+\.+[a-z]/;
	if (nombre === ""){
		alert("El campo 'Nombre' no puede quedar vacío.");
		return false;
	}
	else if (apellidos === ""){
		alert("El campo 'Apellidos' no puede quedar vacío.");
		return false;
	}
	else if (correo === ""){
		alert("El campo 'Correo Electrónico' no puede quedar vacío.");
		return false;
	}
	else if (correo === ""){
		alert("El campo 'Teléfono' no puede quedar vacío.");
		return false;
	}
	else if (!expresion.test(correo)){
		alert("Correo no válido, introduzca un correo válido por favor.");
		return false;
	}
	else if (isNaN(telefono) || telefono<9){
		alert("Teléfono no válido, introduzca un número de teléfono válido por favor.");
		return false;
	}
}
/***** Fin Script Formulario Página Contacto ******/