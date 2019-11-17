//CART
$(function () {
	$(".btn-basket").on("click", function () {
		const data = $(this).closest(".card").find(".card-title").text();
        localStorage.setItem("order_item", JSON.stringify(data));
        const productPrice = $(this).closest(".modal-content").find(".modal-product-op").text();  
        localStorage.setItem('order_price', JSON.stringify(productPrice));
        const actualPrice = $(this).closest(".modal-content").find(".modal-product-np").text();
        localStorage.setItem("order_actual", JSON.stringify(actualPrice));     	
	});
	$(".btn-basket-light").on("click", function () {
		const data = $(this).closest("").find(".modal-product-title").text();
        localStorage.setItem("order_item", JSON.stringify(data));
        const productPrice = $(this).closest(".modal-content").find(".modal-product-op").text();  
        localStorage.setItem('order_price', JSON.stringify(productPrice));
        const actualPrice = $(this).closest(".modal-content").find(".modal-product-np").text();
        localStorage.setItem("order_actual", JSON.stringify(actualPrice));
    });
   
$(document).ready(function(){
    $(".cart").on("click", function () {
    $('.modal-window-full-product-title').html(JSON.parse(localStorage.getItem('order_item')));
    $('.modal-window-full-product-price').html(JSON.parse(localStorage.getItem('order_price')));
    $('.modal-window-full-product-price-actually').html(JSON.parse(localStorage.getItem('order_actual')));     
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
