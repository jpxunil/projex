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
var SerializeUser_1 = require("../../helpers/SerializeUser");
var User_1 = require("../../models/User");
var Plan_1 = require("../../models/Plan");
var Company_1 = require("../../models/Company");
var CreateUserService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var company, usersCount, schema, err_1, user, serializedUser;
    var email = _b.email, password = _b.password, name = _b.name, _c = _b.queueIds, queueIds = _c === void 0 ? [] : _c, companyId = _b.companyId, _d = _b.profile, profile = _d === void 0 ? "admin" : _d, whatsappId = _b.whatsappId, allTicket = _b.allTicket;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!(companyId !== undefined)) return [3 /*break*/, 3];
                return [4 /*yield*/, Company_1.default.findOne({
                        where: {
                            id: companyId
                        },
                        include: [{ model: Plan_1.default, as: "plan" }]
                    })];
            case 1:
                company = _e.sent();
                if (!(company !== null)) return [3 /*break*/, 3];
                return [4 /*yield*/, User_1.default.count({
                        where: {
                            companyId: companyId
                        }
                    })];
            case 2:
                usersCount = _e.sent();
                if (usersCount >= company.plan.users) {
                    throw new AppError_1.default("N\u00FAmero m\u00E1ximo de usu\u00E1rios j\u00E1 alcan\u00E7ado: ".concat(usersCount));
                }
                _e.label = 3;
            case 3:
                schema = Yup.object().shape({
                    name: Yup.string().required().min(2),
                    email: Yup.string()
                        .email()
                        .required()
                        .test("Check-email", "An user with this email already exists.", function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var emailExists;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!value)
                                        return [2 /*return*/, false];
                                    return [4 /*yield*/, User_1.default.findOne({
                                            where: { email: value }
                                        })];
                                case 1:
                                    emailExists = _a.sent();
                                    return [2 /*return*/, !emailExists];
                            }
                        });
                    }); }),
                    password: Yup.string().required().min(5)
                });
                _e.label = 4;
            case 4:
                _e.trys.push([4, 6, , 7]);
                return [4 /*yield*/, schema.validate({ email: email, password: password, name: name })];
            case 5:
                _e.sent();
                return [3 /*break*/, 7];
            case 6:
                err_1 = _e.sent();
                throw new AppError_1.default(err_1.message);
            case 7: return [4 /*yield*/, User_1.default.create({
                    email: email,
                    password: password,
                    name: name,
                    companyId: companyId,
                    profile: profile,
                    whatsappId: whatsappId || null,
                    allTicket: allTicket
                }, { include: ["queues", "company"] })];
            case 8:
                user = _e.sent();
                return [4 /*yield*/, user.$set("queues", queueIds)];
            case 9:
                _e.sent();
                return [4 /*yield*/, user.reload()];
            case 10:
                _e.sent();
                serializedUser = (0, SerializeUser_1.SerializeUser)(user);
                return [2 /*return*/, serializedUser];
        }
    });
}); };
exports.default = CreateUserService;
