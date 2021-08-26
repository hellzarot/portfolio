<?php

/**
 * This example shows sending a message using PHP's mail() function.
 */

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require '../../vendor/autoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
//Set who the message is to be sent from
$mail->setFrom('seedoseedkraken@gmail.com');
//Set an alternative reply-to address
$mail->addReplyTo('seedoseedkraken@gmail.com');
//Set who the message is to be sent to
$mail->addAddress('seedoseedkraken@gmail.com');
//Set the subject line
$mail->Subject = 'PHPMailer mail() test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually
$mail->Body = 'This is a plain-text message body';
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}

//$mail->Username = 'seedoseedkraken@gmail.com';
//$mail->Password = 'Ereul9Aeng';
//$mail->setFrom('seedoseedkraken@gmail.com');
//$mail->addReplyTo('seedoseedkraken@gmail.com');
//$mail->addAddress('seedoseedkraken@gmail.com');