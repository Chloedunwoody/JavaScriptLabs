
$('input#add').on('click', function(){
  $('#one').fadeOut("slow");
  $('#two').delay(600).fadeOut("slow");
  $('#three').delay(1000).fadeOut("slow");
  $('#four').delay(1600).fadeOut("slow");
});
$('input#sub').on('click', function(){
  $('#one').fadeIn("slow");
  $('#two').delay(600).fadeIn("slow");
  $('#three').delay(1000).fadeIn("slow");
  $('#four').delay(1600).fadeIn("slow");
});
