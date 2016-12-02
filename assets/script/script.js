$(document).ready(function() {

  $('.my-slider').unslider();

  $(document).on('click', 'a', function(event){
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 600);
 });

});
