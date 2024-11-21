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
var Whatsapp_1 = require("./Whatsapp");
var WhatsappQueue = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _whatsappId_decorators;
    var _whatsappId_initializers = [];
    var _whatsappId_extraInitializers = [];
    var _queueId_decorators;
    var _queueId_initializers = [];
    var _queueId_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _queue_decorators;
    var _queue_initializers = [];
    var _queue_extraInitializers = [];
    var WhatsappQueue = _classThis = /** @class */ (function (_super) {
        __extends(WhatsappQueue_1, _super);
        function WhatsappQueue_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.whatsappId = __runInitializers(_this, _whatsappId_initializers, void 0);
            _this.queueId = (__runInitializers(_this, _whatsappId_extraInitializers), __runInitializers(_this, _queueId_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _queueId_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.queue = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _queue_initializers, void 0));
            __runInitializers(_this, _queue_extraInitializers);
            return _this;
        }
        return WhatsappQueue_1;
    }(_classSuper));
    __setFunctionName(_classThis, "WhatsappQueue");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _whatsappId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Whatsapp_1.default; }), sequelize_typescript_1.Column];
        _queueId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Queue_1.default; }), sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _queue_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Queue_1.default; })];
        __esDecorate(null, null, _whatsappId_decorators, { kind: "field", name: "whatsappId", static: false, private: false, access: { has: function (obj) { return "whatsappId" in obj; }, get: function (obj) { return obj.whatsappId; }, set: function (obj, value) { obj.whatsappId = value; } }, metadata: _metadata }, _whatsappId_initializers, _whatsappId_extraInitializers);
        __esDecorate(null, null, _queueId_decorators, { kind: "field", name: "queueId", static: false, private: false, access: { has: function (obj) { return "queueId" in obj; }, get: function (obj) { return obj.queueId; }, set: function (obj, value) { obj.queueId = value; } }, metadata: _metadata }, _queueId_initializers, _queueId_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _queue_decorators, { kind: "field", name: "queue", static: false, private: false, access: { has: function (obj) { return "queue" in obj; }, get: function (obj) { return obj.queue; }, set: function (obj, value) { obj.queue = value; } }, metadata: _metadata }, _queue_initializers, _queue_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WhatsappQueue = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WhatsappQueue = _classThis;
}();
exports.default = WhatsappQueue;
