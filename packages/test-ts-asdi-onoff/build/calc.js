"use strict";
function calc(a, b) {
    return a + b;
}
var mod = Object.assign(calc, { default: calc });
module.exports = mod;
