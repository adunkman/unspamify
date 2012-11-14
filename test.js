// This file is intended to be run with node.js, used by travis ci.

var mocha = require("mocha"),
    expect = require("expect.js"),
    jQuery = require("jquery");

GLOBAL.jQuery = jQuery;
GLOBAL.expect = expect;

require("./unspamify.js");
require("./test/test.unspamify.js");
