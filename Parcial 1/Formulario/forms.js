// $('#signup').click(function() {
//     $('.pinkbox').css('transform', 'translateX(80%)');
//     $('.signin').addClass('nodisplay');
//     $('.signup').removeClass('nodisplay');
//   });
  
//   $('#signin').click(function() {
//     $('.pinkbox').css('transform', 'translateX(0%)');
//     $('.signup').addClass('nodisplay');
//     $('.signin').removeClass('nodisplay');
//   });








// $(document).ready(function() {
//     console.log("JavaScript cargado y listo");

//     // Mover la caja rosa y alternar secciones
//     $('#signup').click(function() {
//         $('.pinkbox').css('transform', 'translateX(80%)');
//         $('.signin').addClass('nodisplay');
//         $('.signup').removeClass('nodisplay');
//     });

//     $('#signin').click(function() {
//         $('.pinkbox').css('transform', 'translateX(0%)');
//         $('.signup').addClass('nodisplay');
//         $('.signin').removeClass('nodisplay');
//     });

//     // Validación y envío del formulario de registro
//     $('#registerForm').on('submit', function(e) {
//         e.preventDefault();  // Prevenir el envío por defecto
//         console.log("Formulario de registro enviado");

//         

//         var username = $('#username').val().trim(); 
//         var email = $('#email').val().trim();
//         var password = $('#password').val().trim();
//         var date = $('#date').val().trim();
//         var checkTerms = $('#checkTerms').prop('checked');
//         var formMessage = $('#formMessage');

//         formMessage.html(""); // Limpiar mensajes
//         $('.submit').prop('disabled', true); // Deshabilitar el botón de envío

        
//         if (!username || !email || !password || !date) {
//             formMessage.html("<p style='color: red;'>Todos los campos son obligatorios.</p>");
//             $('.submit').prop('disabled', false);
//             return;
//         }

//         if (!/^\S+@\S+\.\S+$/.test(email)) {
//             formMessage.html("<p style='color: red;'>Correo electrónico inválido.</p>");
//             $('.submit').prop('disabled', false);
//             return;
//         }

//         if (password.length < 8) {
//             formMessage.html("<p style='color: red;'>La contraseña debe tener al menos 8 caracteres.</p>");
//             $('.submit').prop('disabled', false);
//             return;
//         }

//         if (!checkTerms) {
//             formMessage.innerHTML = "<p style='color: red;'>Debes aceptar los términos y condiciones.</p>";
//             return;
//         }



//         $.ajax({
//             url: 'Registro.php',
//             type: 'POST',
//             data: { username: username, email: email, password: password, date: date },
//             success: function(response) {
//                 formMessage.html(`<p style='color: green;'>${response}</p>`);
//                 if (response.includes("Registro exitoso")) {
//                     setTimeout(() => window.location.href = 'IsMaJo.html', 2000);
//                 }
//             },
//             error: function() {
//                 formMessage.html("<p style='color: red;'>Ocurrió un error. Inténtalo de nuevo.</p>");
//             },
//             complete: function() {
//                 $('.submit').prop('disabled', false);
//             }
//         });
//     });



//     // Validación del formulario de inicio de sesión
//     $('#formsForm').on('submit', function(e) {
//         e.preventDefault(); // Prevenir el envío por defecto

//         var username = $('#formsForm input[name="username"]').val().trim();
//         var password = $('#formsForm input[name="password"]').val().trim();
//         var rememberMe = $('#rememberMe').prop('checked');
//         var formMessage = $('#formMessage');

//         formMessage.html("");  
//         $('.submit').prop('disabled', true);

//         if (!username || !password) {
//             formMessage.html("<p style='color: red;'>Usuario y contraseña requeridos.</p>");
//             $('.submit').prop('disabled', false);
//             return;
//         }

//         console.log("Iniciando sesión:", { username, rememberMe });

        
//         $.ajax({
//             url: 'Login.php',
//             type: 'POST',
//             data: { username: username, password: password },
//             success: function(response) {
//                 if(response.includes("Inicio de sesión exitoso")) {
//                 // Guardar la sesión del usuario y redirigir a la página principal
//                     if (rememberMe) {
//                         localStorage.setItem("savedUsername", username);
//                     } else {
//                         localStorage.removeItem("savedUsername");
//                     }
//                     window.location.href = 'IsMaJo.html';
//                 } else {
//                     formMessage.html(`<p style='color: red;'>${response}</p>`);
//                 }
//             },
//             error: function() {
//                 formMessage.html("<p style='color: red;'>Error al iniciar sesión.</p>");
//             },
//             complete: function() {
//                 $('.submit').prop('disabled', false);
//             }
//         });
//     });

//      // Recuperar usuario guardado en "Recordar usuario"
//      if (localStorage.getItem("savedUsername")) {
//         $('#formsForm input[name="username"]').val(localStorage.getItem("savedUsername"));
//         $('#rememberMe').prop('checked', true);
//     }

