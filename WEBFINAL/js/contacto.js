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
 * valida : valida que todas las variables validación sean correctas.
 *          Evalua que todas las variables sean true.
 *          En caso correcto, se habilitará el botón de envio y se modificará el mensaje.
 *          En caso incorrecto, se inhabilitará el botón de envio y se modificará el mensaje.
 */
function valida(){
    if (nameVal == false || emailVal == false || mensajeVal == false) {
        $("#enviarContacto").attr("disabled", true);
        $("#mensajeContacto").text('Rellene todos los campos obligatorios correctamente y pulse "Enviar"');
    }else{
        $("#enviarContacto").attr("disabled", false);
        $("#mensajeContacto").text('Pulse "Enviar" para ponerse en contacto con nosotros');
    }
};

$("input#nameCont").on('input', function () {
    if (!(/^[A-Z a-z áÁéÉíÍóÓúÚñÑ]+$/.test($("input#nombre").val())) || $("input#nombre").val() == "") {
        $("input#nameCont").html("<img src='images/icono_false.png' width='20px' height='20px'> Introduzca letras y/o espacios");
        if ($("input#nombre").val() == ""){
            $("#errorNombre").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
        }
        nombreVal = false;
        valida();
    }else{
        $("#errorNombre").html("<img src='images/icono_true.png' width='20px' height='20px'> Nombre Correcto");
        nombreVal = true;
        valida();
    }
});