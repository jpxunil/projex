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
var QueueIntegrations = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _projectName_decorators;
    var _projectName_initializers = [];
    var _projectName_extraInitializers = [];
    var _jsonContent_decorators;
    var _jsonContent_initializers = [];
    var _jsonContent_extraInitializers = [];
    var _urlN8N_decorators;
    var _urlN8N_initializers = [];
    var _urlN8N_extraInitializers = [];
    var _language_decorators;
    var _language_initializers = [];
    var _language_extraInitializers = [];
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
    var _typebotSlug_decorators;
    var _typebotSlug_initializers = [];
    var _typebotSlug_extraInitializers = [];
    var _typebotExpires_decorators;
    var _typebotExpires_initializers = [];
    var _typebotExpires_extraInitializers = [];
    var _typebotKeywordFinish_decorators;
    var _typebotKeywordFinish_initializers = [];
    var _typebotKeywordFinish_extraInitializers = [];
    var _typebotUnknownMessage_decorators;
    var _typebotUnknownMessage_initializers = [];
    var _typebotUnknownMessage_extraInitializers = [];
    var _typebotDelayMessage_decorators;
    var _typebotDelayMessage_initializers = [];
    var _typebotDelayMessage_extraInitializers = [];
    var _typebotKeywordRestart_decorators;
    var _typebotKeywordRestart_initializers = [];
    var _typebotKeywordRestart_extraInitializers = [];
    var _typebotRestartMessage_decorators;
    var _typebotRestartMessage_initializers = [];
    var _typebotRestartMessage_extraInitializers = [];
    var QueueIntegrations = _classThis = /** @class */ (function (_super) {
        __extends(QueueIntegrations_1, _super);
        function QueueIntegrations_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.type = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _type_initializers, void 0));
            _this.name = (__runInitializers(_this, _type_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.projectName = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _projectName_initializers, void 0));
            _this.jsonContent = (__runInitializers(_this, _projectName_extraInitializers), __runInitializers(_this, _jsonContent_initializers, void 0));
            _this.urlN8N = (__runInitializers(_this, _jsonContent_extraInitializers), __runInitializers(_this, _urlN8N_initializers, void 0));
            _this.language = (__runInitializers(_this, _urlN8N_extraInitializers), __runInitializers(_this, _language_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _language_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.typebotSlug = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _typebotSlug_initializers, void 0));
            _this.typebotExpires = (__runInitializers(_this, _typebotSlug_extraInitializers), __runInitializers(_this, _typebotExpires_initializers, void 0));
            _this.typebotKeywordFinish = (__runInitializers(_this, _typebotExpires_extraInitializers), __runInitializers(_this, _typebotKeywordFinish_initializers, void 0));
            _this.typebotUnknownMessage = (__runInitializers(_this, _typebotKeywordFinish_extraInitializers), __runInitializers(_this, _typebotUnknownMessage_initializers, void 0));
            _this.typebotDelayMessage = (__runInitializers(_this, _typebotUnknownMessage_extraInitializers), __runInitializers(_this, _typebotDelayMessage_initializers, void 0));
            _this.typebotKeywordRestart = (__runInitializers(_this, _typebotDelayMessage_extraInitializers), __runInitializers(_this, _typebotKeywordRestart_initializers, void 0));
            _this.typebotRestartMessage = (__runInitializers(_this, _typebotKeywordRestart_extraInitializers), __runInitializers(_this, _typebotRestartMessage_initializers, void 0));
            __runInitializers(_this, _typebotRestartMessage_extraInitializers);
            return _this;
        }
        return QueueIntegrations_1;
    }(_classSuper));
    __setFunctionName(_classThis, "QueueIntegrations");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _type_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _name_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _projectName_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _jsonContent_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _urlN8N_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _language_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt, (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE(6))];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt, (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE(6))];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _typebotSlug_decorators = [sequelize_typescript_1.Column];
        _typebotExpires_decorators = [(0, sequelize_typescript_1.Default)(0), sequelize_typescript_1.Column];
        _typebotKeywordFinish_decorators = [sequelize_typescript_1.Column];
        _typebotUnknownMessage_decorators = [sequelize_typescript_1.Column];
        _typebotDelayMessage_decorators = [(0, sequelize_typescript_1.Default)(1000), sequelize_typescript_1.Column];
        _typebotKeywordRestart_decorators = [sequelize_typescript_1.Column];
        _typebotRestartMessage_decorators = [sequelize_typescript_1.Column];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _projectName_decorators, { kind: "field", name: "projectName", static: false, private: false, access: { has: function (obj) { return "projectName" in obj; }, get: function (obj) { return obj.projectName; }, set: function (obj, value) { obj.projectName = value; } }, metadata: _metadata }, _projectName_initializers, _projectName_extraInitializers);
        __esDecorate(null, null, _jsonContent_decorators, { kind: "field", name: "jsonContent", static: false, private: false, access: { has: function (obj) { return "jsonContent" in obj; }, get: function (obj) { return obj.jsonContent; }, set: function (obj, value) { obj.jsonContent = value; } }, metadata: _metadata }, _jsonContent_initializers, _jsonContent_extraInitializers);
        __esDecorate(null, null, _urlN8N_decorators, { kind: "field", name: "urlN8N", static: false, private: false, access: { has: function (obj) { return "urlN8N" in obj; }, get: function (obj) { return obj.urlN8N; }, set: function (obj, value) { obj.urlN8N = value; } }, metadata: _metadata }, _urlN8N_initializers, _urlN8N_extraInitializers);
        __esDecorate(null, null, _language_decorators, { kind: "field", name: "language", static: false, private: false, access: { has: function (obj) { return "language" in obj; }, get: function (obj) { return obj.language; }, set: function (obj, value) { obj.language = value; } }, metadata: _metadata }, _language_initializers, _language_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _typebotSlug_decorators, { kind: "field", name: "typebotSlug", static: false, private: false, access: { has: function (obj) { return "typebotSlug" in obj; }, get: function (obj) { return obj.typebotSlug; }, set: function (obj, value) { obj.typebotSlug = value; } }, metadata: _metadata }, _typebotSlug_initializers, _typebotSlug_extraInitializers);
        __esDecorate(null, null, _typebotExpires_decorators, { kind: "field", name: "typebotExpires", static: false, private: false, access: { has: function (obj) { return "typebotExpires" in obj; }, get: function (obj) { return obj.typebotExpires; }, set: function (obj, value) { obj.typebotExpires = value; } }, metadata: _metadata }, _typebotExpires_initializers, _typebotExpires_extraInitializers);
        __esDecorate(null, null, _typebotKeywordFinish_decorators, { kind: "field", name: "typebotKeywordFinish", static: false, private: false, access: { has: function (obj) { return "typebotKeywordFinish" in obj; }, get: function (obj) { return obj.typebotKeywordFinish; }, set: function (obj, value) { obj.typebotKeywordFinish = value; } }, metadata: _metadata }, _typebotKeywordFinish_initializers, _typebotKeywordFinish_extraInitializers);
        __esDecorate(null, null, _typebotUnknownMessage_decorators, { kind: "field", name: "typebotUnknownMessage", static: false, private: false, access: { has: function (obj) { return "typebotUnknownMessage" in obj; }, get: function (obj) { return obj.typebotUnknownMessage; }, set: function (obj, value) { obj.typebotUnknownMessage = value; } }, metadata: _metadata }, _typebotUnknownMessage_initializers, _typebotUnknownMessage_extraInitializers);
        __esDecorate(null, null, _typebotDelayMessage_decorators, { kind: "field", name: "typebotDelayMessage", static: false, private: false, access: { has: function (obj) { return "typebotDelayMessage" in obj; }, get: function (obj) { return obj.typebotDelayMessage; }, set: function (obj, value) { obj.typebotDelayMessage = value; } }, metadata: _metadata }, _typebotDelayMessage_initializers, _typebotDelayMessage_extraInitializers);
        __esDecorate(null, null, _typebotKeywordRestart_decorators, { kind: "field", name: "typebotKeywordRestart", static: false, private: false, access: { has: function (obj) { return "typebotKeywordRestart" in obj; }, get: function (obj) { return obj.typebotKeywordRestart; }, set: function (obj, value) { obj.typebotKeywordRestart = value; } }, metadata: _metadata }, _typebotKeywordRestart_initializers, _typebotKeywordRestart_extraInitializers);
        __esDecorate(null, null, _typebotRestartMessage_decorators, { kind: "field", name: "typebotRestartMessage", static: false, private: false, access: { has: function (obj) { return "typebotRestartMessage" in obj; }, get: function (obj) { return obj.typebotRestartMessage; }, set: function (obj, value) { obj.typebotRestartMessage = value; } }, metadata: _metadata }, _typebotRestartMessage_initializers, _typebotRestartMessage_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        QueueIntegrations = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return QueueIntegrations = _classThis;
}();
exports.default = QueueIntegrations;
