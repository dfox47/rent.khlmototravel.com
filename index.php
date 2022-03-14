<?php // links
$i = '/i';
$icons = $i . '/icons';
?>

<!DOCTYPE html>

<html lang="en" class="lang_en no-js">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<meta content="width=device-width, user-scalable=yes, maximum-scale=5" name="viewport" />

	<title>Rent a motorcycle at Sofia | Bulgaria</title>

	<link rel="icon" href="<?php echo $icons; ?>/favicon/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="<?php echo $icons; ?>/favicon.ico" type="image/x-icon">

	<link rel="icon" type="image/png" href="<?php echo $icons; ?>/favicon/16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="<?php echo $icons; ?>/favicon/32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/images/favicon/96.png" sizes="96x96" />

	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $icons; ?>/favicon/57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $icons; ?>/favicon/60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $icons; ?>/favicon/72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $icons; ?>/favicon/76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $icons; ?>/favicon/114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $icons; ?>/favicon/120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $icons; ?>/favicon/144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $icons; ?>/favicon/152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $icons; ?>/favicon/180.png" />

	<link rel="stylesheet" href="/styles.min.css?v<?php echo(date("YmdHis")); ?>" />
</head>

<body>
<?php // header
include_once 'template-parts/header.php'; ?>

<div class="wrap">
	<h1><span class="lang_en">Rent a motorcycle in Sofia</span><span class="lang_bg">Наемете мотоциклет в София</span></h1>
</div>

<form class="order_form" action="/">
	<?php //bikes
	include_once 'template-parts/bikes.php'; ?>

	<div class="wrap">
		<div>
			<label class="pickup_date">
				<span>Pickup date</span>
				<input class="js-datepicker js-pickup-date" type="text" name="pickup_date" />
			</label>
		</div>

		<div>
			<label class="return_date">

				<span>Return date</span>
				<input class="js-datepicker js-return-date" type="text" name="return_date" />
			</label>
		</div>

		<h2><span class="lang_en">Contacts</span><span class="lang_bg">Контакти</span></h2>

		<div>
			<label>
				<span>Name</span>
				<input type="text" name="biker_name" />
			</label>

			<label>
				<span>Phone</span>
				<input type="text" name="biker_phone" />
			</label>

			<label>
				<span>E-mail</span>
				<input type="text" name="biker_email" />
			</label>
		</div>

		<div>
			<button type="submit">Order</button>
		</div>
	</div>
</form>

<div class="price_total">
	<span class="lang_en">Total</span><span class="lang_bg">Общо</span>: <span class="js-price-total">0</span> €
</div>

<!-- all scripts in one document -->
<script src="/all.min.js?v<?php echo(date("Ymd")); ?>"></script>
</body>
</html>
