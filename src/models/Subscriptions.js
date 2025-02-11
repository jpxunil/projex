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
var Subscriptions = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _isActive_decorators;
    var _isActive_initializers = [];
    var _isActive_extraInitializers = [];
    var _userPriceCents_decorators;
    var _userPriceCents_initializers = [];
    var _userPriceCents_extraInitializers = [];
    var _whatsPriceCents_decorators;
    var _whatsPriceCents_initializers = [];
    var _whatsPriceCents_extraInitializers = [];
    var _lastInvoiceUrl_decorators;
    var _lastInvoiceUrl_initializers = [];
    var _lastInvoiceUrl_extraInitializers = [];
    var _lastPlanChange_decorators;
    var _lastPlanChange_initializers = [];
    var _lastPlanChange_extraInitializers = [];
    var _expiresAt_decorators;
    var _expiresAt_initializers = [];
    var _expiresAt_extraInitializers = [];
    var _providerSubscriptionId_decorators;
    var _providerSubscriptionId_initializers = [];
    var _providerSubscriptionId_extraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _companyId_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var Subscriptions = _classThis = /** @class */ (function (_super) {
        __extends(Subscriptions_1, _super);
        function Subscriptions_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.isActive = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _isActive_initializers, void 0));
            _this.userPriceCents = (__runInitializers(_this, _isActive_extraInitializers), __runInitializers(_this, _userPriceCents_initializers, void 0));
            _this.whatsPriceCents = (__runInitializers(_this, _userPriceCents_extraInitializers), __runInitializers(_this, _whatsPriceCents_initializers, void 0));
            _this.lastInvoiceUrl = (__runInitializers(_this, _whatsPriceCents_extraInitializers), __runInitializers(_this, _lastInvoiceUrl_initializers, void 0));
            _this.lastPlanChange = (__runInitializers(_this, _lastInvoiceUrl_extraInitializers), __runInitializers(_this, _lastPlanChange_initializers, void 0));
            _this.expiresAt = (__runInitializers(_this, _lastPlanChange_extraInitializers), __runInitializers(_this, _expiresAt_initializers, void 0));
            _this.providerSubscriptionId = (__runInitializers(_this, _expiresAt_extraInitializers), __runInitializers(_this, _providerSubscriptionId_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _providerSubscriptionId_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            __runInitializers(_this, _updatedAt_extraInitializers);
            return _this;
        }
        return Subscriptions_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Subscriptions");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _isActive_decorators = [sequelize_typescript_1.Column];
        _userPriceCents_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _whatsPriceCents_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _lastInvoiceUrl_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _lastPlanChange_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _expiresAt_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _providerSubscriptionId_decorators = [(0, sequelize_typescript_1.AllowNull)(true), sequelize_typescript_1.Column];
        _companyId_decorators = [sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: function (obj) { return "isActive" in obj; }, get: function (obj) { return obj.isActive; }, set: function (obj, value) { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
        __esDecorate(null, null, _userPriceCents_decorators, { kind: "field", name: "userPriceCents", static: false, private: false, access: { has: function (obj) { return "userPriceCents" in obj; }, get: function (obj) { return obj.userPriceCents; }, set: function (obj, value) { obj.userPriceCents = value; } }, metadata: _metadata }, _userPriceCents_initializers, _userPriceCents_extraInitializers);
        __esDecorate(null, null, _whatsPriceCents_decorators, { kind: "field", name: "whatsPriceCents", static: false, private: false, access: { has: function (obj) { return "whatsPriceCents" in obj; }, get: function (obj) { return obj.whatsPriceCents; }, set: function (obj, value) { obj.whatsPriceCents = value; } }, metadata: _metadata }, _whatsPriceCents_initializers, _whatsPriceCents_extraInitializers);
        __esDecorate(null, null, _lastInvoiceUrl_decorators, { kind: "field", name: "lastInvoiceUrl", static: false, private: false, access: { has: function (obj) { return "lastInvoiceUrl" in obj; }, get: function (obj) { return obj.lastInvoiceUrl; }, set: function (obj, value) { obj.lastInvoiceUrl = value; } }, metadata: _metadata }, _lastInvoiceUrl_initializers, _lastInvoiceUrl_extraInitializers);
        __esDecorate(null, null, _lastPlanChange_decorators, { kind: "field", name: "lastPlanChange", static: false, private: false, access: { has: function (obj) { return "lastPlanChange" in obj; }, get: function (obj) { return obj.lastPlanChange; }, set: function (obj, value) { obj.lastPlanChange = value; } }, metadata: _metadata }, _lastPlanChange_initializers, _lastPlanChange_extraInitializers);
        __esDecorate(null, null, _expiresAt_decorators, { kind: "field", name: "expiresAt", static: false, private: false, access: { has: function (obj) { return "expiresAt" in obj; }, get: function (obj) { return obj.expiresAt; }, set: function (obj, value) { obj.expiresAt = value; } }, metadata: _metadata }, _expiresAt_initializers, _expiresAt_extraInitializers);
        __esDecorate(null, null, _providerSubscriptionId_decorators, { kind: "field", name: "providerSubscriptionId", static: false, private: false, access: { has: function (obj) { return "providerSubscriptionId" in obj; }, get: function (obj) { return obj.providerSubscriptionId; }, set: function (obj, value) { obj.providerSubscriptionId = value; } }, metadata: _metadata }, _providerSubscriptionId_initializers, _providerSubscriptionId_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Subscriptions = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Subscriptions = _classThis;
}();
exports.default = Subscriptions;
