$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        slidesToShow:6,
        appendArrows:'.slider-arrows',
        prevArrow:'<div class="slick-arrow-prev"><img  src="img/home/slider-arrow-previous.svg"></div>',
        nextArrow:'<div class="slick-arrow-next"><img src="img/home/slider-arrow-next.svg"></div>',
        asNavFor:'.big-slider',
        focusOnSelect: true,
        autoplay:true,
        autoplaySpeed:3000,
        speed:700,
    });

    $('.big-slider').slick({
        arrows:false, 
        asNavFor:'.slider',
        speed:700,
    })
})