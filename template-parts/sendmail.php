<?php // Define constants
define( "RECIPIENT_NAME",   "rentkhlmototravel.com" );
define( "RECIPIENT_EMAIL",  "a9942212@gmail.com" ); // where to send email
define( "EMAIL_SUBJECT",    "[rent.khlmototravel.com]" );

//$sender_email			= isset( $_POST['feedback__email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['sender_email'] ) : "";
//$sender_name			= isset( $_POST['feedback__name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['sender_name'] ) : "";

$order_bike                 = $_POST['bike'];
$order_pickup_date          = $_POST['pickup_date'];
$order_return_date          = $_POST['return_date'];
$order_biker_name           = $_POST['biker_name'];
$order_biker_phone          = $_POST['biker_phone'];
$order_biker_email          = $_POST['biker_email'];



$message = "
	<html>
		<body>
			<p><strong>Bike:</strong> $order_bike</p>
			<p><strong>Pickup:</strong> $order_pickup_date</p>
			<p><strong>Return:</strong> $order_return_date</p>
			<p><strong>Name:</strong> $order_biker_name</p>
			<p><strong>Phone:</strong> $order_biker_phone</p>
			<p><strong>E-mail:</strong> $order_biker_email</p>
		</body>
	</html>
";



// If all values exist, send the email
//if ($sender_name && $sender_email && $sender_company) {
if ($order_bike) {
	$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
	$headers = "Content-type: text/html; charset = utf-8 \r\n";
	$headers .= "From: " . $order_biker_name . " <" . $order_biker_email . ">";
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


