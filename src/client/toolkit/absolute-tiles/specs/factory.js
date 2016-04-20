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
        var obj, Tile;

        beforeEach(function () {
            obj = factory();
            Tile = factory('test').Tile;
            expect(typeof Tile).toBe('function');
            expect(typeof obj).toBe('object');
        });

        describe('of type TileSet', function () {
            beforeEach(function () {
                expect(obj.constructor).toBe(factory('test').TileSet);
            });
            describe('which can take default tile settings.', function () {
                describe('#default', function () {
                    it('is a function', function () {
                        expect(typeof obj.default).toBe('function');
                    });
                    it('returns a Tile object', function () {
                        expect(obj.default().constructor).toBe(Tile);
                    });
                });
            });
        });

        describe('#tile', function () {
            describe('when passed', function () {
                describe('co-ordinates for a location', function () {
                    var x = 1, y = 2;
                    describe('returns a Tile', function () {
                        var tile;
                        beforeEach(function () {
                            tile = obj.tile(x, y);
                            expect(tile.constructor).toBe(Tile);
                        });
                        it('with the given location', function () {
                            expect(tile.x()).toBe(x);
                            expect(tile.y()).toBe(y);
                        });
                        ['width', 'height'].forEach(function (dimension) {
                            describe('#' + dimension + ' can be passed', function () {
                                it('an integer, which it stores and returns', function () {
                                    [0,1,2,10,101].forEach(function (integer) {
                                        expect(obj[dimension](integer)).toBe(integer);
                                        expect(obj[dimension]()).toBe(integer);
                                    });
                                });
                                it('a non-integer, which throws an error', function () {
                                    ['a-non-integer', {}, 1.2].forEach(function (input) {
                                        expect(obj[dimension](input)).toThrow(new Exception('Tile.width: Invalid input type. Expecting an integer.'));
                                    });
                                });
                            });
                        });
                        ['background', 'text'].forEach(function (colourType) {
                            it('#' + colourType + 'Colour can be passed a colour as a string, which it stores and returns', function () {
                                // Consider testing for valid colours
                                var colour = 'some-colour';
                                expect(obj[colourType + 'colour'](colour)).toBe(colour);
                                expect(obj[colourType + 'colour']()).toBe(colour);
                            });
                        });
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
