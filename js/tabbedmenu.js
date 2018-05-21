
$(document).ready(function(){
	$('#productDescrip p:not(:first)').hide();
	
	$('#productNav li').click(function(e) {
		$('#productDescrip p').hide();
		$('#productNav .current').removeClass("current");
		$(this).addClass('current');
		
		var clicked=$(this).find('a:first').attr('href');
		$('#productDescrip ' + clicked).fadeIn('fast');
		e.preventDefault();
	}).eq(0).addClass('current');
});