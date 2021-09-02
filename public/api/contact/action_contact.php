<?php
// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}
//From here, handle the request as it is ok

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require '../../vendor/autoload.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$to = "julien.lambin83@gmail.com";
	$firstname = $_POST['fname'][0];
    $lastname = $_POST['lname'];
	$email = $_POST['email'];
    $message = $_POST['message'];

	// data

	

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $email . ">";
	mail($to, "Contact Portfolio", $message, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
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
//$mail->setFrom('seedoseedkraken@gmail.com');
//Set an alternative reply-to address
//$mail->addReplyTo('seedoseedkraken@gmail.com');
//Set who the message is to be sent to
//$mail->addAddress('seedoseedkraken@gmail.com');
//Set the subject line
//$mail->Subject = 'Prise de contact Portfolio';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually
//$mail->Body = '$message';
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
/*if (!$mail->send()) {
    echo 'Erreur d\'envoi: ' . $mail->ErrorInfo;
} else {
    echo 'Message envoyé!';
}
*/
//$mail->Username = 'seedoseedkraken@gmail.com';
//$mail->Password = 'Ereul9Aeng';
//$mail->setFrom('seedoseedkraken@gmail.com');
//$mail->addReplyTo('seedoseedkraken@gmail.com');
//$mail->addAddress('seedoseedkraken@gmail.com');