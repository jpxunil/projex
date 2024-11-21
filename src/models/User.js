"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var bcryptjs_1 = require("bcryptjs");
var Ticket_1 = require("./Ticket");
var Queue_1 = require("./Queue");
var UserQueue_1 = require("./UserQueue");
var Company_1 = require("./Company");
var QuickMessage_1 = require("./QuickMessage");
var Whatsapp_1 = require("./Whatsapp");
var User = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _static_hashPassword_decorators;
    var _static_hashPassword_initializers = [];
    var _static_hashPassword_extraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _allTicket_decorators;
    var _allTicket_initializers = [];
    var _allTicket_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _passwordHash_decorators;
    var _passwordHash_initializers = [];
    var _passwordHash_extraInitializers = [];
    var _tokenVersion_decorators;
    var _tokenVersion_initializers = [];
    var _tokenVersion_extraInitializers = [];
    var _profile_decorators;
    var _profile_initializers = [];
    var _profile_extraInitializers = [];
    var _super_decorators;
    var _super_initializers = [];
    var _super_extraInitializers = [];
    var _online_decorators;
    var _online_initializers = [];
    var _online_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _companyId_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _tickets_decorators;
    var _tickets_initializers = [];
    var _tickets_extraInitializers = [];
    var _queues_decorators;
    var _queues_initializers = [];
    var _queues_extraInitializers = [];
    var _quickMessages_decorators;
    var _quickMessages_initializers = [];
    var _quickMessages_extraInitializers = [];
    var _whatsappId_decorators;
    var _whatsappId_initializers = [];
    var _whatsappId_extraInitializers = [];
    var _whatsapp_decorators;
    var _whatsapp_initializers = [];
    var _whatsapp_extraInitializers = [];
    var User = _classThis = /** @class */ (function (_super) {
        __extends(User_1, _super);
        function User_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.name = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.email = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
            _this.allTicket = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _allTicket_initializers, void 0));
            _this.password = (__runInitializers(_this, _allTicket_extraInitializers), __runInitializers(_this, _password_initializers, void 0));
            _this.passwordHash = (__runInitializers(_this, _password_extraInitializers), __runInitializers(_this, _passwordHash_initializers, void 0));
            _this.tokenVersion = (__runInitializers(_this, _passwordHash_extraInitializers), __runInitializers(_this, _tokenVersion_initializers, void 0));
            _this.profile = (__runInitializers(_this, _tokenVersion_extraInitializers), __runInitializers(_this, _profile_initializers, void 0));
            _this.super = (__runInitializers(_this, _profile_extraInitializers), __runInitializers(_this, _super_initializers, void 0));
            _this.online = (__runInitializers(_this, _super_extraInitializers), __runInitializers(_this, _online_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _online_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.tickets = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _tickets_initializers, void 0));
            _this.queues = (__runInitializers(_this, _tickets_extraInitializers), __runInitializers(_this, _queues_initializers, void 0));
            _this.quickMessages = (__runInitializers(_this, _queues_extraInitializers), __runInitializers(_this, _quickMessages_initializers, void 0));
            _this.whatsappId = (__runInitializers(_this, _quickMessages_extraInitializers), __runInitializers(_this, _whatsappId_initializers, void 0));
            _this.whatsapp = (__runInitializers(_this, _whatsappId_extraInitializers), __runInitializers(_this, _whatsapp_initializers, void 0));
            _this.checkPassword = (__runInitializers(_this, _whatsapp_extraInitializers), function (password) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, bcryptjs_1.compare)(password, this.getDataValue("passwordHash"))];
                });
            }); });
            return _this;
        }
        return User_1;
    }(_classSuper));
    __setFunctionName(_classThis, "User");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [sequelize_typescript_1.Column];
        _email_decorators = [sequelize_typescript_1.Column];
        _allTicket_decorators = [sequelize_typescript_1.Column];
        _password_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.VIRTUAL)];
        _passwordHash_decorators = [sequelize_typescript_1.Column];
        _tokenVersion_decorators = [(0, sequelize_typescript_1.Default)(0), sequelize_typescript_1.Column];
        _profile_decorators = [(0, sequelize_typescript_1.Default)("admin"), sequelize_typescript_1.Column];
        _super_decorators = [sequelize_typescript_1.Column];
        _online_decorators = [sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _tickets_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Ticket_1.default; })];
        _queues_decorators = [(0, sequelize_typescript_1.BelongsToMany)(function () { return Queue_1.default; }, function () { return UserQueue_1.default; })];
        _quickMessages_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return QuickMessage_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _whatsappId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Whatsapp_1.default; }), sequelize_typescript_1.Column];
        _whatsapp_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Whatsapp_1.default; })];
        _static_hashPassword_decorators = [sequelize_typescript_1.BeforeUpdate, sequelize_typescript_1.BeforeCreate];
        __esDecorate(null, null, _static_hashPassword_decorators, { kind: "field", name: "hashPassword", static: true, private: false, access: { has: function (obj) { return "hashPassword" in obj; }, get: function (obj) { return obj.hashPassword; }, set: function (obj, value) { obj.hashPassword = value; } }, metadata: _metadata }, _static_hashPassword_initializers, _static_hashPassword_extraInitializers);
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _allTicket_decorators, { kind: "field", name: "allTicket", static: false, private: false, access: { has: function (obj) { return "allTicket" in obj; }, get: function (obj) { return obj.allTicket; }, set: function (obj, value) { obj.allTicket = value; } }, metadata: _metadata }, _allTicket_initializers, _allTicket_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _passwordHash_decorators, { kind: "field", name: "passwordHash", static: false, private: false, access: { has: function (obj) { return "passwordHash" in obj; }, get: function (obj) { return obj.passwordHash; }, set: function (obj, value) { obj.passwordHash = value; } }, metadata: _metadata }, _passwordHash_initializers, _passwordHash_extraInitializers);
        __esDecorate(null, null, _tokenVersion_decorators, { kind: "field", name: "tokenVersion", static: false, private: false, access: { has: function (obj) { return "tokenVersion" in obj; }, get: function (obj) { return obj.tokenVersion; }, set: function (obj, value) { obj.tokenVersion = value; } }, metadata: _metadata }, _tokenVersion_initializers, _tokenVersion_extraInitializers);
        __esDecorate(null, null, _profile_decorators, { kind: "field", name: "profile", static: false, private: false, access: { has: function (obj) { return "profile" in obj; }, get: function (obj) { return obj.profile; }, set: function (obj, value) { obj.profile = value; } }, metadata: _metadata }, _profile_initializers, _profile_extraInitializers);
        __esDecorate(null, null, _super_decorators, { kind: "field", name: "super", static: false, private: false, access: { has: function (obj) { return "super" in obj; }, get: function (obj) { return obj.super; }, set: function (obj, value) { obj.super = value; } }, metadata: _metadata }, _super_initializers, _super_extraInitializers);
        __esDecorate(null, null, _online_decorators, { kind: "field", name: "online", static: false, private: false, access: { has: function (obj) { return "online" in obj; }, get: function (obj) { return obj.online; }, set: function (obj, value) { obj.online = value; } }, metadata: _metadata }, _online_initializers, _online_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _tickets_decorators, { kind: "field", name: "tickets", static: false, private: false, access: { has: function (obj) { return "tickets" in obj; }, get: function (obj) { return obj.tickets; }, set: function (obj, value) { obj.tickets = value; } }, metadata: _metadata }, _tickets_initializers, _tickets_extraInitializers);
        __esDecorate(null, null, _queues_decorators, { kind: "field", name: "queues", static: false, private: false, access: { has: function (obj) { return "queues" in obj; }, get: function (obj) { return obj.queues; }, set: function (obj, value) { obj.queues = value; } }, metadata: _metadata }, _queues_initializers, _queues_extraInitializers);
        __esDecorate(null, null, _quickMessages_decorators, { kind: "field", name: "quickMessages", static: false, private: false, access: { has: function (obj) { return "quickMessages" in obj; }, get: function (obj) { return obj.quickMessages; }, set: function (obj, value) { obj.quickMessages = value; } }, metadata: _metadata }, _quickMessages_initializers, _quickMessages_extraInitializers);
        __esDecorate(null, null, _whatsappId_decorators, { kind: "field", name: "whatsappId", static: false, private: false, access: { has: function (obj) { return "whatsappId" in obj; }, get: function (obj) { return obj.whatsappId; }, set: function (obj, value) { obj.whatsappId = value; } }, metadata: _metadata }, _whatsappId_initializers, _whatsappId_extraInitializers);
        __esDecorate(null, null, _whatsapp_decorators, { kind: "field", name: "whatsapp", static: false, private: false, access: { has: function (obj) { return "whatsapp" in obj; }, get: function (obj) { return obj.whatsapp; }, set: function (obj, value) { obj.whatsapp = value; } }, metadata: _metadata }, _whatsapp_initializers, _whatsapp_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.hashPassword = __runInitializers(_classThis, _static_hashPassword_initializers, function (instance) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(_classThis, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!instance.password) return [3 /*break*/, 2];
                    _a = instance;
                    return [4 /*yield*/, (0, bcryptjs_1.hash)(instance.password, 8)];
                case 1:
                    _a.passwordHash = _b.sent();
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
    (function () {
        __runInitializers(_classThis, _static_hashPassword_extraInitializers);
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.default = User;
