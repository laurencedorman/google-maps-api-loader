'use strict';

var chai = require('chai');
var expect = chai.expect;

var urlBuilder = require('../lib/url-builder.js');

describe('urlBuilder', function() {

    var builtUrl;

    before(function() {
        builtUrl = urlBuilder({
            base: 'https://maps.googleapis.com/maps/api/js',
            libraries: ['places', 'geometry'],
            callback: 'apiLoaded'
        });
    });

    it('Should return a string', function() {
        expect(builtUrl).to.be.a('string');
    });

    it('Should match the param structure', function() {
        var paramSection = builtUrl.split('?')[1];

        expect(paramSection).to.be.a('string');
        expect(paramSection).to.have.string('libraries=places,geometry');
        expect(paramSection).to.have.string('&callback=apiLoaded');
    });
});
