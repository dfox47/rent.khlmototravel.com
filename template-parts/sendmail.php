<?php // Define constants
define( "RECIPIENT_NAME",   "rosinfra-awards.ru" );
//define( "RECIPIENT_EMAIL",  "dfox@foxartbox.com" ); // where to send email
define( "RECIPIENT_EMAIL",  "info@rosinfra-awards.ru" ); // where to send email
define( "EMAIL_SUBJECT",    "[rosinfra-awards.ru]" );

//$sender_email			= isset( $_POST['feedback__email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['sender_email'] ) : "";
//$sender_name			= isset( $_POST['feedback__name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['sender_name'] ) : "";

$form_subsbcribe__input_name            = $_POST['form_subsbcribe__input_name'];
//$form_subsbcribe__input_company         = $_POST['form_subsbcribe__input_company'];
$form_subsbcribe__input_email           = $_POST['form_subsbcribe__input_email'];
//$form_subsbcribe__input_status          = $_POST['form_subsbcribe__input_status'];
//$form_subsbcribe__input_company_site    = $_POST['form_subsbcribe__input_company_site'];



$message = "
	<html>
		<body>
			<p><strong>$form_subsbcribe__input_name</strong> ($form_subsbcribe__input_email)</p>
		</body>
	</html>
";



// If all values exist, send the email
//if ($sender_name && $sender_email && $sender_company) {
if ($form_subsbcribe__input_name) {
	$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
	$headers = "Content-type: text/html; charset = utf-8 \r\n";
	$headers .= "From: " . $form_subsbcribe__input_name . " <" . $form_subsbcribe__input_email . ">";
	$success = mail($recipient, EMAIL_SUBJECT, $message, $headers);
}

// Return an appropriate response to the browser
if (isset($_GET["ajax"])) {
	echo $success ? "success" : "error";
}
else { ?>
	<html>
		<head>
			<title>Thank you!</title>
		</head>

		<body>
			<?php if ($success) {
				echo "<p>Thank you for your message!</p>";
			}
			else {
				echo "<p>Error while sendind, try again please</p>";
			} ?>

			<a href="/">To home page</a>
		</body>
	</html>
<?php } ?>


