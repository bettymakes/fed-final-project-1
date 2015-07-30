'use strict';

(function($) {

	$(document).ready(function() {

	// BURGER MENU

	$('#burger-button').on('click', function(eventObject){
		console.log('this is clicked');
	    eventObject.preventDefault();
	    $(this).add('#burger-toggle').toggleClass('is-open');
	    $('#body-container').toggleClass('is-open');
	});

	// $('.test').on('click', function(){
	// 	console.log('test is clicked');
	//     // $('this').add('#burger-toggle').toggleClass('is-open');
	//     $('#body-container').toggleClass('is-open');
	// });

	// DROP DOWN NAV
		$("select").selectOrDie();

	// FIXED NAV
		$(".site-menu").sticky({
			topSpacing:60,
		});

	// SEE MORE ARTICLES
		$('#article-add').on('click', function(){
			$('#article-add').hide();
			$('#pg-2').css('display', 'block')    	
		});

	// HERO SLIDER
		$('.hero').unslider({
			speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 3000,              //  The delay between slide animations (in milliseconds)
			keys: false,               //  Enable keyboard (left, right) arrow shortcuts
			dots: false,               //  Display dot navigation
			fluid: true,              //  Support responsive design. May break non-responsive designs
		});

	});
})(jQuery);
