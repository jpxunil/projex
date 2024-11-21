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
var Company_1 = require("../../models/Company");
var User_1 = require("../../models/User");
var Setting_1 = require("../../models/Setting");
var CreateCompanyService = function (companyData) { return __awaiter(void 0, void 0, void 0, function () {
    var name, phone, email, status, planId, password, campaignsEnabled, dueDate, recurrence, companySchema, err_1, company, user, _a, setting, created;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                name = companyData.name, phone = companyData.phone, email = companyData.email, status = companyData.status, planId = companyData.planId, password = companyData.password, campaignsEnabled = companyData.campaignsEnabled, dueDate = companyData.dueDate, recurrence = companyData.recurrence;
                companySchema = Yup.object().shape({
                    name: Yup.string()
                        .min(2, "ERR_COMPANY_INVALID_NAME")
                        .required("ERR_COMPANY_INVALID_NAME")
                        .test("Check-unique-name", "ERR_COMPANY_NAME_ALREADY_EXISTS", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var companyWithSameName;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!value) return [3 /*break*/, 2];
                                    return [4 /*yield*/, Company_1.default.findOne({
                                            where: { name: value }
                                        })];
                                case 1:
                                    companyWithSameName = _a.sent();
                                    return [2 /*return*/, !companyWithSameName];
                                case 2: return [2 /*return*/, false];
                            }
                        });
                    }); })
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, companySchema.validate({ name: name })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                throw new AppError_1.default(err_1.message);
            case 4: return [4 /*yield*/, Company_1.default.create({
                    name: name,
                    phone: phone,
                    email: email,
                    status: status,
                    planId: planId,
                    dueDate: dueDate,
                    recurrence: recurrence
                })];
            case 5:
                company = _b.sent();
                return [4 /*yield*/, User_1.default.create({
                        name: company.name,
                        email: company.email,
                        password: companyData.password,
                        profile: "admin",
                        companyId: company.id
                    })];
            case 6:
                user = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "asaas"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "asaas",
                            value: ""
                        },
                    })];
            case 7:
                _b.sent();
                //tokenixc
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "tokenixc"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "tokenixc",
                            value: ""
                        },
                    })];
            case 8:
                //tokenixc
                _b.sent();
                //ipixc
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "ipixc"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "ipixc",
                            value: ""
                        },
                    })];
            case 9:
                //ipixc
                _b.sent();
                //ipmkauth
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "ipmkauth"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "ipmkauth",
                            value: ""
                        },
                    })];
            case 10:
                //ipmkauth
                _b.sent();
                //clientsecretmkauth
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "clientsecretmkauth"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "clientsecretmkauth",
                            value: ""
                        },
                    })];
            case 11:
                //clientsecretmkauth
                _b.sent();
                //clientidmkauth
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "clientidmkauth"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "clientidmkauth",
                            value: ""
                        },
                    })];
            case 12:
                //clientidmkauth
                _b.sent();
                //CheckMsgIsGroup
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "CheckMsgIsGroup"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "enabled",
                            value: ""
                        },
                    })];
            case 13:
                //CheckMsgIsGroup
                _b.sent();
                //CheckMsgIsGroup
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: ""
                        },
                        defaults: {
                            companyId: company.id,
                            key: "call",
                            value: "disabled"
                        },
                    })];
            case 14:
                //CheckMsgIsGroup
                _b.sent();
                //scheduleType
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "scheduleType"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "scheduleType",
                            value: "disabled"
                        },
                    })];
            case 15:
                //scheduleType
                _b.sent();
                // Enviar mensagem ao aceitar ticket
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "sendGreetingAccepted",
                        },
                        defaults: {
                            companyId: company.id,
                            key: "sendGreetingAccepted",
                            value: "disabled"
                        },
                    })];
            case 16:
                // Enviar mensagem ao aceitar ticket
                _b.sent();
                // Enviar mensagem de transferencia
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "sendMsgTransfTicket",
                        },
                        defaults: {
                            companyId: company.id,
                            key: "sendMsgTransfTicket",
                            value: "disabled"
                        },
                    })];
            case 17:
                // Enviar mensagem de transferencia
                _b.sent();
                //userRating
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "userRating"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "userRating",
                            value: "disabled"
                        },
                    })];
            case 18:
                //userRating
                _b.sent();
                //userRating
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "chatBotType"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "chatBotType",
                            value: "text"
                        },
                    })];
            case 19:
                //userRating
                _b.sent();
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "tokensgp"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "tokensgp",
                            value: ""
                        },
                    })];
            case 20:
                _b.sent();
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "ipsgp"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "ipsgp",
                            value: ""
                        },
                    })];
            case 21:
                _b.sent();
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "appsgp"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "appsgp",
                            value: ""
                        },
                    })];
            case 22:
                _b.sent();
                if (!(companyData.campaignsEnabled !== undefined)) return [3 /*break*/, 25];
                return [4 /*yield*/, Setting_1.default.findOrCreate({
                        where: {
                            companyId: company.id,
                            key: "campaignsEnabled"
                        },
                        defaults: {
                            companyId: company.id,
                            key: "campaignsEnabled",
                            value: "".concat(campaignsEnabled)
                        },
                    })];
            case 23:
                _a = _b.sent(), setting = _a[0], created = _a[1];
                if (!!created) return [3 /*break*/, 25];
                return [4 /*yield*/, setting.update({ value: "".concat(campaignsEnabled) })];
            case 24:
                _b.sent();
                _b.label = 25;
            case 25: return [2 /*return*/, company];
        }
    });
}); };
exports.default = CreateCompanyService;
