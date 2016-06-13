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




// funcion que inicicia la orden al servidor para que guarde el pedido del cliente
//   en la tabla de pedidos
function guardarCompra() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesarMensaje;
        peticion_http.open("POST", 'php/pedido.php', true);
        peticion_http.send();
    }
}


//funcoin que evalua si el sirvidor ha guardado o no el pedido en la tabla
//  de pedidos.
// en caso correcto le rederige a la pagina factura.html para mostrar la factura de su compra
function procesarMensaje() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var documentJSON = JSON.parse(peticion_http.responseText);
            var mensaje = documentJSON.mensaje;
            if (mensaje === 'si') {
                window.location.replace("factura.html");
            }
        }
    }
}

/**
 * Evalua al cargar la pagina si el login esta activo.
 * Si esta activo, oculta el login y da la bienvenida al usuario
 */
function logActive() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesarLogin;
        peticion_http.open("POST", 'php/logActive.php', true);
        peticion_http.send();
    }
}

function procesarLogin() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var documentJSON = JSON.parse(peticion_http.responseText);
            var mensaje = documentJSON.mensaje;
            if (mensaje) {
                $("#registerLogin").hide();
                $("#logActive").html("Bienvenido " + documentJSON.login + "<a class='newButton btn btn-default work-btn' onclick='closeSession()'>Cerrar</a>");
                guardarCompra();
            } else {
                alert('Para realizar la compra tiene que logearse con su usuario!!');
            }
        }
    }


}
