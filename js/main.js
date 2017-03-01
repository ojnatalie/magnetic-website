$(function() {
	$('.si--facebook').hover(function() {
	  $('.c-bubble').toggleClass("js-bubble");
	});
});

var $nav = $(".c-nav");

$('.c-hamburger__svg').on('click', function () {
    $nav.toggleClass('js-nav');
});
