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
var sequelize_1 = require("sequelize");
var AppError_1 = require("../../errors/AppError");
var Whatsapp_1 = require("../../models/Whatsapp");
var ShowWhatsAppService_1 = require("./ShowWhatsAppService");
var AssociateWhatsappQueue_1 = require("./AssociateWhatsappQueue");
var UpdateWhatsAppService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var schema, name, status, isDefault, session, greetingMessage, complationMessage, outOfHoursMessage, ratingMessage, _c, queueIds, token, 
    //timeSendQueue,
    //sendIdQueue = null,
    transferQueueId, timeToTransfer, promptId, maxUseBotQueues, timeUseBotQueues, expiresTicket, expiresInactiveMessage, err_1, oldDefaultWhatsapp, whatsapp;
    var _d;
    var whatsappData = _b.whatsappData, whatsappId = _b.whatsappId, companyId = _b.companyId;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                schema = Yup.object().shape({
                    name: Yup.string().min(2),
                    status: Yup.string(),
                    isDefault: Yup.boolean()
                });
                name = whatsappData.name, status = whatsappData.status, isDefault = whatsappData.isDefault, session = whatsappData.session, greetingMessage = whatsappData.greetingMessage, complationMessage = whatsappData.complationMessage, outOfHoursMessage = whatsappData.outOfHoursMessage, ratingMessage = whatsappData.ratingMessage, _c = whatsappData.queueIds, queueIds = _c === void 0 ? [] : _c, token = whatsappData.token, transferQueueId = whatsappData.transferQueueId, timeToTransfer = whatsappData.timeToTransfer, promptId = whatsappData.promptId, maxUseBotQueues = whatsappData.maxUseBotQueues, timeUseBotQueues = whatsappData.timeUseBotQueues, expiresTicket = whatsappData.expiresTicket, expiresInactiveMessage = whatsappData.expiresInactiveMessage;
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate({ name: name, status: status, isDefault: isDefault })];
            case 2:
                _e.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _e.sent();
                throw new AppError_1.default(err_1.message);
            case 4:
                if (queueIds.length > 1 && !greetingMessage) {
                    throw new AppError_1.default("ERR_WAPP_GREETING_REQUIRED");
                }
                oldDefaultWhatsapp = null;
                if (!isDefault) return [3 /*break*/, 7];
                return [4 /*yield*/, Whatsapp_1.default.findOne({
                        where: {
                            isDefault: true,
                            id: (_d = {}, _d[sequelize_1.Op.not] = whatsappId, _d),
                            companyId: companyId
                        }
                    })];
            case 5:
                oldDefaultWhatsapp = _e.sent();
                if (!oldDefaultWhatsapp) return [3 /*break*/, 7];
                return [4 /*yield*/, oldDefaultWhatsapp.update({ isDefault: false })];
            case 6:
                _e.sent();
                _e.label = 7;
            case 7: return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(whatsappId, companyId)];
            case 8:
                whatsapp = _e.sent();
                return [4 /*yield*/, whatsapp.update({
                        name: name,
                        status: status,
                        session: session,
                        greetingMessage: greetingMessage,
                        complationMessage: complationMessage,
                        outOfHoursMessage: outOfHoursMessage,
                        ratingMessage: ratingMessage,
                        isDefault: isDefault,
                        companyId: companyId,
                        token: token,
                        //timeSendQueue,
                        //sendIdQueue,
                        transferQueueId: transferQueueId,
                        timeToTransfer: timeToTransfer,
                        promptId: promptId,
                        maxUseBotQueues: maxUseBotQueues,
                        timeUseBotQueues: timeUseBotQueues,
                        expiresTicket: expiresTicket,
                        expiresInactiveMessage: expiresInactiveMessage
                    })];
            case 9:
                _e.sent();
                return [4 /*yield*/, (0, AssociateWhatsappQueue_1.default)(whatsapp, queueIds)];
            case 10:
                _e.sent();
                return [2 /*return*/, { whatsapp: whatsapp, oldDefaultWhatsapp: oldDefaultWhatsapp }];
        }
    });
}); };
exports.default = UpdateWhatsAppService;
