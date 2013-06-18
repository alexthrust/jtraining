require.config({
    paths: {
		'jquery': '../../components/jquery/jquery',
        'underscore': '../../components/underscore/underscore',
        'jasmine': '../../components/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': '../../components/jasmine/lib/jasmine-core/jasmine-html'
    },
    shim: {
   		'jasmine': {
    		exports: 'jasmine'
    	},
    	'jasmine-html': {
    		deps: ['jasmine'],
    		exports: 'jasmine'
    	}
    }
});

require(['jquery', 'jasmine-html'], function($, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('js/spec/requireModule_spec.js');

    $(function() {
        require(specs, function(spec) {
            jasmineEnv.execute();
        });
    });

});
