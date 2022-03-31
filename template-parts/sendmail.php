
<?php // Define constants
const RECIPIENT_NAME        = "rentkhlmototravel.com";
const RECIPIENT_EMAIL       = "a9942212@gmail.com";
const EMAIL_SUBJECT         = "[rent.khlmototravel.com]";

$order_bike                 = $_POST['bike'];
$order_biker_email          = $_POST['biker_email'];
$order_biker_name           = $_POST['biker_name'];
$order_biker_phone          = $_POST['biker_phone'];
$order_pickup_date          = $_POST['pickup_date'];
$order_price_total          = $_POST['price_total'];
$order_return_date          = $_POST['return_date'];

$message = "
	<html lang='en'>
		<body>
			<p><strong>Bike:</strong> $order_bike</p>
			<p><strong>Pickup:</strong> $order_pickup_date</p>
			<p><strong>Return:</strong> $order_return_date</p>
			<p><strong>Name:</strong> $order_biker_name</p>
			<p><strong>Phone:</strong> $order_biker_phone</p>
			<p><strong>E-mail:</strong> $order_biker_email</p>
			<p><strong>TOTAL:</strong> $order_price_total лв</p>
		</body>
	</html>
";

// If all values exist, send the email
//if ($sender_name && $sender_email && $sender_company) {
if ($order_bike) {
	$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
	$headers = "Content-type: text/html; charset = utf-8 \r\n";
	$headers .= "From: " . $order_biker_name . " <" . $order_biker_email . ">";
	$success = mail($recipient, EMAIL_SUBJECT . $order_bike, $message, $headers);
}

// Return an appropriate response to the browser
if (isset($_GET["ajax"])) {
	echo $success ? "success" : "error";
}
else { ?>
	<html lang="en">
		<head>
			<title>Thank you!</title>
		</head>

		<body>
			<?php if ($success) { ?>
				<p>Thank you for your message!</p>
			<?php }
			else { ?>
				<p>Error while sendind, try again please</p>
			<?php } ?>

			<a href="/">To home page</a>
		</body>
	</html>
<?php } ?>
