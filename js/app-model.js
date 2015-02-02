var Module = Backbone.Model.extend({
    defaults: {
        title: '',
        description: '',
        image: '',
        link: ''
    },
    initialize: function() {
        console.log("New model created");
    }
});

var designEx1 = new Module({
    title: 'Pirate Cat Puppet',
    description: 'Puppet created from original design, printed, colored and made into a marionette',
    image: '"images/designEx1.jpg"'
});

var designEx2 = new Module({
    title: 'Annie Owl-kley',
    description: 'Painting for my son\'s bedroom. Acrylic on canvas.<br/>&nbsp;',
    image: '"images/designEx2.jpg"'
});

var ModuleCollection = Backbone.Collection.extend({
    model: Module
});

var designPortfolio = new ModuleCollection([designEx1, designEx2]);
