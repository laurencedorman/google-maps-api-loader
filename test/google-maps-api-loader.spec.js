'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var googleMapsApiLoader = require('../src/google-maps-api-loader.js');
var urlBuilder = require('../lib/url-builder');

describe('urlBuilder', function () {
	it('Should create URLs with all the properties', function () {
		var url = urlBuilder({
			base: 'first-base',
			libraries: ['places','moreplaces'],
			apiKey: 'abc123',
			callback: 'heyyyy'
		});
		expect(url).to.equal('first-base?key=abc123&libraries=places,moreplaces&callback=heyyyy');
	});
});

describe('googleMapsApiLoader', function() {
    it('Should load the Google Maps API', function() {
        expect(googleMapsApiLoader()).to.eventually.have.property('maps');
    });

    it('Should load the correct libraries', function() {
        expect(googleMapsApiLoader({ libraries: ['places'] })).to.eventually.have.deep.property('places');
        // expect(googleMapsApiLoader({ libraries: ['places'] })).to.eventually.have.property('maps');
    });
});