//     // Botón de cierre de sesión
//     $('#logout').click(function() {
//         $.ajax({
//             url: 'Logout.php',
//             type: 'POST',
//             success: function() {
//                 window.location.href = 'forms.html';
//             },
//             error: function() {
//                 alert('Error al cerrar sesión');
//             }
//         });
//     });
// });





$(document).ready(function() {
    console.log("JavaScript cargado y listo");

    // Mover la caja rosa y alternar secciones
    $('#signup').click(function() {
        $('.pinkbox').css('transform', 'translateX(80%)');
        $('.signin').addClass('nodisplay');
        $('.signup').removeClass('nodisplay');
    });

    $('#signin').click(function() {
        $('.pinkbox').css('transform', 'translateX(0%)');
        $('.signup').addClass('nodisplay');
        $('.signin').removeClass('nodisplay');
    });

    // Validación y envío del formulario de registro
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();  // Prevenir el envío por defecto
        console.log("Formulario de registro enviado");

        // .val(): Obtiene el valor ingresado por el usuario.
        // .trim(): Elimina espacios en blanco al inicio y final del valor, para evitar causar errores.

        var formData = $(this).serialize();

        $.ajax({
            url: 'Registro.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log(response);
                $('#formMessage').html(`<p style='color: green;'>${response}</p>`);
                if (response.includes("Registro exitoso")) {
                    setTimeout(() => window.location.href = '../Principal/IsMaJo.html', 2000);
                }
            },
            error: function() {
                $('#formMessage').html("<p style='color: red;'>Ocurrió un error. Inténtalo de nuevo.</p>");
            }
        });
    });

    // Validación del formulario de inicio de sesión
    $('#formsForm').on('submit', function(e) {
        e.preventDefault(); // Prevenir el envío por defecto
        
        var formData = $(this).serialize();
        
        $.ajax({
            url: 'Login.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log(response);
                if(response.includes("Inicio de sesión exitoso")) {
                    window.location.href = '../Principal/IsMaJo.html';
                } else {
                    $('#formMessage').html(`<p style='color: red;'>${response}</p>`);
                }
            },
            error: function() {
                $('#formMessage').html("<p style='color: red;'>Error al iniciar sesión.</p>");
            }
        });
    });

    // Recuperar usuario guardado en "Recordar usuario"
    // if (localStorage.getItem("savedUsername")) {
    //     $('#formsForm input[name="username"]').val(localStorage.getItem("savedUsername"));
    //     $('#rememberMe').prop('checked', true);
    // }
    if ($('#remember').is(':checked')) {
        localStorage.setItem("savedUsername", $('#formsForm input[name="username"]').val());
    }
    

    // Botón de cierre de sesión
    $('#logout').click(function() {
    //     $.ajax({
    //         url: 'Logout.php',
    //         type: 'GET',
    //         success: function() {
    //             window.location.href = 'forms.html';
    //         },
    //         error: function() {
    //             alert('Error al cerrar sesión');
    //         }
    //     });
    
        $.ajax({
            url: 'Logout.php',
            type: 'POST',
            success: function() {
                localStorage.removeItem("savedUsername");
                window.location.href = 'forms.html';
            },
            error: function() {
                alert('Error al cerrar sesión');
            }
        });
    });
    


    
    // Caracteristicas de la contraseña
    
    let password = document.getElementById("password");
    let toggleBtn = document.getElementById("toggleBtn");
    let lowerCase = document.getElementById("lower");
    let upperCase = document.getElementById("upper");
    let digit = document.getElementById("number");
    let specialChar = document.getElementById("special");
    let minLength = document.getElementById("length");
    
    // Mostrar/ocultar contraseña
    toggleBtn.onclick = function(){
        if (password.type === 'password') {
            password.setAttribute('type', 'text');
            toggleBtn.classList.add('hide');
        }
        else {
            password.setAttribute('type', 'password');
            toggleBtn.classList.remove('hide');
        }
    }
    
    password.addEventListener('input', function() {
        checkPassword(password.value);
    });

    function checkPassword(data){
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');
        
        // Validación de minúsculas
        if(lower.test(data)){
            lowerCase.classList.add('valid');
        }else{
            lowerCase.classList.remove('valid');
        }
    
        // Validación de mayúsculas
        if(upper.test(data)){
            upperCase.classList.add('valid');
        }else{
            upperCase.classList.remove('valid');
        }
    
        // Validación de números
        if(number.test(data)){
            digit.classList.add('valid');
        }else{
            digit.classList.remove('valid');
        }
    
        // Validaciónde caracteres especiales
        if(special.test(data)){
            specialChar.classList.add('valid');
        }else{
            specialChar.classList.remove('valid');
        }
    
        // Validación de la longitud mínima de la contraseña
        if(length.test(data)){
            minLength.classList.add('valid');
        }else{
            minLength.classList.remove('valid');
        }
    }
});




