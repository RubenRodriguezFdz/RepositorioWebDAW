/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var READY_STATE_COMPLETE = 4;
var STATUS_RIGTH = 200;
var peticion_http = null;
var objeto_destino;
window.onload = function () {
    obtenerDatosServidor();
};
function obtenerDatosServidor() {

    objeto_destino = document.getElementById('carro');
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer;
        peticion_http.open("POST", 'php/cart.php', true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}

function processAnswer() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var precioTotal = 0;
            var destino = document.getElementById('carro');
            var documentJSON = JSON.parse(peticion_http.responseText);
            console.log(documentJSON.productos.name);
            var productos = documentJSON.productos;
            
            destino.innerHTML = "";
            var string = "<table class='table table-hover table-responsive table-bordered'>";
            string += "<tr>";
            string += "<th class='textAlignLeft'>Nombre del producto</th>";
            string += "<th>precio (EUR)</th>";
            string += "<th>Accion</th>";
            string += "</tr>";
            string += "<tr>";
            for (var i = 0; i < productos.length; i++) {

                string += '<td style="display:none;">' + productos[i].id + '</td>';
                string += "<td>" + productos[i].nombre + "</td>";
                string += "<td>" + productos[i].precio + "</td>";
                string += "<td>";
                string += "<a href='remove_from_cart.php?id=" + productos[i].id + "&name={$name}' class='btn btn-danger'>";
                string += "<span class='glyphicon glyphicon-remove'></span> Borrar artículo";
                string += "</a>";
                string += "</td>";
                string += "</tr>";
            }

            string += "<tr>";
            string += "<td><b>Total</b></td>";
            string += "<td>€" + precioTotal + "</td>";
            string += "<td>";
            string += "<a href='#' class='btn btn-success'>";
            string += "<span class='glyphicon glyphicon-shopping-cart'></span> Facturar";
            string += "</a>";
            string += "</td>";
            string += "</tr>";
            string += "</table>";

            destino.innerHTML = string;
        }
    }
}

  