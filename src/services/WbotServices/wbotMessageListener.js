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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = exports.wbotMessageListener = exports.handleMessageIntegration = exports.handleRating = exports.verifyRating = exports.verifyMessage = exports.getQuotedMessageId = exports.getQuotedMessage = exports.getBodyMessage = exports.sendMessageLink = exports.sendMessageImage = exports.isNumeric = void 0;
exports.validaCpfCnpj = validaCpfCnpj;
exports.sleep = sleep;
exports.makeid = makeid;
var path_1 = require("path");
var util_1 = require("util");
var fs_1 = require("fs");
var Sentry = require("@sentry/node");
var lodash_1 = require("lodash");
var baileys_1 = require("@whiskeysockets/baileys");
var Contact_1 = require("../../models/Contact");
var Ticket_1 = require("../../models/Ticket");
var Message_1 = require("../../models/Message");
var socket_1 = require("../../libs/socket");
var CreateMessageService_1 = require("../MessageServices/CreateMessageService");
var logger_1 = require("../../utils/logger");
var CreateOrUpdateContactService_1 = require("../ContactServices/CreateOrUpdateContactService");
var FindOrCreateTicketService_1 = require("../TicketServices/FindOrCreateTicketService");
var ShowWhatsAppService_1 = require("../WhatsappService/ShowWhatsAppService");
var UpdateTicketService_1 = require("../TicketServices/UpdateTicketService");
var Mustache_1 = require("../../helpers/Mustache");
var UserRating_1 = require("../../models/UserRating");
var SendWhatsAppMessage_1 = require("./SendWhatsAppMessage");
var moment_1 = require("moment");
var Queue_1 = require("../../models/Queue");
var QueueOption_1 = require("../../models/QueueOption");
var FindOrCreateATicketTrakingService_1 = require("../TicketServices/FindOrCreateATicketTrakingService");
var VerifyCurrentSchedule_1 = require("../CompanyService/VerifyCurrentSchedule");
var Campaign_1 = require("../../models/Campaign");
var CampaignShipping_1 = require("../../models/CampaignShipping");
var sequelize_1 = require("sequelize");
var queues_1 = require("../../queues");
var User_1 = require("../../models/User");
var Setting_1 = require("../../models/Setting");
var cache_1 = require("../../libs/cache");
var providers_1 = require("./providers");
var Debounce_1 = require("../../helpers/Debounce");
var openai_1 = require("openai");
var fluent_ffmpeg_1 = require("fluent-ffmpeg");
var microsoft_cognitiveservices_speech_sdk_1 = require("microsoft-cognitiveservices-speech-sdk");
var typebotListener_1 = require("../TypebotServices/typebotListener");
var ShowQueueIntegrationService_1 = require("../QueueIntegrationServices/ShowQueueIntegrationService");
var request = require("request");
var fs = require('fs');
var sessionsOpenAi = [];
var isNumeric = function (value) { return /^-?\d+$/.test(value); };
exports.isNumeric = isNumeric;
var writeFileAsync = (0, util_1.promisify)(fs_1.writeFile);
var getTypeMessage = function (msg) {
    return (0, baileys_1.getContentType)(msg.message);
};
function validaCpfCnpj(val) {
    if (val.length == 11) {
        var cpf = val.trim();
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;
            }
        }
        if (aux == false) {
            return false;
        }
        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p;
        }
        v1 = ((v1 * 10) % 11);
        if (v1 == 10) {
            v1 = 0;
        }
        if (v1 != cpf[9]) {
            return false;
        }
        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p;
        }
        v2 = ((v2 * 10) % 11);
        if (v2 == 10) {
            v2 = 0;
        }
        if (v2 != cpf[10]) {
            return false;
        }
        else {
            return true;
        }
    }
    else if (val.length == 14) {
        var cnpj = val.trim();
        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', '');
        cnpj = cnpj.split('');
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        for (var i = 1; cnpj.length > i; i++) {
            if (cnpj[i - 1] != cnpj[i]) {
                aux = true;
            }
        }
        if (aux == false) {
            return false;
        }
        for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v1 += cnpj[i] * p1;
            }
            else {
                v1 += cnpj[i] * p2;
            }
        }
        v1 = (v1 % 11);
        if (v1 < 2) {
            v1 = 0;
        }
        else {
            v1 = (11 - v1);
        }
        if (v1 != cnpj[12]) {
            return false;
        }
        for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v2 += cnpj[i] * p1;
            }
            else {
                v2 += cnpj[i] * p2;
            }
        }
        v2 = (v2 % 11);
        if (v2 < 2) {
            v2 = 0;
        }
        else {
            v2 = (11 - v2);
        }
        if (v2 != cnpj[13]) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
