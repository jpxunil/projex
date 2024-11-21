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
exports.remove = exports.update = exports.showFromUUID = exports.show = exports.kanban = exports.store = exports.index = void 0;
var socket_1 = require("../libs/socket");
var CreateTicketService_1 = require("../services/TicketServices/CreateTicketService");
var DeleteTicketService_1 = require("../services/TicketServices/DeleteTicketService");
var ListTicketsService_1 = require("../services/TicketServices/ListTicketsService");
var ShowTicketFromUUIDService_1 = require("../services/TicketServices/ShowTicketFromUUIDService");
var ShowTicketService_1 = require("../services/TicketServices/ShowTicketService");
var UpdateTicketService_1 = require("../services/TicketServices/UpdateTicketService");
var ListTicketsServiceKanban_1 = require("../services/TicketServices/ListTicketsServiceKanban");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pageNumber, status, date, updatedAt, searchParam, showAll, queueIdsStringified, tagIdsStringified, userIdsStringified, withUnreadMessages, userId, companyId, queueIds, tagsIds, usersIds, _b, tickets, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, pageNumber = _a.pageNumber, status = _a.status, date = _a.date, updatedAt = _a.updatedAt, searchParam = _a.searchParam, showAll = _a.showAll, queueIdsStringified = _a.queueIds, tagIdsStringified = _a.tags, userIdsStringified = _a.users, withUnreadMessages = _a.withUnreadMessages;
                userId = req.user.id;
                companyId = req.user.companyId;
                queueIds = [];
                tagsIds = [];
                usersIds = [];
                if (queueIdsStringified) {
                    queueIds = JSON.parse(queueIdsStringified);
                }
                if (tagIdsStringified) {
                    tagsIds = JSON.parse(tagIdsStringified);
                }
                if (userIdsStringified) {
                    usersIds = JSON.parse(userIdsStringified);
                }
                return [4 /*yield*/, (0, ListTicketsService_1.default)({
                        searchParam: searchParam,
                        tags: tagsIds,
                        users: usersIds,
                        pageNumber: pageNumber,
                        status: status,
                        date: date,
                        updatedAt: updatedAt,
                        showAll: showAll,
                        userId: userId,
                        queueIds: queueIds,
                        withUnreadMessages: withUnreadMessages,
                        companyId: companyId,
                    })];
            case 1:
                _b = _c.sent(), tickets = _b.tickets, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.status(200).json({ tickets: tickets, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contactId, status, userId, queueId, whatsappId, companyId, ticket, io;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, contactId = _a.contactId, status = _a.status, userId = _a.userId, queueId = _a.queueId, whatsappId = _a.whatsappId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, CreateTicketService_1.default)({
                        contactId: contactId,
                        status: status,
                        userId: userId,
                        companyId: companyId,
                        queueId: queueId,
                        whatsappId: whatsappId
                    })];
            case 1:
                ticket = _b.sent();
                io = (0, socket_1.getIO)();
                io.to(ticket.status).emit("company-".concat(companyId, "-ticket"), {
                    action: "update",
                    ticket: ticket
                });
                return [2 /*return*/, res.status(200).json(ticket)];
        }
    });
}); };
exports.store = store;
var kanban = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pageNumber, status, date, updatedAt, searchParam, showAll, queueIdsStringified, tagIdsStringified, userIdsStringified, withUnreadMessages, userId, companyId, queueIds, tagsIds, usersIds, _b, tickets, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, pageNumber = _a.pageNumber, status = _a.status, date = _a.date, updatedAt = _a.updatedAt, searchParam = _a.searchParam, showAll = _a.showAll, queueIdsStringified = _a.queueIds, tagIdsStringified = _a.tags, userIdsStringified = _a.users, withUnreadMessages = _a.withUnreadMessages;
                userId = req.user.id;
                companyId = req.user.companyId;
                queueIds = [];
                tagsIds = [];
                usersIds = [];
                if (queueIdsStringified) {
                    queueIds = JSON.parse(queueIdsStringified);
                }
                if (tagIdsStringified) {
                    tagsIds = JSON.parse(tagIdsStringified);
                }
                if (userIdsStringified) {
                    usersIds = JSON.parse(userIdsStringified);
                }
                return [4 /*yield*/, (0, ListTicketsServiceKanban_1.default)({
                        searchParam: searchParam,
                        tags: tagsIds,
                        users: usersIds,
                        pageNumber: pageNumber,
                        status: status,
                        date: date,
                        updatedAt: updatedAt,
                        showAll: showAll,
                        userId: userId,
                        queueIds: queueIds,
                        withUnreadMessages: withUnreadMessages,
                        companyId: companyId
                    })];
            case 1:
                _b = _c.sent(), tickets = _b.tickets, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.status(200).json({ tickets: tickets, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.kanban = kanban;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, companyId, contact;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ticketId = req.params.ticketId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowTicketService_1.default)(ticketId, companyId)];
            case 1:
                contact = _a.sent();
                return [2 /*return*/, res.status(200).json(contact)];
        }
    });
}); };
exports.show = show;
var showFromUUID = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uuid, ticket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uuid = req.params.uuid;
                return [4 /*yield*/, (0, ShowTicketFromUUIDService_1.default)(uuid)];
            case 1:
                ticket = _a.sent();
                return [2 /*return*/, res.status(200).json(ticket)];
        }
    });
}); };
exports.showFromUUID = showFromUUID;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, ticketData, companyId, ticket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ticketId = req.params.ticketId;
                ticketData = req.body;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                        ticketData: ticketData,
                        ticketId: ticketId,
                        companyId: companyId
                    })];
            case 1:
                ticket = (_a.sent()).ticket;
                return [2 /*return*/, res.status(200).json(ticket)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, companyId, ticket, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ticketId = req.params.ticketId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowTicketService_1.default)(ticketId, companyId)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, DeleteTicketService_1.default)(ticketId)];
            case 2:
                ticket = _a.sent();
                io = (0, socket_1.getIO)();
                io.to(ticketId)
                    .to("company-".concat(companyId, "-").concat(ticket.status))
                    .to("company-".concat(companyId, "-notification"))
                    .to("queue-".concat(ticket.queueId, "-").concat(ticket.status))
                    .to("queue-".concat(ticket.queueId, "-notification"))
                    .emit("company-".concat(companyId, "-ticket"), {
                    action: "delete",
                    ticketId: +ticketId
                });
                return [2 /*return*/, res.status(200).json({ message: "ticket deleted" })];
        }
    });
}); };
exports.remove = remove;
