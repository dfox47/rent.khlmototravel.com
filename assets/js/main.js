
$(window).bind('load', function() {
	$('html').removeClass('no-js');

	calcDiff();
	priceTotal();

	$(document).on('change', '.js-bike-price', function () {
		calcDiff();
		priceTotal();
	});
});

function priceTotal() {
	let priceBike   = parseInt($('.js-bike-price:checked').attr('data-price'));
	let rentalDays  = parseInt($('.js-date-diff').text());

	$('.js-price-total').text(priceBike * rentalDays);
}
