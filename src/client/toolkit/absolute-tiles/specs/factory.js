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
                        });
                        it('object', function () {
                            expect(tile.constructor).toBe(Tile);
                        });
                        it('with the given location', function () {
                            expect(tile.x()).toBe(x);
                            expect(tile.y()).toBe(y);
                        });
                        ['width', 'height'].forEach(function (dimension) {
                            describe('#' + dimension, function () {
                                it('is a function', function () {
                                    expect(typeof tile[dimension]).toBe('function');
                                });
                                describe('can be passed', function () {
                                    it('an integer, which it stores and returns', function () {
                                        [0,1,2,10,101].forEach(function (integer) {
                                            expect(tile[dimension](integer)).toBe(integer);
                                            expect(tile[dimension]()).toBe(integer);
                                        });
                                    });
                                    describe('a non-integer such as', function () {
                                        ['a-non-integer', {}, 1.2].forEach(function (input) {
                                            it('"' + input + '" to throw an error', function () {
                                                expect(function () {tile[dimension](input);}).toThrow(new Error('Tile.' + dimension + ': Invalid input type. Expecting an integer, got "' + input + '".'));
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        ['background', 'text'].forEach(function (colourType) {
                            describe('#' + colourType + 'Colour', function () {
                                it ('is a function.', function () {
                                    expect(typeof tile[colourType + 'Colour']).toBe('function');
                                });
                                it('can be passed a colour as a string, which it stores and returns', function () {
                                    // Consider testing for valid colours
                                    var colour = 'some-colour';
                                    expect(tile[colourType + 'Colour'](colour)).toBe(colour);
                                    expect(tile[colourType + 'Colour']()).toBe(colour);
                                });
                            });
                        });
                    });
                    describe('with no tile', function () {
                        it('will have the default tile settings', function () {

                        });
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
