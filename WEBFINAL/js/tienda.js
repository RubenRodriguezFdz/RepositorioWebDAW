/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    document.getElementById('hogar').style.display = "none";
    document.getElementById('accesorios').style.display = "";
    var parametro = getUrlVars()["action"];
    console.log(parametro);

    if (parametro === 'exists') {
        alert('El producto seleccionado ya existe en su carrito');
    }
    if (parametro === 'added') {
        alert('El producto seleccionado ha sido añadido a su carrito');
        console.log('El producto seleccionado ha sido añadido a su carrito');
    }
};

function bolsos() {
    document.getElementById('bolsos').style.display = "";
    document.getElementById('bisuteria').style.display = "none";
    document.getElementById('accesorios').style.display = "none";
}

function bisuteria() {
    document.getElementById('bolsos').style.display = "none";
    document.getElementById('bisuteria').style.display = "";
    document.getElementById('accesorios').style.display = "none";
}

function accesorios() {
    document.getElementById('bolsos').style.display = "none";
    document.getElementById('bisuteria').style.display = "none";
    document.getElementById('accesorios').style.display = "";
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function seleccionarProd() {

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = processAnswer;
        peticion_http.open("POST", 'php/cart.php', true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}
function crearJSON(id, nombre, precio, cantidad) {
    var cadena = '{"id":"'+id+'","nombre":"'+nombre+'","precio":"'+precio+'","cantidad":"'+ cantidad+'"}';
    var objetoJSON = new Object();

    objetoJSON.producto = cadena;

    var objetoEnviar = JSON.stringify(objetoJSON);

    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.open("POST", 'php/cart2.php', true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}