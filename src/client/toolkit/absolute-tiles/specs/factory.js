describe('gdToolkitAbsoluteTiles factory', function () {
    var factory;

    beforeEach(function () {
        module('gdToolkitAbsoluteTiles');
        inject(function ($injector) {
            factory = $injector.get('gdToolkitAbsoluteTilesFactory');
        });
    });

    it('is a function', function () {
        expect(typeof factory).toBe('function');
    });

    describe('returns an object', function () {
        var obj;

        beforeEach(function () {
            obj = factory();
            expect(typeof obj).toBe('object');
        });

        it('of type TileSet', function () {
            expect(obj.constructor).toBe(factory('test').TileSet);
        });

        describe('#tile', function () {
            describe('when passed', function () {
                var Tile = factory('test').Tile;
                describe('co-ordinates for a location', function () {
                    it('returns a Tile', function () {
                        expect(obj.tile(0, 0).constructor).toBe(Tile);
                    });
                    describe('with no tile', function () {
                        
                    });
                    describe('with an existing tile', function () {

                    });
                });
                describe('no arguments returns an array', function () {
                    beforeEach(function () {
                        expect(obj.tile().constructor).toBe([].constructor);
                    });
                    it('of Tile objects', function () {
                        obj.tile().forEach(function (tile) {
                            expect(tile.constructor).toBe(Tile);
                        });
                    });
                });
            });
        });
    });
});
