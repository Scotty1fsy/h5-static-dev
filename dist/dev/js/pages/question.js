$(function () {
  $('.questions-wrap .question').finger('tap', function () {
    var currentLi = $(this).closest('li');
    if (currentLi.hasClass('open')) {
      // $(this).next().slideUp(300);
      currentLi.removeClass('open');
    } else {
      // $('.questions-wrap ul li.open').children('.answer').slideUp(300);
      $('.questions-wrap ul li.open').removeClass('open');
      currentLi.addClass('open');
    }
  });
});
