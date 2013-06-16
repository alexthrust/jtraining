describe('module', function () {
	var calculator;
	var calculator2;

	beforeEach(function () {
		calculator = app.module.calculator;
	});

	it('method calculate is private', function () {
		expect(calculator.calculate).not.toBeDefined();
	});

	it('method add should work correct', function () {
		var a = 10;
		var b = 20;
		var operator = "+";

		var result = calculator.add(a, b, operator);

		expect(result).toBe(30);
	});

	it('method devide should work correct', function () {
		var a = 20;
		var b = 10;
		var operator = "/";

		var result = calculator.devide(a, b, operator);

		expect(result).toBe(2);
	});

	it('hello wrold', function () {
		calculator.helloWorld();
	});
});