$(function () {
  var mySwiper = new Swiper('.swiper-container-pd', {
    autoplay: true,
    loop: true,

    // 如果需要分页器
    pagination: {
      el: '.sl-swiper-pagination-pd',
    }
  });

  var mySwiperRecomment = new Swiper('.swiper-container-recomment', {
    autoplay: true,
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 'auto',
    spaceBetween: '5%',
    // 如果需要分页器-进度条指示器
    pagination: {
      el: '.sl-swiper-pagination-recomment',
      type: 'progressbar'
    }
  });

  $('.params-item').each(function () {
    var color = $(this).data('color');
    $(this).find('span:first-child').css({
      backgroundColor: color,
      borderColor: color
    })
  });
  $('.params-item').finger('tap', function () {
    $('.params-item').removeClass('selected');
    $(this).addClass('selected');
  })
});
