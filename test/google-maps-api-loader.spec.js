'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var googleMapsApiLoader = require('../src/google-maps-api-loader.js');

describe('googleMapsApiLoader', function() {
    it('Should load the Google Maps API', function() {
        expect(googleMapsApiLoader()).to.eventually.have.property('maps');
    });

    it('Should load the correct libraries', function() {
        expect(googleMapsApiLoader({ libraries: ['places'] })).to.eventually.have.deep.property('places');
        // expect(googleMapsApiLoader({ libraries: ['places'] })).to.eventually.have.property('maps');
    });
});
