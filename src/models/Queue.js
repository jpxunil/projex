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
var User_1 = require("./User");
var UserQueue_1 = require("./UserQueue");
var Company_1 = require("./Company");
var Whatsapp_1 = require("./Whatsapp");
var WhatsappQueue_1 = require("./WhatsappQueue");
var QueueOption_1 = require("./QueueOption");
var Prompt_1 = require("./Prompt");
var QueueIntegrations_1 = require("./QueueIntegrations");
var Queue = function () {
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
    var _color_decorators;
    var _color_initializers = [];
    var _color_extraInitializers = [];
    var _greetingMessage_decorators;
    var _greetingMessage_initializers = [];
    var _greetingMessage_extraInitializers = [];
    var _outOfHoursMessage_decorators;
    var _outOfHoursMessage_initializers = [];
    var _outOfHoursMessage_extraInitializers = [];
    var _schedules_decorators;
    var _schedules_initializers = [];
    var _schedules_extraInitializers = [];
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
    var _whatsapps_decorators;
    var _whatsapps_initializers = [];
    var _whatsapps_extraInitializers = [];
    var _users_decorators;
    var _users_initializers = [];
    var _users_extraInitializers = [];
    var _options_decorators;
    var _options_initializers = [];
    var _options_extraInitializers = [];
    var _orderQueue_decorators;
    var _orderQueue_initializers = [];
    var _orderQueue_extraInitializers = [];
    var _integrationId_decorators;
    var _integrationId_initializers = [];
    var _integrationId_extraInitializers = [];
    var _queueIntegrations_decorators;
    var _queueIntegrations_initializers = [];
    var _queueIntegrations_extraInitializers = [];
    var _promptId_decorators;
    var _promptId_initializers = [];
    var _promptId_extraInitializers = [];
    var _prompt_decorators;
    var _prompt_initializers = [];
    var _prompt_extraInitializers = [];
    var Queue = _classThis = /** @class */ (function (_super) {
        __extends(Queue_1, _super);
        function Queue_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.name = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.color = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _color_initializers, void 0));
            _this.greetingMessage = (__runInitializers(_this, _color_extraInitializers), __runInitializers(_this, _greetingMessage_initializers, void 0));
            _this.outOfHoursMessage = (__runInitializers(_this, _greetingMessage_extraInitializers), __runInitializers(_this, _outOfHoursMessage_initializers, void 0));
            _this.schedules = (__runInitializers(_this, _outOfHoursMessage_extraInitializers), __runInitializers(_this, _schedules_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _schedules_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.whatsapps = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _whatsapps_initializers, void 0));
            _this.users = (__runInitializers(_this, _whatsapps_extraInitializers), __runInitializers(_this, _users_initializers, void 0));
            _this.options = (__runInitializers(_this, _users_extraInitializers), __runInitializers(_this, _options_initializers, void 0));
            _this.orderQueue = (__runInitializers(_this, _options_extraInitializers), __runInitializers(_this, _orderQueue_initializers, void 0));
            _this.integrationId = (__runInitializers(_this, _orderQueue_extraInitializers), __runInitializers(_this, _integrationId_initializers, void 0));
            _this.queueIntegrations = (__runInitializers(_this, _integrationId_extraInitializers), __runInitializers(_this, _queueIntegrations_initializers, void 0));
            _this.promptId = (__runInitializers(_this, _queueIntegrations_extraInitializers), __runInitializers(_this, _promptId_initializers, void 0));
            _this.prompt = (__runInitializers(_this, _promptId_extraInitializers), __runInitializers(_this, _prompt_initializers, void 0));
            __runInitializers(_this, _prompt_extraInitializers);
            return _this;
        }
        return Queue_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Queue");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Unique, sequelize_typescript_1.Column];
        _color_decorators = [(0, sequelize_typescript_1.AllowNull)(false), sequelize_typescript_1.Unique, sequelize_typescript_1.Column];
        _greetingMessage_decorators = [(0, sequelize_typescript_1.Default)(""), sequelize_typescript_1.Column];
        _outOfHoursMessage_decorators = [(0, sequelize_typescript_1.Default)(""), sequelize_typescript_1.Column];
        _schedules_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.JSONB
            })];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _whatsapps_decorators = [(0, sequelize_typescript_1.BelongsToMany)(function () { return Whatsapp_1.default; }, function () { return WhatsappQueue_1.default; })];
        _users_decorators = [(0, sequelize_typescript_1.BelongsToMany)(function () { return User_1.default; }, function () { return UserQueue_1.default; })];
        _options_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return QueueOption_1.default; }, {
                onDelete: "DELETE",
                onUpdate: "DELETE",
                hooks: true
            })];
        _orderQueue_decorators = [sequelize_typescript_1.Column];
        _integrationId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return QueueIntegrations_1.default; }), sequelize_typescript_1.Column];
        _queueIntegrations_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return QueueIntegrations_1.default; })];
        _promptId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Prompt_1.default; }), sequelize_typescript_1.Column];
        _prompt_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Prompt_1.default; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _color_decorators, { kind: "field", name: "color", static: false, private: false, access: { has: function (obj) { return "color" in obj; }, get: function (obj) { return obj.color; }, set: function (obj, value) { obj.color = value; } }, metadata: _metadata }, _color_initializers, _color_extraInitializers);
        __esDecorate(null, null, _greetingMessage_decorators, { kind: "field", name: "greetingMessage", static: false, private: false, access: { has: function (obj) { return "greetingMessage" in obj; }, get: function (obj) { return obj.greetingMessage; }, set: function (obj, value) { obj.greetingMessage = value; } }, metadata: _metadata }, _greetingMessage_initializers, _greetingMessage_extraInitializers);
        __esDecorate(null, null, _outOfHoursMessage_decorators, { kind: "field", name: "outOfHoursMessage", static: false, private: false, access: { has: function (obj) { return "outOfHoursMessage" in obj; }, get: function (obj) { return obj.outOfHoursMessage; }, set: function (obj, value) { obj.outOfHoursMessage = value; } }, metadata: _metadata }, _outOfHoursMessage_initializers, _outOfHoursMessage_extraInitializers);
        __esDecorate(null, null, _schedules_decorators, { kind: "field", name: "schedules", static: false, private: false, access: { has: function (obj) { return "schedules" in obj; }, get: function (obj) { return obj.schedules; }, set: function (obj, value) { obj.schedules = value; } }, metadata: _metadata }, _schedules_initializers, _schedules_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _whatsapps_decorators, { kind: "field", name: "whatsapps", static: false, private: false, access: { has: function (obj) { return "whatsapps" in obj; }, get: function (obj) { return obj.whatsapps; }, set: function (obj, value) { obj.whatsapps = value; } }, metadata: _metadata }, _whatsapps_initializers, _whatsapps_extraInitializers);
        __esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: function (obj) { return "users" in obj; }, get: function (obj) { return obj.users; }, set: function (obj, value) { obj.users = value; } }, metadata: _metadata }, _users_initializers, _users_extraInitializers);
        __esDecorate(null, null, _options_decorators, { kind: "field", name: "options", static: false, private: false, access: { has: function (obj) { return "options" in obj; }, get: function (obj) { return obj.options; }, set: function (obj, value) { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
        __esDecorate(null, null, _orderQueue_decorators, { kind: "field", name: "orderQueue", static: false, private: false, access: { has: function (obj) { return "orderQueue" in obj; }, get: function (obj) { return obj.orderQueue; }, set: function (obj, value) { obj.orderQueue = value; } }, metadata: _metadata }, _orderQueue_initializers, _orderQueue_extraInitializers);
        __esDecorate(null, null, _integrationId_decorators, { kind: "field", name: "integrationId", static: false, private: false, access: { has: function (obj) { return "integrationId" in obj; }, get: function (obj) { return obj.integrationId; }, set: function (obj, value) { obj.integrationId = value; } }, metadata: _metadata }, _integrationId_initializers, _integrationId_extraInitializers);
        __esDecorate(null, null, _queueIntegrations_decorators, { kind: "field", name: "queueIntegrations", static: false, private: false, access: { has: function (obj) { return "queueIntegrations" in obj; }, get: function (obj) { return obj.queueIntegrations; }, set: function (obj, value) { obj.queueIntegrations = value; } }, metadata: _metadata }, _queueIntegrations_initializers, _queueIntegrations_extraInitializers);
        __esDecorate(null, null, _promptId_decorators, { kind: "field", name: "promptId", static: false, private: false, access: { has: function (obj) { return "promptId" in obj; }, get: function (obj) { return obj.promptId; }, set: function (obj, value) { obj.promptId = value; } }, metadata: _metadata }, _promptId_initializers, _promptId_extraInitializers);
        __esDecorate(null, null, _prompt_decorators, { kind: "field", name: "prompt", static: false, private: false, access: { has: function (obj) { return "prompt" in obj; }, get: function (obj) { return obj.prompt; }, set: function (obj, value) { obj.prompt = value; } }, metadata: _metadata }, _prompt_initializers, _prompt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Queue = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Queue = _classThis;
}();
exports.default = Queue;
