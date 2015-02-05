var Module = Backbone.Model.extend({
    defaults: {
        title: '',
        description: '',
        image: '',
        link: ''
    },
    initialize: function() {
        
    }

});

var designs = [
    {
    title: 'Pirate Cat Puppet',
    description: 'Puppet created from original design, printed, colored and made into a marionette',
    image: '"images/designEx1.jpg"'
    },
    {
    title: 'Annie Owl-kley',
    description: 'Painting for my son\'s bedroom. Acrylic on canvas.<br/>&nbsp;',
    image: '"images/designEx2.jpg"'
    }
];

var sites = [
    {
    title: 'The Geekticket',
    description: 'Personal blog set up on the Joomla platform using a custom template. Mobile optimized.',
    image: '"images/designEx1.jpg"',
    link: 'http://thegeekticket.com'
    },
    {
    title: 'Let\'s Learn German Together',
    description: 'Custom-built site using PHP, JavaScript and JQuery to promote learning.',
    image: '"images/designEx1.jpg"',
    link: 'http://letslearn-german.info'
    },
    {
    title: 'CEPRData',
    description: 'Site set up on the WordPress platform using a modified version of the Annotum template.',
    image: '"images/designEx1.jpg"',
    link: 'http://ceprdata.org/'
    }    
];

var ModuleCollection = Backbone.Collection.extend({
    model: Module
});

/* Designs Colletion */
var designPortfolio = new ModuleCollection();
designPortfolio.reset(designs);

/* Web Collection */
var sitePortfolio = new ModuleCollection();
sitePortfolio.reset(sites);
