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
exports.initWASocket = exports.removeWbot = exports.getWbot = void 0;
var Sentry = require("@sentry/node");
var baileys_1 = require("@whiskeysockets/baileys");
var Whatsapp_1 = require("../models/Whatsapp");
var logger_1 = require("../utils/logger");
var logger_2 = require("@whiskeysockets/baileys/lib/Utils/logger");
var authState_1 = require("../helpers/authState");
var AppError_1 = require("../errors/AppError");
var socket_1 = require("./socket");
var StartWhatsAppSession_1 = require("../services/WbotServices/StartWhatsAppSession");
var DeleteBaileysService_1 = require("../services/BaileysServices/DeleteBaileysService");
var node_cache_1 = require("node-cache");
var loggerBaileys = logger_2.default.child({});
loggerBaileys.level = "error";
var sessions = [];
var retriesQrCodeMap = new Map();
var getWbot = function (whatsappId) {
    var sessionIndex = sessions.findIndex(function (s) { return s.id === whatsappId; });
    if (sessionIndex === -1) {
        throw new AppError_1.default("ERR_WAPP_NOT_INITIALIZED");
    }
    return sessions[sessionIndex];
};
exports.getWbot = getWbot;
var removeWbot = function (whatsappId_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([whatsappId_1], args_1, true), void 0, function (whatsappId, isLogout) {
        var sessionIndex;
        if (isLogout === void 0) { isLogout = true; }
        return __generator(this, function (_a) {
            try {
                sessionIndex = sessions.findIndex(function (s) { return s.id === whatsappId; });
                if (sessionIndex !== -1) {
                    if (isLogout) {
                        sessions[sessionIndex].logout();
                        sessions[sessionIndex].ws.close();
                    }
                    sessions.splice(sessionIndex, 1);
                }
            }
            catch (err) {
                logger_1.logger.error(err);
            }
            return [2 /*return*/];
        });
    });
};
exports.removeWbot = removeWbot;
var initWASocket = function (whatsapp) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        (function () { return __awaiter(void 0, void 0, void 0, function () {
                            var io, whatsappUpdate, id, name, provider, _a, version, isLatest, isLegacy, retriesQrCode, wsocket, store, _b, state, saveState, msgRetryCounterCache, userDevicesCache;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        io = (0, socket_1.getIO)();
                                        return [4 /*yield*/, Whatsapp_1.default.findOne({
                                                where: { id: whatsapp.id }
                                            })];
                                    case 1:
                                        whatsappUpdate = _c.sent();
                                        if (!whatsappUpdate)
                                            return [2 /*return*/];
                                        id = whatsappUpdate.id, name = whatsappUpdate.name, provider = whatsappUpdate.provider;
                                        return [4 /*yield*/, (0, baileys_1.fetchLatestBaileysVersion)()];
                                    case 2:
                                        _a = _c.sent(), version = _a.version, isLatest = _a.isLatest;
                                        isLegacy = provider === "stable" ? true : false;
                                        logger_1.logger.info("using WA v".concat(version.join("."), ", isLatest: ").concat(isLatest));
                                        logger_1.logger.info("isLegacy: ".concat(isLegacy));
                                        logger_1.logger.info("Starting session ".concat(name));
                                        retriesQrCode = 0;
                                        wsocket = null;
                                        store = (0, baileys_1.makeInMemoryStore)({
                                            logger: loggerBaileys
                                        });
                                        return [4 /*yield*/, (0, authState_1.default)(whatsapp)];
                                    case 3:
                                        _b = _c.sent(), state = _b.state, saveState = _b.saveState;
                                        msgRetryCounterCache = new node_cache_1.default();
                                        userDevicesCache = new node_cache_1.default();
                                        wsocket = (0, baileys_1.default)({
                                            logger: loggerBaileys,
                                            printQRInTerminal: false,
                                            browser: baileys_1.Browsers.appropriate("Desktop"),
                                            auth: {
                                                creds: state.creds,
                                                keys: (0, baileys_1.makeCacheableSignalKeyStore)(state.keys, logger_1.logger),
                                            },
                                            version: version,
                                            // defaultQueryTimeoutMs: 60000,
                                            // retryRequestDelayMs: 250,
                                            // keepAliveIntervalMs: 1000 * 60 * 10 * 3,
                                            msgRetryCounterCache: msgRetryCounterCache,
                                            shouldIgnoreJid: function (jid) { return (0, baileys_1.isJidBroadcast)(jid); },
                                        });
                                        // wsocket = makeWASocket({
                                        //   version,
                                        //   logger: loggerBaileys,
                                        //   printQRInTerminal: false,
                                        //   auth: state as AuthenticationState,
                                        //   generateHighQualityLinkPreview: false,
                                        //   shouldIgnoreJid: jid => isJidBroadcast(jid),
                                        //   browser: ["Chat", "Chrome", "10.15.7"],
                                        //   patchMessageBeforeSending: (message) => {
                                        //     const requiresPatch = !!(
                                        //       message.buttonsMessage ||
                                        //       // || message.templateMessage
                                        //       message.listMessage
                                        //     );
                                        //     if (requiresPatch) {
                                        //       message = {
                                        //         viewOnceMessage: {
                                        //           message: {
                                        //             messageContextInfo: {
                                        //               deviceListMetadataVersion: 2,
                                        //               deviceListMetadata: {},
                                        //             },
                                        //             ...message,
                                        //           },
                                        //         },
                                        //       };
                                        //     }
                                        //     return message;
                                        //   },
                                        // })
                                        wsocket.ev.on("connection.update", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                                            var sessionIndex, sessionIndex;
                                            var _c, _d, _e, _f;
                                            var connection = _b.connection, lastDisconnect = _b.lastDisconnect, qr = _b.qr;
                                            return __generator(this, function (_g) {
                                                switch (_g.label) {
                                                    case 0:
                                                        logger_1.logger.info("Socket  ".concat(name, " Connection Update ").concat(connection || "", " ").concat(lastDisconnect || ""));
                                                        if (!(connection === "close")) return [3 /*break*/, 7];
                                                        if (!(((_d = (_c = lastDisconnect === null || lastDisconnect === void 0 ? void 0 : lastDisconnect.error) === null || _c === void 0 ? void 0 : _c.output) === null || _d === void 0 ? void 0 : _d.statusCode) === 403)) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, whatsapp.update({ status: "PENDING", session: "" })];
                                                    case 1:
                                                        _g.sent();
                                                        return [4 /*yield*/, (0, DeleteBaileysService_1.default)(whatsapp.id)];
                                                    case 2:
                                                        _g.sent();
                                                        io.to("company-".concat(whatsapp.companyId, "-mainchannel")).emit("company-".concat(whatsapp.companyId, "-whatsappSession"), {
                                                            action: "update",
                                                            session: whatsapp
                                                        });
                                                        (0, exports.removeWbot)(id, false);
                                                        _g.label = 3;
                                                    case 3:
                                                        if (!(((_f = (_e = lastDisconnect === null || lastDisconnect === void 0 ? void 0 : lastDisconnect.error) === null || _e === void 0 ? void 0 : _e.output) === null || _f === void 0 ? void 0 : _f.statusCode) !==
                                                            baileys_1.DisconnectReason.loggedOut)) return [3 /*break*/, 4];
                                                        (0, exports.removeWbot)(id, false);
                                                        setTimeout(function () { return (0, StartWhatsAppSession_1.StartWhatsAppSession)(whatsapp, whatsapp.companyId); }, 2000);
                                                        return [3 /*break*/, 7];
                                                    case 4: return [4 /*yield*/, whatsapp.update({ status: "PENDING", session: "" })];
                                                    case 5:
                                                        _g.sent();
                                                        return [4 /*yield*/, (0, DeleteBaileysService_1.default)(whatsapp.id)];
                                                    case 6:
                                                        _g.sent();
                                                        io.to("company-".concat(whatsapp.companyId, "-mainchannel")).emit("company-".concat(whatsapp.companyId, "-whatsappSession"), {
                                                            action: "update",
                                                            session: whatsapp
                                                        });
                                                        (0, exports.removeWbot)(id, false);
                                                        setTimeout(function () { return (0, StartWhatsAppSession_1.StartWhatsAppSession)(whatsapp, whatsapp.companyId); }, 2000);
                                                        _g.label = 7;
                                                    case 7:
                                                        if (!(connection === "open")) return [3 /*break*/, 9];
                                                        return [4 /*yield*/, whatsapp.update({
                                                                status: "CONNECTED",
                                                                qrcode: "",
                                                                retries: 0
                                                            })];
                                                    case 8:
                                                        _g.sent();
                                                        io.to("company-".concat(whatsapp.companyId, "-mainchannel")).emit("company-".concat(whatsapp.companyId, "-whatsappSession"), {
                                                            action: "update",
                                                            session: whatsapp
                                                        });
                                                        sessionIndex = sessions.findIndex(function (s) { return s.id === whatsapp.id; });
                                                        if (sessionIndex === -1) {
                                                            wsocket.id = whatsapp.id;
                                                            sessions.push(wsocket);
                                                        }
                                                        resolve(wsocket);
                                                        _g.label = 9;
                                                    case 9:
                                                        if (!(qr !== undefined)) return [3 /*break*/, 14];
                                                        if (!(retriesQrCodeMap.get(id) && retriesQrCodeMap.get(id) >= 3)) return [3 /*break*/, 12];
                                                        return [4 /*yield*/, whatsappUpdate.update({
                                                                status: "DISCONNECTED",
                                                                qrcode: ""
                                                            })];
                                                    case 10:
                                                        _g.sent();
                                                        return [4 /*yield*/, (0, DeleteBaileysService_1.default)(whatsappUpdate.id)];
                                                    case 11:
                                                        _g.sent();
                                                        io.to("company-".concat(whatsapp.companyId, "-mainchannel")).emit("whatsappSession", {
                                                            action: "update",
                                                            session: whatsappUpdate
                                                        });
                                                        wsocket.ev.removeAllListeners("connection.update");
                                                        wsocket.ws.close();
                                                        wsocket = null;
                                                        retriesQrCodeMap.delete(id);
                                                        return [3 /*break*/, 14];
                                                    case 12:
                                                        logger_1.logger.info("Session QRCode Generate ".concat(name));
                                                        retriesQrCodeMap.set(id, (retriesQrCode += 1));
                                                        return [4 /*yield*/, whatsapp.update({
                                                                qrcode: qr,
                                                                status: "qrcode",
                                                                retries: 0
                                                            })];
                                                    case 13:
                                                        _g.sent();
                                                        sessionIndex = sessions.findIndex(function (s) { return s.id === whatsapp.id; });
                                                        if (sessionIndex === -1) {
                                                            wsocket.id = whatsapp.id;
                                                            sessions.push(wsocket);
                                                        }
                                                        io.to("company-".concat(whatsapp.companyId, "-mainchannel")).emit("company-".concat(whatsapp.companyId, "-whatsappSession"), {
                                                            action: "update",
                                                            session: whatsapp
                                                        });
                                                        _g.label = 14;
                                                    case 14: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        wsocket.ev.on("creds.update", saveState);
                                        store.bind(wsocket.ev);
                                        return [2 /*return*/];
                                }
                            });
                        }); })();
                    }
                    catch (error) {
                        Sentry.captureException(error);
                        console.log(error);
                        reject(error);
                    }
                    return [2 /*return*/];
                });
            }); })];
    });
}); };
exports.initWASocket = initWASocket;
