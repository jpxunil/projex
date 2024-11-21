"use strict";
var path_1 = require("path");
var cert = path_1.default.join(__dirname, "../../certs/".concat(process.env.GERENCIANET_PIX_CERT, ".p12"));
module.exports = {
    sandbox: false,
    client_id: process.env.GERENCIANET_CLIENT_ID,
    client_secret: process.env.GERENCIANET_CLIENT_SECRET,
    pix_cert: cert
};
