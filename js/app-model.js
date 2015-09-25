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

var sites = [
    {
    id: 1,
    title: 'The Geekticket',
    description: 'Personal blog set up on Drupal using a custom template with Boostrap. Mobile optimized.',
    image: 'images/siteEx1.jpg',
    link: 'http://thegeekticket.com'
    },
    {
    id: 2,
    title: 'SEIU-UHW Wage Calculator',
    description: 'Custom-built app using JQuery and Bootstrap .js libraries to highlight wage differences.',
    image: 'images/siteEx5.jpg',
    link: 'http://seiuuhw.org/calculators/kaiser-optical-calculator'
    },
    {
    id: 3,
    title: 'Let\'s Learn German Together',
    description: 'Custom-built site using PHP, JavaScript and JQuery to promote learning.',
    image: 'images/siteEx2.jpg',
    link: 'http://letslearn-german.info'
    },
    {
    id: 4,
    title: 'Take the Medi-Cal Quiz',
    description: 'Web application built using Twitter Bootstrap and Backbone.js.',
    image: 'images/siteEx4.jpg',
    link: 'http://seiuuhw.org/medi-cal-quiz/'
    },
    {
    id: 5,
    title: 'CEPRData',
    description: 'Site set up on the WordPress platform using a modified version of the Annotum template.',
    image: 'images/siteEx3.jpg',
    link: 'http://ceprdata.org/'
    }
];

var ModuleCollection = Backbone.Collection.extend({
    model: Module
});


/* Web Collection */
var sitePortfolio = new ModuleCollection();
sitePortfolio.reset(sites);
