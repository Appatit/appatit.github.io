// const { on } = require("gulp");

  var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controlsText: [
      '<img src="../ico/chevron-left-solid.svg" alt="">',
      '<img src="../ico/chevron-right-solid.svg" alt="">',
    ]
});



(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    




});
})(jQuery);

$('.side-main__detail').each(function(i){
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.side-main').eq(i).toggleClass('side-main_active');
    $('.side-back').eq(i).toggleClass('side-back_active');
  })
});

$('.side-back').each(function(i){
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.side-main').eq(i).toggleClass('side-main_active');
    $('.side-back').eq(i).toggleClass('side-back_active');
  })
});
