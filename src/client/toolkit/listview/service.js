angular.module('gdToolkitListView').service('gdToolkitListViewService', function () {
	var Config = function (config) {
		var data = angular.extend({}, config);
	};

	var defaultConfig = new Config();

	this.Config = Config;

	this.default = function () {return defaultConfig;};

	this.create = function () {return new Config(defaultConfig);};
});
