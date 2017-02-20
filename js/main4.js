
function validate(){
	var nombre = document.getElementById("name").value;
	localStorage.setItem("name", nombre)
	var email = document.getElementById("email").value;
	localStorage.setItem("emil", email)
	var check = document.getElementById("check");
	var salida = document.getElementById("salida");
	var salida1 = document.getElementById("salida1");
	var salida2 = document.getElementById("salida2");
	var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	check.checked = false;
	
	if(nombre == 0){
		salida.innerHTML = "Campo  nombre obligatorio";
		document.getElementById("name").focus();
		return false;
	}else{
		salida.innerHTML = "";
	}
	if(nombre.length >= 30){
		salida.innerHTML = "Maximo 30 caracteres";
	}else if(/([0-9])/g.test(nombre)){
		salida.innerHTML = "Se permite solo letra"
	}else{
		salida1.innerHTML = "";
	}
	if(email == 0){
		salida1.innerHTML = "Campo Email requerido";
		document.getElementById("email").focus();
		return false;
	}else if(!expresion.test(email)){
		salida1.innerHTML = "correo invalido";
		return false;
	}else if(check.checked == true){
		return true;
	}
	else{
		salida.innerHTML = "";	
		salida1.innerHTML = "";
	}
	nombre.value = convertirMayu(nombre);
}
function convertirMayu(texto){
	var newArray = texto.split("");
	var primerLetra = newArray[0];
	var mayuscula = primerLetra.toUpperCase();
	var espacio = false;
	for (var i=1; i<newArray.length; i++){
        if(espacio){
            mayuscula += newArray[i].toUpperCase();
            espacio =false;
        }else
		mayuscula += newArray[i];
		if(newArray[i] ==" ")
		espacio = true;
					
		}
	return mayuscula;
}























