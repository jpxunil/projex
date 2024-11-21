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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var Company_1 = require("./Company");
var User_1 = require("./User");
var Ticket_1 = require("./Ticket");
var Whatsapp_1 = require("./Whatsapp");
var TicketTraking = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: "TicketTraking"
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _ticketId_decorators;
    var _ticketId_initializers = [];
    var _ticketId_extraInitializers = [];
    var _ticket_decorators;
    var _ticket_initializers = [];
    var _ticket_extraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _companyId_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _whatsappId_decorators;
    var _whatsappId_initializers = [];
    var _whatsappId_extraInitializers = [];
    var _whatsapp_decorators;
    var _whatsapp_initializers = [];
    var _whatsapp_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _rated_decorators;
    var _rated_initializers = [];
    var _rated_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _startedAt_decorators;
    var _startedAt_initializers = [];
    var _startedAt_extraInitializers = [];
    var _queuedAt_decorators;
    var _queuedAt_initializers = [];
    var _queuedAt_extraInitializers = [];
    var _finishedAt_decorators;
    var _finishedAt_initializers = [];
    var _finishedAt_extraInitializers = [];
    var _ratingAt_decorators;
    var _ratingAt_initializers = [];
    var _ratingAt_extraInitializers = [];
    var _chatbotAt_decorators;
    var _chatbotAt_initializers = [];
    var _chatbotAt_extraInitializers = [];
    var TicketTraking = _classThis = /** @class */ (function (_super) {
        __extends(TicketTraking_1, _super);
        function TicketTraking_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.ticketId = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _ticketId_initializers, void 0));
            _this.ticket = (__runInitializers(_this, _ticketId_extraInitializers), __runInitializers(_this, _ticket_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _ticket_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.whatsappId = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _whatsappId_initializers, void 0));
            _this.whatsapp = (__runInitializers(_this, _whatsappId_extraInitializers), __runInitializers(_this, _whatsapp_initializers, void 0));
            _this.userId = (__runInitializers(_this, _whatsapp_extraInitializers), __runInitializers(_this, _userId_initializers, void 0));
            _this.rated = (__runInitializers(_this, _userId_extraInitializers), __runInitializers(_this, _rated_initializers, void 0));
            _this.user = (__runInitializers(_this, _rated_extraInitializers), __runInitializers(_this, _user_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _user_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.startedAt = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _startedAt_initializers, void 0));
            _this.queuedAt = (__runInitializers(_this, _startedAt_extraInitializers), __runInitializers(_this, _queuedAt_initializers, void 0));
            _this.finishedAt = (__runInitializers(_this, _queuedAt_extraInitializers), __runInitializers(_this, _finishedAt_initializers, void 0));
            _this.ratingAt = (__runInitializers(_this, _finishedAt_extraInitializers), __runInitializers(_this, _ratingAt_initializers, void 0));
            _this.chatbotAt = (__runInitializers(_this, _ratingAt_extraInitializers), __runInitializers(_this, _chatbotAt_initializers, void 0));
            __runInitializers(_this, _chatbotAt_extraInitializers);
            return _this;
        }
        return TicketTraking_1;
    }(_classSuper));
    __setFunctionName(_classThis, "TicketTraking");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _ticketId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Ticket_1.default; }), sequelize_typescript_1.Column];
        _ticket_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Ticket_1.default; })];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _whatsappId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Whatsapp_1.default; }), sequelize_typescript_1.Column];
        _whatsapp_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Whatsapp_1.default; })];
        _userId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return User_1.default; }), sequelize_typescript_1.Column];
        _rated_decorators = [sequelize_typescript_1.Column];
        _user_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return User_1.default; })];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _startedAt_decorators = [sequelize_typescript_1.Column];
        _queuedAt_decorators = [sequelize_typescript_1.Column];
        _finishedAt_decorators = [sequelize_typescript_1.Column];
        _ratingAt_decorators = [sequelize_typescript_1.Column];
        _chatbotAt_decorators = [sequelize_typescript_1.Column];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _ticketId_decorators, { kind: "field", name: "ticketId", static: false, private: false, access: { has: function (obj) { return "ticketId" in obj; }, get: function (obj) { return obj.ticketId; }, set: function (obj, value) { obj.ticketId = value; } }, metadata: _metadata }, _ticketId_initializers, _ticketId_extraInitializers);
        __esDecorate(null, null, _ticket_decorators, { kind: "field", name: "ticket", static: false, private: false, access: { has: function (obj) { return "ticket" in obj; }, get: function (obj) { return obj.ticket; }, set: function (obj, value) { obj.ticket = value; } }, metadata: _metadata }, _ticket_initializers, _ticket_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _whatsappId_decorators, { kind: "field", name: "whatsappId", static: false, private: false, access: { has: function (obj) { return "whatsappId" in obj; }, get: function (obj) { return obj.whatsappId; }, set: function (obj, value) { obj.whatsappId = value; } }, metadata: _metadata }, _whatsappId_initializers, _whatsappId_extraInitializers);
        __esDecorate(null, null, _whatsapp_decorators, { kind: "field", name: "whatsapp", static: false, private: false, access: { has: function (obj) { return "whatsapp" in obj; }, get: function (obj) { return obj.whatsapp; }, set: function (obj, value) { obj.whatsapp = value; } }, metadata: _metadata }, _whatsapp_initializers, _whatsapp_extraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, _rated_decorators, { kind: "field", name: "rated", static: false, private: false, access: { has: function (obj) { return "rated" in obj; }, get: function (obj) { return obj.rated; }, set: function (obj, value) { obj.rated = value; } }, metadata: _metadata }, _rated_initializers, _rated_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _startedAt_decorators, { kind: "field", name: "startedAt", static: false, private: false, access: { has: function (obj) { return "startedAt" in obj; }, get: function (obj) { return obj.startedAt; }, set: function (obj, value) { obj.startedAt = value; } }, metadata: _metadata }, _startedAt_initializers, _startedAt_extraInitializers);
        __esDecorate(null, null, _queuedAt_decorators, { kind: "field", name: "queuedAt", static: false, private: false, access: { has: function (obj) { return "queuedAt" in obj; }, get: function (obj) { return obj.queuedAt; }, set: function (obj, value) { obj.queuedAt = value; } }, metadata: _metadata }, _queuedAt_initializers, _queuedAt_extraInitializers);
        __esDecorate(null, null, _finishedAt_decorators, { kind: "field", name: "finishedAt", static: false, private: false, access: { has: function (obj) { return "finishedAt" in obj; }, get: function (obj) { return obj.finishedAt; }, set: function (obj, value) { obj.finishedAt = value; } }, metadata: _metadata }, _finishedAt_initializers, _finishedAt_extraInitializers);
        __esDecorate(null, null, _ratingAt_decorators, { kind: "field", name: "ratingAt", static: false, private: false, access: { has: function (obj) { return "ratingAt" in obj; }, get: function (obj) { return obj.ratingAt; }, set: function (obj, value) { obj.ratingAt = value; } }, metadata: _metadata }, _ratingAt_initializers, _ratingAt_extraInitializers);
        __esDecorate(null, null, _chatbotAt_decorators, { kind: "field", name: "chatbotAt", static: false, private: false, access: { has: function (obj) { return "chatbotAt" in obj; }, get: function (obj) { return obj.chatbotAt; }, set: function (obj, value) { obj.chatbotAt = value; } }, metadata: _metadata }, _chatbotAt_initializers, _chatbotAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TicketTraking = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TicketTraking = _classThis;
}();
exports.default = TicketTraking;
