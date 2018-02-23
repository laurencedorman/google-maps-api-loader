
# Google Maps API Loader


[![npm](https://img.shields.io/npm/v/google-maps-api-loader.svg)](http://npm.im/google-maps-api-loader)
[![travis](https://travis-ci.org/laurencedorman/google-maps-api-loader.svg?branch=master)](https://travis-ci.org/laurencedorman/google-maps-api-loader)
[![Dependency Status](https://david-dm.org/laurencedorman/google-maps-api-loader.svg?style=flat)](https://david-dm.org/laurencedorman/google-maps-api-loader)
[![devDependency Status](https://david-dm.org/laurencedorman/google-maps-api-loader/dev-status.svg?style=flat)](https://david-dm.org/laurencedorman/google-maps-api-loader#info=devDependencies)


Provides a convenient wrapper for the Google Maps API, allowing it to be called in the promise syntax.

### Installation

```
$ npm install --save google-maps-api-loader
```

### Usage

```js

var GoogleMapsApiLoader = require('google-maps-api-loader');

GoogleMapsApiLoader({
        libraries: ['places'],
        apiKey: 'your-api-key' // optional
    })
    .then(function(googleApi) {
        var autocomplete = new googleApi.maps.places.AutocompleteService();
    }, function(err) {
        console.error(err);
    });

```

### License

MIT
