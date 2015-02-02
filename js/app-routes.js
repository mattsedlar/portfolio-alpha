(function() {

AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'design': 'design'
	},
	index:function (){
		$('#design').hide();
		$('#web').hide();
		$('#writing').hide();
	},
	design:function(){
		$('#design').fadeIn('slow');
		$('#home').hide();
	}
});

new AppRouter;
Backbone.history.start();

})();
