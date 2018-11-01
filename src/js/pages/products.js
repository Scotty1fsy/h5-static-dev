var pageNo = 1;
var pageSize = 10;

$(function () {
  $('.classify-wrap .current-classify').finger('tap', function () {
    $('.classify-wrap ul').fadeToggle(100);
    $(this).find('.iconfont').toggleClass('icon-arrow-down');
    $(this).find('.iconfont').toggleClass('icon-close');
  });

  $('.classify-wrap .current-classify .iconfont').finger('tap', function () {
    if ($(this).hasClass('icon-close')) {
      $(this).parent().data('value', '');
      $(this).prev().text('所有分类');
    }
  });

  $('.classify-wrap ul li').finger('tap', function () {
    $('.classify-wrap .current-classify').data('value', $(this).data('value'));
    $('.classify-wrap .current-classify span').text($(this).text());
    $('.classify-wrap ul').fadeToggle(100);
    $('.current-classify .iconfont').toggleClass('icon-arrow-down');
    $('.current-classify .iconfont').toggleClass('icon-close');

    getClassifyProducts(1);
  })

  $('.btn-more').finger('tap', function () {
    getClassifyProducts(pageNo + 1);
  })
});

function getClassifyProducts(num) {
  $.post('https://www.easy-mock.com/mock/5bcf2eb81b35885dcbeaaed1/solove/getClassifyProducts', {
    id: $('.classify-wrap .current-classify').data('value'),
    pageNo: num,
    pageSize: pageSize
  }, function (response) {
    // process response
    if (response.code === 200) {
      var html = template('products', response.data.data);
      if (num === 1) {
        $('.products-wrap').html(html);
      } else {
        $('.products-wrap').append(html);
      }

      pageNo = num;

      if (pageNo === Math.ceil(response.data.pagination.total / pageSize)) {
        $('.btn-more').hide();
      }
    }
  })
}
