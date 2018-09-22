$.extend({
  /*
   * slAjax 请求
   * @param {Object} options - 需要的传参
   * @param {String} options.url  - 必传 请求的url
   * @param {Object} options.param  - 必传 请求的参数
   * @param {String} options.type  - 选传 请求的类型
   * @param {function} options.success  - 选传 请求成功的回调
   * */
  slAjax: function (options) {
    var defaults = {
      url: '',
      param: {},
      type: 'post',
      dataType: 'json',
      async: true,
      success: null,
      traditional: false
    };
    options = $.extend(defaults, options);
    $.ajax({
      url: options.url,
      data: options.param,
      type: options.type,
      async: options.async,
      traditional: options.traditional,
      dataType: options.dataType,
      success: options.success,
      error: options.error,
      beforeSend: options.beforeSend,
      complete: options.complete
    });
  }
});

;
(function ($) {
  $.extend($.fn, {
    finger: function (event, callback) {
      // `this` refers to the current Zepto collection.
      // When possible, return the Zepto collection to allow chaining.
      for (var index = 0; index < this.length; index++) {
        var el = this[index];
        var af = new AlloyFinger(el, {});
        af.on(event, callback);
      }
    }
  })
})(Zepto)

$(function () {
  $('.header-bar .menu-btn').finger('tap', function () {
    $('.header-wrap .menu').fadeToggle(100);
    $(this).find('.iconfont').toggleClass('icon-list');
    $(this).find('.iconfont').toggleClass('icon-close');
  })

  var showFooterBar = function (direction) {
      if (direction === 'Up') {
        $('.footer-bar').addClass('hide');
      }
      if (direction === 'Down') {
        $('.footer-bar').removeClass('hide');
      }
    }

    ! function () {
      var top1 = 0;
      $(window).scroll(function () {
        var top2 = $(window).scrollTop();
        if (top2 - top1 > 50) {
          top1 = top2;
          showFooterBar('Up');
        } else if (top1 - top2 > 50) {
          top1 = top2;
          showFooterBar('Down');
        }
      })
    }();

  $('.container').finger('swipe', function (event) {
    showFooterBar(event.direction)
  })

  socialShare('.share-wrap', {
    // url: window.location.href, // 网址，默认使用 window.location.href
    // source: '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
    // title: '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
    // origin: '', // 分享 @ 相关 twitter 账号
    // description: '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
    // image: '', // 图片, 默认取网页中第一个img标签
    sites: ['wechat', 'weibo'], // 启用的站点
    disabled: ['qq', 'qzone', 'google', 'facebook', 'twitter', 'douban', 'linkedin'], // 禁用的站点
    wechatQrcodeContent: '<i class="iconfont icon-close hover-layer"></i><div class="content"><h3>SOLOVE</h3><h5>Modest&nbsp;&nbsp;|&nbsp;&nbsp;Design&nbsp;&nbsp;|&nbsp;&nbsp;Joy&nbsp;&nbsp;|&nbsp;&nbsp;Life</h5><img class="qrcode" src="../../image/qrcode.png" alt="素乐公众号二维码"></img><div class="scan-tips">扫一扫二维码关注我们:)</div></div>',
    initialized: true
  })

  $('.icon-wechat').finger('tap', function () {
    $('.wechat-qrcode-wrap').show();
  })

  $('.wechat-qrcode-wrap .icon-close').finger('tap', function () {
    $('.wechat-qrcode-wrap').hide();
  })
})
