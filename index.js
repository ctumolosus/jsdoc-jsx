'use strict';

var assign = require('object-assign');
var jstransform = require('jstransform/simple');

var defaults = {
    extensions: ['jsx']
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
    return jstransform.transform(source, { react: true }).code;
}

exports.handlers = {

    beforeParse: function (e) {

        if (shouldProcessFile(e.filename)) {
            e.source = process(e.source);
        }
    }
};
