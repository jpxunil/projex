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
var moment_1 = require("moment");
var Sentry = require("@sentry/node");
var CheckContactOpenTickets_1 = require("../../helpers/CheckContactOpenTickets");
var SetTicketMessagesAsRead_1 = require("../../helpers/SetTicketMessagesAsRead");
var socket_1 = require("../../libs/socket");
var Setting_1 = require("../../models/Setting");
var Queue_1 = require("../../models/Queue");
var ShowTicketService_1 = require("./ShowTicketService");
var ShowWhatsAppService_1 = require("../WhatsappService/ShowWhatsAppService");
var SendWhatsAppMessage_1 = require("../WbotServices/SendWhatsAppMessage");
var FindOrCreateATicketTrakingService_1 = require("./FindOrCreateATicketTrakingService");
var GetTicketWbot_1 = require("../../helpers/GetTicketWbot");
var wbotMessageListener_1 = require("../WbotServices/wbotMessageListener");
var ListSettingsServiceOne_1 = require("../SettingServices/ListSettingsServiceOne"); //NOVO PLW DESIGN//
var ShowUserService_1 = require("../UserServices/ShowUserService"); //NOVO PLW DESIGN//
var lodash_1 = require("lodash");
var UpdateTicketService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var status_1, queueId, userId, whatsappId, chatbot, queueOptionId, promptId, useIntegration, integrationId, io, key, setting, ticket, ticketTraking, oldStatus, oldUserId, oldQueueId, _c, complationMessage, ratingMessage, ratingTxt, bodyRatingMessage, body, settingsTransfTicket, queue, wbot, msgtxt, queueChangedMessage, wbot, nome, msgtxt, queueChangedMessage, wbot, queue, nome, msgtxt, queueChangedMessage, queue, wbot, msgtxt, queueChangedMessage, err_1;
    var _d, _e;
    var ticketData = _b.ticketData, ticketId = _b.ticketId, companyId = _b.companyId;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 41, , 42]);
                status_1 = ticketData.status;
                queueId = ticketData.queueId, userId = ticketData.userId, whatsappId = ticketData.whatsappId;
                chatbot = ticketData.chatbot || false;
                queueOptionId = ticketData.queueOptionId || null;
                promptId = ticketData.promptId || null;
                useIntegration = ticketData.useIntegration || false;
                integrationId = ticketData.integrationId || null;
                io = (0, socket_1.getIO)();
                key = "userRating";
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            companyId: companyId,
                            key: key
                        }
                    })];
            case 1:
                setting = _f.sent();
                return [4 /*yield*/, (0, ShowTicketService_1.default)(ticketId, companyId)];
            case 2:
                ticket = _f.sent();
                return [4 /*yield*/, (0, FindOrCreateATicketTrakingService_1.default)({
                        ticketId: ticketId,
                        companyId: companyId,
                        whatsappId: ticket.whatsappId
                    })];
            case 3:
                ticketTraking = _f.sent();
                if ((0, lodash_1.isNil)(whatsappId)) {
                    whatsappId = ticket.whatsappId.toString();
                }
                return [4 /*yield*/, (0, SetTicketMessagesAsRead_1.default)(ticket)];
            case 4:
                _f.sent();
                oldStatus = ticket.status;
                oldUserId = (_d = ticket.user) === null || _d === void 0 ? void 0 : _d.id;
                oldQueueId = ticket.queueId;
                if (!(oldStatus === "closed" || Number(whatsappId) !== ticket.whatsappId)) return [3 /*break*/, 6];
                // let otherTicket = await Ticket.findOne({
                //   where: {
                //     contactId: ticket.contactId,
                //     status: { [Op.or]: ["open", "pending", "group"] },
                //     whatsappId
                //   }
                // });
                // if (otherTicket) {
                //     otherTicket = await ShowTicketService(otherTicket.id, companyId)
                //     await ticket.update({status: "closed"})
                //     io.to(oldStatus).emit(`company-${companyId}-ticket`, {
                //       action: "delete",
                //       ticketId: ticket.id
                //     });
                //     return { ticket: otherTicket, oldStatus, oldUserId }
                // }
                return [4 /*yield*/, (0, CheckContactOpenTickets_1.default)(ticket.contact.id, whatsappId)];
            case 5:
                // let otherTicket = await Ticket.findOne({
                //   where: {
                //     contactId: ticket.contactId,
                //     status: { [Op.or]: ["open", "pending", "group"] },
                //     whatsappId
                //   }
                // });
                // if (otherTicket) {
                //     otherTicket = await ShowTicketService(otherTicket.id, companyId)
                //     await ticket.update({status: "closed"})
                //     io.to(oldStatus).emit(`company-${companyId}-ticket`, {
                //       action: "delete",
                //       ticketId: ticket.id
                //     });
                //     return { ticket: otherTicket, oldStatus, oldUserId }
                // }
                _f.sent();
                chatbot = null;
                queueOptionId = null;
                _f.label = 6;
            case 6:
                if (!(status_1 !== undefined && ["closed"].indexOf(status_1) > -1)) return [3 /*break*/, 15];
                return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(ticket.whatsappId, companyId)];
            case 7:
                _c = _f.sent(), complationMessage = _c.complationMessage, ratingMessage = _c.ratingMessage;
                if (!((setting === null || setting === void 0 ? void 0 : setting.value) === "enabled")) return [3 /*break*/, 11];
                if (!(ticketTraking.ratingAt == null)) return [3 /*break*/, 10];
                ratingTxt = ratingMessage || "";
                bodyRatingMessage = "\u200E".concat(ratingTxt, "\n\n");
                bodyRatingMessage +=
                    "Digite de 1 à 3 para qualificar nosso atendimento:\n*1* - _Insatisfeito_\n*2* - _Satisfeito_\n*3* - _Muito Satisfeito_\n\n";
                return [4 /*yield*/, (0, SendWhatsAppMessage_1.default)({ body: bodyRatingMessage, ticket: ticket })];
            case 8:
                _f.sent();
                return [4 /*yield*/, ticketTraking.update({
                        ratingAt: (0, moment_1.default)().toDate()
                    })];
            case 9:
                _f.sent();
                io.to("company-".concat(ticket.companyId, "-open"))
                    .to("queue-".concat(ticket.queueId, "-open"))
                    .to(ticketId.toString())
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "delete",
                    ticketId: ticket.id
                });
                return [2 /*return*/, { ticket: ticket, oldStatus: oldStatus, oldUserId: oldUserId }];
            case 10:
                ticketTraking.ratingAt = (0, moment_1.default)().toDate();
                ticketTraking.rated = false;
                _f.label = 11;
            case 11:
                if (!(!(0, lodash_1.isNil)(complationMessage) && complationMessage !== "")) return [3 /*break*/, 13];
                body = "\u200E".concat(complationMessage);
                return [4 /*yield*/, (0, SendWhatsAppMessage_1.default)({ body: body, ticket: ticket })];
            case 12:
                _f.sent();
                _f.label = 13;
            case 13: return [4 /*yield*/, ticket.update({
                    promptId: null,
                    integrationId: null,
                    useIntegration: false,
                    typebotStatus: false,
                    typebotSessionId: null
                })];
            case 14:
                _f.sent();
                ticketTraking.finishedAt = (0, moment_1.default)().toDate();
                ticketTraking.whatsappId = ticket.whatsappId;
                ticketTraking.userId = ticket.userId;
                _f.label = 15;
            case 15:
                if (queueId !== undefined && queueId !== null) {
                    ticketTraking.queuedAt = (0, moment_1.default)().toDate();
                }
                return [4 /*yield*/, (0, ListSettingsServiceOne_1.default)({ companyId: companyId, key: "sendMsgTransfTicket" })];
            case 16:
                settingsTransfTicket = _f.sent();
                if (!((settingsTransfTicket === null || settingsTransfTicket === void 0 ? void 0 : settingsTransfTicket.value) === "enabled")) return [3 /*break*/, 37];
                if (!(oldQueueId !== queueId && oldUserId === userId && !(0, lodash_1.isNil)(oldQueueId) && !(0, lodash_1.isNil)(queueId))) return [3 /*break*/, 21];
                return [4 /*yield*/, Queue_1.default.findByPk(queueId)];
            case 17:
                queue = _f.sent();
                return [4 /*yield*/, (0, GetTicketWbot_1.default)(ticket)];
            case 18:
                wbot = _f.sent();
                msgtxt = "*Mensagem automática*:\nVocê foi transferido para o departamento *" + (queue === null || queue === void 0 ? void 0 : queue.name) + "*\naguarde, já vamos te atender!";
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: msgtxt
                    })];
            case 19:
                queueChangedMessage = _f.sent();
                return [4 /*yield*/, (0, wbotMessageListener_1.verifyMessage)(queueChangedMessage, ticket, ticket.contact)];
            case 20:
                _f.sent();
                return [3 /*break*/, 37];
            case 21:
                if (!(oldUserId !== userId && oldQueueId === queueId && !(0, lodash_1.isNil)(oldUserId) && !(0, lodash_1.isNil)(userId))) return [3 /*break*/, 26];
                return [4 /*yield*/, (0, GetTicketWbot_1.default)(ticket)];
            case 22:
                wbot = _f.sent();
                return [4 /*yield*/, (0, ShowUserService_1.default)(ticketData.userId)];
            case 23:
                nome = _f.sent();
                msgtxt = "*Mensagem automática*:\nFoi transferido para o atendente *" + nome.name + "*\naguarde, já vamos te atender!";
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: msgtxt
                    })];
            case 24:
                queueChangedMessage = _f.sent();
                return [4 /*yield*/, (0, wbotMessageListener_1.verifyMessage)(queueChangedMessage, ticket, ticket.contact)];
            case 25:
                _f.sent();
                return [3 /*break*/, 37];
            case 26:
                if (!(oldUserId !== userId && !(0, lodash_1.isNil)(oldUserId) && !(0, lodash_1.isNil)(userId) && oldQueueId !== queueId && !(0, lodash_1.isNil)(oldQueueId) && !(0, lodash_1.isNil)(queueId))) return [3 /*break*/, 32];
                return [4 /*yield*/, (0, GetTicketWbot_1.default)(ticket)];
            case 27:
                wbot = _f.sent();
                return [4 /*yield*/, Queue_1.default.findByPk(queueId)];
            case 28:
                queue = _f.sent();
                return [4 /*yield*/, (0, ShowUserService_1.default)(ticketData.userId)];
            case 29:
                nome = _f.sent();
                msgtxt = "*Mensagem automática*:\nVocê foi transferido para o departamento *" + (queue === null || queue === void 0 ? void 0 : queue.name) + "* e contará com a presença de *" + nome.name + "*\naguarde, já vamos te atender!";
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: msgtxt
                    })];
            case 30:
                queueChangedMessage = _f.sent();
                return [4 /*yield*/, (0, wbotMessageListener_1.verifyMessage)(queueChangedMessage, ticket, ticket.contact)];
            case 31:
                _f.sent();
                return [3 /*break*/, 37];
            case 32:
                if (!(oldUserId !== undefined && (0, lodash_1.isNil)(userId) && oldQueueId !== queueId && !(0, lodash_1.isNil)(queueId))) return [3 /*break*/, 37];
                return [4 /*yield*/, Queue_1.default.findByPk(queueId)];
            case 33:
                queue = _f.sent();
                return [4 /*yield*/, (0, GetTicketWbot_1.default)(ticket)];
            case 34:
                wbot = _f.sent();
                msgtxt = "*Mensagem automática*:\nVocê foi transferido para o departamento *" + (queue === null || queue === void 0 ? void 0 : queue.name) + "*\naguarde, já vamos te atender!";
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: msgtxt
                    })];
            case 35:
                queueChangedMessage = _f.sent();
                return [4 /*yield*/, (0, wbotMessageListener_1.verifyMessage)(queueChangedMessage, ticket, ticket.contact)];
            case 36:
                _f.sent();
                _f.label = 37;
            case 37: return [4 /*yield*/, ticket.update({
                    status: status_1,
                    queueId: queueId,
                    userId: userId,
                    whatsappId: whatsappId,
                    chatbot: chatbot,
                    queueOptionId: queueOptionId
                })];
            case 38:
                _f.sent();
                return [4 /*yield*/, ticket.reload()];
            case 39:
                _f.sent();
                if (status_1 !== undefined && ["pending"].indexOf(status_1) > -1) {
                    ticketTraking.update({
                        whatsappId: whatsappId,
                        queuedAt: (0, moment_1.default)().toDate(),
                        startedAt: null,
                        userId: null
                    });
                }
                if (status_1 !== undefined && ["open"].indexOf(status_1) > -1) {
                    ticketTraking.update({
                        startedAt: (0, moment_1.default)().toDate(),
                        ratingAt: null,
                        rated: false,
                        whatsappId: whatsappId,
                        userId: ticket.userId
                    });
                }
                return [4 /*yield*/, ticketTraking.save()];
            case 40:
                _f.sent();
                if (ticket.status !== oldStatus || ((_e = ticket.user) === null || _e === void 0 ? void 0 : _e.id) !== oldUserId) {
                    io.to("company-".concat(companyId, "-").concat(oldStatus))
                        .to("queue-".concat(ticket.queueId, "-").concat(oldStatus))
                        .to("user-".concat(oldUserId))
                        .emit("company-".concat(companyId, "-ticket"), {
                        action: "delete",
                        ticketId: ticket.id
                    });
                }
                io.to("company-".concat(companyId, "-").concat(ticket.status))
                    .to("company-".concat(companyId, "-notification"))
                    .to("queue-".concat(ticket.queueId, "-").concat(ticket.status))
                    .to("queue-".concat(ticket.queueId, "-notification"))
                    .to(ticketId.toString())
                    .to("user-".concat(ticket === null || ticket === void 0 ? void 0 : ticket.userId))
                    .to("user-".concat(oldUserId))
                    .emit("company-".concat(companyId, "-ticket"), {
                    action: "update",
                    ticket: ticket
                });
                return [2 /*return*/, { ticket: ticket, oldStatus: oldStatus, oldUserId: oldUserId }];
            case 41:
                err_1 = _f.sent();
                Sentry.captureException(err_1);
                return [3 /*break*/, 42];
            case 42: return [2 /*return*/];
        }
    });
}); };
exports.default = UpdateTicketService;
