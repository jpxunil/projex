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
exports.deleteMedia = exports.mediaUpload = exports.remove = exports.update = exports.show = exports.store = exports.index = void 0;
var socket_1 = require("../libs/socket");
var AppError_1 = require("../errors/AppError");
var CreateService_1 = require("../services/ScheduleServices/CreateService");
var ListService_1 = require("../services/ScheduleServices/ListService");
var UpdateService_1 = require("../services/ScheduleServices/UpdateService");
var ShowService_1 = require("../services/ScheduleServices/ShowService");
var DeleteService_1 = require("../services/ScheduleServices/DeleteService");
var Schedule_1 = require("../models/Schedule");
var path_1 = require("path");
var fs_1 = require("fs");
var lodash_1 = require("lodash");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contactId, userId, pageNumber, searchParam, companyId, _b, schedules, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, contactId = _a.contactId, userId = _a.userId, pageNumber = _a.pageNumber, searchParam = _a.searchParam;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ListService_1.default)({
                        searchParam: searchParam,
                        contactId: contactId,
                        userId: userId,
                        pageNumber: pageNumber,
                        companyId: companyId
                    })];
            case 1:
                _b = _c.sent(), schedules = _b.schedules, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.json({ schedules: schedules, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, body, sendAt, contactId, userId, companyId, schedule, io;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, body = _a.body, sendAt = _a.sendAt, contactId = _a.contactId, userId = _a.userId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, CreateService_1.default)({
                        body: body,
                        sendAt: sendAt,
                        contactId: contactId,
                        companyId: companyId,
                        userId: userId
                    })];
            case 1:
                schedule = _b.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("schedule", {
                    action: "create",
                    schedule: schedule
                });
                return [2 /*return*/, res.status(200).json(schedule)];
        }
    });
}); };
exports.store = store;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleId, companyId, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                scheduleId = req.params.scheduleId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowService_1.default)(scheduleId, companyId)];
            case 1:
                schedule = _a.sent();
                return [2 /*return*/, res.status(200).json(schedule)];
        }
    });
}); };
exports.show = show;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleId, scheduleData, companyId, schedule, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.user.profile !== "admin") {
                    throw new AppError_1.default("ERR_NO_PERMISSION", 403);
                }
                scheduleId = req.params.scheduleId;
                scheduleData = req.body;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, UpdateService_1.default)({ scheduleData: scheduleData, id: scheduleId, companyId: companyId })];
            case 1:
                schedule = _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("schedule", {
                    action: "update",
                    schedule: schedule
                });
                return [2 /*return*/, res.status(200).json(schedule)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleId, companyId, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                scheduleId = req.params.scheduleId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, DeleteService_1.default)(scheduleId, companyId)];
            case 1:
                _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("schedule", {
                    action: "delete",
                    scheduleId: scheduleId
                });
                return [2 /*return*/, res.status(200).json({ message: "Schedule deleted" })];
        }
    });
}); };
exports.remove = remove;
var mediaUpload = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, files, file, schedule, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                files = req.files;
                file = (0, lodash_1.head)(files);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Schedule_1.default.findByPk(id)];
            case 2:
                schedule = _a.sent();
                schedule.mediaPath = file.filename;
                schedule.mediaName = file.originalname;
                return [4 /*yield*/, schedule.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, res.send({ mensagem: "Arquivo Anexado" })];
            case 4:
                err_1 = _a.sent();
                throw new AppError_1.default(err_1.message);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.mediaUpload = mediaUpload;
var deleteMedia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, schedule, filePath, fileExists, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Schedule_1.default.findByPk(id)];
            case 2:
                schedule = _a.sent();
                filePath = path_1.default.resolve("public", schedule.mediaPath);
                fileExists = fs_1.default.existsSync(filePath);
                if (fileExists) {
                    fs_1.default.unlinkSync(filePath);
                }
                schedule.mediaPath = null;
                schedule.mediaName = null;
                return [4 /*yield*/, schedule.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, res.send({ mensagem: "Arquivo Excluído" })];
            case 4:
                err_2 = _a.sent();
                throw new AppError_1.default(err_2.message);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteMedia = deleteMedia;
