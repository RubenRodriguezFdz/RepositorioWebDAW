/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 15-Abr-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= JavaScript de HandsMade
 * */
/*
 * Copyright (C) 2016 Ruben
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


/**
 * erroresPHP : extract the url of the insert image
 *
 * @param input {type} HTML Element
 * @param field_name {type} string
 * @param win {type} window Object
 */

//Funcion que evalua los errores devueltos por el PHP
//En caso de que el PHP devuelva algun error, dicha funcion investigara el tipo de error.
//El PHP devuelve el error a traves de una variable definida en la url
function erroresPHP() {
    //Se extrae la variable definida en la url
    var paramstr = window.location.search.substr(1);
    var paramarr = paramstr.split("&");
    var params = {};
    //Se extrae la variable pasado por  url
    for (var i = 0; i < paramarr.length; i++) {
        var tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    //En caso de que la variable definida sea mensaje se accede al if.
    //Se rellena el mensaje con el mensaje y se muestra
    //En caso contrario se oculta el div mensaje
    if (params['mensaje']) {
        alert(params['mensaje']);
        $("#mensajePHP").show();
        //Dependiendo del tipo de error devuelto se mostrara un mensaje u otro
        if (params['mensaje'] == "errorUsuario") {
            // Error correspondiente a la introducción de datos del usuario.
            $("#mensajePHP").html("Ha ocurrido un error en la introducción del usuario en la base de datos.");
        }
        if (params['mensaje'] == "usuarioExistente") {
            // Usuario existente en la base de datos
            $("#mensajePHP").html("El login ya se encuentra registrado. Elija otro diferente.");
        }
        if (params['mensaje'] == "campoErroneo") {
            // Existe algun campo erroneo
            $("#mensajePHP").html("Alguno de los campos introducidos es incorrecto. Rellene de nuevo el formulario.");
        }
    } else {
        //Se oculta el div mensaje
        $("#mensajePHP").hide();
    }
}

/**
 * Evalua al cargar la pagina si el login esta activo.
 * Si esta activo, oculta el login y da la bienvenida al usuario
 */
$.post("php/logActive.php", null, function (data) {
    console.log(data);
    var request = JSON.parse(data);
    if (request.mensaje){
        $("#registerLogin").hide();
        $("#logActive").html("Bienvenido " + request.login + "<a class='newButton btn btn-default work-btn' onclick='closeSession()'>Cerrar</a>");
    }
});

/**
 *  closeSession: Cierra la sesion iniciada por el usuario. Oculta el mensaje de bienvenida y muestra 
 *                de nuevo el boton de login
 */
function closeSession () {
    $.post("php/closeSession.php", null, function () {
        $("#registerLogin").show();
        $("#logActive").html("");
        });
    }

/**
 * openSession: Registra el logeo. En caso de que la respuesta del servidor sea correcta, desaparecerá el botón de login
 *              y dará la bienvenida al usuario.
 *              En caso de que el servidor devuelva error, se avisará al usuario.
 */
function openSession () {
    $.post("php/logearse.php", "log=" + $("#loginup").val() + "&password=" + $("#password").val(), function (data) {
        console.log(data);
        var request = JSON.parse(data);
        if (request.mensaje === "Correct"){
            $("#registerLogin").hide();
            $("#logActive").html("Bienvenido " + request.parametros.login + "<a class='newButton btn btn-default work-btn' onclick='closeSession()'>Cerrar</a>");
            $("#errorLogin").html("");
        }else{
            $("#password").val("");
            $("#errorLogin").html('Error en el login.<br>Usuario o Contraseña incorrectos');
        }
    })
}
// BLOQUE COOKIES
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
$(document).ready(function () {
    if(getCookie('HandsMade')!="1"){
        document.getElementById("barraaceptacion").style.display="block";
    }else{
        document.getElementById("barraaceptacion").style.display="none";
    }
});
function PonerCookie(){
    setCookie('HandsMade','1',365);
    document.getElementById("barraaceptacion").style.display="none";
}

// FIN BLOQUE COOKIES

//Se llama por defecto a la funcion erroresPHP para que se ejecute
erroresPHP();