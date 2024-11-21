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
var Sentry = require("@sentry/node");
var Contact_1 = require("../../models/Contact");
var Setting_1 = require("../../models/Setting");
var Ticket_1 = require("../../models/Ticket");
var logger_1 = require("../../utils/logger");
var CreateOrUpdateBaileysService_1 = require("../BaileysServices/CreateOrUpdateBaileysService");
var CreateMessageService_1 = require("../MessageServices/CreateMessageService");
var wbotMonitor = function (wbot, whatsapp, companyId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            wbot.ws.on("CB:call", function (node) { return __awaiter(void 0, void 0, void 0, function () {
                var content, _a, from, id, sendMsgCall, number, contact, ticket, date, hours, minutes, body, messageData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            content = node.content[0];
                            if (content.tag === "offer") {
                                _a = node.attrs, from = _a.from, id = _a.id;
                            }
                            if (!(content.tag === "terminate")) return [3 /*break*/, 8];
                            return [4 /*yield*/, Setting_1.default.findOne({
                                    where: { key: "call", companyId: companyId },
                                })];
                        case 1:
                            sendMsgCall = _b.sent();
                            if (!(sendMsgCall.value === "disabled")) return [3 /*break*/, 8];
                            return [4 /*yield*/, wbot.sendMessage(node.attrs.from, {
                                    text: "*Mensagem Automática:*\n\nAs chamadas de voz e vídeo estão desabilitas para esse WhatsApp, favor enviar uma mensagem de texto. Obrigado",
                                })];
                        case 2:
                            _b.sent();
                            number = node.attrs.from.replace(/\D/g, "");
                            return [4 /*yield*/, Contact_1.default.findOne({
                                    where: { companyId: companyId, number: number },
                                })];
                        case 3:
                            contact = _b.sent();
                            return [4 /*yield*/, Ticket_1.default.findOne({
                                    where: {
                                        contactId: contact.id,
                                        whatsappId: wbot.id,
                                        //status: { [Op.or]: ["close"] },
                                        companyId: companyId
                                    },
                                })];
                        case 4:
                            ticket = _b.sent();
                            // se não existir o ticket não faz nada.
                            if (!ticket)
                                return [2 /*return*/];
                            date = new Date();
                            hours = date.getHours();
                            minutes = date.getMinutes();
                            body = "Chamada de voz/v\u00EDdeo perdida \u00E0s ".concat(hours, ":").concat(minutes);
                            messageData = {
                                id: content.attrs["call-id"],
                                ticketId: ticket.id,
                                contactId: contact.id,
                                body: body,
                                fromMe: false,
                                mediaType: "call_log",
                                read: true,
                                quotedMsgId: null,
                                ack: 1,
                            };
                            return [4 /*yield*/, ticket.update({
                                    lastMessage: body,
                                })];
                        case 5:
                            _b.sent();
                            if (!(ticket.status === "closed")) return [3 /*break*/, 7];
                            return [4 /*yield*/, ticket.update({
                                    status: "pending",
                                })];
                        case 6:
                            _b.sent();
                            _b.label = 7;
                        case 7: return [2 /*return*/, (0, CreateMessageService_1.default)({ messageData: messageData, companyId: companyId })];
                        case 8: return [2 /*return*/];
                    }
                });
            }); });
            wbot.ev.on("contacts.upsert", function (contacts) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, CreateOrUpdateBaileysService_1.default)({
                                whatsappId: whatsapp.id,
                                contacts: contacts,
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (err) {
            Sentry.captureException(err);
            logger_1.logger.error(err);
        }
        return [2 /*return*/];
    });
}); };
exports.default = wbotMonitor;
