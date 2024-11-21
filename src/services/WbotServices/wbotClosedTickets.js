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
exports.ClosedAllOpenTickets = void 0;
var sequelize_1 = require("sequelize");
var Ticket_1 = require("../../models/Ticket");
var Whatsapp_1 = require("../../models/Whatsapp");
var socket_1 = require("../../libs/socket");
var Mustache_1 = require("../../helpers/Mustache");
var SendWhatsAppMessage_1 = require("./SendWhatsAppMessage");
var moment_1 = require("moment");
var ShowTicketService_1 = require("../TicketServices/ShowTicketService");
var wbotMessageListener_1 = require("./wbotMessageListener");
var TicketTraking_1 = require("../../models/TicketTraking");
var ClosedAllOpenTickets = function (companyId) { return __awaiter(void 0, void 0, void 0, function () {
    var closeTicket, io, tickets, e_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                closeTicket = function (ticket, currentStatus, body) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(currentStatus === 'nps')) return [3 /*break*/, 2];
                                return [4 /*yield*/, ticket.update({
                                        status: "closed",
                                        //userId: ticket.userId || null,
                                        lastMessage: body,
                                        unreadMessages: 0,
                                        amountUseBotQueues: 0
                                    })];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 6];
                            case 2:
                                if (!(currentStatus === 'open')) return [3 /*break*/, 4];
                                return [4 /*yield*/, ticket.update({
                                        status: "closed",
                                        //  userId: ticket.userId || null,
                                        lastMessage: body,
                                        unreadMessages: 0,
                                        amountUseBotQueues: 0
                                    })];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 6];
                            case 4: return [4 /*yield*/, ticket.update({
                                    status: "closed",
                                    //userId: ticket.userId || null,
                                    unreadMessages: 0
                                })];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); };
                io = (0, socket_1.getIO)();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Ticket_1.default.findAndCountAll({
                        where: { status: (_a = {}, _a[sequelize_1.Op.in] = ["open"], _a), companyId: companyId },
                        order: [["updatedAt", "DESC"]]
                    })];
            case 2:
                tickets = (_b.sent()).rows;
                tickets.forEach(function (ticket) { return __awaiter(void 0, void 0, void 0, function () {
                    var showTicket, whatsapp, ticketTraking, expiresInactiveMessage, expiresTicket //tempo em horas para fechar ticket automaticamente
                    , bodyExpiresMessageInactive, dataLimite, dataUltimaInteracaoChamado, sentMessage;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, ShowTicketService_1.default)(ticket.id, companyId)];
                            case 1:
                                showTicket = _a.sent();
                                return [4 /*yield*/, Whatsapp_1.default.findByPk(showTicket === null || showTicket === void 0 ? void 0 : showTicket.whatsappId)];
                            case 2:
                                whatsapp = _a.sent();
                                return [4 /*yield*/, TicketTraking_1.default.findOne({
                                        where: {
                                            ticketId: ticket.id,
                                            finishedAt: null,
                                        }
                                    })];
                            case 3:
                                ticketTraking = _a.sent();
                                if (!whatsapp)
                                    return [2 /*return*/];
                                expiresInactiveMessage = whatsapp.expiresInactiveMessage, expiresTicket = whatsapp.expiresTicket;
                                if (!(expiresTicket && expiresTicket !== "" &&
                                    // @ts-ignore: Unreachable code error
                                    expiresTicket !== "0" && Number(expiresTicket) > 0)) return [3 /*break*/, 8];
                                bodyExpiresMessageInactive = (0, Mustache_1.default)("\u200E ".concat(expiresInactiveMessage), showTicket.contact);
                                dataLimite = new Date();
                                dataLimite.setMinutes(dataLimite.getMinutes() - Number(expiresTicket));
                                if (!(showTicket.status === "open" && !showTicket.isGroup)) return [3 /*break*/, 8];
                                dataUltimaInteracaoChamado = new Date(showTicket.updatedAt);
                                if (!(dataUltimaInteracaoChamado < dataLimite && showTicket.fromMe)) return [3 /*break*/, 8];
                                closeTicket(showTicket, showTicket.status, bodyExpiresMessageInactive);
                                if (!(expiresInactiveMessage !== "" && expiresInactiveMessage !== undefined)) return [3 /*break*/, 6];
                                return [4 /*yield*/, (0, SendWhatsAppMessage_1.default)({ body: bodyExpiresMessageInactive, ticket: showTicket })];
                            case 4:
                                sentMessage = _a.sent();
                                return [4 /*yield*/, (0, wbotMessageListener_1.verifyMessage)(sentMessage, showTicket, showTicket.contact)];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6: return [4 /*yield*/, ticketTraking.update({
                                    finishedAt: (0, moment_1.default)().toDate(),
                                    closedAt: (0, moment_1.default)().toDate(),
                                    whatsappId: ticket.whatsappId,
                                    userId: ticket.userId,
                                })];
                            case 7:
                                _a.sent();
                                io.to("open").emit("company-".concat(companyId, "-ticket"), {
                                    action: "delete",
                                    ticketId: showTicket.id
                                });
                                _a.label = 8;
                            case 8: return [2 /*return*/];
                        }
                    });
                }); });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                console.log('e', e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ClosedAllOpenTickets = ClosedAllOpenTickets;
