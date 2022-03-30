
var $ = jQuery;

let $contactForm = $('.js-order-form');

$(document).on('submit', $contactForm, function (e) {
	e.preventDefault();

	console.log('x1');

	submitForm();
});

// AJAX contact form
function submitForm() {
	console.log('submitForm in action...');

	let messageDelay = 2000;

	if (
		!$contactForm.find('.js-pickup-date').val() ||
		!$contactForm.find('.js-return-date').val()
	) {
		console.log('s16');

		$('.js-msg-incomplete').addClass('active').delay(messageDelay).queue(function () {
			console.log('s19');
			$(this).removeClass('active').dequeue();
		});
	}
	else {
		console.log('s24');
		$contactForm.find('.js-msg-sending').addClass('active');

		$.ajax({
			url: $contactForm.attr('action') + "?ajax=true",
			type: $contactForm.attr('method'),
			data: $contactForm.serialize(),
			success: submitFinished
		});
	}

	function submitFinished(response) {
		response = $.trim(response);

		$('.js-msg-sending').removeClass('active');

		console.log('s40');

		if (response == 'success') {
			$('.js-msg-success').addClass('active').delay(messageDelay).queue(function() {
				$(this).removeClass('active').dequeue();
			});

			console.log('s47');
		}
		else {
			$('.js-msg-fail').addClass('active').delay(messageDelay).queue(function() {
				$(this).removeClass('active').dequeue();
			});

			console.log('s54');
		}
	}
}
