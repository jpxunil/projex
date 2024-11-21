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
exports.list = exports.remove = exports.update = exports.show = exports.store = exports.getContact = exports.index = void 0;
var Yup = require("yup");
var socket_1 = require("../libs/socket");
var ListContactsService_1 = require("../services/ContactServices/ListContactsService");
var CreateContactService_1 = require("../services/ContactServices/CreateContactService");
var ShowContactService_1 = require("../services/ContactServices/ShowContactService");
var UpdateContactService_1 = require("../services/ContactServices/UpdateContactService");
var DeleteContactService_1 = require("../services/ContactServices/DeleteContactService");
var GetContactService_1 = require("../services/ContactServices/GetContactService");
var CheckNumber_1 = require("../services/WbotServices/CheckNumber");
var CheckIsValidContact_1 = require("../services/WbotServices/CheckIsValidContact");
var AppError_1 = require("../errors/AppError");
var SimpleListService_1 = require("../services/ContactServices/SimpleListService");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchParam, pageNumber, companyId, _b, contacts, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, searchParam = _a.searchParam, pageNumber = _a.pageNumber;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ListContactsService_1.default)({
                        searchParam: searchParam,
                        pageNumber: pageNumber,
                        companyId: companyId
                    })];
            case 1:
                _b = _c.sent(), contacts = _b.contacts, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.json({ contacts: contacts, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var getContact = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, number, companyId, contact;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, number = _a.number;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, GetContactService_1.default)({
                        name: name,
                        number: number,
                        companyId: companyId
                    })];
            case 1:
                contact = _b.sent();
                return [2 /*return*/, res.status(200).json(contact)];
        }
    });
}); };
exports.getContact = getContact;
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var companyId, newContact, schema, err_1, validNumber, number, contact, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                companyId = req.user.companyId;
                newContact = req.body;
                newContact.number = newContact.number.replace("-", "").replace(" ", "");
                schema = Yup.object().shape({
                    name: Yup.string().required(),
                    number: Yup.string()
                        .required()
                        .matches(/^\d+$/, "Invalid number format. Only numbers is allowed.")
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(newContact)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                throw new AppError_1.default(err_1.message);
            case 4: return [4 /*yield*/, (0, CheckIsValidContact_1.default)(newContact.number, companyId)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, CheckNumber_1.default)(newContact.number, companyId)];
            case 6:
                validNumber = _a.sent();
                number = validNumber.jid.replace(/\D/g, "");
                newContact.number = number;
                return [4 /*yield*/, (0, CreateContactService_1.default)(__assign(__assign({}, newContact), { 
                        // profilePicUrl,
                        companyId: companyId }))];
            case 7:
                contact = _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-contact"), {
                    action: "create",
                    contact: contact
                });
                return [2 /*return*/, res.status(200).json(contact)];
        }
    });
}); };
exports.store = store;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var contactId, companyId, contact;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contactId = req.params.contactId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowContactService_1.default)(contactId, companyId)];
            case 1:
                contact = _a.sent();
                return [2 /*return*/, res.status(200).json(contact)];
        }
    });
}); };
exports.show = show;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var contactData, companyId, schema, err_2, validNumber, number, contactId, contact, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contactData = req.body;
                companyId = req.user.companyId;
                schema = Yup.object().shape({
                    name: Yup.string(),
                    number: Yup.string().matches(/^\d+$/, "Invalid number format. Only numbers is allowed.")
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(contactData)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                throw new AppError_1.default(err_2.message);
            case 4: return [4 /*yield*/, (0, CheckIsValidContact_1.default)(contactData.number, companyId)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, CheckNumber_1.default)(contactData.number, companyId)];
            case 6:
                validNumber = _a.sent();
                number = validNumber.jid.replace(/\D/g, "");
                contactData.number = number;
                contactId = req.params.contactId;
                return [4 /*yield*/, (0, UpdateContactService_1.default)({
                        contactData: contactData,
                        contactId: contactId,
                        companyId: companyId
                    })];
            case 7:
                contact = _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-contact"), {
                    action: "update",
                    contact: contact
                });
                return [2 /*return*/, res.status(200).json(contact)];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var contactId, companyId, io;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contactId = req.params.contactId;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, ShowContactService_1.default)(contactId, companyId)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, DeleteContactService_1.default)(contactId)];
            case 2:
                _a.sent();
                io = (0, socket_1.getIO)();
                io.to("company-".concat(companyId, "-mainchannel")).emit("company-".concat(companyId, "-contact"), {
                    action: "delete",
                    contactId: contactId
                });
                return [2 /*return*/, res.status(200).json({ message: "Contact deleted" })];
        }
    });
}); };
exports.remove = remove;
var list = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, companyId, contacts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.query.name;
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, SimpleListService_1.default)({ name: name, companyId: companyId })];
            case 1:
                contacts = _a.sent();
                return [2 /*return*/, res.json(contacts)];
        }
    });
}); };
exports.list = list;
