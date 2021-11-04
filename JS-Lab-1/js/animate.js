$(function() {
  $('li').on('click', function() {
  $(this).animate({
    opacity: 0.4,
    paddingLeft: '+=20'
  }, 1020, function() {
    $(this).html($(this).html()  +  "&nbsp&nbsp&nbsp" + $(this).next().html())
  });
});
});

//$(selector).animate({params},speed,callback);
