/* Minimizes header after scrolling */

$(window).scroll(function() {
    
 if ($(window).scrollTop() > 0) {    
            $('#title').css({
                'font-size':'49px',
                'float':'left',
                'display':'inline'
            });
            $('nav').css({
                'float':'right',
                'padding':'24px'
            });
        }
else {
            $('#title').css({
                'font-size':'111px',
                'float':'none',
                'display':'block'
            });
            $('nav').css({
                'float':'none',
                'padding':'0px'
            });        
    }
});