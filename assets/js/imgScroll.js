
$(window).on('load', function () {
	img_scroll();

	$(window).on('resize scroll', function() {
		img_scroll();
	});
});

function img_scroll() {
	$('img.js-img-scroll').each(function () {
		let $this = $(this);

		let bottom_of_element   = $this.offset().top + $this.outerHeight();
		let bottom_of_screen    = $(window).scrollTop() + $(window).innerHeight();
		let top_of_element      = $this.offset().top;
		let top_of_screen       = $(window).scrollTop();

		if ( (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) ) {
			let imgSrc = $this.attr('data-img-src');

			$this.removeClass('js-img-scroll').attr( 'src', imgSrc );
		}
	});
}
