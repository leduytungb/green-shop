//=require node_modules/jquery/dist/jquery.min.js
//=require node_modules/owl.carousel/dist/owl.carousel.min.js
//=require node_modules/bootstrap/dist/js/bootstrap.min.js

$('.js-slider').owlCarousel({
  items: 1
})

var owlSlider = $('.js-owl-slider');
owlSlider.each(function(){
  var prevBtn = $(this).prev().find('.js-prev-slider');
  var nextBtn = $(this).prev().find('.js-next-slider');
  var owlCarousel = $(this).find('.owl-carousel');
  owlCarousel.owlCarousel({
    items: 1,
    dots: false
  })
  console.log(prevBtn);
  // Go to the next item
  prevBtn.on('click', function(e) {
    e.preventDefault();
    owlCarousel.trigger('prev.owl.carousel', [300]);
  })
  // Go to the previous item
  nextBtn.on('click', function(e) {
    e.preventDefault();
    owlCarousel.trigger('next.owl.carousel', [300]);
  })
})
