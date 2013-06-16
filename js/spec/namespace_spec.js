describe('namespace', function () {
	describe('usage', function () {
		beforeEach(function () {
			app.namespace('app.widgets').MyWidget = (function () {
				function InitWidget () {
					console.log("app.widgets.MyWidget.InitWidget");
				}

				return {
					InitWidget: InitWidget
				};
			})();
		});

		it('should be inside namespace', function () {
			var widget = app.widgets.MyWidget;
			expect(widget).toBeDefined();
		});

		it('should contains method InitWidget', function () {
			var widget = app.widgets.MyWidget;
			expect(widget.InitWidget).toBeDefined();
		});

		describe('SuperWidget.js', function () {
			beforeEach(function () {
				app.namespace('app.widgets.SuperWidgets').MyWidget = function () {

				};
			});

			it('nested namespace objects', function () {
				var widget = app.widgets.SuperWidgets.MyWidget;
				expect(widget).toBeDefined();
			});

			it('should contains variable', function () {
				var widget = app.widgets.SuperWidgets.MyWidget;
				widget.variable = 25;
				expect(widget.variable).toBeDefined();
			});
		});
	});
});