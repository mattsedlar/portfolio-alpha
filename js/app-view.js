var ModuleView = Backbone.View.extend({
    el: this.el,
    template: _.template($('#moduleTemplate').html()),
    initialize: function() {
    this.render();
    },
    render: function() {
        this.$el.append( this.template(this.model.toJSON()));
    }
});

var DesignCollectionView = Backbone.View.extend({
    initialize: function () { 
        this.render();
    },
    render: function() {
        this.collection.each(function(module){
            var moduleView = new ModuleView({ model: module, el: $('#design') });
        });
    }
});

var designCollectionView = new DesignCollectionView({ 
	collection: designPortfolio
 });


