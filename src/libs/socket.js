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
exports.getIO = exports.initIO = void 0;
var socket_io_1 = require("socket.io");
var AppError_1 = require("../errors/AppError");
var logger_1 = require("../utils/logger");
var User_1 = require("../models/User");
var Queue_1 = require("../models/Queue");
var Ticket_1 = require("../models/Ticket");
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = require("../config/auth");
var counter_1 = require("./counter");
var io;
var initIO = function (httpServer) {
    io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL
        }
    });
    io.on("connection", function (socket) { return __awaiter(void 0, void 0, void 0, function () {
        var token, tokenData, counters, user, userId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger_1.logger.info("Client Connected");
                    token = socket.handshake.query.token;
                    tokenData = null;
                    try {
                        tokenData = (0, jsonwebtoken_1.verify)(token, auth_1.default.secret);
                        logger_1.logger.debug(tokenData, "io-onConnection: tokenData");
                    }
                    catch (error) {
                        logger_1.logger.warn("[libs/socket.ts] Error decoding token: ".concat(error === null || error === void 0 ? void 0 : error.message));
                        socket.disconnect();
                        return [2 /*return*/, io];
                    }
                    counters = new counter_1.CounterManager();
                    user = null;
                    userId = tokenData.id;
                    if (!(userId && userId !== "undefined" && userId !== "null")) return [3 /*break*/, 5];
                    return [4 /*yield*/, User_1.default.findByPk(userId, { include: [Queue_1.default] })];
                case 1:
                    user = _a.sent();
                    if (!user) return [3 /*break*/, 3];
                    user.online = true;
                    return [4 /*yield*/, user.save()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    logger_1.logger.info("onConnect: User ".concat(userId, " not found"));
                    socket.disconnect();
                    return [2 /*return*/, io];
                case 4: return [3 /*break*/, 6];
                case 5:
                    logger_1.logger.info("onConnect: Missing userId");
                    socket.disconnect();
                    return [2 /*return*/, io];
                case 6:
                    socket.join("company-".concat(user.companyId, "-mainchannel"));
                    socket.join("user-".concat(user.id));
                    socket.on("joinChatBox", function (ticketId) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (!ticketId || ticketId === "undefined") {
                                return [2 /*return*/];
                            }
                            Ticket_1.default.findByPk(ticketId).then(function (ticket) {
                                if (ticket && ticket.companyId === user.companyId
                                    && (ticket.userId === user.id || user.profile === "admin")) {
                                    var c = void 0;
                                    if ((c = counters.incrementCounter("ticket-".concat(ticketId))) === 1) {
                                        socket.join(ticketId);
                                    }
                                    logger_1.logger.debug("joinChatbox[".concat(c, "]: Channel: ").concat(ticketId, " by user ").concat(user.id));
                                }
                                else {
                                    logger_1.logger.info("Invalid attempt to join channel of ticket ".concat(ticketId, " by user ").concat(user.id));
                                }
                            }, function (error) {
                                logger_1.logger.error(error, "Error fetching ticket ".concat(ticketId));
                            });
                            return [2 /*return*/];
                        });
                    }); });
                    socket.on("leaveChatBox", function (ticketId) { return __awaiter(void 0, void 0, void 0, function () {
                        var c;
                        return __generator(this, function (_a) {
                            if (!ticketId || ticketId === "undefined") {
                                return [2 /*return*/];
                            }
                            // o último que sair apaga a luz
                            if ((c = counters.decrementCounter("ticket-".concat(ticketId))) === 0) {
                                socket.leave(ticketId);
                            }
                            logger_1.logger.debug("leaveChatbox[".concat(c, "]: Channel: ").concat(ticketId, " by user ").concat(user.id));
                            return [2 /*return*/];
                        });
                    }); });
                    socket.on("joinNotification", function () { return __awaiter(void 0, void 0, void 0, function () {
                        var c;
                        return __generator(this, function (_a) {
                            if ((c = counters.incrementCounter("notification")) === 1) {
                                if (user.profile === "admin") {
                                    socket.join("company-".concat(user.companyId, "-notification"));
                                }
                                else {
                                    user.queues.forEach(function (queue) {
                                        logger_1.logger.debug("User ".concat(user.id, " of company ").concat(user.companyId, " joined queue ").concat(queue.id, " channel."));
                                        socket.join("queue-".concat(queue.id, "-notification"));
                                    });
                                    if (user.allTicket === "enabled") {
                                        socket.join("queue-null-notification");
                                    }
                                }
                            }
                            logger_1.logger.debug("joinNotification[".concat(c, "]: User: ").concat(user.id));
                            return [2 /*return*/];
                        });
                    }); });
                    socket.on("leaveNotification", function () { return __awaiter(void 0, void 0, void 0, function () {
                        var c;
                        return __generator(this, function (_a) {
                            if ((c = counters.decrementCounter("notification")) === 0) {
                                if (user.profile === "admin") {
                                    socket.leave("company-".concat(user.companyId, "-notification"));
                                }
                                else {
                                    user.queues.forEach(function (queue) {
                                        logger_1.logger.debug("User ".concat(user.id, " of company ").concat(user.companyId, " leaved queue ").concat(queue.id, " channel."));
                                        socket.leave("queue-".concat(queue.id, "-notification"));
                                    });
                                    if (user.allTicket === "enabled") {
                                        socket.leave("queue-null-notification");
                                    }
                                }
                            }
                            logger_1.logger.debug("leaveNotification[".concat(c, "]: User: ").concat(user.id));
                            return [2 /*return*/];
                        });
                    }); });
                    socket.on("joinTickets", function (status) {
                        if (counters.incrementCounter("status-".concat(status)) === 1) {
                            if (user.profile === "admin") {
                                logger_1.logger.debug("Admin ".concat(user.id, " of company ").concat(user.companyId, " joined ").concat(status, " tickets channel."));
                                socket.join("company-".concat(user.companyId, "-").concat(status));
                            }
                            else if (status === "pending") {
                                user.queues.forEach(function (queue) {
                                    logger_1.logger.debug("User ".concat(user.id, " of company ").concat(user.companyId, " joined queue ").concat(queue.id, " pending tickets channel."));
                                    socket.join("queue-".concat(queue.id, "-pending"));
                                });
                                if (user.allTicket === "enabled") {
                                    socket.join("queue-null-pending");
                                }
                            }
                            else {
                                logger_1.logger.debug("User ".concat(user.id, " cannot subscribe to ").concat(status));
                            }
                        }
                    });
                    socket.on("leaveTickets", function (status) {
                        if (counters.decrementCounter("status-".concat(status)) === 0) {
                            if (user.profile === "admin") {
                                logger_1.logger.debug("Admin ".concat(user.id, " of company ").concat(user.companyId, " leaved ").concat(status, " tickets channel."));
                                socket.leave("company-".concat(user.companyId, "-").concat(status));
                            }
                            else if (status === "pending") {
                                user.queues.forEach(function (queue) {
                                    logger_1.logger.debug("User ".concat(user.id, " of company ").concat(user.companyId, " leaved queue ").concat(queue.id, " pending tickets channel."));
                                    socket.leave("queue-".concat(queue.id, "-pending"));
                                });
                                if (user.allTicket === "enabled") {
                                    socket.leave("queue-null-pending");
                                }
                            }
                        }
                    });
                    socket.emit("ready");
                    return [2 /*return*/];
            }
        });
    }); });
    return io;
};
exports.initIO = initIO;
var getIO = function () {
    if (!io) {
        throw new AppError_1.default("Socket IO not initialized");
    }
    return io;
};
exports.getIO = getIO;
