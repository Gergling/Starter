angular.module('gdToolkitAbsoluteTiles').directive('gdToolkitAbsoluteTiles', function (gdToolkitAbsoluteTiles) {
    return {
        templateUrl: 'client/toolkit/absolute-tiles/partial.html',
        controllerAs: 'gdToolkitAbsoluteTilesController',
        controller: function () {
            this.tileSet = gdToolkitAbsoluteTiles();
        }
    };
});
