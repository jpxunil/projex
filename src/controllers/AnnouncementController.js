"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.deleteMedia = exports.mediaUpload = exports.findList = exports.remove = exports.update = exports.show = exports.store = exports.index = void 0;
var Yup = require("yup");
var socket_1 = require("../libs/socket");
var lodash_1 = require("lodash");
var fs_1 = require("fs");
var path_1 = require("path");
var ListService_1 = require("../services/AnnouncementService/ListService");
var CreateService_1 = require("../services/AnnouncementService/CreateService");
var ShowService_1 = require("../services/AnnouncementService/ShowService");
var UpdateService_1 = require("../services/AnnouncementService/UpdateService");
var DeleteService_1 = require("../services/AnnouncementService/DeleteService");
var FindService_1 = require("../services/AnnouncementService/FindService");
var Announcement_1 = require("../models/Announcement");
var AppError_1 = require("../errors/AppError");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchParam, pageNumber, _b, records, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, searchParam = _a.searchParam, pageNumber = _a.pageNumber;
                return [4 /*yield*/, (0, ListService_1.default)({
                        searchParam: searchParam,
                        pageNumber: pageNumber
                    })];
            case 1:
                _b = _c.sent(), records = _b.records, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.json({ records: records, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var companyId, data, schema, err_1, record, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                companyId = req.user.companyId;
                data = req.body;
                schema = Yup.object().shape({
                    title: Yup.string().required()
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(data)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                throw new AppError_1.default(err_1.message);
            case 4: return [4 /*yield*/, (0, CreateService_1.default)(__assign(__assign({}, data), { companyId: companyId }))];
            case 5:
                record = _a.sent();
                io = (0, socket_1.getIO)();
                io.emit("company-announcement", {
                    action: "create",
                    record: record
                });
                return [2 /*return*/, res.status(200).json(record)];
        }
    });
}); };
exports.store = store;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, record;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, ShowService_1.default)(id)];
            case 1:
                record = _a.sent();
                return [2 /*return*/, res.status(200).json(record)];
        }
    });
}); };
exports.show = show;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, schema, err_2, id, record, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                schema = Yup.object().shape({
                    title: Yup.string().required()
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(data)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                throw new AppError_1.default(err_2.message);
            case 4:
                id = req.params.id;
                return [4 /*yield*/, (0, UpdateService_1.default)(__assign(__assign({}, data), { id: id }))];
            case 5:
                record = _a.sent();
                io = (0, socket_1.getIO)();
                io.emit("company-announcement", {
                    action: "update",
                    record: record
                });
                return [2 /*return*/, res.status(200).json(record)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, companyId, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, DeleteService_1.default)(id)];
            case 1:
                _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-announcement"), {
                    action: "delete",
                    id: id
                });
                return [2 /*return*/, res.status(200).json({ message: "Announcement deleted" })];
        }
    });
}); };
exports.remove = remove;
var findList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, records;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.query;
                return [4 /*yield*/, (0, FindService_1.default)(params)];
            case 1:
                records = _a.sent();
                return [2 /*return*/, res.status(200).json(records)];
        }
    });
}); };
exports.findList = findList;
var mediaUpload = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, files, file, announcement, io, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                files = req.files;
                file = (0, lodash_1.head)(files);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, Announcement_1.default.findByPk(id)];
            case 2:
                announcement = _a.sent();
                return [4 /*yield*/, announcement.update({
                        mediaPath: file.filename,
                        mediaName: file.originalname
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, announcement.reload()];
            case 4:
                _a.sent();
                io = (0, socket_1.getIO)();
                io.emit("company-announcement", {
                    action: "update",
                    record: announcement
                });
                return [2 /*return*/, res.send({ mensagem: "Mensagem enviada" })];
            case 5:
                err_3 = _a.sent();
                throw new AppError_1.default(err_3.message);
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.mediaUpload = mediaUpload;
var deleteMedia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, announcement, filePath, fileExists, io, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, Announcement_1.default.findByPk(id)];
            case 2:
                announcement = _a.sent();
                filePath = path_1.default.resolve("public", announcement.mediaPath);
                fileExists = fs_1.default.existsSync(filePath);
                if (fileExists) {
                    fs_1.default.unlinkSync(filePath);
                }
                return [4 /*yield*/, announcement.update({
                        mediaPath: null,
                        mediaName: null
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, announcement.reload()];
            case 4:
                _a.sent();
                io = (0, socket_1.getIO)();
                io.emit("company-announcement", {
                    action: "update",
                    record: announcement
                });
                return [2 /*return*/, res.send({ mensagem: "Arquivo excluído" })];
            case 5:
                err_4 = _a.sent();
                throw new AppError_1.default(err_4.message);
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deleteMedia = deleteMedia;
