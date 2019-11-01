
setCssProperty(".container", "max-width", ["450px", "750px", "1120px"]);
if($(window).width() <= 480){
	$(".logo__container").css("width", "114px");
	$(".logo__container").css("height", "53px");
	$(".header__contact::before").css("display", "none");
}



function setCssProperty(celector, property, art) {
	if($(window).width() <= 480){
		$(celector).css(property, art[0])
	}else if ($(window).width() > 480 || $(window).width() <= 768){
		$(celector).css(property, art[1])
	}else {$(celector).css(property, art[2])
	}
}
