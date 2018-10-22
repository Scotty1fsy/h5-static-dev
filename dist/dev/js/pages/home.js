// 主页
$(function () {
  var mySwiperMain = new Swiper('.swiper-container-main', {
    autoplay: true,
    loop: true,

    // 如果需要分页器
    pagination: {
      el: '.sl-swiper-pagination',
    }
  });

  var mySwiperRecomment = new Swiper('.swiper-container-recomment', {
    autoplay: true,
    freeMode: true,
    freeModeSticky: true,
    slidesPerView: 'auto',
    spaceBetween: '5%',
    // 如果需要分页器-进度条指示器
    pagination: {
      el: '.sl-swiper-pagination-recomment',
      type: 'progressbar'
    }
  });
});
