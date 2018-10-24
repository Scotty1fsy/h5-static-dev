$(function () {
  $('.container').on('submit', '.search-form', function (event) {
    event.preventDefault();

    // ajax请求回掉操作
    var key = $(this).find('input').val();
    if (key) {
      $.post('https://www.easy-mock.com/mock/5bcf2eb81b35885dcbeaaed1/solove/search/getDataByKey', {
        key: key
      }, function (response) {
        // process response
        if (response.code === 200) {
          var html = template('search-result', response.data);
          $('.search-result-wrap').html(html);

          $('.search-init-wrap').fadeOut();
          $('.search-result-wrap').fadeIn();
        }
      })
    } else {
      $('.search-init-wrap').fadeIn();
      $('.search-result-wrap').fadeOut();
    }
  })

  $('.search-form input').on('input', function (event) {
    // if ($(this).val()) {
    //   $(this).next().removeClass('icon-search');
    //   $(this).next().addClass('icon-close');

    //   $('.search-init-wrap').fadeOut();
    //   $('.search-result-wrap').fadeIn();
    // } else {
    //   $(this).next().addClass('icon-search');
    //   $(this).next().removeClass('icon-close');

    //   $('.search-init-wrap').fadeIn();
    //   $('.search-result-wrap').fadeOut();
    // }

    if (!$(this).val()) {
      $('.search-form').trigger("submit");
    }
  });

  $('.input-group .iconfont').finger('tap', function () {
    // if ($(this).hasClass('icon-close')) {
    //   var inputEl = $(this).prev()
    //   inputEl.val('').trigger('input').trigger('focus');
    // }

    $('.search-form').trigger("submit");
  });

  $('.search-keys span').finger('tap', function () {
    var keyValue = $(this).text();
    var inputEl = $('.input-group input');
    inputEl.val(keyValue).trigger('input');
    $('.search-form').trigger("submit");
  });
});
