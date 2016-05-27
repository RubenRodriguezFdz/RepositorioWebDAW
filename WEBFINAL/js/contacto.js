/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 12/05/16
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion=
 * */
/*
 * Copyright (C) 2016 Rubén Rodríguez Fernández
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Se definen las variables de validacion del formulario.
var nameVal = false;
var emailVal = false;
var mensajeVal = false;

/**
 * validaNombre: valida la introdución de un nombre correcto en el formulario
 *              Comprueba que la cadena introducida son letras con o sin espacios
 *              En caso contrario settea la variable de validacion
 *              Si todo es correcto settea la variable a true
 */
function validaNombre () {
    var name = $("input#nameCont").val();
    if (!(/^[A-Z a-z áÁéÉíÍóÓúÚñÑ]+$/.test(name)) || name == "") {
        nameVal = false;
        $("input#nameCont").val("");
    }else{
        nameVal = true;
    }
}

/**
 * validaEmail: valida la introdución de un email correcto en el formulario
 *              Comprueba que la cadena introducida se trata de un email
 *              En caso contrario settea la variable de validacion a false
 *              Si todo es correcto settea la variable a true
 */
function validaEmail () {
    var email = $("input#emailCont").val();
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) || email == "") {
        emailVal = false;
        $("input#emailCont").val("");
    }else{
        emailVal = true;
    }
}

/**
 * validaMensaje: valida la introdución de un mensaje
 *              Comprueba que se ha rellenado el mensaje
 *              En caso contrario settea la variable de validacion
 *              Si todo es correcto settea la variable a true
 */
function validaMensaje () {
    var mens = $("#messageCont").val();
    if (mens == "") {
        mensajeVal = false;
        $("input#messageCont").val("");
    }else{
        mensajeVal = true;
    }
}

/**
 * valida : valida que todas las variables validación sean correctas.
 *          Evalua que todas las variables sean true.
 *          En caso correcto, se enviara la consulta, se avisará al usuario, y se borraran todos los campos
 *          En caso incorrecto, se avisará al usuario del error producido
 */
function valida () {
    validaNombre();
    validaEmail();
    validaMensaje();
    if (nameVal === true && emailVal === true && mensajeVal === true){
        alert("Su consulta ha sido realizada. Gracias por su tiempo");
        $("input#nameCont").val("");
        $("input#emailCont").val("");
        $("#messageCont").val("");
        $("#mensajeContacto").html('Rellene todos los campos obligatorios correctamente y pulse "Enviar"');
    }else{
        var mensaje = 'Errores en el formulario de contacto:<br>';
        $("#mensajeContacto").html('Errores en el formulario de contacto:<br>');
        if (nameVal === false){
            mensaje += 'Error en el nombre: Introduzca letras con o sin espacios<br>';
        }
        if (emailVal === false){
            mensaje += 'Error en el email: Introduzca un email correcto. Ej: ejemplo@ejemplo.com<br>';
        }
        if (mensajeVal === false){
            mensaje += 'Error en el mensage. Introduzca su consulta<br>';
        }
        $("#mensajeContacto").html(mensaje);
    }
}