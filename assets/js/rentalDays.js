
$(window).bind('load', function() {
	$('.js-datepicker').datepicker({
		onSelect: function() {
			calcDiff();
			priceTotal();
		}
	});
});

function calcDiff() {
	let dateFrom    = $('.js-pickup-date').datepicker('getDate');
	let dateTo      = $('.js-return-date').datepicker('getDate');
	let diff        = 0;

	if (dateFrom && dateTo) {
		diff = Math.floor((dateTo.getTime() - dateFrom.getTime()) / 86400000);
	}

	$('.js-date-diff').text(diff);
}
