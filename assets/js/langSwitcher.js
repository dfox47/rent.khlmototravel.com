
var $ = jQuery.noConflict();

$(window).bind('load', function() {
	// get language from local storage [START]
	let langIdStored = localStorage.getItem('langId');

	if (langIdStored) {
		setLang(langIdStored);
	}
	// get language from local storage [END]

	$(document).on('click', '.js-lang-switch', function () {
		let langId = $(this).attr('data-lang');

		setLang(langId);
	});
});

function setLang(langId) {
	$('html').removeClass('lang_en lang_bg').addClass('lang_' + langId).attr('lang', langId);

	localStorage.setItem('langId', langId);
}
