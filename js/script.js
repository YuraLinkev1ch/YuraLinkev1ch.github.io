$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        slidesToShow:6,
        appendArrows:'.slider-arrows',
        prevArrow:'<div class="slick-arrow-prev"><img  src="img/home/slider-arrow-previous.svg"></div>',
        nextArrow:'<div class="slick-arrow-next"><img src="img/home/slider-arrow-next.svg"></div>',
        asNavFor:'.big-slider',
        
    });

    $('.big-slider').slick({
        arrows:false, 
        asNavFor:'.slider',
    })
})