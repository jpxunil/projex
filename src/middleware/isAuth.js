"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = require("../errors/AppError");
var auth_1 = require("../config/auth");
var isAuth = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default("ERR_SESSION_EXPIRED", 401);
    }
    var _a = authHeader.split(" "), token = _a[1];
    try {
        var decoded = (0, jsonwebtoken_1.verify)(token, auth_1.default.secret);
        var _b = decoded, id = _b.id, profile = _b.profile, companyId = _b.companyId;
        req.user = {
            id: id,
            profile: profile,
            companyId: companyId
        };
    }
    catch (err) {
        throw new AppError_1.default("Invalid token. We'll try to assign a new one on next request", 403);
    }
    return next();
};
exports.default = isAuth;
