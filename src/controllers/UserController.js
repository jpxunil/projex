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
exports.list = exports.remove = exports.update = exports.show = exports.store = exports.index = void 0;
var socket_1 = require("../libs/socket");
var CheckSettings_1 = require("../helpers/CheckSettings");
var AppError_1 = require("../errors/AppError");
var CreateUserService_1 = require("../services/UserServices/CreateUserService");
var ListUsersService_1 = require("../services/UserServices/ListUsersService");
var UpdateUserService_1 = require("../services/UserServices/UpdateUserService");
var ShowUserService_1 = require("../services/UserServices/ShowUserService");
var DeleteUserService_1 = require("../services/UserServices/DeleteUserService");
var SimpleListService_1 = require("../services/UserServices/SimpleListService");
var User_1 = require("../models/User");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchParam, pageNumber, _b, companyId, profile, _c, users, count, hasMore;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.query, searchParam = _a.searchParam, pageNumber = _a.pageNumber;
                _b = req.user, companyId = _b.companyId, profile = _b.profile;
                return [4 /*yield*/, (0, ListUsersService_1.default)({
                        searchParam: searchParam,
                        pageNumber: pageNumber,
                        companyId: companyId,
                        profile: profile
                    })];
            case 1:
                _c = _d.sent(), users = _c.users, count = _c.count, hasMore = _c.hasMore;
                return [2 /*return*/, res.json({ users: users, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, name, profile, bodyCompanyId, queueIds, whatsappId, allTicket, userCompanyId, requestUser, cId, newUserCompanyId, user, io;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password, name = _a.name, profile = _a.profile, bodyCompanyId = _a.companyId, queueIds = _a.queueIds, whatsappId = _a.whatsappId, allTicket = _a.allTicket;
                userCompanyId = null;
                requestUser = null;
                if (!(req.user !== undefined)) return [3 /*break*/, 2];
                cId = req.user.companyId;
                userCompanyId = cId;
                return [4 /*yield*/, User_1.default.findByPk(req.user.id)];
            case 1:
                requestUser = _d.sent();
                _d.label = 2;
            case 2:
                newUserCompanyId = bodyCompanyId || userCompanyId;
                if (!(req.url === "/signup")) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, CheckSettings_1.default)("userCreation")];
            case 3:
                if ((_d.sent()) === "disabled") {
                    throw new AppError_1.default("ERR_USER_CREATION_DISABLED", 403);
                }
                return [3 /*break*/, 5];
            case 4:
                if (((_b = req.user) === null || _b === void 0 ? void 0 : _b.profile) !== "admin") {
                    throw new AppError_1.default("ERR_NO_PERMISSION", 403);
                }
                else if (newUserCompanyId !== ((_c = req.user) === null || _c === void 0 ? void 0 : _c.companyId) && !(requestUser === null || requestUser === void 0 ? void 0 : requestUser.super)) {
                    throw new AppError_1.default("ERR_NO_SUPER", 403);
                }
                _d.label = 5;
            case 5: return [4 /*yield*/, (0, CreateUserService_1.default)({
                    email: email,
                    password: password,
                    name: name,
                    profile: profile,
                    companyId: newUserCompanyId,
                    queueIds: queueIds,
                    whatsappId: whatsappId,
                    allTicket: allTicket
                })];
            case 6:
                user = _d.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(userCompanyId, "-mainchannel")).emit("company-".concat(userCompanyId, "-user"), {
                    action: "create",
                    user: user
                });
                return [2 /*return*/, res.status(200).json(user)];
        }
    });
}); };
exports.store = store;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                return [4 /*yield*/, (0, ShowUserService_1.default)(userId)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.status(200).json(user)];
        }
    });
}); };
exports.show = show;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, requestUserId, companyId, userId, userData, user, io;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (req.user.profile !== "admin") {
                    throw new AppError_1.default("ERR_NO_PERMISSION", 403);
                }
                _a = req.user, requestUserId = _a.id, companyId = _a.companyId;
                userId = req.params.userId;
                userData = req.body;
                return [4 /*yield*/, (0, UpdateUserService_1.default)({
                        userData: userData,
                        userId: userId,
                        companyId: companyId,
                        requestUserId: +requestUserId
                    })];
            case 1:
                user = _b.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-user"), {
                    action: "update",
                    user: user
                });
                return [2 /*return*/, res.status(200).json(user)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, companyId, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                companyId = req.user.companyId;
                if (req.user.profile !== "admin") {
                    throw new AppError_1.default("ERR_NO_PERMISSION", 403);
                }
                return [4 /*yield*/, (0, DeleteUserService_1.default)(userId, companyId)];
            case 1:
                _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-user"), {
                    action: "delete",
                    userId: userId
                });
                return [2 /*return*/, res.status(200).json({ message: "User deleted" })];
        }
    });
}); };
exports.remove = remove;
var list = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var companyId, userCompanyId, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                companyId = req.query.companyId;
                userCompanyId = req.user.companyId;
                return [4 /*yield*/, (0, SimpleListService_1.default)({
                        companyId: companyId ? +companyId : userCompanyId
                    })];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.status(200).json(users)];
        }
    });
}); };
exports.list = list;
