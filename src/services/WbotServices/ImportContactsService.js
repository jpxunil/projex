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
var Sentry = require("@sentry/node");
var GetDefaultWhatsApp_1 = require("../../helpers/GetDefaultWhatsApp");
var wbot_1 = require("../../libs/wbot");
var Contact_1 = require("../../models/Contact");
var logger_1 = require("../../utils/logger");
var ShowBaileysService_1 = require("../BaileysServices/ShowBaileysService");
var CreateContactService_1 = require("../ContactServices/CreateContactService");
var lodash_1 = require("lodash");
var path_1 = require("path");
var fs_1 = require("fs");
var ImportContactsService = function (companyId) { return __awaiter(void 0, void 0, void 0, function () {
    var defaultWhatsapp, wbot, phoneContacts, contactsString, publicFolder_1, beforeFilePath, err_1, publicFolder, afterFilePath, phoneContactsList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, GetDefaultWhatsApp_1.default)(companyId)];
            case 1:
                defaultWhatsapp = _a.sent();
                wbot = (0, wbot_1.getWbot)(defaultWhatsapp.id);
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, ShowBaileysService_1.default)(wbot.id)];
            case 3:
                contactsString = _a.sent();
                phoneContacts = JSON.parse(JSON.stringify(contactsString.contacts));
                publicFolder_1 = path_1.default.resolve(__dirname, "..", "..", "..", "public");
                beforeFilePath = path_1.default.join(publicFolder_1, 'contatos_antes.txt');
                fs_1.default.writeFile(beforeFilePath, JSON.stringify(phoneContacts, null, 2), function (err) {
                    if (err) {
                        logger_1.logger.error("Failed to write contacts to file: ".concat(err));
                        throw err;
                    }
                    console.log('O arquivo contatos_antes.txt foi criado!');
                });
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                Sentry.captureException(err_1);
                logger_1.logger.error("Could not get whatsapp contacts from phone. Err: ".concat(err_1));
                return [3 /*break*/, 5];
            case 5:
                publicFolder = path_1.default.resolve(__dirname, "..", "..", "..", "public");
                afterFilePath = path_1.default.join(publicFolder, 'contatos_depois.txt');
                fs_1.default.writeFile(afterFilePath, JSON.stringify(phoneContacts, null, 2), function (err) {
                    if (err) {
                        logger_1.logger.error("Failed to write contacts to file: ".concat(err));
                        throw err;
                    }
                });
                phoneContactsList = (0, lodash_1.isString)(phoneContacts)
                    ? JSON.parse(phoneContacts)
                    : phoneContacts;
                if ((0, lodash_1.isArray)(phoneContactsList)) {
                    phoneContactsList.forEach(function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                        var number, existingContact, error_1;
                        var id = _b.id, name = _b.name, notify = _b.notify;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (id === "status@broadcast" || id.includes("g.us"))
                                        return [2 /*return*/];
                                    number = id.replace(/\D/g, "");
                                    return [4 /*yield*/, Contact_1.default.findOne({
                                            where: { number: number, companyId: companyId }
                                        })];
                                case 1:
                                    existingContact = _c.sent();
                                    if (!existingContact) return [3 /*break*/, 3];
                                    // Atualiza o nome do contato existente
                                    existingContact.name = name || notify;
                                    return [4 /*yield*/, existingContact.save()];
                                case 2:
                                    _c.sent();
                                    return [3 /*break*/, 6];
                                case 3:
                                    _c.trys.push([3, 5, , 6]);
                                    return [4 /*yield*/, (0, CreateContactService_1.default)({
                                            number: number,
                                            name: name || notify,
                                            companyId: companyId
                                        })];
                                case 4:
                                    _c.sent();
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_1 = _c.sent();
                                    Sentry.captureException(error_1);
                                    logger_1.logger.warn("Could not get whatsapp contacts from phone. Err: ".concat(error_1));
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.default = ImportContactsService;
