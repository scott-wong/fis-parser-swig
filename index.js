'use strict';

var swig = require('swig');

module.exports = function(content, file, conf) {

    swig.setDefaults({
        varControls: ['{=', '=}']
    });

    var html = swig.renderFile(file.toString());

    return html;
};
