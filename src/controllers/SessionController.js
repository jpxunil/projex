"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.me = exports.update = exports.store = void 0;
var AppError_1 = require("../errors/AppError");
var socket_1 = require("../libs/socket");
var AuthUserService_1 = require("../services/UserServices/AuthUserService");
var SendRefreshToken_1 = require("../helpers/SendRefreshToken");
var RefreshTokenService_1 = require("../services/AuthServices/RefreshTokenService");
var FindUserFromToken_1 = require("../services/AuthServices/FindUserFromToken");
var User_1 = require("../models/User");
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, _b, token, serializedUser, refreshToken, io;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, (0, AuthUserService_1.default)({
                        email: email,
                        password: password
                    })];
            case 1:
                _b = _c.sent(), token = _b.token, serializedUser = _b.serializedUser, refreshToken = _b.refreshToken;
                (0, SendRefreshToken_1.SendRefreshToken)(res, refreshToken);
                io = (0, socket_1.getIO)();
                io.to("user-".concat(serializedUser.id)).emit("company-".concat(serializedUser.companyId, "-auth"), {
                    action: "update",
                    user: {
                        id: serializedUser.id,
                        email: serializedUser.email,
                        companyId: serializedUser.companyId
                    }
                });
                return [2 /*return*/, res.status(200).json({
                        token: token,
                        user: serializedUser
                    })];
        }
    });
}); };
exports.store = store;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, _a, user, newToken, refreshToken;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                token = req.cookies.jrt;
                if (!token) {
                    throw new AppError_1.default("ERR_SESSION_EXPIRED", 401);
                }
                return [4 /*yield*/, (0, RefreshTokenService_1.RefreshTokenService)(res, token)];
            case 1:
                _a = _b.sent(), user = _a.user, newToken = _a.newToken, refreshToken = _a.refreshToken;
                (0, SendRefreshToken_1.SendRefreshToken)(res, refreshToken);
                return [2 /*return*/, res.json({ token: newToken, user: user })];
        }
    });
}); };
exports.update = update;
var me = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, user, id, profile, superAdmin;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = req.cookies.jrt;
                return [4 /*yield*/, (0, FindUserFromToken_1.default)(token)];
            case 1:
                user = _a.sent();
                id = user.id, profile = user.profile, superAdmin = user.super;
                if (!token) {
                    throw new AppError_1.default("ERR_SESSION_EXPIRED", 401);
                }
                return [2 /*return*/, res.json({ id: id, profile: profile, super: superAdmin })];
        }
    });
}); };
exports.me = me;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.user.id;
                return [4 /*yield*/, User_1.default.findByPk(id)];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, user.update({ online: false })];
            case 2:
                _a.sent();
                res.clearCookie("jrt");
                return [2 /*return*/, res.send()];
        }
    });
}); };
exports.remove = remove;
