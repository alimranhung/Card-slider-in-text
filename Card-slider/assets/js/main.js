(function ($){
	"use strict";
	  $('.slider-for').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   arrows: false,
	   fade: true,
	   asNavFor: '.slider-nav'
	 });
	 $('.slider-nav').slick({
	   slidesToShow: 3,
	   slidesToScroll: 1,
	   asNavFor: '.slider-for',
	   dots: false,
	   centerMode: true,
	   focusOnSelect: true
	 });

	 jQuery(window).load(function(){
	 	jQuery(".preloader-wrapper").fadeOut(1000);
	 });
})(jQuery);
