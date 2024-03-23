<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];


    $to = "sabrinalone45@gmail.com"; 
    $subject = "New Message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "success"; 
    } else {
        echo "error"; 
    }
}
?>