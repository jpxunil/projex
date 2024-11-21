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
var Chat_1 = require("./Chat");
var ChatMessage = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: "ChatMessages" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _chatId_decorators;
    var _chatId_initializers = [];
    var _chatId_extraInitializers = [];
    var _senderId_decorators;
    var _senderId_initializers = [];
    var _senderId_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var _mediaPath_decorators;
    var _mediaPath_initializers = [];
    var _mediaPath_extraInitializers = [];
    var _mediaName_decorators;
    var _mediaName_initializers = [];
    var _mediaName_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _chat_decorators;
    var _chat_initializers = [];
    var _chat_extraInitializers = [];
    var _sender_decorators;
    var _sender_initializers = [];
    var _sender_extraInitializers = [];
    var ChatMessage = _classThis = /** @class */ (function (_super) {
        __extends(ChatMessage_1, _super);
        function ChatMessage_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.chatId = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _chatId_initializers, void 0));
            _this.senderId = (__runInitializers(_this, _chatId_extraInitializers), __runInitializers(_this, _senderId_initializers, void 0));
            _this.message = (__runInitializers(_this, _senderId_extraInitializers), __runInitializers(_this, _message_initializers, void 0));
            _this.mediaPath = (__runInitializers(_this, _message_extraInitializers), __runInitializers(_this, _mediaPath_initializers, void 0));
            _this.mediaName = (__runInitializers(_this, _mediaPath_extraInitializers), __runInitializers(_this, _mediaName_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _mediaName_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.chat = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _chat_initializers, void 0));
            _this.sender = (__runInitializers(_this, _chat_extraInitializers), __runInitializers(_this, _sender_initializers, void 0));
            __runInitializers(_this, _sender_extraInitializers);
            return _this;
        }
        return ChatMessage_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ChatMessage");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _chatId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Chat_1.default; }), sequelize_typescript_1.Column];
        _senderId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return User_1.default; }), sequelize_typescript_1.Column];
        _message_decorators = [(0, sequelize_typescript_1.Column)({ defaultValue: "" })];
        _mediaPath_decorators = [sequelize_typescript_1.Column];
        _mediaName_decorators = [sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _chat_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Chat_1.default; })];
        _sender_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return User_1.default; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _chatId_decorators, { kind: "field", name: "chatId", static: false, private: false, access: { has: function (obj) { return "chatId" in obj; }, get: function (obj) { return obj.chatId; }, set: function (obj, value) { obj.chatId = value; } }, metadata: _metadata }, _chatId_initializers, _chatId_extraInitializers);
        __esDecorate(null, null, _senderId_decorators, { kind: "field", name: "senderId", static: false, private: false, access: { has: function (obj) { return "senderId" in obj; }, get: function (obj) { return obj.senderId; }, set: function (obj, value) { obj.senderId = value; } }, metadata: _metadata }, _senderId_initializers, _senderId_extraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
        __esDecorate(null, null, _mediaPath_decorators, { kind: "field", name: "mediaPath", static: false, private: false, access: { has: function (obj) { return "mediaPath" in obj; }, get: function (obj) { return obj.mediaPath; }, set: function (obj, value) { obj.mediaPath = value; } }, metadata: _metadata }, _mediaPath_initializers, _mediaPath_extraInitializers);
        __esDecorate(null, null, _mediaName_decorators, { kind: "field", name: "mediaName", static: false, private: false, access: { has: function (obj) { return "mediaName" in obj; }, get: function (obj) { return obj.mediaName; }, set: function (obj, value) { obj.mediaName = value; } }, metadata: _metadata }, _mediaName_initializers, _mediaName_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _chat_decorators, { kind: "field", name: "chat", static: false, private: false, access: { has: function (obj) { return "chat" in obj; }, get: function (obj) { return obj.chat; }, set: function (obj, value) { obj.chat = value; } }, metadata: _metadata }, _chat_initializers, _chat_extraInitializers);
        __esDecorate(null, null, _sender_decorators, { kind: "field", name: "sender", static: false, private: false, access: { has: function (obj) { return "sender" in obj; }, get: function (obj) { return obj.sender; }, set: function (obj, value) { obj.sender = value; } }, metadata: _metadata }, _sender_initializers, _sender_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChatMessage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChatMessage = _classThis;
}();
exports.default = ChatMessage;
