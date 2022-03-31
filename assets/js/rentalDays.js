
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
	let $dateTo         = $('.js-return-date');
	let dateFromGet     = $dateFrom.datepicker('getDate');
	let dateToGet       = $dateTo.datepicker('getDate');
	let diff;

	$dateFrom.removeClass('error');
	$dateTo.removeClass('error');

	// when date FROM empty
	if (!dateFromGet) {
		let dateFromInputVal = $dateFrom.val();
		$dateFrom.datepicker({
			minDate: 0,
			onSelect: function() {
				calcDiff();
				priceTotal();
			}
		});
		$dateFrom.datepicker('setDate', dateFromInputVal);
		dateFromGet = $dateFrom.datepicker('getDate');
	}

	// when date TO empty
	if (!dateToGet) {
		let dateToInputVal = $dateTo.val();
		$dateTo.datepicker({
			minDate: 0,
			onSelect: function() {
				calcDiff();
				priceTotal();
			}
		});
		$dateTo.datepicker('setDate', dateToInputVal);
		dateToGet = $dateTo.datepicker('getDate');
	}

	if (dateFromGet && dateToGet) {
		diff = Math.floor((dateToGet.getTime() - dateFromGet.getTime()) / 86400000);
	}

	localStorage.setItem('rentalDatesDiff', diff);
}
