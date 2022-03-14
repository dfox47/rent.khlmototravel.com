
var $ = jQuery.noConflict();

$(window).bind('load', function() {
	$('html').removeClass('no-js');

	priceTotal();

	$(document).on('change', '.js-bike-price', function () {
		priceTotal();
	});
});

function priceTotal() {
	var priceBike = $('.js-bike-price:checked').attr('data-price');

	$('.js-price-total').text(priceBike);
}
