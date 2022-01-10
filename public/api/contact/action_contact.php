<?php

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require './vendor/autoload.php';



$config = parse_ini_file(__DIR__ . '/.htpasswd');



 // Allow from any origin
 if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

	exit(0);
}


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
$mail->Username =  $config['login_smtp'];

//Password to use for SMTP authentication
$mail->Password =  $config['mdp_smtp'];







$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) | empty($_POST['lname'])  | empty($_POST['email']) | empty($_POST['message'])){   echo json_encode(["sent" => false, "message" => "Tu es pas censé lire cela, mais Il manque des informations"]);}

if ($_POST)
	{

	// set response code - 200 OK
	http_response_code(200);
	$to = "julien.lambin83@gmail.com";
	$firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
	$email = $_POST['email'];
    $body = $_POST['message'];
	$subject = 'Prise de contact Portfolio';



	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	

$mail->setFrom($email);



//Set who the message is to be sent to
$mail->addAddress($to);

//Set the subject line
$mail->Subject = $subject;



//Replace the plain text body with one created manually
$mail->Body = "Nouveau message de ". $firstname. ", ".$lastname. ", adresse mail: ". $email. " : ". $body;



//send the message, check for errors
if (!$mail->send()) {
    echo json_encode(["sent" => false, "message" => "Tu n'est pas censé lire cela, mais le mail n'est pas parti ..."]);
} else {
    echo json_encode(array(
		"sent" => true
	));
    //Section 2: IMAP
    //Uncomment these to save your message in the 'Sent Mail' folder.
    #if (save_mail($mail)) {
    #    echo "Message saved!";
    #}
}
	}