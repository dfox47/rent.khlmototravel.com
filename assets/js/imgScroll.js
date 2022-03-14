var $ = jQuery.noConflict();



$(window).on('load', function () {
	img_scroll();

	$(window).on('resize scroll', function() {
		img_scroll();
	});
});

function img_scroll() {
	$('img.js-img-scroll').each(function () {
		var _this = $(this);

		var bottom_of_element   = _this.offset().top + _this.outerHeight();
		var bottom_of_screen    = $(window).scrollTop() + $(window).innerHeight();
		var top_of_element      = _this.offset().top;
		var top_of_screen       = $(window).scrollTop();

		if ( (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) ) {
			var imgSrc = _this.attr('data-img-src');

			_this.removeClass('js-img-scroll').attr( 'src', imgSrc );
		}
	});
}
