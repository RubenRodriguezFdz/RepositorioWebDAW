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


//funcion para inciciar la peticion al servidor y cargar los productos en nuestro carrito
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
function processAnswer2() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
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
                string += "<a href='thanksCompra.html' class='btn btn-success'>";
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