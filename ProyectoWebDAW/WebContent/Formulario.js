/**
 * Autor = Rubén Rodríguez Fernández
 * Fecha = 10 de dic. de 2015
 * Licencia = GPL 30
 * Versión = 1.0
 * Descripción = Script del formulario de contacto
 */

/**
 * Copyright (C) 2015 Rubén Rodríguez Fernández
 * 
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

//Funcion que habilita el boton submit en caso de que se pulse el checkbox "terminos" o lo deshabilita
function changeTerminos() {
	//Si esta checkeado "terminos"
	if (document.getElementById("terminos").checked==true){
		//Se habilita el boton "envio"
		document.getElementById("envio").disabled=false;
	}else{//Si esta no checkeado "terminos"
		//Se deshabilita el boton "envio"
		document.getElementById("envio").disabled=true;
	}
}

//Funcion de validación global de todo el formulario que devolverá true en caso de que el formulario se haya 
//rellenado correctamente, y false en caso de que se haya rellenado incorrectamente.
function validar() {
	//Se validan todos los campos y se almacenan en variables su resultados. False incorrecto True correcto
	var nombre = validaNombre();
	
	//si alguno de ellos devuelve false
	if (nombre == false){
		//Se retorna false
		return false;
	}else{//Si todos son correctos se devuelve true
		return true;
	}
}


//Funcion que valida en nombre. Debe ser letras mayusculas o minusculas con o sin espacios.
//En caso de no validar devuelve error y retorna false.
function validaNombre(){
	//Se almacena el valor del campo "nombre" en una variable
	var nombre = document.getElementById("nombre").value;
	
	//Si el nombre contien algun caracter que no sea letra o espacio
	if (!(/^[A-Z a-z]+$/.test(nombre))){
		//Se devuelve mensaje de error
		alert ("Nombre introducido incorrecto. Debe introducirse un nombre con letras, mayusculas o minusculas, y/o espacios");
		//Se vacia el campo "nombre"
		document.getElementById("nombre").value = "";
		//Se inhabilita el envio del formulario
		inhabilitar();
		//la funcion retorna false
		return false;
	}else{//si el campo "nombre" esta bien introducido
		//La funcion retorna true
		return true;
	}
}

//Funcion que valida en apellidos. Debe ser letras mayusculas o minusculas con o sin espacios.
//En caso de no validar devuelve error y retorna false.
function validaApellidos(){
	//Se almacena el valor del campo "apellidos" en una variable
	var apellidos = document.getElementById("apellidos").value;
	
	//Si el nombre contien algun caracter que no sea letra o espacio
	if (!(/^[A-Z a-z]+$/.test(apellidos))){
		//Se devuelve mensaje de error
		alert ("Apellidos introducidos incorrectos. Deben introducirse apellidos con letras, mayusculas o minusculas, y/o espacios");
		//Se vacia el campo "apellidos"
		document.getElementById("apellidos").value = "";
		//Se inhabilita el envio del formulario
		inhabilitar();
		//la funcion retorna false
		return false;
	}else{//si el campo "apellidos" esta bien introducido
		//La funcion retorna true
		return true;
	}
}

//Funcion que valida la fecha. Si la fecha es incorrecta devolvera error y que ha sido mal introducido.
//Si la  fecha es correcta devolvera true.
function validaFecha() {
	//Almacenamos en una variable el valor del campo "fecha"
	var fecha = document.getElementById("fecha").value;
	//Se almacena en variables dia mes año
	var dia = fecha.charAt(0) + fecha.charAt(1);
	var mes = fecha.charAt(3) + fecha.charAt(4);
	var ano = fecha.charAt(6) + fecha.charAt(7);
	
	//se comprueba el correcto formato de cada uno
	if ((dia < 0 || dia >31) || (mes < 0 || mes > 12) || ano != 19){
		//Si el error esta en el dia
		if (dia < 0 || dia >31){
			alert ("El dia debe estar entre 01 y 31");
			//Se vacia el dia
			dia = "";
		}
		//Si el error esta en el mes
		if (mes < 0 || mes >12){
			alert ("El mes debe estar entre 01 y 12");
			//Se vacia el mes
			mes = "";
		}
		//Si el error esta en el año
		if (ano != 19){
			alert ("El año debe estar entre 1900 y 1999");
			//Se vacia el año
			ano = "";
		}else{
			//Si el año es correcto se devuelve completo el año
			ano += fecha.charAt(8) + fecha.charAt(8);
		}
		//Se modifica la fecha quitando los datos mal introducidos
		fecha = dia + "/" + mes + "/" + ano + fecha.charAt(8) + fecha.charAt(8);
		//Se rellena el campo con los datos correctos y sin los incorrectos
		document.getElementById("fecha").value = fecha;
		//Se inhabilita el envio del formulario
		inhabilitar();
		//Se devuelve False
	return false;
	}else{//Si esta todo correcto se decuelve true
		return true;
	}
}

//Funcion que valida el telefono. Comprueba que el telefono empieza por 6 o por 9
function validaTelefono() {
	//Almaceno el telefono en una variable
	var tel = document.getElementById("telefono").value;
	//Se comprueba que el telefono comienza por 6 o 9
	if (tel.charAt(0) != 9 && tel.charAt(0) != 6){
		//Si no se cumple se devuelve mensaje de error y retorna false
		alert ("Error de introducción de telefono. El primer número debe ser un 9 o un 6");
		//Se borra el telefono mal introducido
		document.getElementById("telefono").value = "";
		//Se inhabilita el envio del formulario
		inhabilitar();
		return false;
	}else{//Si es correcto se devuelve true
		return true;
	}
}


//Funcion que valida la clave.
function validaClave (){
	//se almacena la clave en un variable
	var clave = document.getElementById("clave").value;
	//Se evalua la cadena
	if (!(/^[A-Za-z]{1}\d{2}\W{1}[A-Za-z]{1}$/.test(clave))){
		//Si es incorrecto se devuelve mensaje de error
		alert ("Error de introducción de clave. Ejemplo válido: A67@b");
		//Se borra el campo clave
		document.getElementById("clave").value = "";
		//Se inhabilita el envio del formulario
		inhabilitar();
		//Se retorna false
		return false;
	}else{//Si todo es correcto se devuelve true
		return true;
	}
}

//Funcion que valida todos los campos al ser modificados para que si se encuentran vacios se inhabilite el boton "terminos"
function valEnvio() {
	//se almacenan los campos en variables
	var nombre = document.getElementById("nombre").value;
	var apellido1 = document.getElementById("apellido1").value;
	var apellido2 = document.getElementById("apellido1").value;
	var email = document.getElementById("email").value;
	var telMovil = document.getElementById("telMovil").value;
	var descripcion = document.getElementById("descripcion").value;
	var asunto = document.getElementById("asunto").value;

	//Se comprueba que ninguna de las variables esta vacia
	if (nombre == "" || apellido1 == "" || apellido2 == "" || email == "" || telMovil == "" || descripcion == "" || asunto ==""){
		//Si alguna esta vacia
		inhabilitar();
	}else{ //Si todos estan relleno se habilita terminos
		document.getElementById("terminos").disabled=false;
	}
}

//Funcion que inhabilita el envio del formulario
function inhabilitar (){
	document.getElementById("terminos").disabled=true;//Se inhabilita terminos
	document.getElementById("terminos").checked=false;//Se descheckea terminos
	document.getElementById("envio").disabled=true;//Se inhabilita envio
}
