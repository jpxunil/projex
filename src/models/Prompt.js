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
var Queue_1 = require("./Queue");
var Company_1 = require("./Company");
var Prompt = function () {
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
    var _prompt_decorators;
    var _prompt_initializers = [];
    var _prompt_extraInitializers = [];
    var _apiKey_decorators;
    var _apiKey_initializers = [];
    var _apiKey_extraInitializers = [];
    var _maxMessages_decorators;
    var _maxMessages_initializers = [];
    var _maxMessages_extraInitializers = [];
    var _maxTokens_decorators;
    var _maxTokens_initializers = [];
    var _maxTokens_extraInitializers = [];
    var _temperature_decorators;
    var _temperature_initializers = [];
    var _temperature_extraInitializers = [];
    var _promptTokens_decorators;
    var _promptTokens_initializers = [];
    var _promptTokens_extraInitializers = [];
    var _completionTokens_decorators;
    var _completionTokens_initializers = [];
    var _completionTokens_extraInitializers = [];
    var _totalTokens_decorators;
    var _totalTokens_initializers = [];
    var _totalTokens_extraInitializers = [];
    var _voice_decorators;
    var _voice_initializers = [];
    var _voice_extraInitializers = [];
    var _voiceKey_decorators;
    var _voiceKey_initializers = [];
    var _voiceKey_extraInitializers = [];
    var _voiceRegion_decorators;
    var _voiceRegion_initializers = [];
    var _voiceRegion_extraInitializers = [];
    var _queueId_decorators;
    var _queueId_initializers = [];
    var _queueId_extraInitializers = [];
    var _queue_decorators;
    var _queue_initializers = [];
    var _queue_extraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _companyId_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var Prompt = _classThis = /** @class */ (function (_super) {
        __extends(Prompt_1, _super);
        function Prompt_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.name = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.prompt = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _prompt_initializers, void 0));
            _this.apiKey = (__runInitializers(_this, _prompt_extraInitializers), __runInitializers(_this, _apiKey_initializers, void 0));
            _this.maxMessages = (__runInitializers(_this, _apiKey_extraInitializers), __runInitializers(_this, _maxMessages_initializers, void 0));
            _this.maxTokens = (__runInitializers(_this, _maxMessages_extraInitializers), __runInitializers(_this, _maxTokens_initializers, void 0));
            _this.temperature = (__runInitializers(_this, _maxTokens_extraInitializers), __runInitializers(_this, _temperature_initializers, void 0));
            _this.promptTokens = (__runInitializers(_this, _temperature_extraInitializers), __runInitializers(_this, _promptTokens_initializers, void 0));
            _this.completionTokens = (__runInitializers(_this, _promptTokens_extraInitializers), __runInitializers(_this, _completionTokens_initializers, void 0));
            _this.totalTokens = (__runInitializers(_this, _completionTokens_extraInitializers), __runInitializers(_this, _totalTokens_initializers, void 0));
            _this.voice = (__runInitializers(_this, _totalTokens_extraInitializers), __runInitializers(_this, _voice_initializers, void 0));
            _this.voiceKey = (__runInitializers(_this, _voice_extraInitializers), __runInitializers(_this, _voiceKey_initializers, void 0));
            _this.voiceRegion = (__runInitializers(_this, _voiceKey_extraInitializers), __runInitializers(_this, _voiceRegion_initializers, void 0));
            _this.queueId = (__runInitializers(_this, _voiceRegion_extraInitializers), __runInitializers(_this, _queueId_initializers, void 0));
            _this.queue = (__runInitializers(_this, _queueId_extraInitializers), __runInitializers(_this, _queue_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _queue_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            __runInitializers(_this, _updatedAt_extraInitializers);
            return _this;
        }
        return Prompt_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Prompt");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Column];
        _prompt_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Column];
        _apiKey_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Column];
        _maxMessages_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: 10 })];
        _maxTokens_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: 100 })];
        _temperature_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: 1 })];
        _promptTokens_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: 0 })];
        _completionTokens_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: 0 })];
        _totalTokens_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: 0 })];
        _voice_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Column];
        _voiceKey_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _voiceRegion_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _queueId_decorators = [sequelize_typescript_1.AllowNull, (0, sequelize_typescript_1.ForeignKey)(function () { return Queue_1.default; }), sequelize_typescript_1.Column];
        _queue_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Queue_1.default; })];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _prompt_decorators, { kind: "field", name: "prompt", static: false, private: false, access: { has: function (obj) { return "prompt" in obj; }, get: function (obj) { return obj.prompt; }, set: function (obj, value) { obj.prompt = value; } }, metadata: _metadata }, _prompt_initializers, _prompt_extraInitializers);
        __esDecorate(null, null, _apiKey_decorators, { kind: "field", name: "apiKey", static: false, private: false, access: { has: function (obj) { return "apiKey" in obj; }, get: function (obj) { return obj.apiKey; }, set: function (obj, value) { obj.apiKey = value; } }, metadata: _metadata }, _apiKey_initializers, _apiKey_extraInitializers);
        __esDecorate(null, null, _maxMessages_decorators, { kind: "field", name: "maxMessages", static: false, private: false, access: { has: function (obj) { return "maxMessages" in obj; }, get: function (obj) { return obj.maxMessages; }, set: function (obj, value) { obj.maxMessages = value; } }, metadata: _metadata }, _maxMessages_initializers, _maxMessages_extraInitializers);
        __esDecorate(null, null, _maxTokens_decorators, { kind: "field", name: "maxTokens", static: false, private: false, access: { has: function (obj) { return "maxTokens" in obj; }, get: function (obj) { return obj.maxTokens; }, set: function (obj, value) { obj.maxTokens = value; } }, metadata: _metadata }, _maxTokens_initializers, _maxTokens_extraInitializers);
        __esDecorate(null, null, _temperature_decorators, { kind: "field", name: "temperature", static: false, private: false, access: { has: function (obj) { return "temperature" in obj; }, get: function (obj) { return obj.temperature; }, set: function (obj, value) { obj.temperature = value; } }, metadata: _metadata }, _temperature_initializers, _temperature_extraInitializers);
        __esDecorate(null, null, _promptTokens_decorators, { kind: "field", name: "promptTokens", static: false, private: false, access: { has: function (obj) { return "promptTokens" in obj; }, get: function (obj) { return obj.promptTokens; }, set: function (obj, value) { obj.promptTokens = value; } }, metadata: _metadata }, _promptTokens_initializers, _promptTokens_extraInitializers);
        __esDecorate(null, null, _completionTokens_decorators, { kind: "field", name: "completionTokens", static: false, private: false, access: { has: function (obj) { return "completionTokens" in obj; }, get: function (obj) { return obj.completionTokens; }, set: function (obj, value) { obj.completionTokens = value; } }, metadata: _metadata }, _completionTokens_initializers, _completionTokens_extraInitializers);
        __esDecorate(null, null, _totalTokens_decorators, { kind: "field", name: "totalTokens", static: false, private: false, access: { has: function (obj) { return "totalTokens" in obj; }, get: function (obj) { return obj.totalTokens; }, set: function (obj, value) { obj.totalTokens = value; } }, metadata: _metadata }, _totalTokens_initializers, _totalTokens_extraInitializers);
        __esDecorate(null, null, _voice_decorators, { kind: "field", name: "voice", static: false, private: false, access: { has: function (obj) { return "voice" in obj; }, get: function (obj) { return obj.voice; }, set: function (obj, value) { obj.voice = value; } }, metadata: _metadata }, _voice_initializers, _voice_extraInitializers);
        __esDecorate(null, null, _voiceKey_decorators, { kind: "field", name: "voiceKey", static: false, private: false, access: { has: function (obj) { return "voiceKey" in obj; }, get: function (obj) { return obj.voiceKey; }, set: function (obj, value) { obj.voiceKey = value; } }, metadata: _metadata }, _voiceKey_initializers, _voiceKey_extraInitializers);
        __esDecorate(null, null, _voiceRegion_decorators, { kind: "field", name: "voiceRegion", static: false, private: false, access: { has: function (obj) { return "voiceRegion" in obj; }, get: function (obj) { return obj.voiceRegion; }, set: function (obj, value) { obj.voiceRegion = value; } }, metadata: _metadata }, _voiceRegion_initializers, _voiceRegion_extraInitializers);
        __esDecorate(null, null, _queueId_decorators, { kind: "field", name: "queueId", static: false, private: false, access: { has: function (obj) { return "queueId" in obj; }, get: function (obj) { return obj.queueId; }, set: function (obj, value) { obj.queueId = value; } }, metadata: _metadata }, _queueId_initializers, _queueId_extraInitializers);
        __esDecorate(null, null, _queue_decorators, { kind: "field", name: "queue", static: false, private: false, access: { has: function (obj) { return "queue" in obj; }, get: function (obj) { return obj.queue; }, set: function (obj, value) { obj.queue = value; } }, metadata: _metadata }, _queue_initializers, _queue_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Prompt = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Prompt = _classThis;
}();
exports.default = Prompt;
