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
exports.findFilteredList = exports.remove = exports.update = exports.show = exports.store = exports.list = exports.index = void 0;
var Yup = require("yup");
var AppError_1 = require("../errors/AppError");
var ListTicketNotesService_1 = require("../services/TicketNoteService/ListTicketNotesService");
var CreateTicketNoteService_1 = require("../services/TicketNoteService/CreateTicketNoteService");
var UpdateTicketNoteService_1 = require("../services/TicketNoteService/UpdateTicketNoteService");
var ShowTicketNoteService_1 = require("../services/TicketNoteService/ShowTicketNoteService");
var FindAllTicketNotesService_1 = require("../services/TicketNoteService/FindAllTicketNotesService");
var DeleteTicketNoteService_1 = require("../services/TicketNoteService/DeleteTicketNoteService");
var FindNotesByContactIdAndTicketId_1 = require("../services/TicketNoteService/FindNotesByContactIdAndTicketId");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchParam, pageNumber, _b, ticketNotes, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, searchParam = _a.searchParam, pageNumber = _a.pageNumber;
                return [4 /*yield*/, (0, ListTicketNotesService_1.default)({
                        searchParam: searchParam,
                        pageNumber: pageNumber
                    })];
            case 1:
                _b = _c.sent(), ticketNotes = _b.ticketNotes, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.json({ ticketNotes: ticketNotes, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var list = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketNotes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, FindAllTicketNotesService_1.default)()];
            case 1:
                ticketNotes = _a.sent();
                return [2 /*return*/, res.status(200).json(ticketNotes)];
        }
    });
}); };
exports.list = list;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newTicketNote, userId, schema, err_1, ticketNote;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newTicketNote = req.body;
                userId = req.user.id;
                schema = Yup.object().shape({
                    note: Yup.string().required()
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(newTicketNote)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                throw new AppError_1.default(err_1.message);
            case 4: return [4 /*yield*/, (0, CreateTicketNoteService_1.default)(__assign(__assign({}, newTicketNote), { userId: userId }))];
            case 5:
                ticketNote = _a.sent();
                return [2 /*return*/, res.status(200).json(ticketNote)];
        }
    });
}); };
exports.store = store;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, ticketNote;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, ShowTicketNoteService_1.default)(id)];
            case 1:
                ticketNote = _a.sent();
                return [2 /*return*/, res.status(200).json(ticketNote)];
        }
    });
}); };
exports.show = show;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketNote, schema, err_2, recordUpdated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ticketNote = req.body;
                schema = Yup.object().shape({
                    note: Yup.string()
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(ticketNote)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                throw new AppError_1.default(err_2.message);
            case 4: return [4 /*yield*/, (0, UpdateTicketNoteService_1.default)(ticketNote)];
            case 5:
                recordUpdated = _a.sent();
                return [2 /*return*/, res.status(200).json(recordUpdated)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (req.user.profile !== "admin") {
                    throw new AppError_1.default("ERR_NO_PERMISSION", 403);
                }
                return [4 /*yield*/, (0, DeleteTicketNoteService_1.default)(id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ message: "Observação removida" })];
        }
    });
}); };
exports.remove = remove;
var findFilteredList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contactId, ticketId, notes, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, contactId = _a.contactId, ticketId = _a.ticketId;
                return [4 /*yield*/, (0, FindNotesByContactIdAndTicketId_1.default)({
                        contactId: contactId,
                        ticketId: ticketId
                    })];
            case 1:
                notes = _b.sent();
                return [2 /*return*/, res.status(200).json(notes)];
            case 2:
                e_1 = _b.sent();
                return [2 /*return*/, res.status(500).json({ message: e_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findFilteredList = findFilteredList;
