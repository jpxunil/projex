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
exports.getMessageOptions = void 0;
var Sentry = require("@sentry/node");
var fs_1 = require("fs");
var child_process_1 = require("child_process");
var path_1 = require("path");
var ffmpeg_1 = require("@ffmpeg-installer/ffmpeg");
var AppError_1 = require("../../errors/AppError");
var GetTicketWbot_1 = require("../../helpers/GetTicketWbot");
var mime_types_1 = require("mime-types");
var Mustache_1 = require("../../helpers/Mustache");
var publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public");
var processAudio = function (audio) { return __awaiter(void 0, void 0, void 0, function () {
    var outputAudio;
    return __generator(this, function (_a) {
        outputAudio = "".concat(publicFolder, "/").concat(new Date().getTime(), ".mp3");
        return [2 /*return*/, new Promise(function (resolve, reject) {
                (0, child_process_1.exec)("".concat(ffmpeg_1.default.path, " -i ").concat(audio, " -vn -ab 128k -ar 44100 -f ipod ").concat(outputAudio, " -y"), function (error, _stdout, _stderr) {
                    if (error)
                        reject(error);
                    fs_1.default.unlinkSync(audio);
                    resolve(outputAudio);
                });
            })];
    });
}); };
var processAudioFile = function (audio) { return __awaiter(void 0, void 0, void 0, function () {
    var outputAudio;
    return __generator(this, function (_a) {
        outputAudio = "".concat(publicFolder, "/").concat(new Date().getTime(), ".mp3");
        return [2 /*return*/, new Promise(function (resolve, reject) {
                (0, child_process_1.exec)("".concat(ffmpeg_1.default.path, " -i ").concat(audio, " -vn -ar 44100 -ac 2 -b:a 192k ").concat(outputAudio), function (error, _stdout, _stderr) {
                    if (error)
                        reject(error);
                    fs_1.default.unlinkSync(audio);
                    resolve(outputAudio);
                });
            })];
    });
}); };
var getMessageOptions = function (fileName, pathMedia, body) { return __awaiter(void 0, void 0, void 0, function () {
    var mimeType, typeMessage, options, typeAudio, convert, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mimeType = mime_types_1.default.lookup(pathMedia);
                typeMessage = mimeType.split("/")[0];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                if (!mimeType) {
                    throw new Error("Invalid mimetype");
                }
                options = void 0;
                if (!(typeMessage === "video")) return [3 /*break*/, 2];
                options = {
                    video: fs_1.default.readFileSync(pathMedia),
                    caption: body ? body : '',
                    fileName: fileName
                    // gifPlayback: true
                };
                return [3 /*break*/, 5];
            case 2:
                if (!(typeMessage === "audio")) return [3 /*break*/, 4];
                typeAudio = true;
                return [4 /*yield*/, processAudio(pathMedia)];
            case 3:
                convert = _a.sent();
                if (typeAudio) {
                    options = {
                        audio: fs_1.default.readFileSync(convert),
                        mimetype: typeAudio ? "audio/mp4" : mimeType,
                        caption: body ? body : null,
                        ptt: true
                    };
                }
                else {
                    options = {
                        audio: fs_1.default.readFileSync(convert),
                        mimetype: typeAudio ? "audio/mp4" : mimeType,
                        caption: body ? body : null,
                        ptt: true
                    };
                }
                return [3 /*break*/, 5];
            case 4:
                if (typeMessage === "document") {
                    options = {
                        document: fs_1.default.readFileSync(pathMedia),
                        caption: body ? body : null,
                        fileName: fileName,
                        mimetype: mimeType
                    };
                }
                else if (typeMessage === "application") {
                    options = {
                        document: fs_1.default.readFileSync(pathMedia),
                        caption: body ? body : null,
                        fileName: fileName,
                        mimetype: mimeType
                    };
                }
                else {
                    options = {
                        image: fs_1.default.readFileSync(pathMedia),
                        caption: body ? body : null
                    };
                }
                _a.label = 5;
            case 5: return [2 /*return*/, options];
            case 6:
                e_1 = _a.sent();
                Sentry.captureException(e_1);
                console.log(e_1);
                return [2 /*return*/, null];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getMessageOptions = getMessageOptions;
var SendWhatsAppMedia = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var wbot, pathMedia, typeMessage, options, bodyMessage, typeAudio, convert, convert, sentMessage, err_1;
    var media = _b.media, ticket = _b.ticket, body = _b.body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 11, , 12]);
                return [4 /*yield*/, (0, GetTicketWbot_1.default)(ticket)];
            case 1:
                wbot = _c.sent();
                pathMedia = media.path;
                typeMessage = media.mimetype.split("/")[0];
                options = void 0;
                bodyMessage = (0, Mustache_1.default)(body, ticket.contact);
                if (!(typeMessage === "video")) return [3 /*break*/, 2];
                options = {
                    video: fs_1.default.readFileSync(pathMedia),
                    caption: bodyMessage,
                    fileName: media.originalname
                    // gifPlayback: true
                };
                return [3 /*break*/, 8];
            case 2:
                if (!(typeMessage === "audio")) return [3 /*break*/, 7];
                typeAudio = media.originalname.includes("audio-record-site");
                if (!typeAudio) return [3 /*break*/, 4];
                return [4 /*yield*/, processAudio(media.path)];
            case 3:
                convert = _c.sent();
                options = {
                    audio: fs_1.default.readFileSync(convert),
                    mimetype: typeAudio ? "audio/mp4" : media.mimetype,
                    ptt: true
                };
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, processAudioFile(media.path)];
            case 5:
                convert = _c.sent();
                options = {
                    audio: fs_1.default.readFileSync(convert),
                    mimetype: typeAudio ? "audio/mp4" : media.mimetype
                };
                _c.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                if (typeMessage === "document" || typeMessage === "text") {
                    options = {
                        document: fs_1.default.readFileSync(pathMedia),
                        caption: bodyMessage,
                        fileName: media.originalname,
                        mimetype: media.mimetype
                    };
                }
                else if (typeMessage === "application") {
                    options = {
                        document: fs_1.default.readFileSync(pathMedia),
                        caption: bodyMessage,
                        fileName: media.originalname,
                        mimetype: media.mimetype
                    };
                }
                else {
                    options = {
                        image: fs_1.default.readFileSync(pathMedia),
                        caption: bodyMessage,
                    };
                }
                _c.label = 8;
            case 8: return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), __assign({}, options))];
            case 9:
                sentMessage = _c.sent();
                return [4 /*yield*/, ticket.update({ lastMessage: bodyMessage })];
            case 10:
                _c.sent();
                return [2 /*return*/, sentMessage];
            case 11:
                err_1 = _c.sent();
                Sentry.captureException(err_1);
                console.log(err_1);
                throw new AppError_1.default("ERR_SENDING_WAPP_MSG");
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.default = SendWhatsAppMedia;
