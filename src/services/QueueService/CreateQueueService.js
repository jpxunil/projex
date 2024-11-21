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
var Queue_1 = require("../../models/Queue");
var Company_1 = require("../../models/Company");
var Plan_1 = require("../../models/Plan");
var CreateQueueService = function (queueData) { return __awaiter(void 0, void 0, void 0, function () {
    var color, name, companyId, company, queuesCount, queueSchema, err_1, queue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                color = queueData.color, name = queueData.name, companyId = queueData.companyId;
                return [4 /*yield*/, Company_1.default.findOne({
                        where: {
                            id: companyId
                        },
                        include: [{ model: Plan_1.default, as: "plan" }]
                    })];
            case 1:
                company = _a.sent();
                if (!(company !== null)) return [3 /*break*/, 3];
                return [4 /*yield*/, Queue_1.default.count({
                        where: {
                            companyId: companyId
                        }
                    })];
            case 2:
                queuesCount = _a.sent();
                if (queuesCount >= company.plan.queues) {
                    throw new AppError_1.default("N\u00FAmero m\u00E1ximo de filas j\u00E1 alcan\u00E7ado: ".concat(queuesCount));
                }
                _a.label = 3;
            case 3:
                queueSchema = Yup.object().shape({
                    name: Yup.string()
                        .min(2, "ERR_QUEUE_INVALID_NAME")
                        .required("ERR_QUEUE_INVALID_NAME")
                        .test("Check-unique-name", "ERR_QUEUE_NAME_ALREADY_EXISTS", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var queueWithSameName;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!value) return [3 /*break*/, 2];
                                    return [4 /*yield*/, Queue_1.default.findOne({
                                            where: { name: value, companyId: companyId }
                                        })];
                                case 1:
                                    queueWithSameName = _a.sent();
                                    return [2 /*return*/, !queueWithSameName];
                                case 2: return [2 /*return*/, false];
                            }
                        });
                    }); }),
                    color: Yup.string()
                        .required("ERR_QUEUE_INVALID_COLOR")
                        .test("Check-color", "ERR_QUEUE_INVALID_COLOR", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var colorTestRegex;
                        return __generator(this, function (_a) {
                            if (value) {
                                colorTestRegex = /^#[0-9a-f]{3,6}$/i;
                                return [2 /*return*/, colorTestRegex.test(value)];
                            }
                            return [2 /*return*/, false];
                        });
                    }); })
                        .test("Check-color-exists", "ERR_QUEUE_COLOR_ALREADY_EXISTS", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var queueWithSameColor;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!value) return [3 /*break*/, 2];
                                    return [4 /*yield*/, Queue_1.default.findOne({
                                            where: { color: value, companyId: companyId }
                                        })];
                                case 1:
                                    queueWithSameColor = _a.sent();
                                    return [2 /*return*/, !queueWithSameColor];
                                case 2: return [2 /*return*/, false];
                            }
                        });
                    }); })
                });
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, queueSchema.validate({ color: color, name: name })];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                throw new AppError_1.default(err_1.message);
            case 7: return [4 /*yield*/, Queue_1.default.create(queueData)];
            case 8:
                queue = _a.sent();
                return [2 /*return*/, queue];
        }
    });
}); };
exports.default = CreateQueueService;
