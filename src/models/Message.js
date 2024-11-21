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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var Contact_1 = require("./Contact");
var Ticket_1 = require("./Ticket");
var Company_1 = require("./Company");
var Queue_1 = require("./Queue");
var Message = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _remoteJid_decorators;
    var _remoteJid_initializers = [];
    var _remoteJid_extraInitializers = [];
    var _participant_decorators;
    var _participant_initializers = [];
    var _participant_extraInitializers = [];
    var _dataJson_decorators;
    var _dataJson_initializers = [];
    var _dataJson_extraInitializers = [];
    var _ack_decorators;
    var _ack_initializers = [];
    var _ack_extraInitializers = [];
    var _read_decorators;
    var _read_initializers = [];
    var _read_extraInitializers = [];
    var _fromMe_decorators;
    var _fromMe_initializers = [];
    var _fromMe_extraInitializers = [];
    var _body_decorators;
    var _body_initializers = [];
    var _body_extraInitializers = [];
    var _get_mediaUrl_decorators;
    var _mediaType_decorators;
    var _mediaType_initializers = [];
    var _mediaType_extraInitializers = [];
    var _isDeleted_decorators;
    var _isDeleted_initializers = [];
    var _isDeleted_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _quotedMsgId_decorators;
    var _quotedMsgId_initializers = [];
    var _quotedMsgId_extraInitializers = [];
    var _quotedMsg_decorators;
    var _quotedMsg_initializers = [];
    var _quotedMsg_extraInitializers = [];
    var _ticketId_decorators;
    var _ticketId_initializers = [];
    var _ticketId_extraInitializers = [];
    var _ticket_decorators;
    var _ticket_initializers = [];
    var _ticket_extraInitializers = [];
    var _contactId_decorators;
    var _contactId_initializers = [];
    var _contactId_extraInitializers = [];
    var _contact_decorators;
    var _contact_initializers = [];
    var _contact_extraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _companyId_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _queueId_decorators;
    var _queueId_initializers = [];
    var _queueId_extraInitializers = [];
    var _queue_decorators;
    var _queue_initializers = [];
    var _queue_extraInitializers = [];
    var _isEdited_decorators;
    var _isEdited_initializers = [];
    var _isEdited_extraInitializers = [];
    var Message = _classThis = /** @class */ (function (_super) {
        __extends(Message_1, _super);
        function Message_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.remoteJid = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _remoteJid_initializers, void 0));
            _this.participant = (__runInitializers(_this, _remoteJid_extraInitializers), __runInitializers(_this, _participant_initializers, void 0));
            _this.dataJson = (__runInitializers(_this, _participant_extraInitializers), __runInitializers(_this, _dataJson_initializers, void 0));
            _this.ack = (__runInitializers(_this, _dataJson_extraInitializers), __runInitializers(_this, _ack_initializers, void 0));
            _this.read = (__runInitializers(_this, _ack_extraInitializers), __runInitializers(_this, _read_initializers, void 0));
            _this.fromMe = (__runInitializers(_this, _read_extraInitializers), __runInitializers(_this, _fromMe_initializers, void 0));
            _this.body = (__runInitializers(_this, _fromMe_extraInitializers), __runInitializers(_this, _body_initializers, void 0));
            _this.mediaType = (__runInitializers(_this, _body_extraInitializers), __runInitializers(_this, _mediaType_initializers, void 0));
            _this.isDeleted = (__runInitializers(_this, _mediaType_extraInitializers), __runInitializers(_this, _isDeleted_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _isDeleted_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.quotedMsgId = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _quotedMsgId_initializers, void 0));
            _this.quotedMsg = (__runInitializers(_this, _quotedMsgId_extraInitializers), __runInitializers(_this, _quotedMsg_initializers, void 0));
            _this.ticketId = (__runInitializers(_this, _quotedMsg_extraInitializers), __runInitializers(_this, _ticketId_initializers, void 0));
            _this.ticket = (__runInitializers(_this, _ticketId_extraInitializers), __runInitializers(_this, _ticket_initializers, void 0));
            _this.contactId = (__runInitializers(_this, _ticket_extraInitializers), __runInitializers(_this, _contactId_initializers, void 0));
            _this.contact = (__runInitializers(_this, _contactId_extraInitializers), __runInitializers(_this, _contact_initializers, void 0));
            _this.companyId = (__runInitializers(_this, _contact_extraInitializers), __runInitializers(_this, _companyId_initializers, void 0));
            _this.company = (__runInitializers(_this, _companyId_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.queueId = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _queueId_initializers, void 0));
            _this.queue = (__runInitializers(_this, _queueId_extraInitializers), __runInitializers(_this, _queue_initializers, void 0));
            _this.isEdited = (__runInitializers(_this, _queue_extraInitializers), __runInitializers(_this, _isEdited_initializers, void 0));
            __runInitializers(_this, _isEdited_extraInitializers);
            return _this;
        }
        Object.defineProperty(Message_1.prototype, "mediaUrl", {
            get: function () {
                if (this.getDataValue("mediaUrl")) {
                    return "".concat(process.env.BACKEND_URL, "/public/").concat(this.getDataValue("mediaUrl"));
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        return Message_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Message");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.Column];
        _remoteJid_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _participant_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _dataJson_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _ack_decorators = [(0, sequelize_typescript_1.Default)(0), sequelize_typescript_1.Column];
        _read_decorators = [(0, sequelize_typescript_1.Default)(false), sequelize_typescript_1.Column];
        _fromMe_decorators = [(0, sequelize_typescript_1.Default)(false), sequelize_typescript_1.Column];
        _body_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)];
        _get_mediaUrl_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _mediaType_decorators = [sequelize_typescript_1.Column];
        _isDeleted_decorators = [(0, sequelize_typescript_1.Default)(false), sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt, (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE(6))];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt, (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE(6))];
        _quotedMsgId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Message; }), sequelize_typescript_1.Column];
        _quotedMsg_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Message; }, "quotedMsgId")];
        _ticketId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Ticket_1.default; }), sequelize_typescript_1.Column];
        _ticket_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Ticket_1.default; })];
        _contactId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Contact_1.default; }), sequelize_typescript_1.Column];
        _contact_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Contact_1.default; }, "contactId")];
        _companyId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Company_1.default; }), sequelize_typescript_1.Column];
        _company_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Company_1.default; })];
        _queueId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Queue_1.default; }), sequelize_typescript_1.Column];
        _queue_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Queue_1.default; })];
        _isEdited_decorators = [(0, sequelize_typescript_1.Default)(false), sequelize_typescript_1.Column];
        __esDecorate(_classThis, null, _get_mediaUrl_decorators, { kind: "getter", name: "mediaUrl", static: false, private: false, access: { has: function (obj) { return "mediaUrl" in obj; }, get: function (obj) { return obj.mediaUrl; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _remoteJid_decorators, { kind: "field", name: "remoteJid", static: false, private: false, access: { has: function (obj) { return "remoteJid" in obj; }, get: function (obj) { return obj.remoteJid; }, set: function (obj, value) { obj.remoteJid = value; } }, metadata: _metadata }, _remoteJid_initializers, _remoteJid_extraInitializers);
        __esDecorate(null, null, _participant_decorators, { kind: "field", name: "participant", static: false, private: false, access: { has: function (obj) { return "participant" in obj; }, get: function (obj) { return obj.participant; }, set: function (obj, value) { obj.participant = value; } }, metadata: _metadata }, _participant_initializers, _participant_extraInitializers);
        __esDecorate(null, null, _dataJson_decorators, { kind: "field", name: "dataJson", static: false, private: false, access: { has: function (obj) { return "dataJson" in obj; }, get: function (obj) { return obj.dataJson; }, set: function (obj, value) { obj.dataJson = value; } }, metadata: _metadata }, _dataJson_initializers, _dataJson_extraInitializers);
        __esDecorate(null, null, _ack_decorators, { kind: "field", name: "ack", static: false, private: false, access: { has: function (obj) { return "ack" in obj; }, get: function (obj) { return obj.ack; }, set: function (obj, value) { obj.ack = value; } }, metadata: _metadata }, _ack_initializers, _ack_extraInitializers);
        __esDecorate(null, null, _read_decorators, { kind: "field", name: "read", static: false, private: false, access: { has: function (obj) { return "read" in obj; }, get: function (obj) { return obj.read; }, set: function (obj, value) { obj.read = value; } }, metadata: _metadata }, _read_initializers, _read_extraInitializers);
        __esDecorate(null, null, _fromMe_decorators, { kind: "field", name: "fromMe", static: false, private: false, access: { has: function (obj) { return "fromMe" in obj; }, get: function (obj) { return obj.fromMe; }, set: function (obj, value) { obj.fromMe = value; } }, metadata: _metadata }, _fromMe_initializers, _fromMe_extraInitializers);
        __esDecorate(null, null, _body_decorators, { kind: "field", name: "body", static: false, private: false, access: { has: function (obj) { return "body" in obj; }, get: function (obj) { return obj.body; }, set: function (obj, value) { obj.body = value; } }, metadata: _metadata }, _body_initializers, _body_extraInitializers);
        __esDecorate(null, null, _mediaType_decorators, { kind: "field", name: "mediaType", static: false, private: false, access: { has: function (obj) { return "mediaType" in obj; }, get: function (obj) { return obj.mediaType; }, set: function (obj, value) { obj.mediaType = value; } }, metadata: _metadata }, _mediaType_initializers, _mediaType_extraInitializers);
        __esDecorate(null, null, _isDeleted_decorators, { kind: "field", name: "isDeleted", static: false, private: false, access: { has: function (obj) { return "isDeleted" in obj; }, get: function (obj) { return obj.isDeleted; }, set: function (obj, value) { obj.isDeleted = value; } }, metadata: _metadata }, _isDeleted_initializers, _isDeleted_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _quotedMsgId_decorators, { kind: "field", name: "quotedMsgId", static: false, private: false, access: { has: function (obj) { return "quotedMsgId" in obj; }, get: function (obj) { return obj.quotedMsgId; }, set: function (obj, value) { obj.quotedMsgId = value; } }, metadata: _metadata }, _quotedMsgId_initializers, _quotedMsgId_extraInitializers);
        __esDecorate(null, null, _quotedMsg_decorators, { kind: "field", name: "quotedMsg", static: false, private: false, access: { has: function (obj) { return "quotedMsg" in obj; }, get: function (obj) { return obj.quotedMsg; }, set: function (obj, value) { obj.quotedMsg = value; } }, metadata: _metadata }, _quotedMsg_initializers, _quotedMsg_extraInitializers);
        __esDecorate(null, null, _ticketId_decorators, { kind: "field", name: "ticketId", static: false, private: false, access: { has: function (obj) { return "ticketId" in obj; }, get: function (obj) { return obj.ticketId; }, set: function (obj, value) { obj.ticketId = value; } }, metadata: _metadata }, _ticketId_initializers, _ticketId_extraInitializers);
        __esDecorate(null, null, _ticket_decorators, { kind: "field", name: "ticket", static: false, private: false, access: { has: function (obj) { return "ticket" in obj; }, get: function (obj) { return obj.ticket; }, set: function (obj, value) { obj.ticket = value; } }, metadata: _metadata }, _ticket_initializers, _ticket_extraInitializers);
        __esDecorate(null, null, _contactId_decorators, { kind: "field", name: "contactId", static: false, private: false, access: { has: function (obj) { return "contactId" in obj; }, get: function (obj) { return obj.contactId; }, set: function (obj, value) { obj.contactId = value; } }, metadata: _metadata }, _contactId_initializers, _contactId_extraInitializers);
        __esDecorate(null, null, _contact_decorators, { kind: "field", name: "contact", static: false, private: false, access: { has: function (obj) { return "contact" in obj; }, get: function (obj) { return obj.contact; }, set: function (obj, value) { obj.contact = value; } }, metadata: _metadata }, _contact_initializers, _contact_extraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _companyId_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _queueId_decorators, { kind: "field", name: "queueId", static: false, private: false, access: { has: function (obj) { return "queueId" in obj; }, get: function (obj) { return obj.queueId; }, set: function (obj, value) { obj.queueId = value; } }, metadata: _metadata }, _queueId_initializers, _queueId_extraInitializers);
        __esDecorate(null, null, _queue_decorators, { kind: "field", name: "queue", static: false, private: false, access: { has: function (obj) { return "queue" in obj; }, get: function (obj) { return obj.queue; }, set: function (obj, value) { obj.queue = value; } }, metadata: _metadata }, _queue_initializers, _queue_extraInitializers);
        __esDecorate(null, null, _isEdited_decorators, { kind: "field", name: "isEdited", static: false, private: false, access: { has: function (obj) { return "isEdited" in obj; }, get: function (obj) { return obj.isEdited; }, set: function (obj, value) { obj.isEdited = value; } }, metadata: _metadata }, _isEdited_initializers, _isEdited_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Message = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Message = _classThis;
}();
exports.default = Message;
