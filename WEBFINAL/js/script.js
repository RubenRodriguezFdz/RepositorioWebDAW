/**
 * Created by chubi on 26/05/16.
 */
/**
 * erroresPHP : extract the url of the insert image
 *
 * @param input {type} HTML Element
 * @param field_name {type} string
 * @param win {type} window Object
 */

//Funcion que evalua los errores devueltos por el PHP
//En caso de que el PHP devuelva algun error, dicha funcion investigara el tipo de error.
//El PHP devuelve el error a traves de una variable definida en la url
function erroresPHP() {
    //Se extrae la variable definida en la url
    var paramstr = window.location.search.substr(1);
    var paramarr = paramstr.split("&");
    var params = {};
    //Se extrae la variable pasado por  url
    for (var i = 0; i < paramarr.length; i++) {
        var tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    //En caso de que la variable definida sea mensaje se accede al if.
    //Se rellena el mensaje con el mensaje y se muestra
    //En caso contrario se oculta el div mensaje
    if (params['mensaje']) {
        $("#mensajePHP").show();
        //Dependiendo del tipo de error devuelto se mostrara un mensaje u otro
        if (params['mensaje'] == "errorUsuario") {
            //Error correspondiente a la introducción de datos del usuario.
            $("#mensajePHP").html("Ha ocurrido un error en la introducción del usuario en la base de datos.");
        }
    } else {
        //Se oculta el div mensaje
        $("#mensajePHP").hide();
    }
}

/**
 * Evalua al cargar la pagina si el login esta activo.
 * Si esta activo, oculta el login y da la bienvenida al usuario
 */
$.post("php/logActive.php", null, function (data) {
    console.log(data);
    var request = JSON.parse(data);
    if (request.mensaje){
        $("#registerLogin").hide();
        $("#logActive").html("Bienvenido " + request.login + "<button class='newButton' onclick='closeSession()'>Cerrar</button>");
    }
});

/**
 *  closeSession: Cierra la sesion iniciada por el usuario. Oculta el mensaje de bienvenida y muestra 
 *                de nuevo el boton de login
 */
function closeSession () {
    $.post("php/closeSession.php", null, function () {
        $("#registerLogin").show();
        $("#logActive").html("");
        });
    }

/**
 * openSession: Registra el logeo. En caso de que la respuesta del servidor sea correcta, desaparecerá el botón de login
 *              y dará la bienvenida al usuario.
 *              En caso de que el servidor devuelva error, se avisará al usuario.
 */
function openSession () {
    $.post("php/logearse.php", "loginup=" + $("#loginup").val() + "&password=" + $("#password").val(), function (data) {
        console.log(data);
        var request = JSON.parse(data);
        if (request.mensaje === "Correct"){
            $("#registerLogin").hide();
            $("#logActive").html("Bienvenido " + request.parametros.nombre + "<button class='newButton' onclick='closeSession()'>Cerrar</button>");
            $("#errorLogin").html("");
        }else{
            $("#errorLogin").html('Error en el login');
        }
    })
}


//Se llama por defecto a la funcion erroresPHP para que se ejecute
erroresPHP();