describe('gdToolkitListViewService', function () {
	var service;

	beforeEach(function ($injector) {
		//service.
		module('gdToolkitListView');
		service = $injector.get('gdToolkitListViewService');
	});

	describe('#Config', function () {
		var Config;
		beforeEach(function () {
			Config = service.Config;
		});
		describe('can be instantiated', function () {
			it('without arguments', function () {
				var config = new Config();
				expect(typeof config).toBe('object');
			});
			it('with a config object as an argument', function () {
				expect(typeof new Config(new Config())).toBe('object');
				expect(function () {return new Config({});}).toThrow(new Error(''));
			});
		});
	});

	it('#default returns a Config object', function () {
		expect(service.default().prototype).toBe(service.Config);
	});
	describe('#create', function () {
		it('instantiates and returns a Config object', function () {
			expect(service.create().prototype).toBe(service.Config);
		});
	});
});
