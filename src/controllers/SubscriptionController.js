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
exports.webhook = exports.createWebhook = exports.createSubscription = exports.index = void 0;
var express_1 = require("express");
var Yup = require("yup");
var gn_api_sdk_typescript_1 = require("gn-api-sdk-typescript");
var AppError_1 = require("../errors/AppError");
var Gn_1 = require("../config/Gn");
var Company_1 = require("../models/Company");
var Invoices_1 = require("../models/Invoices");
var socket_1 = require("../libs/socket");
var app = (0, express_1.default)();
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var gerencianet;
    return __generator(this, function (_a) {
        gerencianet = (0, gn_api_sdk_typescript_1.default)(Gn_1.default);
        return [2 /*return*/, res.json(gerencianet.getSubscriptions())];
    });
}); };
exports.index = index;
var createSubscription = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var gerencianet, companyId, schema, _a, firstName, price, users, connections, address2, city, state, zipcode, country, plan, invoiceId, body, pix, qrcode, updateCompany, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                gerencianet = (0, gn_api_sdk_typescript_1.default)(Gn_1.default);
                companyId = req.user.companyId;
                schema = Yup.object().shape({
                    price: Yup.string().required(),
                    users: Yup.string().required(),
                    connections: Yup.string().required()
                });
                return [4 /*yield*/, schema.isValid(req.body)];
            case 1:
                if (!(_b.sent())) {
                    throw new AppError_1.default("Validation fails", 400);
                }
                _a = req.body, firstName = _a.firstName, price = _a.price, users = _a.users, connections = _a.connections, address2 = _a.address2, city = _a.city, state = _a.state, zipcode = _a.zipcode, country = _a.country, plan = _a.plan, invoiceId = _a.invoiceId;
                body = {
                    calendario: {
                        expiracao: 3600
                    },
                    valor: {
                        original: price.toLocaleString("pt-br", { minimumFractionDigits: 2 }).replace(",", ".")
                    },
                    chave: process.env.GERENCIANET_PIX_KEY,
                    solicitacaoPagador: "#Fatura:".concat(invoiceId)
                };
                _b.label = 2;
            case 2:
                _b.trys.push([2, 6, , 7]);
                return [4 /*yield*/, gerencianet.pixCreateImmediateCharge(null, body)];
            case 3:
                pix = _b.sent();
                return [4 /*yield*/, gerencianet.pixGenerateQRCode({
                        id: pix.loc.id
                    })];
            case 4:
                qrcode = _b.sent();
                return [4 /*yield*/, Company_1.default.findOne()];
            case 5:
                updateCompany = _b.sent();
                if (!updateCompany) {
                    throw new AppError_1.default("Company not found", 404);
                }
                /*     await Subscriptions.create({
                      companyId,
                      isActive: false,
                      userPriceCents: users,
                      whatsPriceCents: connections,
                      lastInvoiceUrl: pix.location,
                      lastPlanChange: new Date(),
                      providerSubscriptionId: pix.loc.id,
                      expiresAt: new Date()
                    }); */
                /*     const { id } = req.user;
                    const userData = {};
                    const userId = id;
                    const requestUserId = parseInt(id);
                    const user = await UpdateUserService({ userData, userId, companyId, requestUserId }); */
                /*     const io = getIO();
                    io.emit("user", {
                      action: "update",
                      user
                    }); */
                return [2 /*return*/, res.json(__assign(__assign({}, pix), { qrcode: qrcode }))];
            case 6:
                error_1 = _b.sent();
                throw new AppError_1.default("Validation fails", 400);
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createSubscription = createSubscription;
var createWebhook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var schema, _a, chave, url, body, params, gerencianet, create, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                schema = Yup.object().shape({
                    chave: Yup.string().required(),
                    url: Yup.string().required()
                });
                return [4 /*yield*/, schema.isValid(req.body)];
            case 1:
                if (!(_b.sent())) {
                    throw new AppError_1.default("Validation fails", 400);
                }
                _a = req.body, chave = _a.chave, url = _a.url;
                body = {
                    webhookUrl: url
                };
                params = {
                    chave: chave
                };
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                gerencianet = (0, gn_api_sdk_typescript_1.default)(Gn_1.default);
                return [4 /*yield*/, gerencianet.pixConfigWebhook(params, body)];
            case 3:
                create = _b.sent();
                return [2 /*return*/, res.json(create)];
            case 4:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createWebhook = createWebhook;
var webhook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var type, evento, gerencianet_1;
    return __generator(this, function (_a) {
        type = req.params.type;
        evento = req.body.evento;
        if (evento === "teste_webhook") {
            return [2 /*return*/, res.json({ ok: true })];
        }
        if (req.body.pix) {
            gerencianet_1 = (0, gn_api_sdk_typescript_1.default)(Gn_1.default);
            req.body.pix.forEach(function (pix) { return __awaiter(void 0, void 0, void 0, function () {
                var detahe, solicitacaoPagador, invoiceID, invoices, companyId, company, expiresAt, date, invoi, io, companyUpdate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, gerencianet_1.pixDetailCharge({
                                txid: pix.txid
                            })];
                        case 1:
                            detahe = _a.sent();
                            if (!(detahe.status === "CONCLUIDA")) return [3 /*break*/, 8];
                            solicitacaoPagador = detahe.solicitacaoPagador;
                            invoiceID = solicitacaoPagador.replace("#Fatura:", "");
                            return [4 /*yield*/, Invoices_1.default.findByPk(invoiceID)];
                        case 2:
                            invoices = _a.sent();
                            companyId = invoices.companyId;
                            return [4 /*yield*/, Company_1.default.findByPk(companyId)];
                        case 3:
                            company = _a.sent();
                            expiresAt = new Date(company.dueDate);
                            expiresAt.setDate(expiresAt.getDate() + 30);
                            date = expiresAt.toISOString().split("T")[0];
                            if (!company) return [3 /*break*/, 8];
                            return [4 /*yield*/, company.update({
                                    dueDate: date
                                })];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, invoices.update({
                                    id: invoiceID,
                                    status: 'paid'
                                })];
                        case 5:
                            invoi = _a.sent();
                            return [4 /*yield*/, company.reload()];
                        case 6:
                            _a.sent();
                            io = (0, socket_1.getIO)();
                            return [4 /*yield*/, Company_1.default.findOne({
                                    where: {
                                        id: companyId
                                    }
                                })];
                        case 7:
                            companyUpdate = _a.sent();
                            io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-payment"), {
                                action: detahe.status,
                                company: companyUpdate
                            });
                            _a.label = 8;
                        case 8: return [2 /*return*/];
                    }
                });
            }); });
        }
        return [2 /*return*/, res.json({ ok: true })];
    });
}); };
exports.webhook = webhook;
