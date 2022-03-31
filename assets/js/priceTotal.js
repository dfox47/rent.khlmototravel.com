
function priceTotal() {
	let priceBike   = parseInt($('.js-bike-price:checked').attr('data-price'));
	let rentalDays  = parseInt($('.js-date-diff').text());

	console.log('priceBike | ', priceBike);
	console.log('rentalDays | ', rentalDays);

	if (priceBike && rentalDays) {
		$('.js-price-total').text(priceBike * rentalDays);
	}
}
