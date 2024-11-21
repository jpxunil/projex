"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstName = exports.greeting = void 0;
var mustache_1 = require("mustache");
var greeting = function () {
    var greetings = ["Boa madrugada", "Bom dia", "Boa tarde", "Boa noite"];
    var h = new Date().getHours();
    // eslint-disable-next-line no-bitwise
    return greetings[(h / 6) >> 0];
};
exports.greeting = greeting;
var firstName = function (contact) {
    if (contact && (contact === null || contact === void 0 ? void 0 : contact.name)) {
        var nameArr = contact === null || contact === void 0 ? void 0 : contact.name.split(' ');
        return nameArr[0];
    }
    return '';
};
exports.firstName = firstName;
exports.default = (function (body, contact) {
    var ms = "";
    var Hr = new Date();
    var dd = "0".concat(Hr.getDate()).slice(-2);
    var mm = "0".concat(Hr.getMonth() + 1).slice(-2);
    var yy = Hr.getFullYear().toString();
    var hh = Hr.getHours();
    var min = "0".concat(Hr.getMinutes()).slice(-2);
    var ss = "0".concat(Hr.getSeconds()).slice(-2);
    if (hh >= 6) {
        ms = "Bom dia";
    }
    if (hh > 11) {
        ms = "Boa tarde";
    }
    if (hh > 17) {
        ms = "Boa noite";
    }
    if (hh > 23 || hh < 6) {
        ms = "Boa madrugada";
    }
    var protocol = yy + mm + dd + String(hh) + min + ss;
    var hora = "".concat(hh, ":").concat(min, ":").concat(ss);
    var view = {
        firstName: (0, exports.firstName)(contact),
        name: contact ? contact.name : "",
        gretting: (0, exports.greeting)(),
        ms: ms,
        protocol: protocol,
        hora: hora
    };
    return mustache_1.default.render(body, view);
});
