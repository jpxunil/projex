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
exports.remove = exports.store = void 0;
var TicketTag_1 = require("../models/TicketTag");
var Tag_1 = require("../models/Tag");
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ticketId, tagId, ticketTag, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, ticketId = _a.ticketId, tagId = _a.tagId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, TicketTag_1.default.create({ ticketId: ticketId, tagId: tagId })];
            case 2:
                ticketTag = _b.sent();
                return [2 /*return*/, res.status(201).json(ticketTag)];
            case 3:
                error_1 = _b.sent();
                return [2 /*return*/, res.status(500).json({ error: 'Failed to store ticket tag.' })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.store = store;
/*
export const remove = async (req: Request, res: Response): Promise<Response> => {
  const { ticketId } = req.params;



  try {
    await TicketTag.destroy({ where: { ticketId } });
    return res.status(200).json({ message: 'Ticket tags removed successfully.' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to remove ticket tags.' });
  }
};
*/
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticketId, ticketTags, tagIds, tagsWithKanbanOne, tagIdsWithKanbanOne, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ticketId = req.params.ticketId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, TicketTag_1.default.findAll({ where: { ticketId: ticketId } })];
            case 2:
                ticketTags = _a.sent();
                tagIds = ticketTags.map(function (ticketTag) { return ticketTag.tagId; });
                return [4 /*yield*/, Tag_1.default.findAll({
                        where: {
                            id: tagIds,
                            kanban: 1,
                        },
                    })];
            case 3:
                tagsWithKanbanOne = _a.sent();
                tagIdsWithKanbanOne = tagsWithKanbanOne.map(function (tag) { return tag.id; });
                if (!tagIdsWithKanbanOne) return [3 /*break*/, 5];
                return [4 /*yield*/, TicketTag_1.default.destroy({ where: { ticketId: ticketId, tagId: tagIdsWithKanbanOne } })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2 /*return*/, res.status(200).json({ message: 'Ticket tags removed successfully.' })];
            case 6:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ error: 'Failed to remove ticket tags.' })];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.remove = remove;
