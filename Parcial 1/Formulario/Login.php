<?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);
// session_start();
// include('Conexion.php');


// if (isset($_POST['login'])) {
//     $username = $_POST['username'];
//     $password = $_POST['password'];
//     $remember = isset($_POST['remember']) ? true : false;

//     // Validación: Verifica que el usuario existe en la base de datos
//     $sql = "SELECT * FROM Usuarios WHERE usuario = ?";
//     $stmt = $conn->prepare($sql);
//     $stmt->bind_param('s', $username);
//     $stmt->execute();
//     $result = $stmt->get_result();

//     if ($result->num_rows > 0) {
//         $user = $result->fetch_assoc();
        
//         // Comprueba si la contraseña es correcta
//         if (password_verify($password, $user['contraseña'])) {
//             $_SESSION['user_id'] = $user['id'];
//             $_SESSION['username'] = $user['usuario'];

//             // Si la opción "Recordarme" está activada, creamos una cookie
//             if ($remember) {
//                 $cookie_value = $user['id'] . '-' . $user['usuario'];
//                 setcookie('remember_me', $cookie_value, time() + (86400 * 30), "/"); // Expira en 30 días
//             }

//             // Redirigimos al usuario a la página principal
//             header('Location: Parcial 1\Principal\IsMaJo.html');
//             exit();
//         } else {
//             echo "Contraseña incorrecta.";
//         }
//     } else {
//         echo "El usuario no existe.";
//     }
// }



// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//     $username = trim($_POST['username']);
//     $password = trim($_POST['password']);

//     if (empty($username) || empty($password)) {
//         echo "El Usuario y la Contraseña son obligatorios.";
//         exit;
//     }


//     // Preparar la consulta para buscar al usuario
//     $stmt = $conn->prepare("SELECT usuario_id, password FROM Usuarios WHERE username = ?");
//     $stmt->bind_param("s", $username);
//     $stmt->execute();
//     $stmt->store_result();


//     // Si el usuario fue encontrado
//     if ($stmt->num_rows > 0) {
//         $stmt->bind_result($user_id, $hashed_password);
//         $stmt->fetch();
        
//         // Verificar si la contraseña es correcta
//         if (password_verify($password, $hashed_password)) {
//             session_start();
//             $_SESSION['usuario_id'] = $user_id;
//             $_SESSION['username'] = $username;
//             echo "Sesión iniciada correctamente";
//         } else {
//             echo "Contraseña incorrecta.";
//         }
//     } else {
//         echo "Usuario no encontrado.";
//     }

//     $stmt->close();
//     $conn->close();
// }


session_start(); // Inicia la sesión al principio del archivo

// Si ya está autenticado, redirige a la página principal
if (isset($_SESSION['usuario_id'])) {
    header("Location: IsMaJo.html");
    exit();
}
require 'Conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($password)) {
        echo "Usuario y contraseña requeridos.";
        exit;
    }

    $stmt = $conn->prepare("SELECT usuario_id, password FROM Usuarios WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $hashed_password);
        $stmt->fetch();
        
        if (password_verify($password, $hashed_password)) {
            session_start();
            $_SESSION['usuario_id'] = $user_id;
            $_SESSION['username'] = $username;
            echo "Inicio de sesión exitoso";
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }

    $stmt->close();
    $conn->close();
}



?>