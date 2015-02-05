var ModuleView = Backbone.View.extend({
    el: this.el,
    template: _.template($('#moduleTemplate').html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append( this.template(this.model.toJSON()));
    },
});

/* Design Views */

var DesignCollectionView = Backbone.View.extend({
    initialize: function () { 
        this.render();
        $('img').on('click', function() { alert("You clicked"); });        
    },
    render: function() {
        this.collection.each(function(module){
            var moduleView = new ModuleView({ model: module, el: $('#design') });
        });
    },
 
});

var designCollectionView = new DesignCollectionView({ 
	collection: designPortfolio
 });

/* Web Views */

var SiteCollectionView = Backbone.View.extend({
    initialize: function () { 
        this.render();
        $('img').on('click', function() { window.open(this.model.get('link'),'_blank'); });        
    },
    render: function() {
        this.collection.each(function(module){
            var moduleView = new ModuleView({ model: module, el: $('#web') });
        });
    },
 
});

var siteCollectionView = new SiteCollectionView({ 
	collection: sitePortfolio
 });



