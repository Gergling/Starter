angular.module('gdToolkitAbsoluteTiles').factory('gdToolkitAbsoluteTilesFactory', function () {
    var Tile = function () {

    };
    var TileSet = function () {
        var tiles = [];

        var defaultTile = new Tile();

        this.default = function () {
            return defaultTile;
        };

        this.tile = function (x, y) {
            if (typeof y === 'number') {
                var tile = tiles.filter(function (tile) {
                    return tile.x() === x && tile.y() === y;
                })[0];
                if (!tile) {
                    tile = new Tile(x, y);
                    tiles.push(tile);
                }
                return tile;
            }
            return tiles;
        };
    };

    return function (options) {
        if (options === 'test') {
            return {
                TileSet: TileSet,
                Tile: Tile
            };
        } else {
            return new TileSet();
        }
    };
});