function timeout(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function sleep(time) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, timeout(time)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var sendMessageImage = function (wbot, contact, ticket, url, caption) { return __awaiter(void 0, void 0, void 0, function () {
    var sentMessage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 4]);
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        image: url ? { url: url } : fs.readFileSync("public/temp/".concat(caption, "-").concat(makeid(10))),
                        fileName: caption,
                        caption: caption,
                        mimetype: 'image/jpeg'
                    })];
            case 1:
                sentMessage = _a.sent();
                return [3 /*break*/, 4];
            case 2:
                error_1 = _a.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: (0, Mustache_1.default)('Não consegui enviar o PDF, tente novamente!', contact)
                    })];
            case 3:
                sentMessage = _a.sent();
                return [3 /*break*/, 4];
            case 4:
                (0, exports.verifyMessage)(sentMessage, ticket, contact);
                return [2 /*return*/];
        }
    });
}); };
exports.sendMessageImage = sendMessageImage;
var sendMessageLink = function (wbot, contact, ticket, url, caption) { return __awaiter(void 0, void 0, void 0, function () {
    var sentMessage, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 4]);
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        document: url ? { url: url } : fs.readFileSync("public/temp/".concat(caption, "-").concat(makeid(10))),
                        fileName: caption,
                        caption: caption,
                        mimetype: 'application/pdf'
                    })];
            case 1:
                sentMessage = _a.sent();
                return [3 /*break*/, 4];
            case 2:
                error_2 = _a.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: (0, Mustache_1.default)('Não consegui enviar o PDF, tente novamente!', contact)
                    })];
            case 3:
                sentMessage = _a.sent();
                return [3 /*break*/, 4];
            case 4:
                (0, exports.verifyMessage)(sentMessage, ticket, contact);
                return [2 /*return*/];
        }
    });
}); };
exports.sendMessageLink = sendMessageLink;
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var getBodyButton = function (msg) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    if (msg.key.fromMe && ((_d = (_c = (_b = (_a = msg === null || msg === void 0 ? void 0 : msg.message) === null || _a === void 0 ? void 0 : _a.viewOnceMessage) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.buttonsMessage) === null || _d === void 0 ? void 0 : _d.contentText)) {
        var bodyMessage = "*".concat((_h = (_g = (_f = (_e = msg === null || msg === void 0 ? void 0 : msg.message) === null || _e === void 0 ? void 0 : _e.viewOnceMessage) === null || _f === void 0 ? void 0 : _f.message) === null || _g === void 0 ? void 0 : _g.buttonsMessage) === null || _h === void 0 ? void 0 : _h.contentText, "*");
        for (var _i = 0, _0 = (_m = (_l = (_k = (_j = msg.message) === null || _j === void 0 ? void 0 : _j.viewOnceMessage) === null || _k === void 0 ? void 0 : _k.message) === null || _l === void 0 ? void 0 : _l.buttonsMessage) === null || _m === void 0 ? void 0 : _m.buttons; _i < _0.length; _i++) {
            var buton = _0[_i];
            bodyMessage += "\n\n".concat((_o = buton.buttonText) === null || _o === void 0 ? void 0 : _o.displayText);
        }
        return bodyMessage;
    }
    if (msg.key.fromMe && ((_r = (_q = (_p = msg === null || msg === void 0 ? void 0 : msg.message) === null || _p === void 0 ? void 0 : _p.viewOnceMessage) === null || _q === void 0 ? void 0 : _q.message) === null || _r === void 0 ? void 0 : _r.listMessage)) {
        var bodyMessage = "*".concat((_v = (_u = (_t = (_s = msg === null || msg === void 0 ? void 0 : msg.message) === null || _s === void 0 ? void 0 : _s.viewOnceMessage) === null || _t === void 0 ? void 0 : _t.message) === null || _u === void 0 ? void 0 : _u.listMessage) === null || _v === void 0 ? void 0 : _v.description, "*");
        for (var _1 = 0, _2 = (_z = (_y = (_x = (_w = msg.message) === null || _w === void 0 ? void 0 : _w.viewOnceMessage) === null || _x === void 0 ? void 0 : _x.message) === null || _y === void 0 ? void 0 : _y.listMessage) === null || _z === void 0 ? void 0 : _z.sections; _1 < _2.length; _1++) {
            var buton = _2[_1];
            for (var _3 = 0, _4 = buton.rows; _3 < _4.length; _3++) {
                var rows = _4[_3];
                bodyMessage += "\n\n".concat(rows.title);
            }
        }
        return bodyMessage;
    }
};
var msgLocation = function (image, latitude, longitude) {
    if (image) {
        var b64 = Buffer.from(image).toString("base64");
        var data = "data:image/png;base64, ".concat(b64, " | https://maps.google.com/maps?q=").concat(latitude, "%2C").concat(longitude, "&z=17&hl=pt-BR|").concat(latitude, ", ").concat(longitude, " ");
        return data;
    }
};
var getBodyMessage = function (msg) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;
    try {
        var type_1 = getTypeMessage(msg);
        var types = {
            conversation: (_a = msg === null || msg === void 0 ? void 0 : msg.message) === null || _a === void 0 ? void 0 : _a.conversation,
            editedMessage: (_f = (_e = (_d = (_c = (_b = msg === null || msg === void 0 ? void 0 : msg.message) === null || _b === void 0 ? void 0 : _b.editedMessage) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.protocolMessage) === null || _e === void 0 ? void 0 : _e.editedMessage) === null || _f === void 0 ? void 0 : _f.conversation,
            imageMessage: (_h = (_g = msg.message) === null || _g === void 0 ? void 0 : _g.imageMessage) === null || _h === void 0 ? void 0 : _h.caption,
            videoMessage: (_k = (_j = msg.message) === null || _j === void 0 ? void 0 : _j.videoMessage) === null || _k === void 0 ? void 0 : _k.caption,
            extendedTextMessage: (_m = (_l = msg.message) === null || _l === void 0 ? void 0 : _l.extendedTextMessage) === null || _m === void 0 ? void 0 : _m.text,
            buttonsResponseMessage: (_p = (_o = msg.message) === null || _o === void 0 ? void 0 : _o.buttonsResponseMessage) === null || _p === void 0 ? void 0 : _p.selectedButtonId,
            templateButtonReplyMessage: (_r = (_q = msg.message) === null || _q === void 0 ? void 0 : _q.templateButtonReplyMessage) === null || _r === void 0 ? void 0 : _r.selectedId,
            messageContextInfo: ((_t = (_s = msg.message) === null || _s === void 0 ? void 0 : _s.buttonsResponseMessage) === null || _t === void 0 ? void 0 : _t.selectedButtonId) || ((_v = (_u = msg.message) === null || _u === void 0 ? void 0 : _u.listResponseMessage) === null || _v === void 0 ? void 0 : _v.title),
            buttonsMessage: getBodyButton(msg) || ((_y = (_x = (_w = msg.message) === null || _w === void 0 ? void 0 : _w.listResponseMessage) === null || _x === void 0 ? void 0 : _x.singleSelectReply) === null || _y === void 0 ? void 0 : _y.selectedRowId),
            viewOnceMessage: getBodyButton(msg) || ((_1 = (_0 = (_z = msg.message) === null || _z === void 0 ? void 0 : _z.listResponseMessage) === null || _0 === void 0 ? void 0 : _0.singleSelectReply) === null || _1 === void 0 ? void 0 : _1.selectedRowId),
            stickerMessage: "sticker",
            contactMessage: (_3 = (_2 = msg.message) === null || _2 === void 0 ? void 0 : _2.contactMessage) === null || _3 === void 0 ? void 0 : _3.vcard,
            contactsArrayMessage: "varios contatos",
            //locationMessage: `Latitude: ${msg.message.locationMessage?.degreesLatitude} - Longitude: ${msg.message.locationMessage?.degreesLongitude}`,
            locationMessage: msgLocation((_5 = (_4 = msg.message) === null || _4 === void 0 ? void 0 : _4.locationMessage) === null || _5 === void 0 ? void 0 : _5.jpegThumbnail, (_7 = (_6 = msg.message) === null || _6 === void 0 ? void 0 : _6.locationMessage) === null || _7 === void 0 ? void 0 : _7.degreesLatitude, (_9 = (_8 = msg.message) === null || _8 === void 0 ? void 0 : _8.locationMessage) === null || _9 === void 0 ? void 0 : _9.degreesLongitude),
            liveLocationMessage: "Latitude: ".concat((_11 = (_10 = msg.message) === null || _10 === void 0 ? void 0 : _10.liveLocationMessage) === null || _11 === void 0 ? void 0 : _11.degreesLatitude, " - Longitude: ").concat((_13 = (_12 = msg.message) === null || _12 === void 0 ? void 0 : _12.liveLocationMessage) === null || _13 === void 0 ? void 0 : _13.degreesLongitude),
            documentMessage: (_15 = (_14 = msg.message) === null || _14 === void 0 ? void 0 : _14.documentMessage) === null || _15 === void 0 ? void 0 : _15.title,
            documentWithCaptionMessage: (_19 = (_18 = (_17 = (_16 = msg.message) === null || _16 === void 0 ? void 0 : _16.documentWithCaptionMessage) === null || _17 === void 0 ? void 0 : _17.message) === null || _18 === void 0 ? void 0 : _18.documentMessage) === null || _19 === void 0 ? void 0 : _19.caption,
            audioMessage: "Áudio",
            listMessage: getBodyButton(msg) || ((_21 = (_20 = msg.message) === null || _20 === void 0 ? void 0 : _20.listResponseMessage) === null || _21 === void 0 ? void 0 : _21.title),
            listResponseMessage: (_24 = (_23 = (_22 = msg.message) === null || _22 === void 0 ? void 0 : _22.listResponseMessage) === null || _23 === void 0 ? void 0 : _23.singleSelectReply) === null || _24 === void 0 ? void 0 : _24.selectedRowId,
            reactionMessage: ((_26 = (_25 = msg.message) === null || _25 === void 0 ? void 0 : _25.reactionMessage) === null || _26 === void 0 ? void 0 : _26.text) || "reaction",
        };
        var objKey = Object.keys(types).find(function (key) { return key === type_1; });
        if (!objKey) {
            logger_1.logger.warn("#### Nao achou o type 152: ".concat(type_1, "\n").concat(JSON.stringify(msg)));
            Sentry.setExtra("Mensagem", { BodyMsg: msg.message, msg: msg, type: type_1 });
            Sentry.captureException(new Error("Novo Tipo de Mensagem em getTypeMessage"));
        }
        return types[type_1];
    }
    catch (error) {
        Sentry.setExtra("Error getTypeMessage", { msg: msg, BodyMsg: msg.message });
        Sentry.captureException(error);
        console.log(error);
    }
};
exports.getBodyMessage = getBodyMessage;
var getQuotedMessage = function (msg) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var body = msg.message.imageMessage.contextInfo ||
        msg.message.videoMessage.contextInfo ||
        ((_a = msg.message) === null || _a === void 0 ? void 0 : _a.documentMessage) ||
        msg.message.extendedTextMessage.contextInfo ||
        msg.message.buttonsResponseMessage.contextInfo ||
        msg.message.listResponseMessage.contextInfo ||
        msg.message.templateButtonReplyMessage.contextInfo ||
        ((_b = msg.message.buttonsResponseMessage) === null || _b === void 0 ? void 0 : _b.contextInfo) ||
        ((_d = (_c = msg === null || msg === void 0 ? void 0 : msg.message) === null || _c === void 0 ? void 0 : _c.buttonsResponseMessage) === null || _d === void 0 ? void 0 : _d.selectedButtonId) ||
        ((_f = (_e = msg.message.listResponseMessage) === null || _e === void 0 ? void 0 : _e.singleSelectReply) === null || _f === void 0 ? void 0 : _f.selectedRowId) ||
        ((_h = (_g = msg === null || msg === void 0 ? void 0 : msg.message) === null || _g === void 0 ? void 0 : _g.listResponseMessage) === null || _h === void 0 ? void 0 : _h.singleSelectReply.selectedRowId) ||
        ((_j = msg.message.listResponseMessage) === null || _j === void 0 ? void 0 : _j.contextInfo);
    msg.message.senderKeyDistributionMessage;
    // testar isso
    return (0, baileys_1.extractMessageContent)(body[Object.keys(body).values().next().value]);
};
exports.getQuotedMessage = getQuotedMessage;
var getQuotedMessageId = function (msg) {
    var _a;
    var body = (0, baileys_1.extractMessageContent)(msg.message)[Object.keys(msg === null || msg === void 0 ? void 0 : msg.message).values().next().value];
    return (_a = body === null || body === void 0 ? void 0 : body.contextInfo) === null || _a === void 0 ? void 0 : _a.stanzaId;
};
exports.getQuotedMessageId = getQuotedMessageId;
var getMeSocket = function (wbot) {
    return {
        id: (0, baileys_1.jidNormalizedUser)(wbot.user.id),
        name: wbot.user.name
    };
};
var getSenderMessage = function (msg, wbot) {
    var me = getMeSocket(wbot);
    if (msg.key.fromMe)
        return me.id;
    var senderId = msg.participant || msg.key.participant || msg.key.remoteJid || undefined;
    return senderId && (0, baileys_1.jidNormalizedUser)(senderId);
};
var getContactMessage = function (msg, wbot) { return __awaiter(void 0, void 0, void 0, function () {
    var isGroup, rawNumber;
    return __generator(this, function (_a) {
        isGroup = msg.key.remoteJid.includes("g.us");
        rawNumber = msg.key.remoteJid.replace(/\D/g, "");
        return [2 /*return*/, isGroup
                ? {
                    id: getSenderMessage(msg, wbot),
                    name: msg.pushName
                }
                : {
                    id: msg.key.remoteJid,
                    name: msg.key.fromMe ? rawNumber : msg.pushName
                }];
    });
}); };
var downloadMedia = function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var buffer, err_1, filename, mineType, ext, media;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _u.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, baileys_1.downloadMediaMessage)(msg, 'buffer', {})];
            case 1:
                buffer = _u.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _u.sent();
                console.error('Erro ao baixar mídia:', err_1);
                return [3 /*break*/, 3];
            case 3:
                filename = ((_b = (_a = msg.message) === null || _a === void 0 ? void 0 : _a.documentMessage) === null || _b === void 0 ? void 0 : _b.fileName) || "";
                mineType = ((_c = msg.message) === null || _c === void 0 ? void 0 : _c.imageMessage) ||
                    ((_d = msg.message) === null || _d === void 0 ? void 0 : _d.audioMessage) ||
                    ((_e = msg.message) === null || _e === void 0 ? void 0 : _e.videoMessage) ||
                    ((_f = msg.message) === null || _f === void 0 ? void 0 : _f.stickerMessage) ||
                    ((_g = msg.message) === null || _g === void 0 ? void 0 : _g.documentMessage) ||
                    ((_k = (_j = (_h = msg.message) === null || _h === void 0 ? void 0 : _h.documentWithCaptionMessage) === null || _j === void 0 ? void 0 : _j.message) === null || _k === void 0 ? void 0 : _k.documentMessage) ||
                    ((_p = (_o = (_m = (_l = msg.message) === null || _l === void 0 ? void 0 : _l.extendedTextMessage) === null || _m === void 0 ? void 0 : _m.contextInfo) === null || _o === void 0 ? void 0 : _o.quotedMessage) === null || _p === void 0 ? void 0 : _p.imageMessage) ||
                    ((_t = (_s = (_r = (_q = msg.message) === null || _q === void 0 ? void 0 : _q.extendedTextMessage) === null || _r === void 0 ? void 0 : _r.contextInfo) === null || _s === void 0 ? void 0 : _s.quotedMessage) === null || _t === void 0 ? void 0 : _t.videoMessage);
                if (!mineType)
                    console.log(msg);
                if (!filename) {
                    ext = mineType.mimetype.split("/")[1].split(";")[0];
                    filename = "".concat(new Date().getTime(), ".").concat(ext);
                }
                else {
                    filename = "".concat(new Date().getTime(), "_").concat(filename);
                }
                media = {
                    data: buffer,
                    mimetype: mineType.mimetype,
                    filename: filename
                };
                return [2 /*return*/, media];
        }
    });
}); };
var verifyContact = function (msgContact, wbot, companyId) { return __awaiter(void 0, void 0, void 0, function () {
    var profilePicUrl, e_1, contactData, contact;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, wbot.profilePictureUrl(msgContact.id)];
            case 1:
                profilePicUrl = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                Sentry.captureException(e_1);
                profilePicUrl = "".concat(process.env.FRONTEND_URL, "/nopicture.png");
                return [3 /*break*/, 3];
            case 3:
                contactData = {
                    name: (msgContact === null || msgContact === void 0 ? void 0 : msgContact.name) || msgContact.id.replace(/\D/g, ""),
                    number: msgContact.id.replace(/\D/g, ""),
                    profilePicUrl: profilePicUrl,
                    isGroup: msgContact.id.includes("g.us"),
                    companyId: companyId,
                    whatsappId: wbot.id
                };
                contact = (0, CreateOrUpdateContactService_1.default)(contactData);
                return [2 /*return*/, contact];
        }
    });
}); };
var verifyQuotedMessage = function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var quoted, quotedMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!msg)
                    return [2 /*return*/, null];
                quoted = (0, exports.getQuotedMessageId)(msg);
                if (!quoted)
                    return [2 /*return*/, null];
                return [4 /*yield*/, Message_1.default.findOne({
                        where: { id: quoted },
                    })];
            case 1:
                quotedMsg = _a.sent();
                if (!quotedMsg)
                    return [2 /*return*/, null];
                return [2 /*return*/, quotedMsg];
        }
    });
}); };
var sanitizeName = function (name) {
    var sanitized = name.split(" ")[0];
    sanitized = sanitized.replace(/[^a-zA-Z0-9]/g, "");
    return sanitized.substring(0, 60);
};
var convertTextToSpeechAndSaveToFile = function (text, filename, subscriptionKey, serviceRegion, voice, audioToFormat) {
    if (voice === void 0) { voice = "pt-BR-FabioNeural"; }
    if (audioToFormat === void 0) { audioToFormat = "mp3"; }
    return new Promise(function (resolve, reject) {
        var speechConfig = microsoft_cognitiveservices_speech_sdk_1.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
        speechConfig.speechSynthesisVoiceName = voice;
        var audioConfig = microsoft_cognitiveservices_speech_sdk_1.AudioConfig.fromAudioFileOutput("".concat(filename, ".wav"));
        var synthesizer = new microsoft_cognitiveservices_speech_sdk_1.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(text, function (result) {
            if (result) {
                convertWavToAnotherFormat("".concat(filename, ".wav"), "".concat(filename, ".").concat(audioToFormat), audioToFormat)
                    .then(function (output) {
                    resolve();
                })
                    .catch(function (error) {
                    console.error(error);
                    reject(error);
                });
            }
            else {
                reject(new Error("No result from synthesizer"));
            }
            synthesizer.close();
        }, function (error) {
            console.error("Error: ".concat(error));
            synthesizer.close();
            reject(error);
        });
    });
};
var convertWavToAnotherFormat = function (inputPath, outputPath, toFormat) {
    return new Promise(function (resolve, reject) {
        (0, fluent_ffmpeg_1.default)()
            .input(inputPath)
            .toFormat(toFormat)
            .on("end", function () { return resolve(outputPath); })
            .on("error", function (err) {
            return reject(new Error("Error converting file: ".concat(err.message)));
        })
            .save(outputPath);
    });
};
var deleteFileSync = function (path) {
    try {
        fs.unlinkSync(path);
    }
    catch (error) {
        console.error("Erro ao deletar o arquivo:", error);
    }
};
var keepOnlySpecifiedChars = function (str) {
    return str.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ!?.,;:\s]/g, "");
};
var handleOpenAi = function (msg, wbot, ticket, contact, mediaSent) { return __awaiter(void 0, void 0, void 0, function () {
    var bodyMessage, prompt, publicFolder, openai, openAiIndex, configuration, messages, promptSystem, messagesOpenAi, i, message, chat, response, sentMessage, fileNameWithOutExtension_1, mediaUrl, file, transcription, i, message, chat, response, sentMessage, fileNameWithOutExtension_2;
    var _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                bodyMessage = (0, exports.getBodyMessage)(msg);
                if (!bodyMessage)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(wbot.id, ticket.companyId)];
            case 1:
                prompt = (_h.sent()).prompt;
                if (!prompt && !(0, lodash_1.isNil)((_a = ticket === null || ticket === void 0 ? void 0 : ticket.queue) === null || _a === void 0 ? void 0 : _a.prompt)) {
                    prompt = ticket.queue.prompt;
                }
                if (!prompt)
                    return [2 /*return*/];
                if (msg.messageStubType)
                    return [2 /*return*/];
                publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public");
                openAiIndex = sessionsOpenAi.findIndex(function (s) { return s.id === wbot.id; });
                if (openAiIndex === -1) {
                    configuration = new openai_1.Configuration({
                        apiKey: prompt.apiKey
                    });
                    openai = new openai_1.OpenAIApi(configuration);
                    openai.id = wbot.id;
                    sessionsOpenAi.push(openai);
                }
                else {
                    openai = sessionsOpenAi[openAiIndex];
                }
                return [4 /*yield*/, Message_1.default.findAll({
                        where: { ticketId: ticket.id },
                        order: [["createdAt", "ASC"]],
                        limit: prompt.maxMessages
                    })];
            case 2:
                messages = _h.sent();
                promptSystem = "Nas respostas utilize o nome ".concat(sanitizeName(contact.name || "Amigo(a)"), " para identificar o cliente.\nSua resposta deve usar no m\u00E1ximo ").concat(prompt.maxTokens, " tokens e cuide para n\u00E3o truncar o final.\nSempre que poss\u00EDvel, mencione o nome dele para ser mais personalizado o atendimento e mais educado. Quando a resposta requer uma transfer\u00EAncia para o setor de atendimento, comece sua resposta com 'A\u00E7\u00E3o: Transferir para o setor de atendimento'.\n\n  ").concat(prompt.prompt, "\n");
                messagesOpenAi = [];
                if (!(((_b = msg.message) === null || _b === void 0 ? void 0 : _b.conversation) || ((_d = (_c = msg.message) === null || _c === void 0 ? void 0 : _c.extendedTextMessage) === null || _d === void 0 ? void 0 : _d.text))) return [3 /*break*/, 10];
                messagesOpenAi = [];
                messagesOpenAi.push({ role: "system", content: promptSystem });
                for (i = 0; i < Math.min(prompt.maxMessages, messages.length); i++) {
                    message = messages[i];
                    if (message.mediaType === "chat") {
                        if (message.fromMe) {
                            messagesOpenAi.push({ role: "assistant", content: message.body });
                        }
                        else {
                            messagesOpenAi.push({ role: "user", content: message.body });
                        }
                    }
                }
                messagesOpenAi.push({ role: "user", content: bodyMessage });
                return [4 /*yield*/, openai.createChatCompletion({
                        model: "gpt-3.5-turbo-1106",
                        messages: messagesOpenAi,
                        max_tokens: prompt.maxTokens,
                        temperature: prompt.temperature
                    })];
            case 3:
                chat = _h.sent();
                response = (_e = chat.data.choices[0].message) === null || _e === void 0 ? void 0 : _e.content;
                if (!(response === null || response === void 0 ? void 0 : response.includes("Ação: Transferir para o setor de atendimento"))) return [3 /*break*/, 5];
                return [4 /*yield*/, transferQueue(prompt.queueId, ticket, contact)];
            case 4:
                _h.sent();
                response = response
                    .replace("Ação: Transferir para o setor de atendimento", "")
                    .trim();
                _h.label = 5;
            case 5:
                if (!(prompt.voice === "texto")) return [3 /*break*/, 8];
                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, {
                        text: response
                    })];
            case 6:
                sentMessage = _h.sent();
                return [4 /*yield*/, (0, exports.verifyMessage)(sentMessage, ticket, contact)];
            case 7:
                _h.sent();
                return [3 /*break*/, 9];
            case 8:
                fileNameWithOutExtension_1 = "".concat(ticket.id, "_").concat(Date.now());
                convertTextToSpeechAndSaveToFile(keepOnlySpecifiedChars(response), "".concat(publicFolder, "/").concat(fileNameWithOutExtension_1), prompt.voiceKey, prompt.voiceRegion, prompt.voice, "mp3").then(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var sendMessage, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, {
                                        audio: { url: "".concat(publicFolder, "/").concat(fileNameWithOutExtension_1, ".mp3") },
                                        mimetype: "audio/mpeg",
                                        ptt: true
                                    })];
                            case 1:
                                sendMessage = _a.sent();
                                return [4 /*yield*/, verifyMediaMessage(sendMessage, ticket, contact)];
                            case 2:
                                _a.sent();
                                deleteFileSync("".concat(publicFolder, "/").concat(fileNameWithOutExtension_1, ".mp3"));
                                deleteFileSync("".concat(publicFolder, "/").concat(fileNameWithOutExtension_1, ".wav"));
                                return [3 /*break*/, 4];
                            case 3:
                                error_3 = _a.sent();
                                console.log("Erro para responder com audio: ".concat(error_3));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                _h.label = 9;
            case 9: return [3 /*break*/, 18];
            case 10:
                if (!((_f = msg.message) === null || _f === void 0 ? void 0 : _f.audioMessage)) return [3 /*break*/, 18];
                mediaUrl = mediaSent.mediaUrl.split("/").pop();
                file = fs.createReadStream("".concat(publicFolder, "/").concat(mediaUrl));
                return [4 /*yield*/, openai.createTranscription(file, "whisper-1")];
            case 11:
                transcription = _h.sent();
                messagesOpenAi = [];
                messagesOpenAi.push({ role: "system", content: promptSystem });
                for (i = 0; i < Math.min(prompt.maxMessages, messages.length); i++) {
                    message = messages[i];
                    if (message.mediaType === "chat") {
                        if (message.fromMe) {
                            messagesOpenAi.push({ role: "assistant", content: message.body });
                        }
                        else {
                            messagesOpenAi.push({ role: "user", content: message.body });
                        }
                    }
                }
                messagesOpenAi.push({ role: "user", content: transcription.data.text });
                return [4 /*yield*/, openai.createChatCompletion({
                        model: "gpt-3.5-turbo-1106",
                        messages: messagesOpenAi,
                        max_tokens: prompt.maxTokens,
                        temperature: prompt.temperature
                    })];
            case 12:
                chat = _h.sent();
                response = (_g = chat.data.choices[0].message) === null || _g === void 0 ? void 0 : _g.content;
                if (!(response === null || response === void 0 ? void 0 : response.includes("Ação: Transferir para o setor de atendimento"))) return [3 /*break*/, 14];
                return [4 /*yield*/, transferQueue(prompt.queueId, ticket, contact)];
            case 13:
                _h.sent();
                response = response
                    .replace("Ação: Transferir para o setor de atendimento", "")
                    .trim();
                _h.label = 14;
            case 14:
                if (!(prompt.voice === "texto")) return [3 /*break*/, 17];
                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, {
                        text: response
                    })];
            case 15:
                sentMessage = _h.sent();
                return [4 /*yield*/, (0, exports.verifyMessage)(sentMessage, ticket, contact)];
            case 16:
                _h.sent();
                return [3 /*break*/, 18];
            case 17:
                fileNameWithOutExtension_2 = "".concat(ticket.id, "_").concat(Date.now());
                convertTextToSpeechAndSaveToFile(keepOnlySpecifiedChars(response), "".concat(publicFolder, "/").concat(fileNameWithOutExtension_2), prompt.voiceKey, prompt.voiceRegion, prompt.voice, "mp3").then(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var sendMessage, error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, wbot.sendMessage(msg.key.remoteJid, {
                                        audio: { url: "".concat(publicFolder, "/").concat(fileNameWithOutExtension_2, ".mp3") },
                                        mimetype: "audio/mpeg",
                                        ptt: true
                                    })];
                            case 1:
                                sendMessage = _a.sent();
                                return [4 /*yield*/, verifyMediaMessage(sendMessage, ticket, contact)];
                            case 2:
                                _a.sent();
                                deleteFileSync("".concat(publicFolder, "/").concat(fileNameWithOutExtension_2, ".mp3"));
                                deleteFileSync("".concat(publicFolder, "/").concat(fileNameWithOutExtension_2, ".wav"));
                                return [3 /*break*/, 4];
                            case 3:
                                error_4 = _a.sent();
                                console.log("Erro para responder com audio: ".concat(error_4));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                _h.label = 18;
            case 18:
                messagesOpenAi = [];
                return [2 /*return*/];
        }
    });
}); };
var transferQueue = function (queueId, ticket, contact) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                    ticketData: { queueId: queueId, useIntegration: false, promptId: null },
                    ticketId: ticket.id,
                    companyId: ticket.companyId
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var verifyMediaMessage = function (msg, ticket, contact) { return __awaiter(void 0, void 0, void 0, function () {
    var io, quotedMsg, media, ext, err_2, body, messageData, newMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                io = (0, socket_1.getIO)();
                return [4 /*yield*/, verifyQuotedMessage(msg)];
            case 1:
                quotedMsg = _a.sent();
                return [4 /*yield*/, downloadMedia(msg)];
            case 2:
                media = _a.sent();
                if (!media) {
                    throw new Error("ERR_WAPP_DOWNLOAD_MEDIA");
                }
                if (!media.filename) {
                    ext = media.mimetype.split("/")[1].split(";")[0];
                    media.filename = "".concat(new Date().getTime(), ".").concat(ext);
                }
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, writeFileAsync((0, path_1.join)(__dirname, "..", "..", "..", "public", media.filename), media.data, "base64")];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_2 = _a.sent();
                Sentry.captureException(err_2);
                logger_1.logger.error(err_2);
                return [3 /*break*/, 6];
            case 6:
                body = (0, exports.getBodyMessage)(msg);
                messageData = {
                    id: msg.key.id,
                    ticketId: ticket.id,
                    contactId: msg.key.fromMe ? undefined : contact.id,
                    body: body ? (0, Mustache_1.default)(body, ticket.contact) : media.filename,
                    fromMe: msg.key.fromMe,
                    read: msg.key.fromMe,
                    mediaUrl: media.filename,
                    mediaType: media.mimetype.split("/")[0],
                    quotedMsgId: quotedMsg === null || quotedMsg === void 0 ? void 0 : quotedMsg.id,
                    ack: msg.status,
                    remoteJid: msg.key.remoteJid,
                    participant: msg.key.participant,
                    dataJson: JSON.stringify(msg),
                };
                return [4 /*yield*/, ticket.update({
                        lastMessage: body || media.filename,
                    })];
            case 7:
                _a.sent();
                return [4 /*yield*/, (0, CreateMessageService_1.default)({
                        messageData: messageData,
                        companyId: ticket.companyId,
                    })];
            case 8:
                newMessage = _a.sent();
                if (!(!msg.key.fromMe && ticket.status === "closed")) return [3 /*break*/, 11];
                return [4 /*yield*/, ticket.update({ status: "pending" })];
            case 9:
                _a.sent();
                return [4 /*yield*/, ticket.reload({
                        include: [
                            { model: Queue_1.default, as: "queue" },
                            { model: User_1.default, as: "user" },
                            { model: Contact_1.default, as: "contact" },
                        ],
                    })];
            case 10:
                _a.sent();
                io.to("company-".concat(ticket.companyId, "-closed"))
                    .to("queue-".concat(ticket.queueId, "-closed"))
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "delete",
                    ticket: ticket,
                    ticketId: ticket.id,
                });
                io.to("company-".concat(ticket.companyId, "-").concat(ticket.status))
                    .to("queue-".concat(ticket.queueId, "-").concat(ticket.status))
                    .to(ticket.id.toString())
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "update",
                    ticket: ticket,
                    ticketId: ticket.id,
                });
                _a.label = 11;
            case 11: return [2 /*return*/, newMessage];
        }
    });
}); };
var verifyMessage = function (msg, ticket, contact) { return __awaiter(void 0, void 0, void 0, function () {
    var io, quotedMsg, body, isEdited, messageData;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                io = (0, socket_1.getIO)();
                return [4 /*yield*/, verifyQuotedMessage(msg)];
            case 1:
                quotedMsg = _f.sent();
                body = (0, exports.getBodyMessage)(msg);
                isEdited = getTypeMessage(msg) == 'editedMessage';
                messageData = {
                    id: isEdited ? (_e = (_d = (_c = (_b = (_a = msg === null || msg === void 0 ? void 0 : msg.message) === null || _a === void 0 ? void 0 : _a.editedMessage) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.protocolMessage) === null || _d === void 0 ? void 0 : _d.key) === null || _e === void 0 ? void 0 : _e.id : msg.key.id,
                    ticketId: ticket.id,
                    contactId: msg.key.fromMe ? undefined : contact.id,
                    body: body,
                    fromMe: msg.key.fromMe,
                    mediaType: getTypeMessage(msg),
                    read: msg.key.fromMe,
                    quotedMsgId: quotedMsg === null || quotedMsg === void 0 ? void 0 : quotedMsg.id,
                    ack: msg.status,
                    remoteJid: msg.key.remoteJid,
                    participant: msg.key.participant,
                    dataJson: JSON.stringify(msg),
                    isEdited: isEdited,
                };
                return [4 /*yield*/, ticket.update({
                        lastMessage: body
                    })];
            case 2:
                _f.sent();
                return [4 /*yield*/, (0, CreateMessageService_1.default)({ messageData: messageData, companyId: ticket.companyId })];
            case 3:
                _f.sent();
                if (!(!msg.key.fromMe && ticket.status === "closed")) return [3 /*break*/, 6];
                return [4 /*yield*/, ticket.update({ status: "pending" })];
            case 4:
                _f.sent();
                return [4 /*yield*/, ticket.reload({
                        include: [
                            { model: Queue_1.default, as: "queue" },
                            { model: User_1.default, as: "user" },
                            { model: Contact_1.default, as: "contact" }
                        ]
                    })];
            case 5:
                _f.sent();
                io.to("company-".concat(ticket.companyId, "-closed"))
                    .to("queue-".concat(ticket.queueId, "-closed"))
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "delete",
                    ticket: ticket,
                    ticketId: ticket.id
                });
                io.to("company-".concat(ticket.companyId, "-").concat(ticket.status))
                    .to("queue-".concat(ticket.queueId, "-").concat(ticket.status))
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "update",
                    ticket: ticket,
                    ticketId: ticket.id
                });
                _f.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.verifyMessage = verifyMessage;
