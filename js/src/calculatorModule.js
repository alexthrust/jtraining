app.namespace("app.module").calculator = (function () {
	function calculate (a, b, operator) {
		if (operator == "+") {
			return a + b;
		}

		if (operator == "/") {
			return a / b;
		}
	}

	return {
		add: function(a, b, operator) {
			return calculate(a, b, operator);
		},
		devide: function(a, b, operator) {
			return calculate(a, b, operator);
		},

		helloWorld: function() {
			console.log("Hello World!");
		}
	};
})();

app.namespace("app.module").calculator2 = function () {
	function calculate (a, b, operator) {
		if (operator == "+") {
			return a + b;
		}

		if (operator == "/") {
			return a / b;
		}

		console.log("app.module.calculator2 calls calculate");
	}

	var i = 2;

	this.calculateAnother = function () {
		console.log("app.module.calculatorAnother calls calculate");	
	}

	/*return {
		add: function(a, b, operator) {
			return calculate(a, b, operator);
		},
		devide: function(a, b, operator) {
			return calculate(a, b, operator);
		},

		helloWorld: function() {
			console.log("Hello World!");
		}
	};*/
};