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
exports.remove = exports.update = exports.show = exports.store = exports.index = void 0;
var socket_1 = require("../libs/socket");
var wbot_1 = require("../libs/wbot");
var StartWhatsAppSession_1 = require("../services/WbotServices/StartWhatsAppSession");
var CreateWhatsAppService_1 = require("../services/WhatsappService/CreateWhatsAppService");
var DeleteWhatsAppService_1 = require("../services/WhatsappService/DeleteWhatsAppService");
var ListWhatsAppsService_1 = require("../services/WhatsappService/ListWhatsAppsService");
var ShowWhatsAppService_1 = require("../services/WhatsappService/ShowWhatsAppService");
var UpdateWhatsAppService_1 = require("../services/WhatsappService/UpdateWhatsAppService");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var companyId, session, whatsapps;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                companyId = req.user.companyId;
                session = req.query.session;
                return [4 /*yield*/, (0, ListWhatsAppsService_1.default)({ companyId: companyId, session: session })];
            case 1:
                whatsapps = _a.sent();
                return [2 /*return*/, res.status(200).json(whatsapps)];
        }
    });
}); };
exports.index = index;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, status, isDefault, greetingMessage, complationMessage, outOfHoursMessage, queueIds, token, 
    //timeSendQueue,
    //sendIdQueue,
    transferQueueId, timeToTransfer, promptId, maxUseBotQueues, timeUseBotQueues, expiresTicket, expiresInactiveMessage, companyId, _b, whatsapp, oldDefaultWhatsapp, io;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, name = _a.name, status = _a.status, isDefault = _a.isDefault, greetingMessage = _a.greetingMessage, complationMessage = _a.complationMessage, outOfHoursMessage = _a.outOfHoursMessage, queueIds = _a.queueIds, token = _a.token, transferQueueId = _a.transferQueueId, timeToTransfer = _a.timeToTransfer, promptId = _a.promptId, maxUseBotQueues = _a.maxUseBotQueues, timeUseBotQueues = _a.timeUseBotQueues, expiresTicket = _a.expiresTicket, expiresInactiveMessage = _a.expiresInactiveMessage;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, CreateWhatsAppService_1.default)({
                        name: name,
                        status: status,
                        isDefault: isDefault,
                        greetingMessage: greetingMessage,
                        complationMessage: complationMessage,
                        outOfHoursMessage: outOfHoursMessage,
                        queueIds: queueIds,
                        companyId: companyId,
                        token: token,
                        //timeSendQueue,
                        //sendIdQueue,
                        transferQueueId: transferQueueId,
                        timeToTransfer: timeToTransfer,
                        promptId: promptId,
                        maxUseBotQueues: maxUseBotQueues,
                        timeUseBotQueues: timeUseBotQueues,
                        expiresTicket: expiresTicket,
                        expiresInactiveMessage: expiresInactiveMessage
                    })];
            case 1:
                _b = _c.sent(), whatsapp = _b.whatsapp, oldDefaultWhatsapp = _b.oldDefaultWhatsapp;
                (0, StartWhatsAppSession_1.StartWhatsAppSession)(whatsapp, companyId);
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-whatsapp"), {
                    action: "update",
                    whatsapp: whatsapp
                });
                if (oldDefaultWhatsapp) {
                    io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-whatsapp"), {
                        action: "update",
                        whatsapp: oldDefaultWhatsapp
                    });
                }
                return [2 /*return*/, res.status(200).json(whatsapp)];
        }
    });
}); };
exports.store = store;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var whatsappId, companyId, session, whatsapp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                whatsappId = req.params.whatsappId;
                companyId = req.user.companyId;
                session = req.query.session;
                return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(whatsappId, companyId, session)];
            case 1:
                whatsapp = _a.sent();
                return [2 /*return*/, res.status(200).json(whatsapp)];
        }
    });
}); };
exports.show = show;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var whatsappId, whatsappData, companyId, _a, whatsapp, oldDefaultWhatsapp, io;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                whatsappId = req.params.whatsappId;
                whatsappData = req.body;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, UpdateWhatsAppService_1.default)({
                        whatsappData: whatsappData,
                        whatsappId: whatsappId,
                        companyId: companyId
                    })];
            case 1:
                _a = _b.sent(), whatsapp = _a.whatsapp, oldDefaultWhatsapp = _a.oldDefaultWhatsapp;
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-whatsapp"), {
                    action: "update",
                    whatsapp: whatsapp
                });
                if (oldDefaultWhatsapp) {
                    io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-whatsapp"), {
                        action: "update",
                        whatsapp: oldDefaultWhatsapp
                    });
                }
                return [2 /*return*/, res.status(200).json(whatsapp)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var whatsappId, companyId, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                whatsappId = req.params.whatsappId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(whatsappId, companyId)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, DeleteWhatsAppService_1.default)(whatsappId)];
            case 2:
                _a.sent();
                (0, wbot_1.removeWbot)(+whatsappId);
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-whatsapp"), {
                    action: "delete",
                    whatsappId: +whatsappId
                });
                return [2 /*return*/, res.status(200).json({ message: "Whatsapp deleted." })];
        }
    });
}); };
exports.remove = remove;
