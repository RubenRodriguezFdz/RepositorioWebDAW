/**
 * Autor= Nassim El Boussaidi
 * Fecha= 02-jun-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= JavaScript de HandsMade
 * */
/*
 * Copyright (C) 2016 Nassim
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




var READY_STATE_COMPLETE = 4;
var STATUS_RIGTH = 200;
var peticion_http = null;

function hogar(elemento) {
    document.getElementById('hogar').style.display = "";
    document.getElementById('accesorios').style.display = "none";
    console.log(elemento.nextSibling.nextSibling.nodeName);
    elemento.className = "list-group-item active";
    elemento.nextSibling.nextSibling.className = "list-group-item";
}

function accesorios(elemento) {
    document.getElementById('hogar').style.display = "none";
    document.getElementById('accesorios').style.display = "";
    console.log(elemento.previousSibling.previousSibling.nodeName);
    elemento.className = "list-group-item active";
    elemento.previousSibling.previousSibling.className = "list-group-item";
}

function seleccionarProd(elemento) {
    var element = elemento.parentElement.previousSibling.previousSibling.childNodes;
    var input = element[1];
    var cantidad = $(input).val();
    var id = input.getAttribute("id");

    var JSONObject = new Object();
    JSONObject.id = id;
    JSONObject.cantidad = cantidad;
    var objeto_json = JSON.stringify(JSONObject);
    enviarPeticion(objeto_json);
}

function enviarPeticion(objeto) {
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "php/add_to_cart.php", true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send("json=" + objeto);
    }
}

function procesaRespuesta() {

    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var documentJSON = JSON.parse(peticion_http.responseText);
            var mensaje = documentJSON.mensaje;
            var contador = documentJSON.contador;
            alert(mensaje);
//            $("#registerLogin").hide();
//            $("#mini").html(contador);
            document.getElementById('mini').innerHTML = contador;
        }
    }
}

