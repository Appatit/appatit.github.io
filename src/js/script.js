
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

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});



// (function($) {
// $(function() {
  
//   $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//     $(this)
//       .addClass('active').siblings().removeClass('active')
//       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//   });
  
// });
// })(jQuery);