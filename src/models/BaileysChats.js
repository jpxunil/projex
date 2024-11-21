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
var Whatsapp_1 = require("./Whatsapp");
var BaileysChats = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _jid_decorators;
    var _jid_initializers = [];
    var _jid_extraInitializers = [];
    var _conversationTimestamp_decorators;
    var _conversationTimestamp_initializers = [];
    var _conversationTimestamp_extraInitializers = [];
    var _unreadCount_decorators;
    var _unreadCount_initializers = [];
    var _unreadCount_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _whatsappId_decorators;
    var _whatsappId_initializers = [];
    var _whatsappId_extraInitializers = [];
    var BaileysChats = _classThis = /** @class */ (function (_super) {
        __extends(BaileysChats_1, _super);
        function BaileysChats_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.jid = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _jid_initializers, void 0));
            _this.conversationTimestamp = (__runInitializers(_this, _jid_extraInitializers), __runInitializers(_this, _conversationTimestamp_initializers, void 0));
            _this.unreadCount = (__runInitializers(_this, _conversationTimestamp_extraInitializers), __runInitializers(_this, _unreadCount_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _unreadCount_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.whatsappId = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _whatsappId_initializers, void 0));
            __runInitializers(_this, _whatsappId_extraInitializers);
            return _this;
        }
        return BaileysChats_1;
    }(_classSuper));
    __setFunctionName(_classThis, "BaileysChats");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _jid_decorators = [sequelize_typescript_1.Column];
        _conversationTimestamp_decorators = [sequelize_typescript_1.Column];
        _unreadCount_decorators = [(0, sequelize_typescript_1.Default)(0), sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _whatsappId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Whatsapp_1.default; }), (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _jid_decorators, { kind: "field", name: "jid", static: false, private: false, access: { has: function (obj) { return "jid" in obj; }, get: function (obj) { return obj.jid; }, set: function (obj, value) { obj.jid = value; } }, metadata: _metadata }, _jid_initializers, _jid_extraInitializers);
        __esDecorate(null, null, _conversationTimestamp_decorators, { kind: "field", name: "conversationTimestamp", static: false, private: false, access: { has: function (obj) { return "conversationTimestamp" in obj; }, get: function (obj) { return obj.conversationTimestamp; }, set: function (obj, value) { obj.conversationTimestamp = value; } }, metadata: _metadata }, _conversationTimestamp_initializers, _conversationTimestamp_extraInitializers);
        __esDecorate(null, null, _unreadCount_decorators, { kind: "field", name: "unreadCount", static: false, private: false, access: { has: function (obj) { return "unreadCount" in obj; }, get: function (obj) { return obj.unreadCount; }, set: function (obj, value) { obj.unreadCount = value; } }, metadata: _metadata }, _unreadCount_initializers, _unreadCount_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _whatsappId_decorators, { kind: "field", name: "whatsappId", static: false, private: false, access: { has: function (obj) { return "whatsappId" in obj; }, get: function (obj) { return obj.whatsappId; }, set: function (obj, value) { obj.whatsappId = value; } }, metadata: _metadata }, _whatsappId_initializers, _whatsappId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BaileysChats = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BaileysChats = _classThis;
}();
exports.default = BaileysChats;
