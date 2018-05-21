$(document).ready(function () {
    "use strict";
	$('section h2, aside h2').css({
		'border-color': 'black',
		'color': '#CC1C0D ',
        'border-style': 'solid',
        'border-width': '1px',
        'padding-top': '3px',
        'padding-bottom': '3px',
        'padding-left': '20px',
        'border-top-right-radius': '5px',
        'border-bottom-left-radius': '5px',
        'background-color': '#DFE3E6'
	});
    
    $('nav ul li').addClass('navigation');
    
    $('.navigation').css({
        'border-color': '929CA4',
		'color': '#CC1C0D ',
        'border-style': 'solid',
        'border-width': '1px',
        'padding-top': '3px',
        'padding-bottom': '3px',
        'padding-left': '20px',
        'border-top-right-radius': '5px',
        'border-bottom-left-radius': '5px',
        'background-color': '#DFE3E6'
    });
    
    $('.vprospect').removeClass('vprospect');
    $('.vconvert').removeClass('vconvert');
    $('.vretain').removeClass('vretain');
    
    $('<br><input type="text" value="Chevy Dealers Association">').insertAfter('aside p:nth-of-type(2)');
    
    $("aside p:nth-of-type(1)").wrap("<q></q>");
    $("aside p:nth-of-type(1)").wrap("<i></i>");
    $('section p <b>Vecta Corporation</b>').replaceWith('<a href="http://www.vectacorp.com">Vecta Corp.</a>');
});
