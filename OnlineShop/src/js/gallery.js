// Gallery (set fit modal window)
$(function () {
	$("#galleryQV").on("click", function () {
		const modal =  $(this).data("target");
		const dataImg = $(".review-container.active").find("img").data("whatever");
		$(modal).find(".modal-product-img").css("background-image", `url(`+`./src/images/gallery/${dataImg}.png`+`)`);
		if (window.innerWidth <= 576) {
			$(modal).find(".modal-dialog").addClass("modal-sm").addClass("modal-dialog-centered");

		}else if(window.innerWidth > 992){
			$(modal).find(".modal-dialog").addClass("modal-lg");
		}
	});
});