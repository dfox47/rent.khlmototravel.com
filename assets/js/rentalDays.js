
$(window).bind('load', function() {
	$('.js-datepicker').datepicker({
		minDate: 0,
		onSelect: function() {
			calcDiff();
			priceTotal();
		}
	});
});

function calcDiff() {
	let $dateFrom       = $('.js-pickup-date');
	let dateFromGet     = $dateFrom.datepicker('getDate');
	let $dateTo         = $('.js-return-date');
	let dateToGet       = $dateTo.datepicker('getDate');
	let diff            = 0;

	// when date FROM empty
	if (!dateFromGet) {
		let dateFromInputVal = $dateFrom.val();
		$dateFrom.datepicker();
		$dateFrom.datepicker('setDate', dateFromInputVal);
		dateFromGet = $dateFrom.datepicker('getDate');
	}

	// when date TO empty
	if (!dateToGet) {
		let dateToInputVal = $dateTo.val();
		$dateTo.datepicker();
		$dateTo.datepicker('setDate', dateToInputVal);
		dateToGet = $dateTo.datepicker('getDate');
	}

	if (dateFromGet && dateToGet) {
		diff = Math.floor((dateToGet.getTime() - dateFromGet.getTime()) / 86400000);
	}

	$('.js-date-diff').text(diff);
}
