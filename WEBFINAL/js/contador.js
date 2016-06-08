/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var READY_STATE_COMPLETE = 4;
var STATUS_RIGTH = 200;
var peticion_http = null;

function obtenerContador() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer;
        peticion_http.open("POST", 'php/contador.php', true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}

function processAnswer() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === STATUS_RIGTH) {

            var destino = document.getElementById('mini');
            var documentJSON = JSON.parse(peticion_http.responseText);
            var contador = documentJSON.contador;

            if (contador === "") {
                destino.innerHTML = 0;
            } else {
                destino.innerHTML = contador;
            }
        }
    }
}
obtenerContador();