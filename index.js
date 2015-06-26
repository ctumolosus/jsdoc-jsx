'use strict';

var assign = require('object-assign');
var jstransform = require('jstransform/simple');

var defaults = {
    // File extensions to be processed by esprima parser
    extensions: ['jsx'],
    // Enable React transforms (JSX, displayName)
    react: true,
    // Enable ES6 transforms
    es6: false,
    // Enable ES7 transforms
    es7: false,
    // Shortcut to enable ES6 & ES7 transforms
    harmony: false,
    // Enable utility transforms (trailing commas in objects, arrays)
    utility: false,
    // Generate ES5 or ES3 compatible code
    target: 'es5',
    // Strips out Flow type annotations
    stripTypes: false,
    // Generate and return a Source Map
    sourceMap: false,
    // Append inline source map at the end of the transformed source
    sourceMapInline: false,
    // The output filename for the source map
    sourceFilename: 'sources.js',
    // Parses the file as an ES6 module
    es6module: false,
    // Parses the file as an ES6 module, except disables implicit strict-mode
    // (i.e. CommonJS modules et al are allowed)
    nonStrictEs6module: false
};

var config = assign(defaults, global.env.conf.jsx);

function shouldProcessFile (filename) {
    var extensions = config.extensions;
    var parts = filename.split('.');

    if (parts.length) {
        return (extensions.indexOf(parts[parts.length - 1]) >= 0);
    } else {
        return false;
    }
}

function process (source) {
    return jstransform.transform(source, config).code;
}

exports.handlers = {

    beforeParse: function (e) {

        if (shouldProcessFile(e.filename)) {
            e.source = process(e.source);
        }
    }
};
