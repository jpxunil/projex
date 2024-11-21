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
exports.send = exports.remove = exports.store = exports.index = void 0;
var AppError_1 = require("../errors/AppError");
var SetTicketMessagesAsRead_1 = require("../helpers/SetTicketMessagesAsRead");
var socket_1 = require("../libs/socket");
var Queue_1 = require("../models/Queue");
var User_1 = require("../models/User");
var Whatsapp_1 = require("../models/Whatsapp");
var Mustache_1 = require("../helpers/Mustache");
var ListMessagesService_1 = require("../services/MessageServices/ListMessagesService");
var ShowTicketService_1 = require("../services/TicketServices/ShowTicketService");
var FindOrCreateTicketService_1 = require("../services/TicketServices/FindOrCreateTicketService");
var UpdateTicketService_1 = require("../services/TicketServices/UpdateTicketService");
var DeleteWhatsAppMessage_1 = require("../services/WbotServices/DeleteWhatsAppMessage");
var SendWhatsAppMedia_1 = require("../services/WbotServices/SendWhatsAppMedia");
var SendWhatsAppMessage_1 = require("../services/WbotServices/SendWhatsAppMessage");
var CheckNumber_1 = require("../services/WbotServices/CheckNumber");
var GetProfilePicUrl_1 = require("../services/WbotServices/GetProfilePicUrl");
var CreateOrUpdateContactService_1 = require("../services/ContactServices/CreateOrUpdateContactService");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, pageNumber, _a, companyId, profile, queues, user, _b, count, messages, ticket, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                ticketId = req.params.ticketId;
                pageNumber = req.query.pageNumber;
                _a = req.user, companyId = _a.companyId, profile = _a.profile;
                queues = [];
                if (!(profile !== "admin")) return [3 /*break*/, 2];
                return [4 /*yield*/, User_1.default.findByPk(req.user.id, {
                        include: [{ model: Queue_1.default, as: "queues" }]
                    })];
            case 1:
                user = _c.sent();
                user.queues.forEach(function (queue) {
                    queues.push(queue.id);
                });
                _c.label = 2;
            case 2: return [4 /*yield*/, (0, ListMessagesService_1.default)({
                    pageNumber: pageNumber,
                    ticketId: ticketId,
                    companyId: companyId,
                    queues: queues
                })];
            case 3:
                _b = _c.sent(), count = _b.count, messages = _b.messages, ticket = _b.ticket, hasMore = _b.hasMore;
                (0, SetTicketMessagesAsRead_1.default)(ticket);
                return [2 /*return*/, res.json({ count: count, messages: messages, ticket: ticket, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, _a, body, quotedMsg, medias, companyId, ticket, send_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                ticketId = req.params.ticketId;
                _a = req.body, body = _a.body, quotedMsg = _a.quotedMsg;
                medias = req.files;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowTicketService_1.default)(ticketId, companyId)];
            case 1:
                ticket = _b.sent();
                (0, SetTicketMessagesAsRead_1.default)(ticket);
                if (!medias) return [3 /*break*/, 3];
                return [4 /*yield*/, Promise.all(medias.map(function (media, index) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, SendWhatsAppMedia_1.default)({ media: media, ticket: ticket, body: Array.isArray(body) ? body[index] : body })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 2:
                _b.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, SendWhatsAppMessage_1.default)({ body: body, ticket: ticket, quotedMsg: quotedMsg })];
            case 4:
                send_1 = _b.sent();
                _b.label = 5;
            case 5: return [2 /*return*/, res.send()];
        }
    });
}); };
exports.store = store;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var messageId, companyId, message, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                messageId = req.params.messageId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, DeleteWhatsAppMessage_1.default)(messageId)];
            case 1:
                message = _a.sent();
                io = (0, socket_1.getIO)();
                io.to(message.ticketId.toString()).emit("company-".concat(companyId, "-appMessage"), {
                    action: "update",
                    message: message
                });
                return [2 /*return*/, res.send()];
        }
    });
}); };
exports.remove = remove;
var send = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var whatsappId, messageData, medias, whatsapp, numberToTest, body_1, companyId_1, CheckValidNumber, number_1, profilePicUrl, contactData, contact_1, ticket_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                whatsappId = req.params.whatsappId;
                messageData = req.body;
                medias = req.files;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 12, , 13]);
                return [4 /*yield*/, Whatsapp_1.default.findByPk(whatsappId)];
            case 2:
                whatsapp = _a.sent();
                if (!whatsapp) {
                    throw new Error("Não foi possível realizar a operação");
                }
                if (messageData.number === undefined) {
                    throw new Error("O número é obrigatório");
                }
                numberToTest = messageData.number;
                body_1 = messageData.body;
                companyId_1 = whatsapp.companyId;
                return [4 /*yield*/, (0, CheckNumber_1.default)(numberToTest, companyId_1)];
            case 3:
                CheckValidNumber = _a.sent();
                number_1 = CheckValidNumber.jid.replace(/\D/g, "");
                return [4 /*yield*/, (0, GetProfilePicUrl_1.default)(number_1, companyId_1)];
            case 4:
                profilePicUrl = _a.sent();
                contactData = {
                    name: "".concat(number_1),
                    number: number_1,
                    profilePicUrl: profilePicUrl,
                    isGroup: false,
                    companyId: companyId_1
                };
                return [4 /*yield*/, (0, CreateOrUpdateContactService_1.default)(contactData)];
            case 5:
                contact_1 = _a.sent();
                return [4 /*yield*/, (0, FindOrCreateTicketService_1.default)(contact_1, whatsapp.id, 0, companyId_1)];
            case 6:
                ticket_1 = _a.sent();
                if (!medias) return [3 /*break*/, 8];
                return [4 /*yield*/, Promise.all(medias.map(function (media) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, req.app.get("queues").messageQueue.add("SendMessage", {
                                        whatsappId: whatsappId,
                                        data: {
                                            number: number_1,
                                            body: body_1 ? (0, Mustache_1.default)(body_1, contact_1) : media.originalname,
                                            mediaPath: media.path,
                                            fileName: media.originalname
                                        }
                                    }, { removeOnComplete: true, attempts: 3 })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 7:
                _a.sent();
                return [3 /*break*/, 11];
            case 8: return [4 /*yield*/, (0, SendWhatsAppMessage_1.default)({ body: (0, Mustache_1.default)(body_1, contact_1), ticket: ticket_1 })];
            case 9:
                _a.sent();
                return [4 /*yield*/, ticket_1.update({
                        lastMessage: body_1,
                    })];
            case 10:
                _a.sent();
                _a.label = 11;
            case 11:
                if (messageData.closeTicket) {
                    setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                        ticketId: ticket_1.id,
                                        ticketData: { status: "closed" },
                                        companyId: companyId_1
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000);
                }
                (0, SetTicketMessagesAsRead_1.default)(ticket_1);
                return [2 /*return*/, res.send({ mensagem: "Mensagem enviada" })];
            case 12:
                err_1 = _a.sent();
                if (Object.keys(err_1).length === 0) {
                    throw new AppError_1.default("Não foi possível enviar a mensagem, tente novamente em alguns instantes");
                }
                else {
                    throw new AppError_1.default(err_1.message);
                }
                return [3 /*break*/, 13];
            case 13: return [2 /*return*/];
        }
    });
}); };
exports.send = send;
