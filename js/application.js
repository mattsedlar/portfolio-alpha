/* Minimizes header after scrolling */

$(window).scroll(function() {
    
 if ($(window).scrollTop() > 0) {
	    $('#header_content').attr('id','header_content_narrow');    
            $('#title').attr('id','title_narrow');
            $('nav').css({
                'float':'right',
                'padding':'24px'
            });
	    $('ul.nav li').css('font-size','33px');
        }
else {
	    $('#header_content_narrow').attr('id','header_content');  
            $('#title_narrow').attr('id','title');
            $('nav').css({
                'float':'none',
                'padding':'0px'
            });
	    $('ul.nav li').css('font-size','49px');     
    }
});
