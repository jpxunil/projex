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
var AppError_1 = require("../../errors/AppError");
var ContactListItem_1 = require("../../models/ContactListItem");
var logger_1 = require("../../utils/logger");
var CheckNumber_1 = require("../WbotServices/CheckNumber");
var UpdateService = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var id, name, number, email, record, response, number_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = data.id, name = data.name, number = data.number, email = data.email;
                return [4 /*yield*/, ContactListItem_1.default.findByPk(id)];
            case 1:
                record = _a.sent();
                if (!record) {
                    throw new AppError_1.default("ERR_NO_CONTACTLISTITEM_FOUND", 404);
                }
                return [4 /*yield*/, record.update({
                        name: name,
                        number: number,
                        email: email
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 6, , 7]);
                return [4 /*yield*/, (0, CheckNumber_1.default)(record.number, record.companyId)];
            case 4:
                response = _a.sent();
                record.isWhatsappValid = response.exists;
                number_1 = response.jid.replace(/\D/g, "");
                record.number = number_1;
                return [4 /*yield*/, record.save()];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _a.sent();
                logger_1.logger.error("N\u00FAmero de contato inv\u00E1lido: ".concat(record.number));
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/, record];
        }
    });
}); };
exports.default = UpdateService;
