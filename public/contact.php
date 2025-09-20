<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

header("Content-Type: application/json");

function loadEnv($path) {
    $vars = [];
    if (!file_exists($path)) return $vars;

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), "#") === 0) continue;
        list($key, $value) = explode("=", $line, 2);
        $vars[trim($key)] = trim($value);
    }
    return $vars;
}

$env = loadEnv(__DIR__ . "/.env");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $quanty = $_POST['quanty'] ?? '';
    $district = $_POST['district'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
       $mail->Host       = $env["SMTP_HOST"];
        $mail->SMTPAuth   = true;
        $mail->Username   = $env["SMTP_USER"];
        $mail->Password   = $env["SMTP_PASS"];
        $mail->SMTPSecure = $env["SMTP_SECURE"];
        $mail->Port       = $env["SMTP_PORT"];

        // Remitente y destinatario
         $mail->setFrom($env["SMTP_USER"], "Formulario Web");
        $mail->addAddress($env["SMTP_USER"]); // destino final
        $mail->addReplyTo($email, $name);

        // Contenido
        $mail->isHTML(false);
        $mail->Subject = "Nuevo mensaje desde el formulario de contacto";
        $mail->Body    = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nCantidad: $quanty\nDistrito: $district";

        $mail->send();
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Método inválido"]);
}
?>
