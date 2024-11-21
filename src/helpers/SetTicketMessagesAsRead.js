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
// import cacheLayer from "../libs/cache";
var socket_1 = require("../libs/socket");
var Message_1 = require("../models/Message");
var logger_1 = require("../utils/logger");
var GetTicketWbot_1 = require("./GetTicketWbot");
var SetTicketMessagesAsRead = function (ticket) { return __awaiter(void 0, void 0, void 0, function () {
    var wbot, getJsonMessage, lastMessages, err_1, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ticket.update({ unreadMessages: 0 })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 8, , 9]);
                return [4 /*yield*/, (0, GetTicketWbot_1.default)(ticket)];
            case 3:
                wbot = _a.sent();
                return [4 /*yield*/, Message_1.default.findAll({
                        where: {
                            ticketId: ticket.id,
                            fromMe: false,
                            read: false
                        },
                        order: [["createdAt", "DESC"]]
                    })];
            case 4:
                getJsonMessage = _a.sent();
                if (!(getJsonMessage.length > 0)) return [3 /*break*/, 6];
                lastMessages = JSON.parse(JSON.stringify(getJsonMessage[0].dataJson));
                if (!(lastMessages.key && lastMessages.key.fromMe === false)) return [3 /*break*/, 6];
                return [4 /*yield*/, wbot.chatModify({ markRead: true, lastMessages: [lastMessages] }, "".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"))];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [4 /*yield*/, Message_1.default.update({ read: true }, {
                    where: {
                        ticketId: ticket.id,
                        read: false
                    }
                })];
            case 7:
                _a.sent();
                return [3 /*break*/, 9];
            case 8:
                err_1 = _a.sent();
                logger_1.logger.warn("Could not mark messages as read. Maybe whatsapp session disconnected? Err: ".concat(err_1));
                return [3 /*break*/, 9];
            case 9:
                io = (0, socket_1.getIO)();
                io.to("company-".concat(ticket.companyId, "-mainchannel")).emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "updateUnread",
                    ticketId: ticket.id
                });
                return [2 /*return*/];
        }
    });
}); };
exports.default = SetTicketMessagesAsRead;
