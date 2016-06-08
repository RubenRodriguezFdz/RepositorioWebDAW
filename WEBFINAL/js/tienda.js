/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
        peticion_http.send("json=" +objeto);
    }
}

function procesaRespuesta() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {

            var documentJSON = JSON.parse(peticion_http.responseText);
            var mensaje = documentJSON.mensaje;
            alert(mensaje);
        }
    }
}

