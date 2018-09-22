$(function () {
  $('.classify-wrap .current-classify').finger('tap', function () {
    $('.classify-wrap ul').fadeToggle(100);
    $(this).find('.iconfont').toggleClass('icon-arrow-down');
    $(this).find('.iconfont').toggleClass('icon-close');
  });

  $('.classify-wrap ul li').finger('tap', function () {
    $('.classify-wrap .current-classify').data('value', $(this).data('value'));
    $('.classify-wrap .current-classify span').text($(this).text());
    $('.classify-wrap ul').fadeToggle(100);
    $('.current-classify .iconfont').toggleClass('icon-arrow-down');
    $('.current-classify .iconfont').toggleClass('icon-close');
  })
});
