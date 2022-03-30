
var $ = jQuery;

// AJAX contact form
function submitForm() {
	var messageDelay = 2000;

	return new Promise(function (resolve, reject) {
		if (grecaptcha.getResponse() !== "") {
			let contactForm = $('.form_subsbcribe').find('form');

			if (
				!contactForm.find('.form_subsbcribe__input_name').val() ||
				!contactForm.find('.form_subsbcribe__input_email').val()
			) {
				$('.js-msg_incomplete').addClass('active').delay(messageDelay).queue(function () {
					$(this).removeClass('active').dequeue();
				});
			} else {
				contactForm.find('.js-msg_sending').addClass('active');

				$.ajax({
					url: contactForm.attr('action') + "?ajax=true",
					type: contactForm.attr('method'),
					data: contactForm.serialize(),
					success: submitFinished
				});
			}
		}

		function submitFinished(response) {
			response = $.trim(response);

			$('.js-msg_sending').removeClass('active');

			if (response == 'success') {
				$('.js-msg_success').addClass('active').delay(messageDelay).queue(function() {
					$(this).removeClass('active').dequeue();
				});
			}
			else {
				$('.js-msg_fail').addClass('active').delay(messageDelay).queue(function() {
					$(this).removeClass('active').dequeue();
				});
			}
		}

		grecaptcha.reset();

	});}
