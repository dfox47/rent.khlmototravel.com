
var $ = jQuery;

let $contactForm = $('.js-order-form');

$(document).on('submit', $contactForm, function (e) {
	e.preventDefault();

	submitForm();
});

// AJAX contact form
function submitForm() {
	let messageDelay   = 3000;
	let nextStep       = true;

	$(document).on('input', '.js-order-value-check', function () {
		$(this).removeClass('error');
	});

	// incomplete
	$('.js-order-value-check').removeClass('error').each(function () {
		let $this = $(this);

		console.log('s21');

		if ( !$this.val() ) {
			$this.addClass('error');

			$('.js-msg-incomplete').addClass('active').delay(messageDelay).queue(function () {
				$(this).removeClass('active').dequeue();
			});

			nextStep = false;
		}
	});

	if (!nextStep) return;

	// sending
	$contactForm.find('.js-msg-sending').addClass('active');

	$.ajax({
		url:    $contactForm.attr('action') + "?ajax=true",
		type:   $contactForm.attr('method'),
		data:   $contactForm.serialize(),
		success: submitFinished
	});

	function submitFinished(response) {
		response = $.trim(response);

		$('.js-msg-sending').removeClass('active');

		if (response === 'success') {
			$('.js-msg-success').addClass('active');

			return;
		}

		$('.js-msg-fail').addClass('active').delay(messageDelay).queue(function() {
			$(this).removeClass('active').dequeue();
		});
	}
}
