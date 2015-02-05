(function() {

AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'design': 'design',
        'web': 'web'
	},
	index:function (){
		$('#design, #web, #writing').hide();
	},
	design:function(){
		$('#design').fadeIn('slow');
		$('#home, #web').hide();
	},
	web:function(){
		$('#web').fadeIn('slow');
		$('#home, #design').hide();
	},    
});

new AppRouter;
Backbone.history.start();

})();
