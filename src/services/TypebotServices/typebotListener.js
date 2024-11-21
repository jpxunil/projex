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
var axios_1 = require("axios");
var baileys_1 = require("@whiskeysockets/baileys");
var wbotMessageListener_1 = require("../WbotServices/wbotMessageListener");
var logger_1 = require("../../utils/logger");
var lodash_1 = require("lodash");
var UpdateTicketService_1 = require("../TicketServices/UpdateTicketService");
var typebotListener = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    function createSession(msg, typebot, number) {
        return __awaiter(this, void 0, void 0, function () {
            var id, reqData, config, request, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = Math.floor(Math.random() * 10000000000).toString();
                        reqData = JSON.stringify({
                            "isStreamEnabled": true,
                            "message": "string",
                            "resultId": "string",
                            "isOnlyRegistering": false,
                            "prefilledVariables": {
                                "number": number,
                                "pushName": msg.pushName || ""
                            },
                        });
                        config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: "".concat(url, "/api/v1/typebots/").concat(typebotSlug, "/startChat"),
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            data: reqData
                        };
                        return [4 /*yield*/, axios_1.default.request(config)];
                    case 1:
                        request = _a.sent();
                        return [2 /*return*/, request.data];
                    case 2:
                        err_2 = _a.sent();
                        logger_1.logger.info("Erro ao criar sessão do typebot: ", err_2);
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var url, typebotExpires, typebotKeywordFinish, typebotKeywordRestart, typebotUnknownMessage, typebotSlug, typebotDelayMessage, typebotRestartMessage, number, body, sessionId, dataStart, status, dataLimite, requestContinue, messages, input, reqData, config, _i, messages_1, message, formattedText, linkPreview, _c, _d, richText, _e, _f, element, text, _g, _h, subelement, text_1, _j, _k, subelement2, text_2, linkText, linkText, linkText, gatilho, jsonGatilho, err_1, media, media, formattedText, items, _l, items_1, item, error_1;
    var _m, _o;
    var wbot = _b.wbot, msg = _b.msg, ticket = _b.ticket, typebot = _b.typebot;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                if (msg.key.remoteJid === 'status@broadcast')
                    return [2 /*return*/];
                url = typebot.urlN8N, typebotExpires = typebot.typebotExpires, typebotKeywordFinish = typebot.typebotKeywordFinish, typebotKeywordRestart = typebot.typebotKeywordRestart, typebotUnknownMessage = typebot.typebotUnknownMessage, typebotSlug = typebot.typebotSlug, typebotDelayMessage = typebot.typebotDelayMessage, typebotRestartMessage = typebot.typebotRestartMessage;
                number = msg.key.remoteJid.replace(/\D/g, '');
                body = (0, wbotMessageListener_1.getBodyMessage)(msg);
                status = false;
                _p.label = 1;
            case 1:
                _p.trys.push([1, 55, , 57]);
                dataLimite = new Date();
                dataLimite.setMinutes(dataLimite.getMinutes() - Number(typebotExpires));
                if (!(typebotExpires > 0 && ticket.updatedAt < dataLimite)) return [3 /*break*/, 4];
                return [4 /*yield*/, ticket.update({
                        typebotSessionId: null,
                        isBot: true
                    })];
            case 2:
                _p.sent();
                return [4 /*yield*/, ticket.reload()];
            case 3:
                _p.sent();
                _p.label = 4;
            case 4:
                if (!(0, lodash_1.isNil)(ticket.typebotSessionId)) return [3 /*break*/, 7];
                return [4 /*yield*/, createSession(msg, typebot, number)];
            case 5:
                dataStart = _p.sent();
                sessionId = dataStart.sessionId;
                status = true;
                return [4 /*yield*/, ticket.update({
                        typebotSessionId: sessionId,
                        typebotStatus: true,
                        useIntegration: true,
                        integrationId: typebot.id
                    })];
            case 6:
                _p.sent();
                return [3 /*break*/, 8];
            case 7:
                sessionId = ticket.typebotSessionId;
                status = ticket.typebotStatus;
                _p.label = 8;
            case 8:
                if (!status)
                    return [2 /*return*/];
                if (!(body !== typebotKeywordFinish && body !== typebotKeywordRestart)) return [3 /*break*/, 48];
                requestContinue = void 0;
                messages = void 0;
                input = void 0;
                if (!((dataStart === null || dataStart === void 0 ? void 0 : dataStart.messages.length) === 0 || dataStart === undefined)) return [3 /*break*/, 10];
                reqData = JSON.stringify({
                    "message": body
                });
                config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: "".concat(url, "/api/v1/sessions/").concat(sessionId, "/continueChat"),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data: reqData
                };
                return [4 /*yield*/, axios_1.default.request(config)];
            case 9:
                requestContinue = _p.sent();
                messages = (_m = requestContinue.data) === null || _m === void 0 ? void 0 : _m.messages;
                input = (_o = requestContinue.data) === null || _o === void 0 ? void 0 : _o.input;
                return [3 /*break*/, 11];
            case 10:
                messages = dataStart === null || dataStart === void 0 ? void 0 : dataStart.messages;
                input = dataStart === null || dataStart === void 0 ? void 0 : dataStart.input;
                _p.label = 11;
            case 11:
                if (!((messages === null || messages === void 0 ? void 0 : messages.length) === 0)) return [3 /*break*/, 13];
                return [4 /*yield*/, wbot.sendMessage("".concat(number, "@c.us"), { text: typebotUnknownMessage })];
            case 12:
                _p.sent();
                return [3 /*break*/, 48];
            case 13:
                _i = 0, messages_1 = messages;
                _p.label = 14;
            case 14:
                if (!(_i < messages_1.length)) return [3 /*break*/, 42];
                message = messages_1[_i];
                if (!(message.type === 'text')) return [3 /*break*/, 29];
                formattedText = '';
                linkPreview = false;
                for (_c = 0, _d = message.content.richText; _c < _d.length; _c++) {
                    richText = _d[_c];
                    for (_e = 0, _f = richText.children; _e < _f.length; _e++) {
                        element = _f[_e];
                        text = '';
                        if (element.text) {
                            text = element.text;
                        }
                        if (element.type && element.children) {
                            for (_g = 0, _h = element.children; _g < _h.length; _g++) {
                                subelement = _h[_g];
                                text_1 = '';
                                if (subelement.text) {
                                    text_1 = subelement.text;
                                }
                                if (subelement.type && subelement.children) {
                                    for (_j = 0, _k = subelement.children; _j < _k.length; _j++) {
                                        subelement2 = _k[_j];
                                        text_2 = '';
                                        if (subelement2.text) {
                                            text_2 = subelement2.text;
                                        }
                                        if (subelement2.bold) {
                                            text_2 = "*".concat(text_2, "*");
                                        }
                                        if (subelement2.italic) {
                                            text_2 = "_".concat(text_2, "_");
                                        }
                                        if (subelement2.underline) {
                                            text_2 = "~".concat(text_2, "~");
                                        }
                                        if (subelement2.url) {
                                            linkText = subelement2.children[0].text;
                                            text_2 = "[".concat(linkText, "](").concat(subelement2.url, ")");
                                            linkPreview = true;
                                        }
                                        formattedText += text_2;
                                    }
                                }
                                if (subelement.bold) {
                                    text_1 = "*".concat(text_1, "*");
                                }
                                if (subelement.italic) {
                                    text_1 = "_".concat(text_1, "_");
                                }
                                if (subelement.underline) {
                                    text_1 = "~".concat(text_1, "~");
                                }
                                if (subelement.url) {
                                    linkText = subelement.children[0].text;
                                    text_1 = "[".concat(linkText, "](").concat(subelement.url, ")");
                                    linkPreview = true;
                                }
                                formattedText += text_1;
                            }
                        }
                        if (element.bold) {
                            text = "*".concat(text, "*");
                        }
                        if (element.italic) {
                            text = "_".concat(text, "_");
                        }
                        if (element.underline) {
                            text = "~".concat(text, "~");
                        }
                        if (element.url) {
                            linkText = element.children[0].text;
                            text = "[".concat(linkText, "](").concat(element.url, ")");
                            linkPreview = true;
                        }
                        formattedText += text;
                    }
                    formattedText += '\n';
                }
                formattedText = formattedText.replace('**', '').replace(/\n$/, '');
                if (formattedText === "Invalid message. Please, try again.") {
                    formattedText = typebotUnknownMessage;
                }
                if (!formattedText.startsWith("#")) return [3 /*break*/, 23];
                gatilho = formattedText.replace("#", "");
                _p.label = 15;
            case 15:
                _p.trys.push([15, 22, , 23]);
                jsonGatilho = JSON.parse(gatilho);
                if (!(jsonGatilho.stopBot && (0, lodash_1.isNil)(jsonGatilho.userId) && (0, lodash_1.isNil)(jsonGatilho.queueId))) return [3 /*break*/, 17];
                return [4 /*yield*/, ticket.update({
                        useIntegration: false,
                        isBot: false
                    })];
            case 16:
                _p.sent();
                return [2 /*return*/];
            case 17:
                if (!(!(0, lodash_1.isNil)(jsonGatilho.queueId) && jsonGatilho.queueId > 0 && (0, lodash_1.isNil)(jsonGatilho.userId))) return [3 /*break*/, 19];
                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                        ticketData: {
                            queueId: jsonGatilho.queueId,
                            chatbot: false,
                            useIntegration: false,
                            integrationId: null
                        },
                        ticketId: ticket.id,
                        companyId: ticket.companyId
                    })];
            case 18:
                _p.sent();
                return [2 /*return*/];
            case 19:
                if (!(!(0, lodash_1.isNil)(jsonGatilho.queueId) && jsonGatilho.queueId > 0 && !(0, lodash_1.isNil)(jsonGatilho.userId) && jsonGatilho.userId > 0)) return [3 /*break*/, 21];
                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                        ticketData: {
                            queueId: jsonGatilho.queueId,
                            userId: jsonGatilho.userId,
                            chatbot: false,
                            useIntegration: false,
                            integrationId: null
                        },
                        ticketId: ticket.id,
                        companyId: ticket.companyId
                    })];
            case 20:
                _p.sent();
                return [2 /*return*/];
            case 21: return [3 /*break*/, 23];
            case 22:
                err_1 = _p.sent();
                throw err_1;
            case 23: return [4 /*yield*/, wbot.presenceSubscribe(msg.key.remoteJid)
                //await delay(2000)
            ];
            case 24:
                _p.sent();
                //await delay(2000)
                return [4 /*yield*/, wbot.sendPresenceUpdate('composing', msg.key.remoteJid)];
            case 25:
                //await delay(2000)
                _p.sent();
                return [4 /*yield*/, (0, baileys_1.delay)(typebotDelayMessage)];
            case 26:
                _p.sent();
                return [4 /*yield*/, wbot.sendPresenceUpdate('paused', msg.key.remoteJid)];
            case 27:
                _p.sent();
                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, { text: formattedText })];
            case 28:
                _p.sent();
                _p.label = 29;
            case 29:
                if (!(message.type === 'audio')) return [3 /*break*/, 35];
                return [4 /*yield*/, wbot.presenceSubscribe(msg.key.remoteJid)
                    //await delay(2000)
                ];
            case 30:
                _p.sent();
                //await delay(2000)
                return [4 /*yield*/, wbot.sendPresenceUpdate('composing', msg.key.remoteJid)];
            case 31:
                //await delay(2000)
                _p.sent();
                return [4 /*yield*/, (0, baileys_1.delay)(typebotDelayMessage)];
            case 32:
                _p.sent();
                return [4 /*yield*/, wbot.sendPresenceUpdate('paused', msg.key.remoteJid)];
            case 33:
                _p.sent();
                media = {
                    audio: {
                        url: message.content.url,
                        mimetype: 'audio/mp4',
                        ptt: true
                    },
                };
                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, media)];
            case 34:
                _p.sent();
                _p.label = 35;
            case 35:
                if (!(message.type === 'image')) return [3 /*break*/, 41];
                return [4 /*yield*/, wbot.presenceSubscribe(msg.key.remoteJid)
                    //await delay(2000)
                ];
            case 36:
                _p.sent();
                //await delay(2000)
                return [4 /*yield*/, wbot.sendPresenceUpdate('composing', msg.key.remoteJid)];
            case 37:
                //await delay(2000)
                _p.sent();
                return [4 /*yield*/, (0, baileys_1.delay)(typebotDelayMessage)];
            case 38:
                _p.sent();
                return [4 /*yield*/, wbot.sendPresenceUpdate('paused', msg.key.remoteJid)];
            case 39:
                _p.sent();
                media = {
                    image: {
                        url: message.content.url,
                    },
                };
                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, media)];
            case 40:
                _p.sent();
                _p.label = 41;
            case 41:
                _i++;
                return [3 /*break*/, 14];
            case 42:
                if (!input) return [3 /*break*/, 48];
                if (!(input.type === 'choice input')) return [3 /*break*/, 48];
                formattedText = '';
                items = input.items;
                for (_l = 0, items_1 = items; _l < items_1.length; _l++) {
                    item = items_1[_l];
                    formattedText += "\u25B6\uFE0F ".concat(item.content, "\n");
                }
                formattedText = formattedText.replace(/\n$/, '');
                return [4 /*yield*/, wbot.presenceSubscribe(msg.key.remoteJid)
                    //await delay(2000)
                ];
            case 43:
                _p.sent();
                //await delay(2000)
                return [4 /*yield*/, wbot.sendPresenceUpdate('composing', msg.key.remoteJid)];
            case 44:
                //await delay(2000)
                _p.sent();
                return [4 /*yield*/, (0, baileys_1.delay)(typebotDelayMessage)];
            case 45:
                _p.sent();
                return [4 /*yield*/, wbot.sendPresenceUpdate('paused', msg.key.remoteJid)];
            case 46:
                _p.sent();
                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, { text: formattedText })];
            case 47:
                _p.sent();
                _p.label = 48;
            case 48:
                if (!(body === typebotKeywordRestart)) return [3 /*break*/, 52];
                return [4 /*yield*/, ticket.update({
                        isBot: true,
                        typebotSessionId: null
                    })];
            case 49:
                _p.sent();
                return [4 /*yield*/, ticket.reload()];
            case 50:
                _p.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(number, "@c.us"), { text: typebotRestartMessage })];
            case 51:
                _p.sent();
                _p.label = 52;
            case 52:
                if (!(body === typebotKeywordFinish)) return [3 /*break*/, 54];
                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                        ticketData: {
                            status: "closed",
                            useIntegration: false,
                            integrationId: null
                        },
                        ticketId: ticket.id,
                        companyId: ticket.companyId
                    })];
            case 53:
                _p.sent();
                return [2 /*return*/];
            case 54: return [3 /*break*/, 57];
            case 55:
                error_1 = _p.sent();
                logger_1.logger.info("Error on typebotListener: ", error_1);
                return [4 /*yield*/, ticket.update({
                        typebotSessionId: null
                    })];
            case 56:
                _p.sent();
                throw error_1;
            case 57: return [2 /*return*/];
        }
    });
}); };
exports.default = typebotListener;
