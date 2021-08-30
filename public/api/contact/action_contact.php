<?php
//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require '../../vendor/autoload.php';
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['fname'];
	$to = "me@malith.pro";
	$from = $_POST['email'];

	// data

	$msg = $_POST['number'] . $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}
/*

//var_dump($_POST);

	// set response code - 200 OK

	http_response_code(200);
    $to = "julien.lambin83@gmail.com";
	$firstname = $_POST['firstname'][0];
    $lastname = $_POST['lastname'];
	$email = $_POST['email'];
    $message = $_POST['message'];
    var_dump($firstname);
*/



//Create a new PHPMailer instance
$mail = new PHPMailer();

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
//SMTP::DEBUG_OFF = off (for production use)
//SMTP::DEBUG_CLIENT = client messages
//SMTP::DEBUG_SERVER = client and server messages
//$mail->SMTPDebug = 2;

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
//Use `$mail->Host = gethostbyname('smtp.gmail.com');`
//if your network does not support SMTP over IPv6,
//though this may cause issues with TLS

//Set the SMTP port number:
// - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
// - 587 for SMTP+STARTTLS
$mail->Port = 465;

//Set the encryption mechanism to use:
// - SMTPS (implicit TLS on port 465) or
// - STARTTLS (explicit TLS on port 587)
$mail->SMTPSecure = 'ssl';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = 'seedoseedkraken@gmail.com';

//Password to use for SMTP authentication
$mail->Password = 'Ereul9Aeng';



//Set who the message is to be sent from
$mail->setFrom('seedoseedkraken@gmail.com');
//Set an alternative reply-to address
//$mail->addReplyTo('seedoseedkraken@gmail.com');
//Set who the message is to be sent to
$mail->addAddress('seedoseedkraken@gmail.com');
//Set the subject line
$mail->Subject = 'Prise de contact Portfolio';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually
$mail->Body = '$message';
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo 'Erreur d\'envoi: ' . $mail->ErrorInfo;
} else {
    echo 'Message envoyé!';
}

//$mail->Username = 'seedoseedkraken@gmail.com';
//$mail->Password = 'Ereul9Aeng';
//$mail->setFrom('seedoseedkraken@gmail.com');
//$mail->addReplyTo('seedoseedkraken@gmail.com');
//$mail->addAddress('seedoseedkraken@gmail.com');