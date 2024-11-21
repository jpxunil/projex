"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = require("../errors/AppError");
var envTokenAuth = function (req, res, next) {
    try {
        var bodyToken = req.body.token;
        var queryToken = req.query.token;
        if (queryToken === process.env.ENV_TOKEN) {
            return next();
        }
        if (bodyToken === process.env.ENV_TOKEN) {
            return next();
        }
    }
    catch (e) {
        console.log(e);
    }
    throw new AppError_1.default("Token inválido", 403);
};
exports.default = envTokenAuth;
