'use strict';

var swig = require('swig');

module.exports = function(content, file, conf) {

    swig.setDefaults({
        cache: false,
        varControls: ['{=', '=}']
    });

    var html = swig.renderFile(file.toString());

    return html;
};
