
$(function () {
	$(".blog-carousel").owlCarousel({
		loop:true,
		margin:28,
		nav:true,
		dots: true,
		dotsEach:3,
		navText: ["<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>","<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			}
		}
	});
});




function setCssProperty(celector, property, art) {
	if($(window).width() <= 480){
		$(celector).css(property, art[0])
	}else if ($(window).width() > 480 || $(window).width() <= 768){
		$(celector).css(property, art[1])
	}else {$(celector).css(property, art[2])
	}
}
