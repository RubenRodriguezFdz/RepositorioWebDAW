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
var peticion_http;

//funcion que inicia el proceso de consulta al servidor para saber cuantos 
//  productos han sido seleccionados
function obtenerContador() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer;
        peticion_http.open("POST", 'php/contador.php', true);
        peticion_http.send();
    }
}


//funcion para gestiornar la respuesta del servidor a cuantos productos hay
//   seleccionados en nuestro carrito.
function processAnswer() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var destino = document.getElementById('mini');
            var documentJSON = JSON.parse(peticion_http.responseText);
            destino.innerHTML = documentJSON.contador;
        }
    }
}

obtenerContador();