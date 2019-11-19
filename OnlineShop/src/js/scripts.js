//CART
$(function () {

	$("body").on("click", ".btn-basket", function () {
        const modal =  $(this).data("target");
		const title = $(this).closest(".card").find(".card-title").text();
		const price = $(this).closest(".card").find(".card-content-price").text();
        const img = $(this).closest(".card").find(".products-img").css("background-image");
		$(modal).find(".modal-window-full-product-title").text(title);
        $(modal).find(".modal-window-full-product-price-through").text(price);
        $(modal).find(".modal-window-full-product-price-actually").text(price);
        $(modal).find(".modal-window-full-product-img-basket").css("background-image", `${img}`);
        const order = {};
        order.title = title;
        order.oldPrice = price;
        order.newPrice = price;
        order.img = img;
        localStorage.setItem("order", JSON.stringify(order));

    });

	$("body").on("click", ".btn-basket-light", function () {
        const modal =  $(this).data("target");
        const title = $(this).closest(".modal-content").find(".modal-product-title").text();
        const oldPrice = $(this).closest(".modal-content").find(".modal-product-op").text();
        const newPrice = $(this).closest(".modal-content").find(".modal-product-np").text();
        const img = $(this).closest(".modal-content").find(".modal-product-img").css("background-image");
        $(modal).find(".modal-window-full-product-title").text(title);
        $(modal).find(".modal-window-full-product-price-through").text(oldPrice);
        $(modal).find(".modal-window-full-product-price-actually").text(newPrice);
        $(modal).find(".modal-window-full-product-img-basket").css("background-image", `${img}`);

        const order = {};
        order.title = title;
        order.oldPrice = oldPrice;
        order.newPrice = newPrice;
        order.img = img;
        localStorage.setItem("order", JSON.stringify(order));
    });

	$(".addList-basket").on("click", function () {
        const modal =  $(this).data("target");
        const title = $(this).closest(".gallery").find(".rate-goods").text();
        const oldPrice = $(this).closest(".gallery").find(".price-old").text();
        const newPrice = $(this).closest(".gallery").find(".price-now").text();
        const imgName = $(this).closest(".gallery").find(".review-container.active img").attr("src");
        const img = `url(`+`${imgName}`+`)`;
        $(modal).find(".modal-window-full-product-title").text(title);
        $(modal).find(".modal-window-full-product-price-through").text(oldPrice);
        $(modal).find(".modal-window-full-product-price-actually").text(newPrice);
        $(modal).find(".modal-window-full-product-img-basket").css("background-image", `${img}`);

        const order = {};
        order.title = title;
        order.oldPrice = oldPrice;
        order.newPrice = newPrice;
        order.img = img;
        localStorage.setItem("order", JSON.stringify(order));

    });
   
$(document).ready(function(){
    $(".cart").on("click", function () {
        const modal =  $(this).data("target");
        const order = JSON.parse(localStorage.getItem('order'));
        $(modal).find(".modal-window-full-product-title").text(order.title);
        $(modal).find(".modal-window-full-product-price-through").text(order.oldPrice);
        $(modal).find(".modal-window-full-product-price-actually").text(order.newPrice);
        $(modal).find(".modal-window-full-product-img-basket").css("background-image", `${order.img}`);
  });
 });
});
// TOP-MENU
$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('open');
        $('.navbar-collapse').toggleClass('active');
        $('.navbar-collapse').toggleClass('wide');
    });    
});

// click to section
$(document).ready(function(){
    $(".click").click(function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
                top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

// to-top
$(document).ready(function(){
    $("#to-top").hide();  
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {               
                $('#to-top').fadeIn();               
            } else {                 
                $('#to-top').fadeOut("1600",function(){
                    $("#to-top").removeClass('open');
                });               
            }
        });
        $('#to-top').click(function () {
            $(this).addClass('open');
            $('body,html').animate({
                scrollTop: 0
            }, 500);           
            return false;          
        });        
     });
    });
  
//  GALLERY  SLIDER
const sliderWrapper = document.getElementsByClassName('wrapper-slider')[0];
sliderWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('img-slider')) {
        let activeIndex = target.dataset.set;
        let circles = Array.from(document.getElementsByClassName('img-slider'));
        let reviews = Array.from(document.getElementsByClassName('review-container'));
        circles.forEach(circle => circle.classList.remove('zoom'));
        circles[activeIndex - 1].classList.add('zoom');
        reviews.forEach(review => review.classList.remove('active'));
        reviews[activeIndex - 1].classList.add('active');
    }
});
const leftArrowBtn = document.getElementsByClassName('btn-left')[0];
leftArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === 0 ? circles.length - 1 : prevActiveIndex - 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});
const rightArrowBtn = document.getElementsByClassName('btn-right')[0];
rightArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === circles.length - 1 ? 0 : prevActiveIndex + 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});
function activateReview(index) {
    let reviews = Array.from(document.getElementsByClassName('review-container'));
    reviews.forEach(review => review.classList.remove('active'));
    reviews[index].classList.add('active');
}
// tabs
$('.nav-item').click(function() {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === circles.length - 1 ? 0 : prevActiveIndex + 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});

//tooltips
$(document).ready(function () {
    $('[data-view="tooltip"]').tooltip();
})
