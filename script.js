$(document).ready(function(){
<<<<<<< HEAD
	$('div').hide();
=======
	$('div').mouseenter(function() {
       $(this).animate({
           height: '+=10vh'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10vh'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
>>>>>>> gh-pages
})