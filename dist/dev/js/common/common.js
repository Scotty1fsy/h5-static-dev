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
      beforeSend: function () {},
      complete: function () {}
    });
  }
});
