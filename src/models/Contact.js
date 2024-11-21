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
var ContactCustomField_1 = require("./ContactCustomField");
var Ticket_1 = require("./Ticket");
var Company_1 = require("./Company");
var Schedule_1 = require("./Schedule");
var Whatsapp_1 = require("./Whatsapp");
var Contact = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _number_decorators;
    var _number_initializers = [];
    var _number_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _profilePicUrl_decorators;
    var _profilePicUrl_initializers = [];
    var _profilePicUrl_extraInitializers = [];
    var _isGroup_decorators;
    var _isGroup_initializers = [];
    var _isGroup_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _tickets_decorators;
    var _tickets_initializers = [];
    var _tickets_extraInitializers = [];
    var _extraInfo_decorators;
    var _extraInfo_initializers = [];
    var _extraInfo_extraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _companyId_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _schedules_decorators;
    var _schedules_initializers = [];
    var _schedules_extraInitializers = [];
    var _whatsappId_decorators;
    var _whatsappId_initializers = [];
    var _whatsappId_extraInitializers = [];
    var _whatsapp_decorators;
    var _whatsapp_initializers = [];
    var _whatsapp_extraInitializers = [];
    var Contact = _classThis = /** @class */ (function (_super) {
        __extends(Contact_1, _super);
        function Contact_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.name = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.number = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _number_initializers, void 0));
            _this.email = (__runInitializers(_this, _number_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
            _this.profilePicUrl = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _profilePicUrl_initializers, void 0));
            _this.isGroup = (__runInitializers(_this, _profilePicUrl_extraInitializers), __runInitializers(_this, _isGroup_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _isGroup_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.tickets = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _tickets_initializers, void 0));
            _this.extraInfo = (__runInitializers(_this, _tickets_extraInitializers), __runInitializers(_this, _extraInfo_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _extraInfo_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.schedules = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _schedules_initializers, void 0));
            _this.whatsappId = (__runInitializers(_this, _schedules_extraInitializers), __runInitializers(_this, _whatsappId_initializers, void 0));
            _this.whatsapp = (__runInitializers(_this, _whatsappId_extraInitializers), __runInitializers(_this, _whatsapp_initializers, void 0));
            __runInitializers(_this, _whatsapp_extraInitializers);
            return _this;
        }
        return Contact_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Contact");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [sequelize_typescript_1.Column];
        _number_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Unique, sequelize_typescript_1.Column];
        _email_decorators = [(0, sequelize_typescript_1.AllowNull)(false), (0, sequelize_typescript_1.Default)(""), sequelize_typescript_1.Column];
        _profilePicUrl_decorators = [(0, sequelize_typescript_1.Default)(""), sequelize_typescript_1.Column];
        _isGroup_decorators = [(0, sequelize_typescript_1.Default)(false), sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _tickets_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Ticket_1.default; })];
        _extraInfo_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return ContactCustomField_1.default; })];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _schedules_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Schedule_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _whatsappId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Whatsapp_1.default; }), sequelize_typescript_1.Column];
        _whatsapp_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Whatsapp_1.default; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _number_decorators, { kind: "field", name: "number", static: false, private: false, access: { has: function (obj) { return "number" in obj; }, get: function (obj) { return obj.number; }, set: function (obj, value) { obj.number = value; } }, metadata: _metadata }, _number_initializers, _number_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _profilePicUrl_decorators, { kind: "field", name: "profilePicUrl", static: false, private: false, access: { has: function (obj) { return "profilePicUrl" in obj; }, get: function (obj) { return obj.profilePicUrl; }, set: function (obj, value) { obj.profilePicUrl = value; } }, metadata: _metadata }, _profilePicUrl_initializers, _profilePicUrl_extraInitializers);
        __esDecorate(null, null, _isGroup_decorators, { kind: "field", name: "isGroup", static: false, private: false, access: { has: function (obj) { return "isGroup" in obj; }, get: function (obj) { return obj.isGroup; }, set: function (obj, value) { obj.isGroup = value; } }, metadata: _metadata }, _isGroup_initializers, _isGroup_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _tickets_decorators, { kind: "field", name: "tickets", static: false, private: false, access: { has: function (obj) { return "tickets" in obj; }, get: function (obj) { return obj.tickets; }, set: function (obj, value) { obj.tickets = value; } }, metadata: _metadata }, _tickets_initializers, _tickets_extraInitializers);
        __esDecorate(null, null, _extraInfo_decorators, { kind: "field", name: "extraInfo", static: false, private: false, access: { has: function (obj) { return "extraInfo" in obj; }, get: function (obj) { return obj.extraInfo; }, set: function (obj, value) { obj.extraInfo = value; } }, metadata: _metadata }, _extraInfo_initializers, _extraInfo_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _schedules_decorators, { kind: "field", name: "schedules", static: false, private: false, access: { has: function (obj) { return "schedules" in obj; }, get: function (obj) { return obj.schedules; }, set: function (obj, value) { obj.schedules = value; } }, metadata: _metadata }, _schedules_initializers, _schedules_extraInitializers);
        __esDecorate(null, null, _whatsappId_decorators, { kind: "field", name: "whatsappId", static: false, private: false, access: { has: function (obj) { return "whatsappId" in obj; }, get: function (obj) { return obj.whatsappId; }, set: function (obj, value) { obj.whatsappId = value; } }, metadata: _metadata }, _whatsappId_initializers, _whatsappId_extraInitializers);
        __esDecorate(null, null, _whatsapp_decorators, { kind: "field", name: "whatsapp", static: false, private: false, access: { has: function (obj) { return "whatsapp" in obj; }, get: function (obj) { return obj.whatsapp; }, set: function (obj, value) { obj.whatsapp = value; } }, metadata: _metadata }, _whatsapp_initializers, _whatsapp_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Contact = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Contact = _classThis;
}();
exports.default = Contact;
