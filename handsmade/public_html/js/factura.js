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


window.onload = function () {
    obtenerDatosServidor();
};


//funcion para que incicia la peticion al servidor para cargar los productos seleccionados.
function obtenerDatosServidor() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer2;
        peticion_http.open("POST", 'php/cart.php', true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}
//funcion para procesar la respuesta del servidor con los productos seleccionados
//y cargarlos en nuestro docuement html
function processAnswer2() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var precioTotal = 0;
            var documentJSON = JSON.parse(peticion_http.responseText);
            var productos = documentJSON.productos;
            
            //formmaos la tabla que será la factura en pantalla para el cliente 
            // que realiza la compra
                var string = "";
                string += "<table class='table table-hover table-responsive table-bordered'>";
                string += "<tr>";
                string += "<th class='textAlignLeft'>Nombre del producto</th>";
                string += "<th>Unidades</th>";
                string += "<th>precio (EUR)</th>";
                string += "</tr>";

                var num = productos.length - 1;
                
                for (var i = 0; i < productos.length - 1; i++) {
                    
                    var id = productos[i].id_prod;
                    var identi = id.toString();
                    string += "<tr>";
                    string += "<td>" + productos[i].nombre_prod + "</td>";
                    string += "<td>" + productos[num][identi] + "</td>";
                    string += "<td>" + productos[i].precio_prod + "</td>";
                    string += "</tr>";
                    precioTotal += parseFloat(productos[i].precio_prod) * parseFloat(productos[num][identi]);
                }

                string += "<tr>";
                string += '<td colspan="2"><b>Total a pagar</b></td>';
                string += "<td>" + precioTotal.toFixed(2) + "€</td>";
                string += "</tr>";
                string += "</table>";
                
                $(string).insertBefore( ".carousel-inner" );
                
                insertarFactura();
                borrarSession();

        }
    }
}


//funcion para insertar los datos del los productos en la tabla facturas
function insertarFactura(){
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.open("POST", 'php/insertarFactura.php', true);
        peticion_http.send();
    }
}

//despues de guardar todo y realizar la compra se borra la session 
function borrarSession(){
     peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.open("POST", 'php/vaciarCarrito.php', true);
        peticion_http.send();
    }
}