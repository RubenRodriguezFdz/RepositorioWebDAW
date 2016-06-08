/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var READY_STATE_COMPLETE = 4;
var STATUS_RIGTH = 200;
var peticion_http = null;


window.onload = function () {
    cerrarCompra();
};

//funcion para inciciar la peticion al servidor 
function cerrarCompra() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer2;
        peticion_http.open("POST", 'php/closeSession.php', true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}

function processAnswer2() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {
            var documentJSON = JSON.parse(peticion_http.responseText);
            var mensaje = documentJSON.mensaje;
            alert(mensaje);


        }
    }
}