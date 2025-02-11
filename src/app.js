"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./bootstrap");
require("reflect-metadata");
require("express-async-errors");
var express_1 = require("express");
var cors_1 = require("cors");
var cookie_parser_1 = require("cookie-parser");
var Sentry = require("@sentry/node");
require("./database");
var upload_1 = require("./config/upload");
var AppError_1 = require("./errors/AppError");
var routes_1 = require("./routes");
var logger_1 = require("./utils/logger");
var queues_1 = require("./queues");
var body_parser_1 = require("body-parser");
Sentry.init({ dsn: process.env.SENTRY_DSN });
var app = (0, express_1.default)();
app.set("queues", {
    messageQueue: queues_1.messageQueue,
    sendScheduledMessages: queues_1.sendScheduledMessages
});
var bodyparser = require('body-parser');
app.use(body_parser_1.default.json({ limit: '10mb' }));
app.use((0, cors_1.default)({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(Sentry.Handlers.requestHandler());
app.use("/public", express_1.default.static(upload_1.default.directory));
app.use(routes_1.default);
app.use(Sentry.Handlers.errorHandler());
app.use(function (err, req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (err instanceof AppError_1.default) {
            logger_1.logger.warn(err);
            return [2 /*return*/, res.status(err.statusCode).json({ error: err.message })];
        }
        logger_1.logger.error(err);
        return [2 /*return*/, res.status(500).json({ error: "Internal server error" })];
    });
}); });
exports.default = app;
