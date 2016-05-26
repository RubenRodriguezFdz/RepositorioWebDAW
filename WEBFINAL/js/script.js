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

$.post("php/logActive.php", null, function (data) {
    console.log(data);
    var request = JSON.parse(data);
    if (request.mensaje){
        $("#registerLogin").html("Bienvenido " + request.login + "<button onclick='closeSession'>Cerrar</button>");
    }
});

/**
 * Registra el logeo. En caso de que la respuesta del servidor sea correcta, desaparecerá el botón de login
 * y dará la bienvenida al usuario.
 * En caso de que el servidor devuelva error, se avisará al usuario.
 */
function closeSession () {
    $.post("php/closeSession.php", null, function () {
            $("#registerLogin").html("<div class='dropdown-grids'><div id='loginContainer'>" +
                "<a id='loginButton'>" +
                "<span>Login</span></a><div style='display: none;' id='loginBox'>" +
                "<form id='loginForm'><div class='login-grids'><div class='login-grid-left'>" +
                "<fieldset id='body'><fieldset><label for='loginup'>Login</label>" +
                "<input name='loginup' id='loginup' type='text'></fieldset><fieldset>" +
                "<label for='password'>Password</label>" +
                "<input name='password' id='password' type='password'></fieldset>" +
                "<div id='errorLogin' style='color: red;'></div>" +
                "<input id='login' value='Sign in' type='button' onclick='openSession()'>" +
                "<label for='checkbox'><input id='checkbox' type='checkbox'><i>Remember me</i>" +
                "</label></fieldset><span><a href=''#'>Forgot your password?</a></span>" +
                "<div class='or-grid'><p>OR</p></div><div class='social-sits'>" +
                "<div class='facebook-button'><a href='#'>Connect with Facebook</a></div>" +
                "<div class='chrome-button'><a href='#'>Connect with Google</a></div>" +
                "<div class='button-bottom'><p> New account? <a href='signup.html'>Signup</a>" +
                "</p></div></div></div></div></form></div></div></div></div>");
        });
    }

/**
 * Registra el logeo. En caso de que la respuesta del servidor sea correcta, desaparecerá el botón de login
 * y dará la bienvenida al usuario.
 * En caso de que el servidor devuelva error, se avisará al usuario.
 */
function openSession () {
    $.post("php/logearse.php", "loginup=" + $("#loginup").val() + "&password=" + $("#password").val(), function (data) {
        console.log(data);
        var request = JSON.parse(data);
        if (request.mensaje === "Correct"){
            $("#registerLogin").html("Bienvenido " + request.parametros.nombre + "<button onclick='closeSession()'>Cerrar</button>");
            $("#errorLogin").html("");
        }else{
            $("#errorLogin").html('Error en el login');
        }
    })
}


//Se llama por defecto a la funcion erroresPHP para que se ejecute
erroresPHP();