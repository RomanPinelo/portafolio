<?php

$destinatario = 'l.espi1213@gmail.com';  //esto es al correo al que se enviara el mensaje del usuario.
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];

$header = "Enviado desde la página xxxxxx.com";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $asunto, $mensajeCompleto, $header);

echo "<script>alert('Correo enviado exitosamente')</script>"; //Ventana emergente con el mensaje
echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>"; //Despues de 1000ms 
                                                                          //nos dirige a index.html

?>