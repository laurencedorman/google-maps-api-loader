'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var googleMapsApiLoader = require('../src/google-maps-api-loader.js');

describe('googleMapsApiLoader', function() {

    describe('load', function() {
        it('Should do nothing', function() {
            expect(googleMapsApiLoader.load()).to.eventually.have.property('maps');
        });
    });
});
