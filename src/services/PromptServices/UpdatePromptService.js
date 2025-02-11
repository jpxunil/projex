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
var ShowPromptService_1 = require("./ShowPromptService");
var UpdatePromptService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var promptTable, promptSchema, name, apiKey, prompt, maxTokens, temperature, promptTokens, completionTokens, totalTokens, queueId, maxMessages, voice, voiceKey, voiceRegion, err_1;
    var promptId = _b.promptId, promptData = _b.promptData, companyId = _b.companyId;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, ShowPromptService_1.default)({ promptId: promptId, companyId: companyId })];
            case 1:
                promptTable = _c.sent();
                promptSchema = Yup.object().shape({
                    name: Yup.string().required("ERR_PROMPT_NAME_INVALID"),
                    prompt: Yup.string().required("ERR_PROMPT_PROMPT_INVALID"),
                    apiKey: Yup.string().required("ERR_PROMPT_APIKEY_INVALID"),
                    queueId: Yup.number().required("ERR_PROMPT_QUEUEID_INVALID"),
                    maxMessages: Yup.number().required("ERR_PROMPT_MAX_MESSAGES_INVALID")
                });
                name = promptData.name, apiKey = promptData.apiKey, prompt = promptData.prompt, maxTokens = promptData.maxTokens, temperature = promptData.temperature, promptTokens = promptData.promptTokens, completionTokens = promptData.completionTokens, totalTokens = promptData.totalTokens, queueId = promptData.queueId, maxMessages = promptData.maxMessages, voice = promptData.voice, voiceKey = promptData.voiceKey, voiceRegion = promptData.voiceRegion;
                _c.label = 2;
            case 2:
                _c.trys.push([2, 4, , 5]);
                return [4 /*yield*/, promptSchema.validate({ name: name, apiKey: apiKey, prompt: prompt, maxTokens: maxTokens, temperature: temperature, promptTokens: promptTokens, completionTokens: completionTokens, totalTokens: totalTokens, queueId: queueId, maxMessages: maxMessages })];
            case 3:
                _c.sent();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _c.sent();
                throw new AppError_1.default("".concat(JSON.stringify(err_1, undefined, 2)));
            case 5: return [4 /*yield*/, promptTable.update({ name: name, apiKey: apiKey, prompt: prompt, maxTokens: maxTokens, temperature: temperature, promptTokens: promptTokens, completionTokens: completionTokens, totalTokens: totalTokens, queueId: queueId, maxMessages: maxMessages, voice: voice, voiceKey: voiceKey, voiceRegion: voiceRegion })];
            case 6:
                _c.sent();
                return [4 /*yield*/, promptTable.reload()];
            case 7:
                _c.sent();
                return [2 /*return*/, promptTable];
        }
    });
}); };
exports.default = UpdatePromptService;
