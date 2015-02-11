$(function() {

var AppRouter = new (Backbone.Router.extend({
    routes: {
		'': 'index',
		'design': 'design',
        'web': 'web'
	},
	index:function (){
		$('#design, #web').hide();
	},
	design:function(){
		$('#design').fadeIn('slow');
		$('#home, #web').hide();
	},
	web:function(){
		$('#web').fadeIn('slow');
		$('#home, #design').hide();
	},    
}));

Backbone.history.start();

});

/* CLOSING THE FEATURED IMAGE */

$(".feature_image figure").click(function() {
    $('.feature_image figure').hide();
    $('main').css("opacity","inherit");
});
