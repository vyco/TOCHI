$(document).ready(function(){
  $('section.breakfast').css('display','none');
  $('section.lunch').css('display','none')
  $('section.dinner').css('display','none');
  $('.breakfast').click(function(){
    $('section.breakfast').fadeIn("slow");
    $('section.breakfast').css('display','flex')
    $('section.lunch').css('display','none');
    $('section.dinner').css('display','none');
  });
  $('.lunch').click(function(){
    $('section.breakfast').css('display','none');
    $('section.dinner').css('display','none');
    $('section.lunch').css('display','flex');
  });
  $('.breakfast').click(function(){

    $('html, body').animate({
      scrollTop: $("section.breakfast").offset().top
   }, 2000);
  })

});
