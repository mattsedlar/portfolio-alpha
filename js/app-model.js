var Module = Backbone.Model.extend({
    defaults: {
        id: 0,
        title: '',
        description: '',
        image: '',
        link: ''
    },
    initialize: function() {
    },
    grabLink: function(e) {
        var id = $(e.currentTarget).data("id");
        var item = this.collection.get(id);
        window.open(item.get('link'),'_blank');
    },
    featureImg: function(e) {
        var id = $(e.currentTarget).data("id");
        var item = this.collection.get(id);
        $('main').css("opacity","0.2");
        $('.feature_image figure img').attr("src", item.get('image'));
        $('.feature_image figure').hide().fadeIn("slow");
    }
});

var designs = [
    {
    id: 1,
    title: 'Pirate Cat Puppet',
    description: 'Puppet created from original design, printed, colored and made into a marionette',
    image: 'images/designEx1.jpg'
    },
    {
    id: 2,
    title: 'Annie Owl-kley',
    description: 'Painting for my son\'s bedroom. Acrylic on canvas.',
    image: 'images/designEx2.jpg'
    },
    {
    id: 3,
    title: 'Now Playing',
    description: 'Facebook graphic to promote ACA enrollment events sponsored by SEIU-UHW.',
    image: 'images/designEx3.jpg'
    }
];

var sites = [
    {
    id: 1,
    title: 'The Geekticket',
    description: 'Personal blog set up on the Joomla platform using a custom template. Mobile optimized.',
    image: 'images/siteEx1.jpg',
    link: 'http://thegeekticket.com'
    },
    {
    id: 2,
    title: 'Let\'s Learn German Together',
    description: 'Custom-built site using PHP, JavaScript and JQuery to promote learning.',
    image: 'images/siteEx2.jpg',
    link: 'http://letslearn-german.info'
    },
    {
    id: 3,
    title: 'CEPRData',
    description: 'Site set up on the WordPress platform using a modified version of the Annotum template.',
    image: 'images/siteEx3.jpg',
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
