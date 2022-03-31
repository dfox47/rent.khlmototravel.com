
$(window).bind('load', function() {
	$('html').removeClass('no-js');

	calcDiff();
	priceTotal();

	$(document).on('change', '.js-bike-price', function () {
		calcDiff();
		priceTotal();
	});
});
