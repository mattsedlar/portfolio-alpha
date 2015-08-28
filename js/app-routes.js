$(function() {

var AppRouter = new (Backbone.Router.extend({
    routes: {
		'': 'index',
		'analysis': 'analysis',
        'web': 'web'
	},
	index:function (){
		$('#analysis, #web').hide();
	},
	analysis:function(){
		$('#analysis').fadeIn('slow');
		$('#home, #web').hide();
	},
	web:function(){
		$('#web').fadeIn('slow');
		$('#home, #analysis').hide();
	}
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
