var ModuleView = Backbone.View.extend({
    className: 'module',
    tagName: 'article',
    el: this.el,
    template: _.template($('#moduleTemplate').html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append( this.template(this.model.toJSON()));
    },
    grabLink: function(e) {
        this.model.grabLink(e);
    },
    featureImg: function(e) {
        this.model.featureImg(e);
    }
});

/* Design Views */

var DesignCollectionView = Backbone.View.extend({
    initialize: function () { 
        this.render();
    },
    render: function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(module){
            var moduleView = new ModuleView({ 
                model: module,
                events: { 'click img': 'featureImg' }  
            });
            $("#design").append(moduleView.el);
    }
});

var designCollectionView = new DesignCollectionView({ 
	collection: designPortfolio
 });

/* Web Views */

var SiteCollectionView = Backbone.View.extend({
    initialize: function () { 
        this.render();
    },
    render: function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(module){
            var moduleView = new ModuleView({ 
                model: module,
                events: { 'click img': 'grabLink' }            
            });
            $("#web").append(moduleView.el);
    }
});

var siteCollectionView = new SiteCollectionView({
	collection: sitePortfolio
 });
