// Products(loading)
$(function () {
	$(".loading").on("click", function () {
		const btn = $(this);
		const loader = btn.find("span");
		$.ajax({
			url: "./src/templates/data.html",
			type: 'GET',
			beforeSend: function () {
				btn.attr("disabled", true);
				btn.css("background-color", "#d58e32");
				loader.addClass("d-inline-block");
			},
			success: function (responce) {
				setTimeout(function () {
					loader.removeClass("d-inline-block");
					btn.css("background-color", "#363636");
					btn.attr("disabled", false);
					if (window.innerWidth <= 576) {
						$(".products-catalog-item").parent().append($(responce).filter(".products-catalog-item").slice(0, 3));
					}else if(window.innerWidth > 576 && window.innerWidth < 992){
						$(".products-catalog-item").parent().append($(responce).filter(".products-catalog-item").slice(0, 4));
					}else {
						$(".products-catalog-item").parent().append($(responce).filter(".products-catalog-item").slice(0, 9));
					}
				}, 2000)
			},
			error: function () {
				alert("Error!");
				loader.removeClass("d-inline-block");
				btn.css("background-color", "#363636");
				btn.attr("disabled", false);
			}
		});
	});
});
// Products(set fit modal window)
$(function () {
	$(".btn-prod-details").on("click", function () {
		const dataImg = $(this).data("whatever");
		const modal =  $(this).data("target");
		$(modal).find(".modal-product-img").css("background-image", `url(`+`dist/images/products/furniture/${dataImg}.png`+`)`);
		if (window.innerWidth <= 576) {
			$(modal).find(".modal-dialog").addClass("modal-sm").addClass("modal-dialog-centered");

		}else if(window.innerWidth > 992){
			$(modal).find(".modal-dialog").addClass("modal-lg");
		}
	});
});
//Products(add to localStorage)
$(function () {
	$(".btn-basket").on("click", function () {
		const data = $(this).closest(".card").find(".card-title").text();
		localStorage.setItem("order_item", JSON.stringify(data));
		// const f = JSON.parse(localStorage.getItem("order_item"))

	});
	$(".btn-basket-light").on("click", function () {
		const data = $(this).closest(".modal-content").find(".modal-product-title").text();
		localStorage.setItem("order_item", JSON.stringify(data));
	});
})

// Products(filters)

$(function () {
	$(".products-filter-range").on("change", function () {
		const value = $(this).val();
		const max = $(this).attr("max");
		$("#filterRangeValue").text(`up to $`+`${value}`);
		console.log(value/max)
		$(this).css("background", `linear-gradient(`+`90deg, black ${(value/max)*100}%, white ${(value/max)*100}%`+`)`);
	})
});

$(function () {
	$(".products-filter-color-label").on("change", function (event) {
		if($(this).hasClass("myactive")){
			$(this).removeClass("myactive").css("color", "#363636");
			$(this).find("span").css("color", "transparent")
		}else {
			$(this).addClass("myactive").css("color", "#d58e32");
			$(this).find("span").css("color", "white");
		}
	})

});

$(function () {
	$(".products-filter-categories-item").on("click", function (event) {
		if($(this).hasClass("myactive")){
			$(this).removeClass("myactive").find(".products-filter-categories-item-text").css("color", "#363636");
			$(this).find(".products-filter-round-shape").css("background-color", "#363636")
			console.log(0)

		}else {
			$(this).addClass("myactive").find(".products-filter-categories-item-text").css("color", "#d58e32");
			$(this).find(".products-filter-round-shape").css("background-color", "#d58e32");
			console.log(1)
		}
	})
})

$(function () {
	$(".products-filter-size-label").on("change", function (event) {
		if($(this).hasClass("myactive")){
			$(this).removeClass("myactive").css("color", "#363636");
			$(this).find("span").css("color", "transparent").css("background-color", "white").css("border-color","#363636");
			$(this).next().css("background-color", "#363636");

		}else {
			$(this).addClass("myactive").css("color", "#d58e32");
			$(this).find("span").css("color", "white").css("background-color", "#d58e32").css("border-color","#d58e32");
			$(this).next().css("background-color", "#d58e32");
		}
	})
});

$(function () {
	$(".products-filter-tags-item").on("click",function () {
		if($(this).hasClass("myactive")){
			$(this).removeClass("myactive").css("color", "#9c9c9c").css("border-color", "#9c9c9c");

		}else {
			$(this).addClass("myactive").css("color", "#d58e32").css("border-color","#d58e32");
		}
	});
});