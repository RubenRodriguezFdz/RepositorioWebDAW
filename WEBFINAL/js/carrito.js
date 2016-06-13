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


window.onload = function () {
    obtenerDatosServidor();
};


//funcion para inciciar la peticion al servidor y cargar los productos en nuestro carrito
function obtenerDatosServidor() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer222;
        peticion_http.open("POST", 'php/cart.php', true);
        peticion_http.send();
    }
}
//funcion para procesar la respuesta del servidor con los productos seleccionados
function processAnswer222() {
    if (peticion_http.readyState == READY_STATE_COMPLETE) {
        if (peticion_http.status == STATUS_RIGTH) {
            var precioTotal = 0;
            var destino = document.getElementById('carro');
            var documentJSON = JSON.parse(peticion_http.responseText);
            var productos = documentJSON.productos;
            if (productos !== 'no') {
                destino.innerHTML = "";
                var string = "<table class='table table-hover table-responsive table-bordered'>";
                string += "<tr>";
                string += "<th class='textAlignLeft'>Nombre del producto</th>";
                string += "<th>precio (EUR)</th>";
                string += "<th>Cantidad</th>";
                string += "<th>Accion</th>";
                string += "</tr>";

                var num = productos.length - 1;
                
                for (var i = 0; i < productos.length - 1; i++) {
                    
                    var id = productos[i].id_prod;
                    var identi = id.toString();
                    string += "<tr>";
                    string += "<td>" + productos[i].nombre_prod + "</td>";
                    string += "<td>" + productos[i].precio_prod + "</td>";
                    string += "<td>" + productos[num][identi] + "</td>";
                    string += "<td>";
                    string += "<a href='php/remove_from_cart.php?id=" + productos[i].id_prod + "' class='btn btn-danger'>";
                    string += "<span class='glyphicon glyphicon-remove'></span> Eliminar";
                    string += "</a>";
                    string += "</td>";
                    string += "</tr>";
                    precioTotal += parseFloat(productos[i].precio_prod) * parseFloat(productos[num][identi]);
                }

                string += "<tr>";
                string += '<td colspan="2"><b>Total</b></td>';
                string += "<td>€" + precioTotal.toFixed(2) + "</td>";
                string += "<td>";
                string += "<a onclick='logActive()' class='btn btn-success'>";
                string += "<span class='glyphicon glyphicon-shopping-cart'></span> Facturar";
                string += "</a>";
                string += "</td>";
                string += "</tr>";
                string += "</table>";

                destino.innerHTML = string;
            }else{
                destino.innerHTML = "<img class='col-md-12' src='images/carro-de.png' alt=''>";
                alert("No hay productos seleccionados");
            }

        }
    }
}