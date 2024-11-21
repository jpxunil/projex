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
var QueueOption = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var _option_decorators;
    var _option_initializers = [];
    var _option_extraInitializers = [];
    var _queueId_decorators;
    var _queueId_initializers = [];
    var _queueId_extraInitializers = [];
    var _parentId_decorators;
    var _parentId_initializers = [];
    var _parentId_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _queue_decorators;
    var _queue_initializers = [];
    var _queue_extraInitializers = [];
    var _parent_decorators;
    var _parent_initializers = [];
    var _parent_extraInitializers = [];
    var QueueOption = _classThis = /** @class */ (function (_super) {
        __extends(QueueOption_1, _super);
        function QueueOption_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.title = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _title_initializers, void 0));
            _this.message = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _message_initializers, void 0));
            _this.option = (__runInitializers(_this, _message_extraInitializers), __runInitializers(_this, _option_initializers, void 0));
            _this.queueId = (__runInitializers(_this, _option_extraInitializers), __runInitializers(_this, _queueId_initializers, void 0));
            _this.parentId = (__runInitializers(_this, _queueId_extraInitializers), __runInitializers(_this, _parentId_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _parentId_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.queue = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _queue_initializers, void 0));
            _this.parent = (__runInitializers(_this, _queue_extraInitializers), __runInitializers(_this, _parent_initializers, void 0));
            __runInitializers(_this, _parent_extraInitializers);
            return _this;
        }
        return QueueOption_1;
    }(_classSuper));
    __setFunctionName(_classThis, "QueueOption");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _title_decorators = [sequelize_typescript_1.Column];
        _message_decorators = [sequelize_typescript_1.AllowNull, sequelize_typescript_1.Column];
        _option_decorators = [sequelize_typescript_1.AllowNull, sequelize_typescript_1.Column];
        _queueId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Queue_1.default; }), sequelize_typescript_1.Column];
        _parentId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return QueueOption; }), sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _queue_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Queue_1.default; })];
        _parent_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return QueueOption; }, { foreignKey: 'parentId' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
        __esDecorate(null, null, _option_decorators, { kind: "field", name: "option", static: false, private: false, access: { has: function (obj) { return "option" in obj; }, get: function (obj) { return obj.option; }, set: function (obj, value) { obj.option = value; } }, metadata: _metadata }, _option_initializers, _option_extraInitializers);
        __esDecorate(null, null, _queueId_decorators, { kind: "field", name: "queueId", static: false, private: false, access: { has: function (obj) { return "queueId" in obj; }, get: function (obj) { return obj.queueId; }, set: function (obj, value) { obj.queueId = value; } }, metadata: _metadata }, _queueId_initializers, _queueId_extraInitializers);
        __esDecorate(null, null, _parentId_decorators, { kind: "field", name: "parentId", static: false, private: false, access: { has: function (obj) { return "parentId" in obj; }, get: function (obj) { return obj.parentId; }, set: function (obj, value) { obj.parentId = value; } }, metadata: _metadata }, _parentId_initializers, _parentId_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _queue_decorators, { kind: "field", name: "queue", static: false, private: false, access: { has: function (obj) { return "queue" in obj; }, get: function (obj) { return obj.queue; }, set: function (obj, value) { obj.queue = value; } }, metadata: _metadata }, _queue_initializers, _queue_extraInitializers);
        __esDecorate(null, null, _parent_decorators, { kind: "field", name: "parent", static: false, private: false, access: { has: function (obj) { return "parent" in obj; }, get: function (obj) { return obj.parent; }, set: function (obj, value) { obj.parent = value; } }, metadata: _metadata }, _parent_initializers, _parent_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        QueueOption = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return QueueOption = _classThis;
}();
exports.default = QueueOption;
