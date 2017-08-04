$(document).ready(function(){
	$('.box').click(function(){
		$(this).toggle('bounce', { times: 3 }, 'slow');
	})
})