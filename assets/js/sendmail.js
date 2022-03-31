
var $ = jQuery;

let $contactForm = $('.js-order-form');

$(document).on('submit', $contactForm, function (e) {
	e.preventDefault();

	submitForm();
});

// AJAX contact form
function submitForm() {
	console.log('submitForm in action...');

	let messageDelay = 3000;

	// incomplete
	if (
		!$contactForm.find('.js-pickup-date').val() ||
		!$contactForm.find('.js-return-date').val()
	) {
		$('.js-msg-incomplete').addClass('active').delay(messageDelay).queue(function () {
			$(this).removeClass('active').dequeue();
		});

		return;
	}

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
