
// scroll to element
// example: <a href="#top" class="js-scroll-to"></a>
$(window).on('load', function () {
	$('.js-scroll-to').click(function (e) {
		let link = $(this).attr('href').replace('/', '');

		if ( $(link).length ) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: $(link).offset().top
			}, 700);

			window.location.hash = link;
		}
		else {
			console.log('link not exist: ' + link);

			return true;
		}
	});
});
