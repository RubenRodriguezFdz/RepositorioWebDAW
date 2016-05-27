/**
 * Created by Chubi on 02/04/2016.
 */

$(function(){//DOM Ready

    // Se definen las variables de validacion del formulario.
    // Se inicalizan a false excepto telefono2 ya que podrá estar vacia
    var logVal = false;
    var passVal = false;
    var passConVal = false;
    var nombreVal = false;
    var apellidosVal = false;
    var dniVal = false;
    var emailVal = false;
    var direccionVal = false;
    var tel1Val = false;
    var tel2Val = true;
    
    /**
     * valida : valida que todas las variables validación sean correctas.
     *          Evalua que todas las variables sean true.
     *          En caso correcto, se habilitará el botón de envio y se modificará el mensaje.
     *          En caso incorrecto, se inhabilitará el botón de envio y se modificará el mensaje.
     */
    function valida(){
       if (logVal == false || passVal == false || passConVal == false || nombreVal == false || apellidosVal == false || dniVal == false
       || emailVal == false || direccionVal == false || tel1Val == false || tel2Val == false) {
           $("#registrar").attr("disabled", true);
           $("#regMen").text('Rellene todos los campos obligatorios correctamente y pulse "Registrar"');
       }else{
           $("#registrar").attr("disabled", false);
           $("#regMen").text('Formulario de registro correcto. Pulse "Registrar" para registrarse');
       }
    };

    /**
    * Función que valida dinámicamente la introdución de un login en el formulario
    * Comprueba que la cadena introducida son caracteres alfanuméricos sin espacios con un mínimo de 5 caracteres.
    * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
    * Si el login es correcto accede a la base de datos para comprobar que el login no se encuentra usado
    * Si se encuentra en la base de datos, introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
    * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#log").on('input',function(){
        if ($("input#log").val().length < 5) {
            $("#errorLog").html("<img src='images/icono_false.png' width='20px' height='20px'> Mínimo 5 caracteres");
            if ($("input#log").val() == ""){
                $("#errorLog").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            logVal = false;
            valida();
        }else{
            if (!(/^[A-Za-z0-9]+$/.test($("input#log").val())) || $("input#log").val() == "") {
                $("#errorLog").html("<img src='images/icono_false.png' width='20px' height='20px'> Introduzca caracteres alfanuméricos");
                logVal = false;
                valida();
            }else{
                // Comprobacion de que el login no se encuentra en la base de datos
                // Se realiza la peticion AJAX y se comprueba que el login no esta en la base de datos
                $.post("php/login.php", "login=" + $("#log").val(), function (data, status) {
                    var LogResult = $(data).find("log").text();
                    if (LogResult === "false"){
                        $("#errorLog").html("<img src='images/icono_false.png' width='20px' height='20px'> Login Existente");
                        logVal = false;
                        valida();
                    }else {
                        $("#errorLog").html("<img src='images/icono_true.png' width='20px' height='20px'> Login Correcto");
                        logVal = true;
                        valida();
                    }
                });
            }
        }
    });

    /**
     * Función que valida dinámicamente la introdución de un password en el formulario
     * Comprueba que la cadena introducida son caracteres alfanuméricos sin espacios con un mínimo de 5 caracteres.
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#pass").on('input',function(){
        if ($("input#pass").val().length < 5){
            $("#errorPass").html("<img src='images/icono_false.png' width='20px' height='20px'> Mínimo 5 caracteres");
            if ($("input#pass").val() == ""){
                $("#errorPass").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            passVal = false;
            valida();
        }else{
            if (!(/^[A-Za-z0-9]+$/.test($("input#pass").val())) || $("input#pass").val() == "") {
                $("#errorPass").html("<img src='images/icono_false.png' width='20px' height='20px'> Introduzca caracteres alfanuméricos");
                passVal = false;
                valida();
            }else{
                $("#errorPass").html("<img src='images/icono_true.png' width='20px' height='20px'> Password Correcto");
                passVal = true;
                valida();
            }
        }
    });

    /**
     * Función que valida dinámicamente la introdución de la confirmación del password en el formulario
     * Comprueba que la cadena introducida coincida con la del campo password
     * En caso contrario introduce el error en el campo div de su error, settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#passConf").on('input',function(){
        if ($("input#passConf").val() != $("input#pass").val()){
            $("#errorConf").html("<img src='images/icono_false.png' width='20px' height='20px'> Password no coincidente");
            if ($("input#passConf").val() == ""){
                $("#errorConf").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            passConVal = false;
            valida();
        }else{
            $("#errorConf").html("<img src='images/icono_true.png' width='20px' height='20px'> Password coincidente");
            passConVal = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución de un nombre en el formulario
     * Comprueba que la cadena introducida son letras con o sin espacios
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#nombre").on('input',function(){
        if (!(/^[A-Za-záÁéÉíÍóÓúÚñÑ]{1}[A-Z a-z áÁéÉíÍóÓúÚñÑ]*$/.test($("input#nombre").val())) || $("input#nombre").val() == "") {
            $("#errorNombre").html("<img src='images/icono_false.png' width='20px' height='20px'> Introduzca letras y/o espacios");
            if ($("input#nombre").val() == ""){
                $("#errorNombre").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            nombreVal = false;
            valida();
        }else{
            $("#errorNombre").html("<img src='images/icono_true.png' width='20px' height='20px'> Nombre Correcto");
            nombreVal = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución de un apellido en el formulario
     * Comprueba que la cadena introducida son letras con o sin espacios
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#apellidos").on('input',function(){
        if (!(/^[A-Za-záÁéÉíÍóÓúÚñÑ]{1}[A-Z a-z áÁéÉíÍóÓúÚñÑ]*$/.test($("input#apellidos").val())) || $("input#apellidos").val() == "") {
            $("#errorApe").html("<img src='images/icono_false.png' width='20px' height='20px'> Introduzca letras y/o espacios");
            if ($("input#apellidos").val() == ""){
                $("#errorApe").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            apellidosVal = false;
            valida();
        }else{
            $("#errorApe").html("<img src='images/icono_true.png' width='20px' height='20px'> Apellidos Correctos");
            apellidosVal = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución de un DNI en el formulario
     * Comprueba que la cadena introducida es un DNI correcto
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#dni").on('input',function(){
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
            'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        if (!(/^\d{8}[A-Z]$/.test($("input#dni").val())) || ($("input#dni").val().charAt(8) != letras[($("input#dni").val().substring(0, 8)) % 23])) {
            $("#errorDni").html("<img src='images/icono_false.png' width='20px' height='20px'> D.N.I. incorrecto. Ej:00000000A");
            if ($("input#dni").val() == ""){
                $("#errorDni").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            dniVal = false;
            valida();
        }else{
            $("#errorDni").html("<img src='images/icono_true.png' width='20px' height='20px'> Dni Correcto");
            dniVal = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución de un email en el formulario
     * Comprueba que la cadena introducida es un email correcto
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#e-mail").on('input',function(){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($("input#e-mail").val())) || $("input#e-mail").val() == "") {
            $("#errorEmail").html("<img src='images/icono_false.png' width='20px' height='20px'> Email incorrecto. Ej: ejemplo@ejemplo.com");
            if ($("input#e-mail").val() == ""){
                $("#errorEmail").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            emailVal = false;
            valida();
        }else{
            $("#errorEmail").html("<img src='images/icono_true.png' width='20px' height='20px'> Email correcto");
            emailVal = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución de un nombre en el formulario
     * Comprueba que la cadena introducida no esta en blanco
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#direccion").on('input',function(){
        if ($("input#direccion").val() == ""){
            $("#errorDir").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            direccionVal = false;
            valida();
        }
        else{
            $("#errorDir").html("<img src='images/icono_true.png' width='20px' height='20px'> Dirección Correcta");
            direccionVal = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución del telefono 1 en el formulario
     * Comprueba que la cadena introducida son 9 número y que comienza por 9 o por 6
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#telefono1").on('input',function(){
        if (!(/^[9|6][0-9]{8}$/.test($("input#telefono1").val())) || $("input#telefono1").val() == "") {
            $("#errorTel1").html("<img src='images/icono_false.png' width='20px' height='20px'> Teléfono incorrecto. Ej: (9/6)00 000 000");
            if ($("input#telefono1").val() == ""){
                $("#errorTel1").html("<img src='images/icono_false.png' width='20px' height='20px'> Rellene este campo");
            }
            tel1Val = false;
            valida();
        }else{
            $("#errorTel1").html("<img src='images/icono_true.png' width='20px' height='20px'> Teléfono 1 Correcto");
            tel1Val = true;
            valida();
        }
    });

    /**
     * Función que valida dinámicamente la introdución del telefono 2 en el formulario
     * Comprueba que la cadena introducida son 9 número y que comienza por 9 o por 6 o que está vacía
     * En caso contrario introduce el error en el campo div de su error y settea la variable de validacion y accede a la funcion valida
     * Si todo es correcto, avisa al usuario, settea la variable a true y accede a la funcion valida
     */
    $("input#telefono2").on('input',function(){
        if (!(/^[9|6][0-9]{8}$/.test($("input#telefono2").val()))) {
            $("#errorTel2").html("<img src='images/icono_false.png' width='20px' height='20px'> Teléfono incorrecto. Ej: (9/6)00 000 000");
            tel2Val = false;
            valida();
            if ($("input#telefono2").val() == ""){
                $("#errorTel2").html("");
                tel2Val = true;
                valida();
            }
        }else{
            $("#errorTel2").html("<img src='images/icono_true.png' width='20px' height='20px'> Teléfono 2 Correcto");
            tel2Val = true;
            valida();
        }
    });
});