var isValidMsg = function (msg) {
    if (msg.key.remoteJid === "status@broadcast")
        return false;
    try {
        var msgType = getTypeMessage(msg);
        if (!msgType) {
            return;
        }
        var ifType = msgType === "conversation" ||
            msgType === "extendedTextMessage" ||
            msgType === "editedMessage" ||
            msgType === "audioMessage" ||
            msgType === "videoMessage" ||
            msgType === "imageMessage" ||
            msgType === "documentMessage" ||
            msgType === "documentWithCaptionMessage" ||
            msgType === "stickerMessage" ||
            msgType === "buttonsResponseMessage" ||
            msgType === "buttonsMessage" ||
            msgType === "messageContextInfo" ||
            msgType === "locationMessage" ||
            msgType === "liveLocationMessage" ||
            msgType === "contactMessage" ||
            msgType === "voiceMessage" ||
            msgType === "mediaMessage" ||
            msgType === "contactsArrayMessage" ||
            msgType === "reactionMessage" ||
            msgType === "ephemeralMessage" ||
            msgType === "protocolMessage" ||
            msgType === "listResponseMessage" ||
            msgType === "listMessage" ||
            msgType === "viewOnceMessage";
        if (!ifType) {
            logger_1.logger.warn("#### Nao achou o type em isValidMsg: ".concat(msgType, "\n").concat(JSON.stringify(msg === null || msg === void 0 ? void 0 : msg.message)));
            Sentry.setExtra("Mensagem", { BodyMsg: msg.message, msg: msg, msgType: msgType });
            Sentry.captureException(new Error("Novo Tipo de Mensagem em isValidMsg"));
        }
        return !!ifType;
    }
    catch (error) {
        Sentry.setExtra("Error isValidMsg", { msg: msg });
        Sentry.captureException(error);
    }
};
var Push = function (msg) {
    return msg.pushName;
};
var verifyQueue = function (wbot, msg, ticket, contact, mediaSent) { return __awaiter(void 0, void 0, void 0, function () {
    var companyId, _a, queues, greetingMessage, maxUseBotQueues, timeUseBotQueues, sendGreetingMessageOneQueues, body, firstQueue, chatbot, integrations, selectedOption, choosenQueue, buttonActive, botText, chatbot, queue, schedules, now, weekday_1, schedule, startTime, endTime, body_1, sentMessage, integrations, body, sentMessage, ticketTraking, dataLimite, Agora;
    var _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                companyId = ticket.companyId;
                return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(wbot.id, ticket.companyId)];
            case 1:
                _a = _e.sent(), queues = _a.queues, greetingMessage = _a.greetingMessage, maxUseBotQueues = _a.maxUseBotQueues, timeUseBotQueues = _a.timeUseBotQueues;
                if (!(queues.length === 1)) return [3 /*break*/, 13];
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "sendGreetingMessageOneQueues",
                            companyId: ticket.companyId
                        }
                    })];
            case 2:
                sendGreetingMessageOneQueues = _e.sent();
                if (!(greetingMessage.length > 1 && (sendGreetingMessageOneQueues === null || sendGreetingMessageOneQueues === void 0 ? void 0 : sendGreetingMessageOneQueues.value) === "enabled")) return [3 /*break*/, 4];
                body = (0, Mustache_1.default)("".concat(greetingMessage), contact);
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: body
                    })];
            case 3:
                _e.sent();
                _e.label = 4;
            case 4:
                firstQueue = (0, lodash_1.head)(queues);
                chatbot = false;
                if (firstQueue === null || firstQueue === void 0 ? void 0 : firstQueue.options) {
                    chatbot = firstQueue.options.length > 0;
                }
                if (!(!msg.key.fromMe &&
                    !ticket.isGroup &&
                    !(0, lodash_1.isNil)((_b = queues[0]) === null || _b === void 0 ? void 0 : _b.integrationId))) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, ShowQueueIntegrationService_1.default)(queues[0].integrationId, companyId)];
            case 5:
                integrations = _e.sent();
                return [4 /*yield*/, (0, exports.handleMessageIntegration)(msg, wbot, integrations, ticket)];
            case 6:
                _e.sent();
                return [4 /*yield*/, ticket.update({
                        useIntegration: true,
                        integrationId: integrations.id
                    })
                    // return;
                ];
            case 7:
                _e.sent();
                _e.label = 8;
            case 8:
                if (!(!msg.key.fromMe &&
                    !ticket.isGroup &&
                    !(0, lodash_1.isNil)((_c = queues[0]) === null || _c === void 0 ? void 0 : _c.promptId))) return [3 /*break*/, 11];
                return [4 /*yield*/, handleOpenAi(msg, wbot, ticket, contact, mediaSent)];
            case 9:
                _e.sent();
                return [4 /*yield*/, ticket.update({
                        useIntegration: true,
                        promptId: (_d = queues[0]) === null || _d === void 0 ? void 0 : _d.promptId
                    })
                    // return;
                ];
            case 10:
                _e.sent();
                _e.label = 11;
            case 11: return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                    ticketData: { queueId: firstQueue.id, chatbot: chatbot, status: "pending" },
                    ticketId: ticket.id,
                    companyId: ticket.companyId,
                })];
            case 12:
                _e.sent();
                return [2 /*return*/];
            case 13:
                selectedOption = (0, exports.getBodyMessage)(msg);
                choosenQueue = queues[+selectedOption - 1];
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "chatBotType",
                            companyId: companyId
                        }
                    })];
            case 14:
                buttonActive = _e.sent();
                botText = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var options, textMessage, sendMsg;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                options = "";
                                queues.forEach(function (queue, index) {
                                    options += "*[ ".concat(index + 1, " ]* - ").concat(queue.name, "\n");
                                });
                                textMessage = {
                                    text: (0, Mustache_1.default)("\u200E".concat(greetingMessage, "\n\n").concat(options), contact),
                                };
                                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), textMessage)];
                            case 1:
                                sendMsg = _a.sent();
                                return [4 /*yield*/, (0, exports.verifyMessage)(sendMsg, ticket, ticket.contact)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                if (!choosenQueue) return [3 /*break*/, 31];
                chatbot = false;
                if (choosenQueue === null || choosenQueue === void 0 ? void 0 : choosenQueue.options) {
                    chatbot = choosenQueue.options.length > 0;
                }
                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                        ticketData: { queueId: choosenQueue.id, chatbot: chatbot },
                        ticketId: ticket.id,
                        companyId: ticket.companyId,
                    })];
            case 15:
                _e.sent();
                if (!(choosenQueue.options.length === 0)) return [3 /*break*/, 30];
                return [4 /*yield*/, Queue_1.default.findByPk(choosenQueue.id)];
            case 16:
                queue = _e.sent();
                schedules = queue.schedules;
                now = (0, moment_1.default)();
                weekday_1 = now.format("dddd").toLowerCase();
                schedule = void 0;
                if (Array.isArray(schedules) && schedules.length > 0) {
                    schedule = schedules.find(function (s) { return s.weekdayEn === weekday_1 && s.startTime !== "" && s.startTime !== null && s.endTime !== "" && s.endTime !== null; });
                }
                if (!(queue.outOfHoursMessage !== null && queue.outOfHoursMessage !== "" && !(0, lodash_1.isNil)(schedule))) return [3 /*break*/, 20];
                startTime = (0, moment_1.default)(schedule.startTime, "HH:mm");
                endTime = (0, moment_1.default)(schedule.endTime, "HH:mm");
                if (!(now.isBefore(startTime) || now.isAfter(endTime))) return [3 /*break*/, 20];
                body_1 = (0, Mustache_1.default)("\u200E ".concat(queue.outOfHoursMessage, "\n\n*[ # ]* - Voltar ao Menu Principal"), ticket.contact);
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: body_1,
                    })];
            case 17:
                sentMessage = _e.sent();
                return [4 /*yield*/, (0, exports.verifyMessage)(sentMessage, ticket, contact)];
            case 18:
                _e.sent();
                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                        ticketData: { queueId: null, chatbot: chatbot },
                        ticketId: ticket.id,
                        companyId: ticket.companyId,
                    })];
            case 19:
                _e.sent();
                return [2 /*return*/];
            case 20:
                if (!(!msg.key.fromMe &&
                    !ticket.isGroup &&
                    choosenQueue.integrationId)) return [3 /*break*/, 24];
                return [4 /*yield*/, (0, ShowQueueIntegrationService_1.default)(choosenQueue.integrationId, companyId)];
            case 21:
                integrations = _e.sent();
                return [4 /*yield*/, (0, exports.handleMessageIntegration)(msg, wbot, integrations, ticket)];
            case 22:
                _e.sent();
                return [4 /*yield*/, ticket.update({
                        useIntegration: true,
                        integrationId: integrations.id
                    })
                    // return;
                ];
            case 23:
                _e.sent();
                _e.label = 24;
            case 24:
                if (!(!msg.key.fromMe &&
                    !ticket.isGroup &&
                    !(0, lodash_1.isNil)(choosenQueue === null || choosenQueue === void 0 ? void 0 : choosenQueue.promptId))) return [3 /*break*/, 27];
                return [4 /*yield*/, handleOpenAi(msg, wbot, ticket, contact, mediaSent)];
            case 25:
                _e.sent();
                return [4 /*yield*/, ticket.update({
                        useIntegration: true,
                        promptId: choosenQueue === null || choosenQueue === void 0 ? void 0 : choosenQueue.promptId
                    })
                    // return;
                ];
            case 26:
                _e.sent();
                _e.label = 27;
            case 27:
                body = (0, Mustache_1.default)("\u200E".concat(choosenQueue.greetingMessage), ticket.contact);
                if (!choosenQueue.greetingMessage) return [3 /*break*/, 30];
                return [4 /*yield*/, wbot.sendMessage("".concat(contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), {
                        text: body,
                    })];
            case 28:
                sentMessage = _e.sent();
                return [4 /*yield*/, (0, exports.verifyMessage)(sentMessage, ticket, contact)];
            case 29:
                _e.sent();
                _e.label = 30;
            case 30: return [3 /*break*/, 34];
            case 31:
                if (maxUseBotQueues && maxUseBotQueues !== 0 && ticket.amountUsedBotQueues >= maxUseBotQueues) {
                    // await UpdateTicketService({
                    //   ticketData: { queueId: queues[0].id },
                    //   ticketId: ticket.id
                    // });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, FindOrCreateATicketTrakingService_1.default)({ ticketId: ticket.id, companyId: companyId })];
            case 32:
                ticketTraking = _e.sent();
                dataLimite = new Date();
                Agora = new Date();
                if (ticketTraking.chatbotAt !== null) {
                    dataLimite.setMinutes(ticketTraking.chatbotAt.getMinutes() + (Number(timeUseBotQueues)));
                    if (ticketTraking.chatbotAt !== null && Agora < dataLimite && timeUseBotQueues !== "0" && ticket.amountUsedBotQueues !== 0) {
                        return [2 /*return*/];
                    }
                }
                return [4 /*yield*/, ticketTraking.update({
                        chatbotAt: null
                    })];
            case 33:
                _e.sent();
                if (buttonActive.value === "text") {
                    return [2 /*return*/, botText()];
                }
                _e.label = 34;
            case 34: return [2 /*return*/];
        }
    });
}); };
var verifyRating = function (ticketTraking) {
    if (ticketTraking &&
        ticketTraking.finishedAt === null &&
        ticketTraking.userId !== null &&
        ticketTraking.ratingAt !== null) {
        return true;
    }
    return false;
};
exports.verifyRating = verifyRating;
var handleRating = function (rate, ticket, ticketTraking) { return __awaiter(void 0, void 0, void 0, function () {
    var io, complationMessage, finalRate, body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                io = (0, socket_1.getIO)();
                return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(ticket.whatsappId, ticket.companyId)];
            case 1:
                complationMessage = (_a.sent()).complationMessage;
                finalRate = rate;
                if (rate < 1) {
                    finalRate = 1;
                }
                if (rate > 5) {
                    finalRate = 5;
                }
                return [4 /*yield*/, UserRating_1.default.create({
                        ticketId: ticketTraking.ticketId,
                        companyId: ticketTraking.companyId,
                        userId: ticketTraking.userId,
                        rate: finalRate,
                    })];
            case 2:
                _a.sent();
                if (!complationMessage) return [3 /*break*/, 4];
                body = (0, Mustache_1.default)("\u200E".concat(complationMessage), ticket.contact);
                return [4 /*yield*/, (0, SendWhatsAppMessage_1.default)({ body: body, ticket: ticket })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, ticketTraking.update({
                    finishedAt: (0, moment_1.default)().toDate(),
                    rated: true,
                })];
            case 5:
                _a.sent();
                return [4 /*yield*/, ticket.update({
                        queueId: null,
                        chatbot: null,
                        queueOptionId: null,
                        userId: null,
                        status: "closed",
                    })];
            case 6:
                _a.sent();
                io.to("company-".concat(ticket.companyId, "-open"))
                    .to("queue-".concat(ticket.queueId, "-open"))
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "delete",
                    ticket: ticket,
                    ticketId: ticket.id,
                });
                io.to("company-".concat(ticket.companyId, "-").concat(ticket.status))
                    .to("queue-".concat(ticket.queueId, "-").concat(ticket.status))
                    .to(ticket.id.toString())
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "update",
                    ticket: ticket,
                    ticketId: ticket.id,
                });
                return [2 /*return*/];
        }
    });
}); };
exports.handleRating = handleRating;
var handleChartbot = function (ticket_1, msg_1, wbot_1) {
    var args_1 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args_1[_i - 3] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([ticket_1, msg_1, wbot_1], args_1, true), void 0, function (ticket, msg, wbot, dontReadTheFirstQuestion) {
        var queue, messageBody, option, count, option, option, queueOptions_1, companyId, buttonActive, botButton, botText, currentOption_1, queueOptions_2, companyId, buttonActive, botList, botButton, botText;
        if (dontReadTheFirstQuestion === void 0) { dontReadTheFirstQuestion = false; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Queue_1.default.findByPk(ticket.queueId, {
                        include: [
                            {
                                model: QueueOption_1.default,
                                as: "options",
                                where: { parentId: null },
                                order: [
                                    ["option", "ASC"],
                                    ["createdAt", "ASC"],
                                ],
                            },
                        ],
                    })];
                case 1:
                    queue = _a.sent();
                    messageBody = (0, exports.getBodyMessage)(msg);
                    if (!(messageBody == "#")) return [3 /*break*/, 4];
                    // voltar para o menu inicial
                    return [4 /*yield*/, ticket.update({ queueOptionId: null, chatbot: false, queueId: null })];
                case 2:
                    // voltar para o menu inicial
                    _a.sent();
                    return [4 /*yield*/, verifyQueue(wbot, msg, ticket, ticket.contact)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    if (!(!(0, lodash_1.isNil)(queue) && !(0, lodash_1.isNil)(ticket.queueOptionId) && messageBody == "0")) return [3 /*break*/, 7];
                    return [4 /*yield*/, QueueOption_1.default.findByPk(ticket.queueOptionId)];
                case 5:
                    option = _a.sent();
                    return [4 /*yield*/, ticket.update({ queueOptionId: option === null || option === void 0 ? void 0 : option.parentId })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 17];
                case 7:
                    if (!(!(0, lodash_1.isNil)(queue) && !(0, lodash_1.isNil)(ticket.queueOptionId))) return [3 /*break*/, 15];
                    return [4 /*yield*/, QueueOption_1.default.count({
                            where: { parentId: ticket.queueOptionId },
                        })];
                case 8:
                    count = _a.sent();
                    option = {};
                    if (!(count == 1)) return [3 /*break*/, 10];
                    return [4 /*yield*/, QueueOption_1.default.findOne({
                            where: { parentId: ticket.queueOptionId },
                        })];
                case 9:
                    option = _a.sent();
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, QueueOption_1.default.findOne({
                        where: {
                            option: messageBody || "",
                            parentId: ticket.queueOptionId,
                        },
                    })];
                case 11:
                    option = _a.sent();
                    _a.label = 12;
                case 12:
                    if (!option) return [3 /*break*/, 14];
                    return [4 /*yield*/, ticket.update({ queueOptionId: option === null || option === void 0 ? void 0 : option.id })];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14: return [3 /*break*/, 17];
                case 15:
                    if (!(!(0, lodash_1.isNil)(queue) && (0, lodash_1.isNil)(ticket.queueOptionId) && !dontReadTheFirstQuestion)) return [3 /*break*/, 17];
                    option = queue === null || queue === void 0 ? void 0 : queue.options.find(function (o) { return o.option == messageBody; });
                    if (!option) return [3 /*break*/, 17];
                    return [4 /*yield*/, ticket.update({ queueOptionId: option === null || option === void 0 ? void 0 : option.id })];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17: return [4 /*yield*/, ticket.reload()];
                case 18:
                    _a.sent();
                    if (!(!(0, lodash_1.isNil)(queue) && (0, lodash_1.isNil)(ticket.queueOptionId))) return [3 /*break*/, 21];
                    return [4 /*yield*/, QueueOption_1.default.findAll({
                            where: { queueId: ticket.queueId, parentId: null },
                            order: [
                                ["option", "ASC"],
                                ["createdAt", "ASC"],
                            ],
                        })];
                case 19:
                    queueOptions_1 = _a.sent();
                    companyId = ticket.companyId;
                    return [4 /*yield*/, Setting_1.default.findOne({
                            where: {
                                key: "chatBotType",
                                companyId: companyId
                            }
                        })];
                case 20:
                    buttonActive = _a.sent();
                    botButton = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var buttons, buttonMessage, sendMsg;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    buttons = [];
                                    queueOptions_1.forEach(function (option, i) {
                                        buttons.push({
                                            buttonId: "".concat(option.option),
                                            buttonText: { displayText: option.title },
                                            type: 4
                                        });
                                    });
                                    buttons.push({
                                        buttonId: "#",
                                        buttonText: { displayText: "Menu inicial *[ 0 ]* Menu anterior" },
                                        type: 4
                                    });
                                    buttonMessage = {
                                        text: (0, Mustache_1.default)("\u200E".concat(queue.greetingMessage), ticket.contact),
                                        buttons: buttons,
                                        headerType: 4
                                    };
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), buttonMessage)];
                                case 1:
                                    sendMsg = _a.sent();
                                    return [4 /*yield*/, (0, exports.verifyMessage)(sendMsg, ticket, ticket.contact)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    botText = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var options, textMessage, sendMsg;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    options = "";
                                    queueOptions_1.forEach(function (option, i) {
                                        options += "*[ ".concat(option.option, " ]* - ").concat(option.title, "\n");
                                    });
                                    //options += `\n*[ 0 ]* - Menu anterior`;
                                    options += "\n*[ # ]* - Menu inicial";
                                    textMessage = {
                                        text: (0, Mustache_1.default)("\u200E".concat(queue.greetingMessage, "\n\n").concat(options), ticket.contact),
                                    };
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), textMessage)];
                                case 1:
                                    sendMsg = _a.sent();
                                    return [4 /*yield*/, (0, exports.verifyMessage)(sendMsg, ticket, ticket.contact)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    // if (buttonActive.value === "list") {
                    //   return botList();
                    // };
                    if (buttonActive.value === "button" && QueueOption_1.default.length <= 4) {
                        return [2 /*return*/, botButton()];
                    }
                    if (buttonActive.value === "text") {
                        return [2 /*return*/, botText()];
                    }
                    if (buttonActive.value === "button" && QueueOption_1.default.length > 4) {
                        return [2 /*return*/, botText()];
                    }
                    return [3 /*break*/, 25];
                case 21:
                    if (!(!(0, lodash_1.isNil)(queue) && !(0, lodash_1.isNil)(ticket.queueOptionId))) return [3 /*break*/, 25];
                    return [4 /*yield*/, QueueOption_1.default.findByPk(ticket.queueOptionId)];
                case 22:
                    currentOption_1 = _a.sent();
                    return [4 /*yield*/, QueueOption_1.default.findAll({
                            where: { parentId: ticket.queueOptionId },
                            order: [
                                ["option", "ASC"],
                                ["createdAt", "ASC"],
                            ],
                        })];
                case 23:
                    queueOptions_2 = _a.sent();
                    if (!(queueOptions_2.length > -1)) return [3 /*break*/, 25];
                    companyId = ticket.companyId;
                    return [4 /*yield*/, Setting_1.default.findOne({
                            where: {
                                key: "chatBotType",
                                companyId: companyId
                            }
                        })];
                case 24:
                    buttonActive = _a.sent();
                    botList = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var sectionsRows, sections, listMessage, sendMsg;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sectionsRows = [];
                                    queueOptions_2.forEach(function (option, i) {
                                        sectionsRows.push({
                                            title: option.title,
                                            rowId: "".concat(option.option)
                                        });
                                    });
                                    sectionsRows.push({
                                        title: "Menu inicial *[ 0 ]* Menu anterior",
                                        rowId: "#"
                                    });
                                    sections = [
                                        {
                                            rows: sectionsRows
                                        }
                                    ];
                                    listMessage = {
                                        text: (0, Mustache_1.default)("\u200E".concat(currentOption_1.message), ticket.contact),
                                        buttonText: "Escolha uma opção",
                                        sections: sections
                                    };
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), listMessage)];
                                case 1:
                                    sendMsg = _a.sent();
                                    return [4 /*yield*/, (0, exports.verifyMessage)(sendMsg, ticket, ticket.contact)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    botButton = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var buttons, buttonMessage, sendMsg;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    buttons = [];
                                    queueOptions_2.forEach(function (option, i) {
                                        buttons.push({
                                            buttonId: "".concat(option.option),
                                            buttonText: { displayText: option.title },
                                            type: 4
                                        });
                                    });
                                    buttons.push({
                                        buttonId: "#",
                                        buttonText: { displayText: "Menu inicial *[ 0 ]* Menu anterior" },
                                        type: 4
                                    });
                                    buttonMessage = {
                                        text: (0, Mustache_1.default)("\u200E".concat(currentOption_1.message), ticket.contact),
                                        buttons: buttons,
                                        headerType: 4
                                    };
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), buttonMessage)];
                                case 1:
                                    sendMsg = _a.sent();
                                    return [4 /*yield*/, (0, exports.verifyMessage)(sendMsg, ticket, ticket.contact)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    botText = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var options, textMessage, sendMsg;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    options = "";
                                    queueOptions_2.forEach(function (option, i) {
                                        options += "*[ ".concat(option.option, " ]* - ").concat(option.title, "\n");
                                    });
                                    options += "\n*[ 0 ]* - Menu anterior";
                                    options += "\n*[ # ]* - Menu inicial";
                                    textMessage = {
                                        text: (0, Mustache_1.default)("\u200E".concat(currentOption_1.message, "\n\n").concat(options), ticket.contact),
                                    };
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), textMessage)];
                                case 1:
                                    sendMsg = _a.sent();
                                    return [4 /*yield*/, (0, exports.verifyMessage)(sendMsg, ticket, ticket.contact)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    if (buttonActive.value === "list") {
                        return [2 /*return*/, botList()];
                    }
                    ;
                    if (buttonActive.value === "button" && QueueOption_1.default.length <= 4) {
                        return [2 /*return*/, botButton()];
                    }
                    if (buttonActive.value === "text") {
                        return [2 /*return*/, botText()];
                    }
                    if (buttonActive.value === "button" && QueueOption_1.default.length > 4) {
                        return [2 /*return*/, botText()];
                    }
                    _a.label = 25;
                case 25: return [2 /*return*/];
            }
        });
    });
};
var handleMessageIntegration = function (msg, wbot, queueIntegration, ticket) { return __awaiter(void 0, void 0, void 0, function () {
    var msgType, options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                msgType = getTypeMessage(msg);
                if (!(queueIntegration.type === "n8n" || queueIntegration.type === "webhook")) return [3 /*break*/, 1];
                if (queueIntegration === null || queueIntegration === void 0 ? void 0 : queueIntegration.urlN8N) {
                    options = {
                        method: "POST",
                        url: queueIntegration === null || queueIntegration === void 0 ? void 0 : queueIntegration.urlN8N,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        json: msg
                    };
                    try {
                        request(options, function (error, response) {
                            if (error) {
                                throw new Error(error);
                            }
                            else {
                                console.log(response.body);
                            }
                        });
                    }
                    catch (error) {
                        throw new Error(error);
                    }
                }
                return [3 /*break*/, 3];
            case 1:
                if (!(queueIntegration.type === "typebot")) return [3 /*break*/, 3];
                console.log("entrou no typebot");
                // await typebots(ticket, msg, wbot, queueIntegration);
                return [4 /*yield*/, (0, typebotListener_1.default)({ ticket: ticket, msg: msg, wbot: wbot, typebot: queueIntegration })];
            case 2:
                // await typebots(ticket, msg, wbot, queueIntegration);
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.handleMessageIntegration = handleMessageIntegration;
var handleMessage = function (msg, wbot, companyId) { return __awaiter(void 0, void 0, void 0, function () {
    var mediaSent, msgContact, groupContact, isGroup, msgIsGroupBlock, bodyMessage, msgType, hasMedia, grupoMeta, msgGroupContact, whatsapp_1, contact, unreadMessages, unreads, lastMessage, ticket_1, ticketTraking, e_2, currentSchedule, scheduleType, body_2, debouncedSentMessage, queue, schedules, now, weekday_2, schedule, startTime, endTime, body_3, debouncedSentMessage, e_3, integrations, integrations, dontReadTheFirstQuestion, queue, schedules, now, weekday_3, schedule, startTime, endTime, body_4, debouncedSentMessage, e_4, lastMessage_1, debouncedSentMessage, err_3;
    var _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!isValidMsg(msg))
                    return [2 /*return*/];
                _h.label = 1;
            case 1:
                _h.trys.push([1, 64, , 65]);
                msgContact = void 0;
                groupContact = void 0;
                isGroup = (_a = msg.key.remoteJid) === null || _a === void 0 ? void 0 : _a.endsWith("@g.us");
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            companyId: companyId,
                            key: "CheckMsgIsGroup",
                        },
                    })];
            case 2:
                msgIsGroupBlock = _h.sent();
                bodyMessage = (0, exports.getBodyMessage)(msg);
                msgType = getTypeMessage(msg);
                hasMedia = ((_b = msg.message) === null || _b === void 0 ? void 0 : _b.audioMessage) ||
                    ((_c = msg.message) === null || _c === void 0 ? void 0 : _c.imageMessage) ||
                    ((_d = msg.message) === null || _d === void 0 ? void 0 : _d.videoMessage) ||
                    ((_e = msg.message) === null || _e === void 0 ? void 0 : _e.documentMessage) ||
                    ((_f = msg.message) === null || _f === void 0 ? void 0 : _f.documentWithCaptionMessage) ||
                    msg.message.stickerMessage;
                if (!msg.key.fromMe) return [3 /*break*/, 4];
                if (/\u200e/.test(bodyMessage))
                    return [2 /*return*/];
                if (!hasMedia &&
                    msgType !== "conversation" &&
                    msgType !== "extendedTextMessage" &&
                    msgType !== "vcard")
                    return [2 /*return*/];
                return [4 /*yield*/, getContactMessage(msg, wbot)];
            case 3:
                msgContact = _h.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, getContactMessage(msg, wbot)];
            case 5:
                msgContact = _h.sent();
                _h.label = 6;
            case 6:
                if ((msgIsGroupBlock === null || msgIsGroupBlock === void 0 ? void 0 : msgIsGroupBlock.value) === "enabled" && isGroup)
                    return [2 /*return*/];
                if (!isGroup) return [3 /*break*/, 9];
                return [4 /*yield*/, wbot.groupMetadata(msg.key.remoteJid)];
            case 7:
                grupoMeta = _h.sent();
                msgGroupContact = {
                    id: grupoMeta.id,
                    name: grupoMeta.subject
                };
                return [4 /*yield*/, verifyContact(msgGroupContact, wbot, companyId)];
            case 8:
                groupContact = _h.sent();
                _h.label = 9;
            case 9: return [4 /*yield*/, (0, ShowWhatsAppService_1.default)(wbot.id, companyId)];
            case 10:
                whatsapp_1 = _h.sent();
                return [4 /*yield*/, verifyContact(msgContact, wbot, companyId)];
            case 11:
                contact = _h.sent();
                unreadMessages = 0;
                if (!msg.key.fromMe) return [3 /*break*/, 13];
                return [4 /*yield*/, cache_1.cacheLayer.set("contacts:".concat(contact.id, ":unreads"), "0")];
            case 12:
                _h.sent();
                return [3 /*break*/, 16];
            case 13: return [4 /*yield*/, cache_1.cacheLayer.get("contacts:".concat(contact.id, ":unreads"))];
            case 14:
                unreads = _h.sent();
                unreadMessages = +unreads + 1;
                return [4 /*yield*/, cache_1.cacheLayer.set("contacts:".concat(contact.id, ":unreads"), "".concat(unreadMessages))];
            case 15:
                _h.sent();
                _h.label = 16;
            case 16: return [4 /*yield*/, Message_1.default.findOne({
                    where: {
                        contactId: contact.id,
                        companyId: companyId,
                    },
                    order: [["createdAt", "DESC"]],
                })];
            case 17:
                lastMessage = _h.sent();
                if (unreadMessages === 0 && whatsapp_1.complationMessage && (0, Mustache_1.default)(whatsapp_1.complationMessage, contact).trim().toLowerCase() === (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.body.trim().toLowerCase())) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, FindOrCreateTicketService_1.default)(contact, wbot.id, unreadMessages, companyId, groupContact)];
            case 18:
                ticket_1 = _h.sent();
                return [4 /*yield*/, (0, providers_1.provider)(ticket_1, msg, companyId, contact, wbot)];
            case 19:
                _h.sent();
                if (!(bodyMessage == "#")) return [3 /*break*/, 22];
                return [4 /*yield*/, ticket_1.update({
                        queueOptionId: null,
                        chatbot: false,
                        queueId: null,
                    })];
            case 20:
                _h.sent();
                return [4 /*yield*/, verifyQueue(wbot, msg, ticket_1, ticket_1.contact)];
            case 21:
                _h.sent();
                return [2 /*return*/];
            case 22: return [4 /*yield*/, (0, FindOrCreateATicketTrakingService_1.default)({
                    ticketId: ticket_1.id,
                    companyId: companyId,
                    whatsappId: whatsapp_1 === null || whatsapp_1 === void 0 ? void 0 : whatsapp_1.id
                })];
            case 23:
                ticketTraking = _h.sent();
                try {
                    if (!msg.key.fromMe) {
                        /**
                         * Tratamento para avaliação do atendente
                         */
                        //  // dev Ricardo: insistir a responder avaliação
                        //  const rate_ = Number(bodyMessage);
                        //  if ((ticket?.lastMessage.includes('_Insatisfeito_') || ticket?.lastMessage.includes('Por favor avalie nosso atendimento.')) &&  (!isFinite(rate_))) {
                        //      const debouncedSentMessage = debounce(
                        //        async () => {
                        //          await wbot.sendMessage(
                        //            `${ticket.contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"
                        //            }`,
                        //            {
                        //              text: 'Por favor avalie nosso atendimento.'
                        //            }
                        //          );
                        //        },
                        //        1000,
                        //        ticket.id
                        //      );
                        //      debouncedSentMessage();
                        //      return;
                        //  }
                        //  // dev Ricardo
                        if (ticketTraking !== null && (0, exports.verifyRating)(ticketTraking)) {
                            (0, exports.handleRating)(parseFloat(bodyMessage), ticket_1, ticketTraking);
                            return [2 /*return*/];
                        }
                    }
                }
                catch (e) {
                    Sentry.captureException(e);
                    console.log(e);
                }
                _h.label = 24;
            case 24:
                _h.trys.push([24, 26, , 27]);
                return [4 /*yield*/, ticket_1.update({
                        fromMe: msg.key.fromMe,
                    })];
            case 25:
                _h.sent();
                return [3 /*break*/, 27];
            case 26:
                e_2 = _h.sent();
                Sentry.captureException(e_2);
                console.log(e_2);
                return [3 /*break*/, 27];
            case 27:
                if (!hasMedia) return [3 /*break*/, 29];
                return [4 /*yield*/, verifyMediaMessage(msg, ticket_1, contact)];
            case 28:
                mediaSent = _h.sent();
                return [3 /*break*/, 31];
            case 29: return [4 /*yield*/, (0, exports.verifyMessage)(msg, ticket_1, contact)];
            case 30:
                _h.sent();
                _h.label = 31;
            case 31: return [4 /*yield*/, (0, VerifyCurrentSchedule_1.default)(companyId)];
            case 32:
                currentSchedule = _h.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            companyId: companyId,
                            key: "scheduleType"
                        }
                    })];
            case 33:
                scheduleType = _h.sent();
                _h.label = 34;
            case 34:
                _h.trys.push([34, 37, , 38]);
                if (!(!msg.key.fromMe && scheduleType)) return [3 /*break*/, 36];
                /**
                 * Tratamento para envio de mensagem quando a empresa está fora do expediente
                 */
                if (scheduleType.value === "company" &&
                    !(0, lodash_1.isNil)(currentSchedule) &&
                    (!currentSchedule || currentSchedule.inActivity === false)) {
                    body_2 = "\u200E ".concat(whatsapp_1.outOfHoursMessage);
                    debouncedSentMessage = (0, Debounce_1.debounce)(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, wbot.sendMessage("".concat(ticket_1.contact.number, "@").concat(ticket_1.isGroup ? "g.us" : "s.whatsapp.net"), {
                                        text: body_2
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 3000, ticket_1.id);
                    debouncedSentMessage();
                    return [2 /*return*/];
                }
                if (!(scheduleType.value === "queue" && ticket_1.queueId !== null)) return [3 /*break*/, 36];
                return [4 /*yield*/, Queue_1.default.findByPk(ticket_1.queueId)];
            case 35:
                queue = _h.sent();
                schedules = queue.schedules;
                now = (0, moment_1.default)();
                weekday_2 = now.format("dddd").toLowerCase();
                schedule = null;
                if (Array.isArray(schedules) && schedules.length > 0) {
                    schedule = schedules.find(function (s) {
                        return s.weekdayEn === weekday_2 &&
                            s.startTime !== "" &&
                            s.startTime !== null &&
                            s.endTime !== "" &&
                            s.endTime !== null;
                    });
                }
                if (scheduleType.value === "queue" &&
                    queue.outOfHoursMessage !== null &&
                    queue.outOfHoursMessage !== "" &&
                    !(0, lodash_1.isNil)(schedule)) {
                    startTime = (0, moment_1.default)(schedule.startTime, "HH:mm");
                    endTime = (0, moment_1.default)(schedule.endTime, "HH:mm");
                    if (now.isBefore(startTime) || now.isAfter(endTime)) {
                        body_3 = "".concat(queue.outOfHoursMessage);
                        debouncedSentMessage = (0, Debounce_1.debounce)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, wbot.sendMessage("".concat(ticket_1.contact.number, "@").concat(ticket_1.isGroup ? "g.us" : "s.whatsapp.net"), {
                                            text: body_3
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 3000, ticket_1.id);
                        debouncedSentMessage();
                        return [2 /*return*/];
                    }
                }
                _h.label = 36;
            case 36: return [3 /*break*/, 38];
            case 37:
                e_3 = _h.sent();
                Sentry.captureException(e_3);
                console.log(e_3);
                return [3 /*break*/, 38];
            case 38:
                try {
                    if (!msg.key.fromMe) {
                        if (ticketTraking !== null && (0, exports.verifyRating)(ticketTraking)) {
                            (0, exports.handleRating)(parseFloat(bodyMessage), ticket_1, ticketTraking);
                            return [2 /*return*/];
                        }
                    }
                }
                catch (e) {
                    Sentry.captureException(e);
                    console.log(e);
                }
                if (!(!ticket_1.queue &&
                    !isGroup &&
                    !msg.key.fromMe &&
                    !ticket_1.userId &&
                    !(0, lodash_1.isNil)(whatsapp_1.promptId))) return [3 /*break*/, 40];
                return [4 /*yield*/, handleOpenAi(msg, wbot, ticket_1, contact, mediaSent)];
            case 39:
                _h.sent();
                _h.label = 40;
            case 40:
                if (!(!msg.key.fromMe &&
                    !ticket_1.isGroup &&
                    !ticket_1.queue &&
                    !ticket_1.user &&
                    ticket_1.chatbot &&
                    !(0, lodash_1.isNil)(whatsapp_1.integrationId) &&
                    !ticket_1.useIntegration)) return [3 /*break*/, 43];
                return [4 /*yield*/, (0, ShowQueueIntegrationService_1.default)(whatsapp_1.integrationId, companyId)];
            case 41:
                integrations = _h.sent();
                return [4 /*yield*/, (0, exports.handleMessageIntegration)(msg, wbot, integrations, ticket_1)];
            case 42:
                _h.sent();
                return [2 /*return*/];
            case 43:
                if (!(!isGroup &&
                    !msg.key.fromMe &&
                    !ticket_1.userId &&
                    !(0, lodash_1.isNil)(ticket_1.promptId) &&
                    ticket_1.useIntegration &&
                    ticket_1.queueId)) return [3 /*break*/, 45];
                return [4 /*yield*/, handleOpenAi(msg, wbot, ticket_1, contact, mediaSent)];
            case 44:
                _h.sent();
                _h.label = 45;
            case 45:
                if (!(!msg.key.fromMe &&
                    !ticket_1.isGroup &&
                    !ticket_1.userId &&
                    ticket_1.integrationId &&
                    ticket_1.useIntegration &&
                    ticket_1.queue)) return [3 /*break*/, 48];
                console.log("entrou no type 1974");
                return [4 /*yield*/, (0, ShowQueueIntegrationService_1.default)(ticket_1.integrationId, companyId)];
            case 46:
                integrations = _h.sent();
                return [4 /*yield*/, (0, exports.handleMessageIntegration)(msg, wbot, integrations, ticket_1)];
            case 47:
                _h.sent();
                _h.label = 48;
            case 48:
                if (!(!ticket_1.queue &&
                    !ticket_1.isGroup &&
                    !msg.key.fromMe &&
                    !ticket_1.userId &&
                    whatsapp_1.queues.length >= 1 &&
                    !ticket_1.useIntegration)) return [3 /*break*/, 51];
                return [4 /*yield*/, verifyQueue(wbot, msg, ticket_1, contact)];
            case 49:
                _h.sent();
                if (!(ticketTraking.chatbotAt === null)) return [3 /*break*/, 51];
                return [4 /*yield*/, ticketTraking.update({
                        chatbotAt: (0, moment_1.default)().toDate(),
                    })];
            case 50:
                _h.sent();
                _h.label = 51;
            case 51:
                dontReadTheFirstQuestion = ticket_1.queue === null;
                return [4 /*yield*/, ticket_1.reload()];
            case 52:
                _h.sent();
                _h.label = 53;
            case 53:
                _h.trys.push([53, 56, , 57]);
                if (!(!msg.key.fromMe && scheduleType && ticket_1.queueId !== null)) return [3 /*break*/, 55];
                return [4 /*yield*/, Queue_1.default.findByPk(ticket_1.queueId)];
            case 54:
                queue = _h.sent();
                schedules = queue.schedules;
                now = (0, moment_1.default)();
                weekday_3 = now.format("dddd").toLowerCase();
                schedule = null;
                if (Array.isArray(schedules) && schedules.length > 0) {
                    schedule = schedules.find(function (s) {
                        return s.weekdayEn === weekday_3 &&
                            s.startTime !== "" &&
                            s.startTime !== null &&
                            s.endTime !== "" &&
                            s.endTime !== null;
                    });
                }
                if (scheduleType.value === "queue" &&
                    queue.outOfHoursMessage !== null &&
                    queue.outOfHoursMessage !== "" &&
                    !(0, lodash_1.isNil)(schedule)) {
                    startTime = (0, moment_1.default)(schedule.startTime, "HH:mm");
                    endTime = (0, moment_1.default)(schedule.endTime, "HH:mm");
                    if (now.isBefore(startTime) || now.isAfter(endTime)) {
                        body_4 = queue.outOfHoursMessage;
                        debouncedSentMessage = (0, Debounce_1.debounce)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, wbot.sendMessage("".concat(ticket_1.contact.number, "@").concat(ticket_1.isGroup ? "g.us" : "s.whatsapp.net"), {
                                            text: body_4
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 3000, ticket_1.id);
                        debouncedSentMessage();
                        return [2 /*return*/];
                    }
                }
                _h.label = 55;
            case 55: return [3 /*break*/, 57];
            case 56:
                e_4 = _h.sent();
                Sentry.captureException(e_4);
                console.log(e_4);
                return [3 /*break*/, 57];
            case 57:
                if (!(!((_g = whatsapp_1 === null || whatsapp_1 === void 0 ? void 0 : whatsapp_1.queues) === null || _g === void 0 ? void 0 : _g.length) && !ticket_1.userId && !isGroup && !msg.key.fromMe)) return [3 /*break*/, 59];
                return [4 /*yield*/, Message_1.default.findOne({
                        where: {
                            ticketId: ticket_1.id,
                            fromMe: true
                        },
                        order: [["createdAt", "DESC"]]
                    })];
            case 58:
                lastMessage_1 = _h.sent();
                if (lastMessage_1 && lastMessage_1.body.includes(whatsapp_1.greetingMessage)) {
                    return [2 /*return*/];
                }
                if (whatsapp_1.greetingMessage) {
                    debouncedSentMessage = (0, Debounce_1.debounce)(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, wbot.sendMessage("".concat(ticket_1.contact.number, "@").concat(ticket_1.isGroup ? "g.us" : "s.whatsapp.net"), {
                                        text: whatsapp_1.greetingMessage
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000, ticket_1.id);
                    debouncedSentMessage();
                    return [2 /*return*/];
                }
                _h.label = 59;
            case 59:
                if (!(whatsapp_1.queues.length == 1 && ticket_1.queue)) return [3 /*break*/, 61];
                if (!(ticket_1.chatbot && !msg.key.fromMe)) return [3 /*break*/, 61];
                return [4 /*yield*/, handleChartbot(ticket_1, msg, wbot)];
            case 60:
                _h.sent();
                _h.label = 61;
            case 61:
                if (!(whatsapp_1.queues.length > 1 && ticket_1.queue)) return [3 /*break*/, 63];
                if (!(ticket_1.chatbot && !msg.key.fromMe)) return [3 /*break*/, 63];
                return [4 /*yield*/, handleChartbot(ticket_1, msg, wbot, dontReadTheFirstQuestion)];
            case 62:
                _h.sent();
                _h.label = 63;
            case 63: return [3 /*break*/, 65];
            case 64:
                err_3 = _h.sent();
                console.log(err_3);
                Sentry.captureException(err_3);
                logger_1.logger.error("Error handling whatsapp message: Err: ".concat(err_3));
                return [3 /*break*/, 65];
            case 65: return [2 /*return*/];
        }
    });
}); };
exports.handleMessage = handleMessage;
var handleMsgAck = function (msg, chat) { return __awaiter(void 0, void 0, void 0, function () {
    var io, messageToUpdate, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
            case 1:
                _a.sent();
                io = (0, socket_1.getIO)();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                return [4 /*yield*/, Message_1.default.findByPk(msg.key.id, {
                        include: [
                            "contact",
                            {
                                model: Message_1.default,
                                as: "quotedMsg",
                                include: ["contact"],
                            },
                        ],
                    })];
            case 3:
                messageToUpdate = _a.sent();
                if (!messageToUpdate)
                    return [2 /*return*/];
                return [4 /*yield*/, messageToUpdate.update({ ack: chat })];
            case 4:
                _a.sent();
                io.to(messageToUpdate.ticketId.toString()).emit("company-".concat(messageToUpdate.companyId, "-appMessage"), {
                    action: "update",
                    message: messageToUpdate,
                });
                return [3 /*break*/, 6];
            case 5:
                err_4 = _a.sent();
                Sentry.captureException(err_4);
                logger_1.logger.error("Error handling message ack. Err: ".concat(err_4));
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var verifyRecentCampaign = function (message, companyId) { return __awaiter(void 0, void 0, void 0, function () {
    var number, campaigns, ids, campaignShipping;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!!message.key.fromMe) return [3 /*break*/, 5];
                number = message.key.remoteJid.replace(/\D/g, "");
                return [4 /*yield*/, Campaign_1.default.findAll({
                        where: { companyId: companyId, status: "EM_ANDAMENTO", confirmation: true },
                    })];
            case 1:
                campaigns = _b.sent();
                if (!campaigns) return [3 /*break*/, 5];
                ids = campaigns.map(function (c) { return c.id; });
                return [4 /*yield*/, CampaignShipping_1.default.findOne({
                        where: { campaignId: (_a = {}, _a[sequelize_1.Op.in] = ids, _a), number: number, confirmation: null },
                    })];
            case 2:
                campaignShipping = _b.sent();
                if (!campaignShipping) return [3 /*break*/, 5];
                return [4 /*yield*/, campaignShipping.update({
                        confirmedAt: (0, moment_1.default)(),
                        confirmation: true,
                    })];
            case 3:
                _b.sent();
                return [4 /*yield*/, queues_1.campaignQueue.add("DispatchCampaign", {
                        campaignShippingId: campaignShipping.id,
                        campaignId: campaignShipping.campaignId,
                    }, {
                        delay: (0, queues_1.parseToMilliseconds)((0, queues_1.randomValue)(0, 10)),
                    })];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
var verifyCampaignMessageAndCloseTicket = function (message, companyId) { return __awaiter(void 0, void 0, void 0, function () {
    var io, body, isCampaign, messageRecord, ticket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                io = (0, socket_1.getIO)();
                body = (0, exports.getBodyMessage)(message);
                isCampaign = /\u200c/.test(body);
                if (!(message.key.fromMe && isCampaign)) return [3 /*break*/, 4];
                return [4 /*yield*/, Message_1.default.findOne({
                        where: { id: message.key.id, companyId: companyId },
                    })];
            case 1:
                messageRecord = _a.sent();
                return [4 /*yield*/, Ticket_1.default.findByPk(messageRecord.ticketId)];
            case 2:
                ticket = _a.sent();
                return [4 /*yield*/, ticket.update({ status: "closed" })];
            case 3:
                _a.sent();
                io.to("company-".concat(ticket.companyId, "-open"))
                    .to("queue-".concat(ticket.queueId, "-open"))
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "delete",
                    ticket: ticket,
                    ticketId: ticket.id,
                });
                io.to("company-".concat(ticket.companyId, "-").concat(ticket.status))
                    .to("queue-".concat(ticket.queueId, "-").concat(ticket.status))
                    .to(ticket.id.toString())
                    .emit("company-".concat(ticket.companyId, "-ticket"), {
                    action: "update",
                    ticket: ticket,
                    ticketId: ticket.id,
                });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var filterMessages = function (msg) {
    var _a;
    if ((_a = msg.message) === null || _a === void 0 ? void 0 : _a.protocolMessage)
        return false;
    if ([
        baileys_1.WAMessageStubType.REVOKE,
        baileys_1.WAMessageStubType.E2E_DEVICE_CHANGED,
        baileys_1.WAMessageStubType.E2E_IDENTITY_CHANGED,
        baileys_1.WAMessageStubType.CIPHERTEXT
    ].includes(msg.messageStubType))
        return false;
    return true;
};
var wbotMessageListener = function (wbot, companyId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            wbot.ev.on("messages.upsert", function (messageUpsert) { return __awaiter(void 0, void 0, void 0, function () {
                var messages;
                return __generator(this, function (_a) {
                    messages = messageUpsert.messages
                        .filter(filterMessages)
                        .map(function (msg) { return msg; });
                    if (!messages)
                        return [2 /*return*/];
                    messages.forEach(function (message) { return __awaiter(void 0, void 0, void 0, function () {
                        var messageExists;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Message_1.default.count({
                                        where: { id: message.key.id, companyId: companyId }
                                    })];
                                case 1:
                                    messageExists = _a.sent();
                                    if (!!messageExists) return [3 /*break*/, 5];
                                    return [4 /*yield*/, handleMessage(message, wbot, companyId)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, verifyRecentCampaign(message, companyId)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, verifyCampaignMessageAndCloseTicket(message, companyId)];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            wbot.ev.on("messages.update", function (messageUpdate) {
                if (messageUpdate.length === 0)
                    return;
                messageUpdate.forEach(function (message) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        wbot.readMessages([message.key]);
                        handleMsgAck(message, message.update.status);
                        return [2 /*return*/];
                    });
                }); });
            });
            // wbot.ev.on("messages.set", async (messageSet: IMessage) => {
            //   messageSet.messages.filter(filterMessages).map(msg => msg);
            // });
        }
        catch (error) {
            Sentry.captureException(error);
            logger_1.logger.error("Error handling wbot message listener. Err: ".concat(error));
        }
        return [2 /*return*/];
    });
}); };
exports.wbotMessageListener = wbotMessageListener;
