$(function() {

var AppRouter = new (Backbone.Router.extend({
    routes: {
		'': 'index',
		'design': 'design',
        'web': 'web',
        'services': 'services'
	},
	index:function (){
		$('#design, #web, #services').hide();
	},
	design:function(){
		$('#design').fadeIn('slow');
		$('#home, #web, #services').hide();
	},
	web:function(){
		$('#web').fadeIn('slow');
		$('#home, #design, #services').hide();
	},
	services:function(){
		$('#services').fadeIn('slow');
		$('#home, #design, #web').hide();
	},    
}));

Backbone.history.start();

});

/* CLOSING THE FEATURED IMAGE */

$(document).ready( function() {
    $(".feature_image figure").click(function() {
    $('.feature_image figure').hide();
    $('main').css("opacity","inherit");
    });
});
