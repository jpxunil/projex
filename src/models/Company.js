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
var Contact_1 = require("./Contact");
var Message_1 = require("./Message");
var Plan_1 = require("./Plan");
var Queue_1 = require("./Queue");
var Setting_1 = require("./Setting");
var Ticket_1 = require("./Ticket");
var TicketTraking_1 = require("./TicketTraking");
var User_1 = require("./User");
var UserRating_1 = require("./UserRating");
var Whatsapp_1 = require("./Whatsapp");
var Company = function () {
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
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _dueDate_decorators;
    var _dueDate_initializers = [];
    var _dueDate_extraInitializers = [];
    var _recurrence_decorators;
    var _recurrence_initializers = [];
    var _recurrence_extraInitializers = [];
    var _schedules_decorators;
    var _schedules_initializers = [];
    var _schedules_extraInitializers = [];
    var _planId_decorators;
    var _planId_initializers = [];
    var _planId_extraInitializers = [];
    var _plan_decorators;
    var _plan_initializers = [];
    var _plan_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _users_decorators;
    var _users_initializers = [];
    var _users_extraInitializers = [];
    var _userRatings_decorators;
    var _userRatings_initializers = [];
    var _userRatings_extraInitializers = [];
    var _queues_decorators;
    var _queues_initializers = [];
    var _queues_extraInitializers = [];
    var _whatsapps_decorators;
    var _whatsapps_initializers = [];
    var _whatsapps_extraInitializers = [];
    var _messages_decorators;
    var _messages_initializers = [];
    var _messages_extraInitializers = [];
    var _contacts_decorators;
    var _contacts_initializers = [];
    var _contacts_extraInitializers = [];
    var _settings_decorators;
    var _settings_initializers = [];
    var _settings_extraInitializers = [];
    var _tickets_decorators;
    var _tickets_initializers = [];
    var _tickets_extraInitializers = [];
    var _ticketTrankins_decorators;
    var _ticketTrankins_initializers = [];
    var _ticketTrankins_extraInitializers = [];
    var Company = _classThis = /** @class */ (function (_super) {
        __extends(Company_1, _super);
        function Company_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.name = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.phone = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _phone_initializers, void 0));
            _this.email = (__runInitializers(_this, _phone_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
            _this.status = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.dueDate = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _dueDate_initializers, void 0));
            _this.recurrence = (__runInitializers(_this, _dueDate_extraInitializers), __runInitializers(_this, _recurrence_initializers, void 0));
            _this.schedules = (__runInitializers(_this, _recurrence_extraInitializers), __runInitializers(_this, _schedules_initializers, void 0));
            _this.planId = (__runInitializers(_this, _schedules_extraInitializers), __runInitializers(_this, _planId_initializers, void 0));
            _this.plan = (__runInitializers(_this, _planId_extraInitializers), __runInitializers(_this, _plan_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _plan_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.updatedAt = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _updatedAt_initializers, void 0));
            _this.users = (__runInitializers(_this, _updatedAt_extraInitializers), __runInitializers(_this, _users_initializers, void 0));
            _this.userRatings = (__runInitializers(_this, _users_extraInitializers), __runInitializers(_this, _userRatings_initializers, void 0));
            _this.queues = (__runInitializers(_this, _userRatings_extraInitializers), __runInitializers(_this, _queues_initializers, void 0));
            _this.whatsapps = (__runInitializers(_this, _queues_extraInitializers), __runInitializers(_this, _whatsapps_initializers, void 0));
            _this.messages = (__runInitializers(_this, _whatsapps_extraInitializers), __runInitializers(_this, _messages_initializers, void 0));
            _this.contacts = (__runInitializers(_this, _messages_extraInitializers), __runInitializers(_this, _contacts_initializers, void 0));
            _this.settings = (__runInitializers(_this, _contacts_extraInitializers), __runInitializers(_this, _settings_initializers, void 0));
            _this.tickets = (__runInitializers(_this, _settings_extraInitializers), __runInitializers(_this, _tickets_initializers, void 0));
            _this.ticketTrankins = (__runInitializers(_this, _tickets_extraInitializers), __runInitializers(_this, _ticketTrankins_initializers, void 0));
            __runInitializers(_this, _ticketTrankins_extraInitializers);
            return _this;
        }
        return Company_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Company");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [sequelize_typescript_1.Column];
        _phone_decorators = [sequelize_typescript_1.Column];
        _email_decorators = [sequelize_typescript_1.Column];
        _status_decorators = [sequelize_typescript_1.Column];
        _dueDate_decorators = [sequelize_typescript_1.Column];
        _recurrence_decorators = [sequelize_typescript_1.Column];
        _schedules_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.JSONB
            })];
        _planId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return Plan_1.default; }), sequelize_typescript_1.Column];
        _plan_decorators = [(0, sequelize_typescript_1.BelongsTo)(function () { return Plan_1.default; })];
        _createdAt_decorators = [sequelize_typescript_1.CreatedAt];
        _updatedAt_decorators = [sequelize_typescript_1.UpdatedAt];
        _users_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return User_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _userRatings_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return UserRating_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _queues_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Queue_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _whatsapps_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Whatsapp_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _messages_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Message_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _contacts_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Contact_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _settings_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Setting_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _tickets_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return Ticket_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        _ticketTrankins_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return TicketTraking_1.default; }, {
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                hooks: true
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _dueDate_decorators, { kind: "field", name: "dueDate", static: false, private: false, access: { has: function (obj) { return "dueDate" in obj; }, get: function (obj) { return obj.dueDate; }, set: function (obj, value) { obj.dueDate = value; } }, metadata: _metadata }, _dueDate_initializers, _dueDate_extraInitializers);
        __esDecorate(null, null, _recurrence_decorators, { kind: "field", name: "recurrence", static: false, private: false, access: { has: function (obj) { return "recurrence" in obj; }, get: function (obj) { return obj.recurrence; }, set: function (obj, value) { obj.recurrence = value; } }, metadata: _metadata }, _recurrence_initializers, _recurrence_extraInitializers);
        __esDecorate(null, null, _schedules_decorators, { kind: "field", name: "schedules", static: false, private: false, access: { has: function (obj) { return "schedules" in obj; }, get: function (obj) { return obj.schedules; }, set: function (obj, value) { obj.schedules = value; } }, metadata: _metadata }, _schedules_initializers, _schedules_extraInitializers);
        __esDecorate(null, null, _planId_decorators, { kind: "field", name: "planId", static: false, private: false, access: { has: function (obj) { return "planId" in obj; }, get: function (obj) { return obj.planId; }, set: function (obj, value) { obj.planId = value; } }, metadata: _metadata }, _planId_initializers, _planId_extraInitializers);
        __esDecorate(null, null, _plan_decorators, { kind: "field", name: "plan", static: false, private: false, access: { has: function (obj) { return "plan" in obj; }, get: function (obj) { return obj.plan; }, set: function (obj, value) { obj.plan = value; } }, metadata: _metadata }, _plan_initializers, _plan_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: function (obj) { return "users" in obj; }, get: function (obj) { return obj.users; }, set: function (obj, value) { obj.users = value; } }, metadata: _metadata }, _users_initializers, _users_extraInitializers);
        __esDecorate(null, null, _userRatings_decorators, { kind: "field", name: "userRatings", static: false, private: false, access: { has: function (obj) { return "userRatings" in obj; }, get: function (obj) { return obj.userRatings; }, set: function (obj, value) { obj.userRatings = value; } }, metadata: _metadata }, _userRatings_initializers, _userRatings_extraInitializers);
        __esDecorate(null, null, _queues_decorators, { kind: "field", name: "queues", static: false, private: false, access: { has: function (obj) { return "queues" in obj; }, get: function (obj) { return obj.queues; }, set: function (obj, value) { obj.queues = value; } }, metadata: _metadata }, _queues_initializers, _queues_extraInitializers);
        __esDecorate(null, null, _whatsapps_decorators, { kind: "field", name: "whatsapps", static: false, private: false, access: { has: function (obj) { return "whatsapps" in obj; }, get: function (obj) { return obj.whatsapps; }, set: function (obj, value) { obj.whatsapps = value; } }, metadata: _metadata }, _whatsapps_initializers, _whatsapps_extraInitializers);
        __esDecorate(null, null, _messages_decorators, { kind: "field", name: "messages", static: false, private: false, access: { has: function (obj) { return "messages" in obj; }, get: function (obj) { return obj.messages; }, set: function (obj, value) { obj.messages = value; } }, metadata: _metadata }, _messages_initializers, _messages_extraInitializers);
        __esDecorate(null, null, _contacts_decorators, { kind: "field", name: "contacts", static: false, private: false, access: { has: function (obj) { return "contacts" in obj; }, get: function (obj) { return obj.contacts; }, set: function (obj, value) { obj.contacts = value; } }, metadata: _metadata }, _contacts_initializers, _contacts_extraInitializers);
        __esDecorate(null, null, _settings_decorators, { kind: "field", name: "settings", static: false, private: false, access: { has: function (obj) { return "settings" in obj; }, get: function (obj) { return obj.settings; }, set: function (obj, value) { obj.settings = value; } }, metadata: _metadata }, _settings_initializers, _settings_extraInitializers);
        __esDecorate(null, null, _tickets_decorators, { kind: "field", name: "tickets", static: false, private: false, access: { has: function (obj) { return "tickets" in obj; }, get: function (obj) { return obj.tickets; }, set: function (obj, value) { obj.tickets = value; } }, metadata: _metadata }, _tickets_initializers, _tickets_extraInitializers);
        __esDecorate(null, null, _ticketTrankins_decorators, { kind: "field", name: "ticketTrankins", static: false, private: false, access: { has: function (obj) { return "ticketTrankins" in obj; }, get: function (obj) { return obj.ticketTrankins; }, set: function (obj, value) { obj.ticketTrankins = value; } }, metadata: _metadata }, _ticketTrankins_initializers, _ticketTrankins_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Company = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Company = _classThis;
}();
exports.default = Company;
