define('requireModule', ['jquery', 'underscore'], function ($, _) {
	function executeJquery() {
		return 5;
	}

	function executeUnderscore() {
		return 10;
	}

	return {
		executeJquery: executeJquery,
		executeUnderscore: executeUnderscore
	};
});