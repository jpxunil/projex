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
var Plan = function () {
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
    var _users_decorators;
    var _users_initializers = [];
    var _users_extraInitializers = [];
    var _connections_decorators;
    var _connections_initializers = [];
    var _connections_extraInitializers = [];
    var _queues_decorators;
    var _queues_initializers = [];
    var _queues_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _useSchedules_decorators;
    var _useSchedules_initializers = [];
    var _useSchedules_extraInitializers = [];
    var _useCampaigns_decorators;
    var _useCampaigns_initializers = [];
    var _useCampaigns_extraInitializers = [];
    var _useInternalChat_decorators;
    var _useInternalChat_initializers = [];
    var _useInternalChat_extraInitializers = [];
    var _useExternalApi_decorators;
    var _useExternalApi_initializers = [];
    var _useExternalApi_extraInitializers = [];
    var _useKanban_decorators;
    var _useKanban_initializers = [];
    var _useKanban_extraInitializers = [];
    var _useOpenAi_decorators;
    var _useOpenAi_initializers = [];
    var _useOpenAi_extraInitializers = [];
    var _useIntegrations_decorators;
    var _useIntegrations_initializers = [];
    var _useIntegrations_extraInitializers = [];
    var Plan = _classThis = /** @class */ (function (_super) {
        __extends(Plan_1, _super);
        function Plan_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.name = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.users = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _users_initializers, void 0));
            _this.connections = (__runInitializers(_this, _users_extraInitializers), __runInitializers(_this, _connections_initializers, void 0));
            _this.queues = (__runInitializers(_this, _connections_extraInitializers), __runInitializers(_this, _queues_initializers, void 0));
            _this.value = (__runInitializers(_this, _queues_extraInitializers), __runInitializers(_this, _value_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _value_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.useSchedules = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _useSchedules_initializers, void 0));
            _this.useCampaigns = (__runInitializers(_this, _useSchedules_extraInitializers), __runInitializers(_this, _useCampaigns_initializers, void 0));
            _this.useInternalChat = (__runInitializers(_this, _useCampaigns_extraInitializers), __runInitializers(_this, _useInternalChat_initializers, void 0));
            _this.useExternalApi = (__runInitializers(_this, _useInternalChat_extraInitializers), __runInitializers(_this, _useExternalApi_initializers, void 0));
            _this.useKanban = (__runInitializers(_this, _useExternalApi_extraInitializers), __runInitializers(_this, _useKanban_initializers, void 0));
            _this.useOpenAi = (__runInitializers(_this, _useKanban_extraInitializers), __runInitializers(_this, _useOpenAi_initializers, void 0));
            _this.useIntegrations = (__runInitializers(_this, _useOpenAi_extraInitializers), __runInitializers(_this, _useIntegrations_initializers, void 0));
            __runInitializers(_this, _useIntegrations_extraInitializers);
            return _this;
        }
        return Plan_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Plan");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Unique, sequelize_typescript_1.Column];
        _users_decorators = [sequelize_typescript_1.Column];
        _connections_decorators = [sequelize_typescript_1.Column];
        _queues_decorators = [sequelize_typescript_1.Column];
        _value_decorators = [sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _useSchedules_decorators = [sequelize_typescript_1.Column];
        _useCampaigns_decorators = [sequelize_typescript_1.Column];
        _useInternalChat_decorators = [sequelize_typescript_1.Column];
        _useExternalApi_decorators = [sequelize_typescript_1.Column];
        _useKanban_decorators = [sequelize_typescript_1.Column];
        _useOpenAi_decorators = [sequelize_typescript_1.Column];
        _useIntegrations_decorators = [sequelize_typescript_1.Column];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: function (obj) { return "users" in obj; }, get: function (obj) { return obj.users; }, set: function (obj, value) { obj.users = value; } }, metadata: _metadata }, _users_initializers, _users_extraInitializers);
        __esDecorate(null, null, _connections_decorators, { kind: "field", name: "connections", static: false, private: false, access: { has: function (obj) { return "connections" in obj; }, get: function (obj) { return obj.connections; }, set: function (obj, value) { obj.connections = value; } }, metadata: _metadata }, _connections_initializers, _connections_extraInitializers);
        __esDecorate(null, null, _queues_decorators, { kind: "field", name: "queues", static: false, private: false, access: { has: function (obj) { return "queues" in obj; }, get: function (obj) { return obj.queues; }, set: function (obj, value) { obj.queues = value; } }, metadata: _metadata }, _queues_initializers, _queues_extraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _useSchedules_decorators, { kind: "field", name: "useSchedules", static: false, private: false, access: { has: function (obj) { return "useSchedules" in obj; }, get: function (obj) { return obj.useSchedules; }, set: function (obj, value) { obj.useSchedules = value; } }, metadata: _metadata }, _useSchedules_initializers, _useSchedules_extraInitializers);
        __esDecorate(null, null, _useCampaigns_decorators, { kind: "field", name: "useCampaigns", static: false, private: false, access: { has: function (obj) { return "useCampaigns" in obj; }, get: function (obj) { return obj.useCampaigns; }, set: function (obj, value) { obj.useCampaigns = value; } }, metadata: _metadata }, _useCampaigns_initializers, _useCampaigns_extraInitializers);
        __esDecorate(null, null, _useInternalChat_decorators, { kind: "field", name: "useInternalChat", static: false, private: false, access: { has: function (obj) { return "useInternalChat" in obj; }, get: function (obj) { return obj.useInternalChat; }, set: function (obj, value) { obj.useInternalChat = value; } }, metadata: _metadata }, _useInternalChat_initializers, _useInternalChat_extraInitializers);
        __esDecorate(null, null, _useExternalApi_decorators, { kind: "field", name: "useExternalApi", static: false, private: false, access: { has: function (obj) { return "useExternalApi" in obj; }, get: function (obj) { return obj.useExternalApi; }, set: function (obj, value) { obj.useExternalApi = value; } }, metadata: _metadata }, _useExternalApi_initializers, _useExternalApi_extraInitializers);
        __esDecorate(null, null, _useKanban_decorators, { kind: "field", name: "useKanban", static: false, private: false, access: { has: function (obj) { return "useKanban" in obj; }, get: function (obj) { return obj.useKanban; }, set: function (obj, value) { obj.useKanban = value; } }, metadata: _metadata }, _useKanban_initializers, _useKanban_extraInitializers);
        __esDecorate(null, null, _useOpenAi_decorators, { kind: "field", name: "useOpenAi", static: false, private: false, access: { has: function (obj) { return "useOpenAi" in obj; }, get: function (obj) { return obj.useOpenAi; }, set: function (obj, value) { obj.useOpenAi = value; } }, metadata: _metadata }, _useOpenAi_initializers, _useOpenAi_extraInitializers);
        __esDecorate(null, null, _useIntegrations_decorators, { kind: "field", name: "useIntegrations", static: false, private: false, access: { has: function (obj) { return "useIntegrations" in obj; }, get: function (obj) { return obj.useIntegrations; }, set: function (obj, value) { obj.useIntegrations = value; } }, metadata: _metadata }, _useIntegrations_initializers, _useIntegrations_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Plan = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Plan = _classThis;
}();
exports.default = Plan;
