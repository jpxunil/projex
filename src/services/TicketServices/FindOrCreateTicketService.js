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
var date_fns_1 = require("date-fns");
var sequelize_1 = require("sequelize");
var Ticket_1 = require("../../models/Ticket");
var ShowTicketService_1 = require("./ShowTicketService");
var FindOrCreateATicketTrakingService_1 = require("./FindOrCreateATicketTrakingService");
var Setting_1 = require("../../models/Setting");
var Whatsapp_1 = require("../../models/Whatsapp");
var FindOrCreateTicketService = function (contact, whatsappId, unreadMessages, companyId, groupContact) { return __awaiter(void 0, void 0, void 0, function () {
    var ticket, msgIsGroupBlock, value, whatsapp;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Ticket_1.default.findOne({
                    where: {
                        status: (_a = {},
                            _a[sequelize_1.Op.or] = ["open", "pending", "closed"],
                            _a),
                        contactId: groupContact ? groupContact.id : contact.id,
                        companyId: companyId,
                        whatsappId: whatsappId
                    },
                    order: [["id", "DESC"]]
                })];
            case 1:
                ticket = _c.sent();
                if (!ticket) return [3 /*break*/, 3];
                return [4 /*yield*/, ticket.update({ unreadMessages: unreadMessages, whatsappId: whatsappId })];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                if (!((ticket === null || ticket === void 0 ? void 0 : ticket.status) === "closed")) return [3 /*break*/, 5];
                return [4 /*yield*/, ticket.update({ queueId: null, userId: null })];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5:
                if (!(!ticket && groupContact)) return [3 /*break*/, 11];
                return [4 /*yield*/, Ticket_1.default.findOne({
                        where: {
                            contactId: groupContact.id
                        },
                        order: [["updatedAt", "DESC"]]
                    })];
            case 6:
                ticket = _c.sent();
                if (!ticket) return [3 /*break*/, 9];
                return [4 /*yield*/, ticket.update({
                        status: "pending",
                        userId: null,
                        unreadMessages: unreadMessages,
                        queueId: null,
                        companyId: companyId
                    })];
            case 7:
                _c.sent();
                return [4 /*yield*/, (0, FindOrCreateATicketTrakingService_1.default)({
                        ticketId: ticket.id,
                        companyId: companyId,
                        whatsappId: ticket.whatsappId,
                        userId: ticket.userId
                    })];
            case 8:
                _c.sent();
                _c.label = 9;
            case 9: return [4 /*yield*/, Setting_1.default.findOne({
                    where: { key: "timeCreateNewTicket" }
                })];
            case 10:
                msgIsGroupBlock = _c.sent();
                value = msgIsGroupBlock ? parseInt(msgIsGroupBlock.value, 10) : 7200;
                _c.label = 11;
            case 11:
                if (!(!ticket && !groupContact)) return [3 /*break*/, 15];
                return [4 /*yield*/, Ticket_1.default.findOne({
                        where: {
                            updatedAt: (_b = {},
                                _b[sequelize_1.Op.between] = [+(0, date_fns_1.subHours)(new Date(), 2), +new Date()],
                                _b),
                            contactId: contact.id
                        },
                        order: [["updatedAt", "DESC"]]
                    })];
            case 12:
                ticket = _c.sent();
                if (!ticket) return [3 /*break*/, 15];
                return [4 /*yield*/, ticket.update({
                        status: "pending",
                        userId: null,
                        unreadMessages: unreadMessages,
                        queueId: null,
                        companyId: companyId
                    })];
            case 13:
                _c.sent();
                return [4 /*yield*/, (0, FindOrCreateATicketTrakingService_1.default)({
                        ticketId: ticket.id,
                        companyId: companyId,
                        whatsappId: ticket.whatsappId,
                        userId: ticket.userId
                    })];
            case 14:
                _c.sent();
                _c.label = 15;
            case 15: return [4 /*yield*/, Whatsapp_1.default.findOne({
                    where: { id: whatsappId }
                })];
            case 16:
                whatsapp = _c.sent();
                if (!!ticket) return [3 /*break*/, 19];
                return [4 /*yield*/, Ticket_1.default.create({
                        contactId: groupContact ? groupContact.id : contact.id,
                        status: "pending",
                        isGroup: !!groupContact,
                        unreadMessages: unreadMessages,
                        whatsappId: whatsappId,
                        whatsapp: whatsapp,
                        companyId: companyId
                    })];
            case 17:
                ticket = _c.sent();
                return [4 /*yield*/, (0, FindOrCreateATicketTrakingService_1.default)({
                        ticketId: ticket.id,
                        companyId: companyId,
                        whatsappId: whatsappId,
                        userId: ticket.userId
                    })];
            case 18:
                _c.sent();
                _c.label = 19;
            case 19: return [4 /*yield*/, (0, ShowTicketService_1.default)(ticket.id, companyId)];
            case 20:
                ticket = _c.sent();
                return [2 /*return*/, ticket];
        }
    });
}); };
exports.default = FindOrCreateTicketService;
