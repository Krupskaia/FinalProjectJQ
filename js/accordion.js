$(document).ready(function(){

	$('#accordionContent ul > li ul').hide();
	
	$('#accordionContent ul > li').click(function(){
		var selfClick = $(this).find('ul:first').is(':visible');
        
		if(!selfClick){
			$(this).parent().find('>li ul:visible').slideToggle();
            $(this).children(".plusminus").text('-');
		}else {
             $(this).children(".plusminus").text('+');
        }
		$(this).find('ul:first').slideToggle();
        
	});
});
