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
var Yup = require("yup");
var AppError_1 = require("../../errors/AppError");
var ShowUserService_1 = require("./ShowUserService");
var Company_1 = require("../../models/Company");
var User_1 = require("../../models/User");
var UpdateUserService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var user, requestUser, schema, email, password, profile, name, _c, queueIds, whatsappId, allTicket, err_1, company, serializedUser;
    var userData = _b.userData, userId = _b.userId, companyId = _b.companyId, requestUserId = _b.requestUserId;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, ShowUserService_1.default)(userId)];
            case 1:
                user = _d.sent();
                return [4 /*yield*/, User_1.default.findByPk(requestUserId)];
            case 2:
                requestUser = _d.sent();
                if (requestUser.super === false && userData.companyId !== companyId) {
                    throw new AppError_1.default("O usuário não pertence à esta empresa");
                }
                schema = Yup.object().shape({
                    name: Yup.string().min(2),
                    email: Yup.string().email(),
                    profile: Yup.string(),
                    password: Yup.string(),
                    allTicket: Yup.string()
                });
                email = userData.email, password = userData.password, profile = userData.profile, name = userData.name, _c = userData.queueIds, queueIds = _c === void 0 ? [] : _c, whatsappId = userData.whatsappId, allTicket = userData.allTicket;
                _d.label = 3;
            case 3:
                _d.trys.push([3, 5, , 6]);
                return [4 /*yield*/, schema.validate({ email: email, password: password, profile: profile, name: name, allTicket: allTicket })];
            case 4:
                _d.sent();
                return [3 /*break*/, 6];
            case 5:
                err_1 = _d.sent();
                throw new AppError_1.default(err_1.message);
            case 6: return [4 /*yield*/, user.update({
                    email: email,
                    password: password,
                    profile: profile,
                    name: name,
                    whatsappId: whatsappId || null,
                    allTicket: allTicket
                })];
            case 7:
                _d.sent();
                return [4 /*yield*/, user.$set("queues", queueIds)];
            case 8:
                _d.sent();
                return [4 /*yield*/, user.reload()];
            case 9:
                _d.sent();
                return [4 /*yield*/, Company_1.default.findByPk(user.companyId)];
            case 10:
                company = _d.sent();
                serializedUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    profile: user.profile,
                    companyId: user.companyId,
                    company: company,
                    queues: user.queues
                };
                return [2 /*return*/, serializedUser];
        }
    });
}); };
exports.default = UpdateUserService;
