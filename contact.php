<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); 
        echo "Invalid email address";
        exit;
    }

    $to = "your-email@example.com";
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    mail($to, $subject, $body);

    echo "success";
} else {
    http_response_code(405); 
    echo "Method Not Allowed";
}

error_log("Received POST request from ".$_SERVER['REMOTE_ADDR']);
?>
