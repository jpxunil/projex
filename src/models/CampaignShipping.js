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
var Campaign_1 = require("./Campaign");
var ContactListItem_1 = require("./ContactListItem");
var CampaignShipping = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: "CampaignShipping" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _jobId_decorators;
    var _jobId_initializers = [];
    var _jobId_extraInitializers = [];
    var _number_decorators;
    var _number_initializers = [];
    var _number_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var _confirmationMessage_decorators;
    var _confirmationMessage_initializers = [];
    var _confirmationMessage_extraInitializers = [];
    var _confirmation_decorators;
    var _confirmation_initializers = [];
    var _confirmation_extraInitializers = [];
    var _contactId_decorators;
    var _contactId_initializers = [];
    var _contactId_extraInitializers = [];
    var _campaignId_decorators;
    var _campaignId_initializers = [];
    var _campaignId_extraInitializers = [];
    var _confirmationRequestedAt_decorators;
    var _confirmationRequestedAt_initializers = [];
    var _confirmationRequestedAt_extraInitializers = [];
    var _confirmedAt_decorators;
    var _confirmedAt_initializers = [];
    var _confirmedAt_extraInitializers = [];
    var _deliveredAt_decorators;
    var _deliveredAt_initializers = [];
    var _deliveredAt_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _contact_decorators;
    var _contact_initializers = [];
    var _contact_extraInitializers = [];
    var _campaign_decorators;
    var _campaign_initializers = [];
    var _campaign_extraInitializers = [];
    var CampaignShipping = _classThis = /** @class */ (function (_super) {
        __extends(CampaignShipping_1, _super);
        function CampaignShipping_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.jobId = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _jobId_initializers, void 0));
            _this.number = (__runInitializers(_this, _jobId_extraInitializers), __runInitializers(_this, _number_initializers, void 0));
            _this.message = (__runInitializers(_this, _number_extraInitializers), __runInitializers(_this, _message_initializers, void 0));
            _this.confirmationMessage = (__runInitializers(_this, _message_extraInitializers), __runInitializers(_this, _confirmationMessage_initializers, void 0));
            _this.confirmation = (__runInitializers(_this, _confirmationMessage_extraInitializers), __runInitializers(_this, _confirmation_initializers, void 0));
            _this.contactId = (__runInitializers(_this, _confirmation_extraInitializers), __runInitializers(_this, _contactId_initializers, void 0));
            _this.campaignId = (__runInitializers(_this, _contactId_extraInitializers), __runInitializers(_this, _campaignId_initializers, void 0));
            _this.confirmationRequestedAt = (__runInitializers(_this, _campaignId_extraInitializers), __runInitializers(_this, _confirmationRequestedAt_initializers, void 0));
            _this.confirmedAt = (__runInitializers(_this, _confirmationRequestedAt_extraInitializers), __runInitializers(_this, _confirmedAt_initializers, void 0));
            _this.deliveredAt = (__runInitializers(_this, _confirmedAt_extraInitializers), __runInitializers(_this, _deliveredAt_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _deliveredAt_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.contact = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _contact_initializers, void 0));
            _this.campaign = (__runInitializers(_this, _contact_extraInitializers), __runInitializers(_this, _campaign_initializers, void 0));
            __runInitializers(_this, _campaign_extraInitializers);
            return _this;
        }
        return CampaignShipping_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CampaignShipping");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _jobId_decorators = [sequelize_typescript_1.Column];
        _number_decorators = [sequelize_typescript_1.Column];
        _message_decorators = [sequelize_typescript_1.Column];
        _confirmationMessage_decorators = [sequelize_typescript_1.Column];
        _confirmation_decorators = [sequelize_typescript_1.Column];
        _contactId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return ContactListItem_1.default; }), sequelize_typescript_1.Column];
        _campaignId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Campaign_1.default; }), sequelize_typescript_1.Column];
        _confirmationRequestedAt_decorators = [sequelize_typescript_1.Column];
        _confirmedAt_decorators = [sequelize_typescript_1.Column];
        _deliveredAt_decorators = [sequelize_typescript_1.Column];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _contact_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return ContactListItem_1.default; })];
        _campaign_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Campaign_1.default; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _jobId_decorators, { kind: "field", name: "jobId", static: false, private: false, access: { has: function (obj) { return "jobId" in obj; }, get: function (obj) { return obj.jobId; }, set: function (obj, value) { obj.jobId = value; } }, metadata: _metadata }, _jobId_initializers, _jobId_extraInitializers);
        __esDecorate(null, null, _number_decorators, { kind: "field", name: "number", static: false, private: false, access: { has: function (obj) { return "number" in obj; }, get: function (obj) { return obj.number; }, set: function (obj, value) { obj.number = value; } }, metadata: _metadata }, _number_initializers, _number_extraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
        __esDecorate(null, null, _confirmationMessage_decorators, { kind: "field", name: "confirmationMessage", static: false, private: false, access: { has: function (obj) { return "confirmationMessage" in obj; }, get: function (obj) { return obj.confirmationMessage; }, set: function (obj, value) { obj.confirmationMessage = value; } }, metadata: _metadata }, _confirmationMessage_initializers, _confirmationMessage_extraInitializers);
        __esDecorate(null, null, _confirmation_decorators, { kind: "field", name: "confirmation", static: false, private: false, access: { has: function (obj) { return "confirmation" in obj; }, get: function (obj) { return obj.confirmation; }, set: function (obj, value) { obj.confirmation = value; } }, metadata: _metadata }, _confirmation_initializers, _confirmation_extraInitializers);
        __esDecorate(null, null, _contactId_decorators, { kind: "field", name: "contactId", static: false, private: false, access: { has: function (obj) { return "contactId" in obj; }, get: function (obj) { return obj.contactId; }, set: function (obj, value) { obj.contactId = value; } }, metadata: _metadata }, _contactId_initializers, _contactId_extraInitializers);
        __esDecorate(null, null, _campaignId_decorators, { kind: "field", name: "campaignId", static: false, private: false, access: { has: function (obj) { return "campaignId" in obj; }, get: function (obj) { return obj.campaignId; }, set: function (obj, value) { obj.campaignId = value; } }, metadata: _metadata }, _campaignId_initializers, _campaignId_extraInitializers);
        __esDecorate(null, null, _confirmationRequestedAt_decorators, { kind: "field", name: "confirmationRequestedAt", static: false, private: false, access: { has: function (obj) { return "confirmationRequestedAt" in obj; }, get: function (obj) { return obj.confirmationRequestedAt; }, set: function (obj, value) { obj.confirmationRequestedAt = value; } }, metadata: _metadata }, _confirmationRequestedAt_initializers, _confirmationRequestedAt_extraInitializers);
        __esDecorate(null, null, _confirmedAt_decorators, { kind: "field", name: "confirmedAt", static: false, private: false, access: { has: function (obj) { return "confirmedAt" in obj; }, get: function (obj) { return obj.confirmedAt; }, set: function (obj, value) { obj.confirmedAt = value; } }, metadata: _metadata }, _confirmedAt_initializers, _confirmedAt_extraInitializers);
        __esDecorate(null, null, _deliveredAt_decorators, { kind: "field", name: "deliveredAt", static: false, private: false, access: { has: function (obj) { return "deliveredAt" in obj; }, get: function (obj) { return obj.deliveredAt; }, set: function (obj, value) { obj.deliveredAt = value; } }, metadata: _metadata }, _deliveredAt_initializers, _deliveredAt_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _contact_decorators, { kind: "field", name: "contact", static: false, private: false, access: { has: function (obj) { return "contact" in obj; }, get: function (obj) { return obj.contact; }, set: function (obj, value) { obj.contact = value; } }, metadata: _metadata }, _contact_initializers, _contact_extraInitializers);
        __esDecorate(null, null, _campaign_decorators, { kind: "field", name: "campaign", static: false, private: false, access: { has: function (obj) { return "campaign" in obj; }, get: function (obj) { return obj.campaign; }, set: function (obj, value) { obj.campaign = value; } }, metadata: _metadata }, _campaign_initializers, _campaign_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CampaignShipping = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CampaignShipping = _classThis;
}();
exports.default = CampaignShipping;
