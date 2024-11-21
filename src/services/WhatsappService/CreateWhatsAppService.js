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
var Whatsapp_1 = require("../../models/Whatsapp");
var Company_1 = require("../../models/Company");
var Plan_1 = require("../../models/Plan");
var AssociateWhatsappQueue_1 = require("./AssociateWhatsappQueue");
var CreateWhatsAppService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var company, whatsappCount, schema, err_1, whatsappFound, oldDefaultWhatsapp, tokenSchema, err_2, whatsapp;
    var name = _b.name, _c = _b.status, status = _c === void 0 ? "OPENING" : _c, _d = _b.queueIds, queueIds = _d === void 0 ? [] : _d, greetingMessage = _b.greetingMessage, complationMessage = _b.complationMessage, outOfHoursMessage = _b.outOfHoursMessage, ratingMessage = _b.ratingMessage, _e = _b.isDefault, isDefault = _e === void 0 ? false : _e, companyId = _b.companyId, _f = _b.token, token = _f === void 0 ? "" : _f, _g = _b.provider, provider = _g === void 0 ? "beta" : _g, 
    //timeSendQueue,
    //sendIdQueue,
    transferQueueId = _b.transferQueueId, timeToTransfer = _b.timeToTransfer, promptId = _b.promptId, _h = _b.maxUseBotQueues, maxUseBotQueues = _h === void 0 ? 3 : _h, _j = _b.timeUseBotQueues, timeUseBotQueues = _j === void 0 ? 0 : _j, _k = _b.expiresTicket, expiresTicket = _k === void 0 ? 0 : _k, _l = _b.expiresInactiveMessage, expiresInactiveMessage = _l === void 0 ? "" : _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0: return [4 /*yield*/, Company_1.default.findOne({
                    where: {
                        id: companyId
                    },
                    include: [{ model: Plan_1.default, as: "plan" }]
                })];
            case 1:
                company = _m.sent();
                if (!(company !== null)) return [3 /*break*/, 3];
                return [4 /*yield*/, Whatsapp_1.default.count({
                        where: {
                            companyId: companyId
                        }
                    })];
            case 2:
                whatsappCount = _m.sent();
                if (whatsappCount >= company.plan.connections) {
                    throw new AppError_1.default("N\u00FAmero m\u00E1ximo de conex\u00F5es j\u00E1 alcan\u00E7ado: ".concat(whatsappCount));
                }
                _m.label = 3;
            case 3:
                schema = Yup.object().shape({
                    name: Yup.string()
                        .required()
                        .min(2)
                        .test("Check-name", "Esse nome já está sendo utilizado por outra conexão", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var nameExists;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!value)
                                        return [2 /*return*/, false];
                                    return [4 /*yield*/, Whatsapp_1.default.findOne({
                                            where: { name: value }
                                        })];
                                case 1:
                                    nameExists = _a.sent();
                                    return [2 /*return*/, !nameExists];
                            }
                        });
                    }); }),
                    isDefault: Yup.boolean().required()
                });
                _m.label = 4;
            case 4:
                _m.trys.push([4, 6, , 7]);
                return [4 /*yield*/, schema.validate({ name: name, status: status, isDefault: isDefault })];
            case 5:
                _m.sent();
                return [3 /*break*/, 7];
            case 6:
                err_1 = _m.sent();
                throw new AppError_1.default(err_1.message);
            case 7: return [4 /*yield*/, Whatsapp_1.default.findOne({ where: { companyId: companyId } })];
            case 8:
                whatsappFound = _m.sent();
                isDefault = !whatsappFound;
                oldDefaultWhatsapp = null;
                if (!isDefault) return [3 /*break*/, 11];
                return [4 /*yield*/, Whatsapp_1.default.findOne({
                        where: { isDefault: true, companyId: companyId }
                    })];
            case 9:
                oldDefaultWhatsapp = _m.sent();
                if (!oldDefaultWhatsapp) return [3 /*break*/, 11];
                return [4 /*yield*/, oldDefaultWhatsapp.update({ isDefault: false, companyId: companyId })];
            case 10:
                _m.sent();
                _m.label = 11;
            case 11:
                if (queueIds.length > 1 && !greetingMessage) {
                    throw new AppError_1.default("ERR_WAPP_GREETING_REQUIRED");
                }
                if (!(token !== null && token !== "")) return [3 /*break*/, 15];
                tokenSchema = Yup.object().shape({
                    token: Yup.string()
                        .required()
                        .min(2)
                        .test("Check-token", "This whatsapp token is already used.", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var tokenExists;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!value)
                                        return [2 /*return*/, false];
                                    return [4 /*yield*/, Whatsapp_1.default.findOne({
                                            where: { token: value }
                                        })];
                                case 1:
                                    tokenExists = _a.sent();
                                    return [2 /*return*/, !tokenExists];
                            }
                        });
                    }); })
                });
                _m.label = 12;
            case 12:
                _m.trys.push([12, 14, , 15]);
                return [4 /*yield*/, tokenSchema.validate({ token: token })];
            case 13:
                _m.sent();
                return [3 /*break*/, 15];
            case 14:
                err_2 = _m.sent();
                throw new AppError_1.default(err_2.message);
            case 15: return [4 /*yield*/, Whatsapp_1.default.create({
                    name: name,
                    status: status,
                    greetingMessage: greetingMessage,
                    complationMessage: complationMessage,
                    outOfHoursMessage: outOfHoursMessage,
                    ratingMessage: ratingMessage,
                    isDefault: isDefault,
                    companyId: companyId,
                    token: token,
                    provider: provider,
                    //timeSendQueue,
                    //sendIdQueue,
                    transferQueueId: transferQueueId,
                    timeToTransfer: timeToTransfer,
                    promptId: promptId,
                    maxUseBotQueues: maxUseBotQueues,
                    timeUseBotQueues: timeUseBotQueues,
                    expiresTicket: expiresTicket,
                    expiresInactiveMessage: expiresInactiveMessage
                }, { include: ["queues"] })];
            case 16:
                whatsapp = _m.sent();
                return [4 /*yield*/, (0, AssociateWhatsappQueue_1.default)(whatsapp, queueIds)];
            case 17:
                _m.sent();
                return [2 /*return*/, { whatsapp: whatsapp, oldDefaultWhatsapp: oldDefaultWhatsapp }];
        }
    });
}); };
exports.default = CreateWhatsAppService;
