"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.campaignQueue = exports.sendScheduledMessages = exports.scheduleMonitor = exports.messageQueue = exports.queueMonitor = exports.userMonitor = void 0;
exports.parseToMilliseconds = parseToMilliseconds;
exports.randomValue = randomValue;
exports.startQueueProcess = startQueueProcess;
var Sentry = require("@sentry/node");
var bull_1 = require("bull");
var SendMessage_1 = require("./helpers/SendMessage");
var Whatsapp_1 = require("./models/Whatsapp");
var logger_1 = require("./utils/logger");
var moment_1 = require("moment");
var Schedule_1 = require("./models/Schedule");
var Contact_1 = require("./models/Contact");
var sequelize_1 = require("sequelize");
var GetDefaultWhatsApp_1 = require("./helpers/GetDefaultWhatsApp");
var Campaign_1 = require("./models/Campaign");
var ContactList_1 = require("./models/ContactList");
var ContactListItem_1 = require("./models/ContactListItem");
var lodash_1 = require("lodash");
var CampaignSetting_1 = require("./models/CampaignSetting");
var CampaignShipping_1 = require("./models/CampaignShipping");
var GetWhatsappWbot_1 = require("./helpers/GetWhatsappWbot");
var database_1 = require("./database");
var SendWhatsAppMedia_1 = require("./services/WbotServices/SendWhatsAppMedia");
var socket_1 = require("./libs/socket");
var path_1 = require("path");
var User_1 = require("./models/User");
var Company_1 = require("./models/Company");
var Plan_1 = require("./models/Plan");
var ShowService_1 = require("./services/FileServices/ShowService");
var date_fns_1 = require("date-fns");
var Mustache_1 = require("./helpers/Mustache");
var wbotClosedTickets_1 = require("./services/WbotServices/wbotClosedTickets");
var nodemailer = require('nodemailer');
var CronJob = require('cron').CronJob;
var connection = process.env.REDIS_URI || "";
var limiterMax = process.env.REDIS_OPT_LIMITER_MAX || 1;
var limiterDuration = process.env.REDIS_OPT_LIMITER_DURATION || 3000;
exports.userMonitor = new bull_1.default("UserMonitor", connection);
exports.queueMonitor = new bull_1.default("QueueMonitor", connection);
exports.messageQueue = new bull_1.default("MessageQueue", connection, {
    limiter: {
        max: limiterMax,
        duration: limiterDuration
    }
});
exports.scheduleMonitor = new bull_1.default("ScheduleMonitor", connection);
exports.sendScheduledMessages = new bull_1.default("SendSacheduledMessages", connection);
exports.campaignQueue = new bull_1.default("CampaignQueue", connection);
function handleSendMessage(job) {
    return __awaiter(this, void 0, void 0, function () {
        var data, whatsapp, messageData, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    data = job.data;
                    return [4 /*yield*/, Whatsapp_1.default.findByPk(data.whatsappId)];
                case 1:
                    whatsapp = _a.sent();
                    if (whatsapp == null) {
                        throw Error("Whatsapp não identificado");
                    }
                    messageData = data.data;
                    return [4 /*yield*/, (0, SendMessage_1.SendMessage)(whatsapp, messageData)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    Sentry.captureException(e_1);
                    logger_1.logger.error("MessageQueue -> SendMessage: error", e_1.message);
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
{ /*async function handleVerifyQueue(job) {
  logger.info("Buscando atendimentos perdidos nas filas");
  try {
    const companies = await Company.findAll({
      attributes: ['id', 'name'],
      where: {
        status: true,
        dueDate: {
          [Op.gt]: Sequelize.literal('CURRENT_DATE')
        }
      },
      include: [
        {
          model: Whatsapp, attributes: ["id", "name", "status", "timeSendQueue", "sendIdQueue"], where: {
            timeSendQueue: {
              [Op.gt]: 0
            }
          }
        },
      ]
    }); */
}
{ /*    companies.map(async c => {
      c.whatsapps.map(async w => {

        if (w.status === "CONNECTED") {

          var companyId = c.id;

          const moveQueue = w.timeSendQueue ? w.timeSendQueue : 0;
          const moveQueueId = w.sendIdQueue;
          const moveQueueTime = moveQueue;
          const idQueue = moveQueueId;
          const timeQueue = moveQueueTime;

          if (moveQueue > 0) {

            if (!isNaN(idQueue) && Number.isInteger(idQueue) && !isNaN(timeQueue) && Number.isInteger(timeQueue)) {

              const tempoPassado = moment().subtract(timeQueue, "minutes").utc().format();
              // const tempoAgora = moment().utc().format();

              const { count, rows: tickets } = await Ticket.findAndCountAll({
                where: {
                  status: "pending",
                  queueId: null,
                  companyId: companyId,
                  whatsappId: w.id,
                  updatedAt: {
                    [Op.lt]: tempoPassado
                  }
                },
                include: [
                  {
                    model: Contact,
                    as: "contact",
                    attributes: ["id", "name", "number", "email", "profilePicUrl"],
                    include: ["extraInfo"]
                  }
                ]
              });

              if (count > 0) {
                tickets.map(async ticket => {
                  await ticket.update({
                    queueId: idQueue
                  });

                  await ticket.reload();

                  const io = getIO();
                  io.to(ticket.status)
                    .to("notification")
                    .to(ticket.id.toString())
                    .emit(`company-${companyId}-ticket`, {
                      action: "update",
                      ticket,
                      ticketId: ticket.id
                    });

                  // io.to("pending").emit(`company-${companyId}-ticket`, {
                  //   action: "update",
                  //   ticket,
                  // });

                  logger.info(`Atendimento Perdido: ${ticket.id} - Empresa: ${companyId}`);
                });
              } else {
                logger.info(`Nenhum atendimento perdido encontrado - Empresa: ${companyId}`);
              }
            } else {
              logger.info(`Condição não respeitada - Empresa: ${companyId}`);
            }
          }
        }
      });
    });
  } catch (e: any) {
    Sentry.captureException(e);
    logger.error("SearchForQueue -> VerifyQueue: error", e.message);
    throw e;
  }
}; */
}
function handleCloseTicketsAutomatic() {
    return __awaiter(this, void 0, void 0, function () {
        var job;
        var _this = this;
        return __generator(this, function (_a) {
            job = new CronJob('*/1 * * * *', function () { return __awaiter(_this, void 0, void 0, function () {
                var companies;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Company_1.default.findAll()];
                        case 1:
                            companies = _a.sent();
                            companies.map(function (c) { return __awaiter(_this, void 0, void 0, function () {
                                var companyId, e_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            companyId = c.id;
                                            return [4 /*yield*/, (0, wbotClosedTickets_1.ClosedAllOpenTickets)(companyId)];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_2 = _a.sent();
                                            Sentry.captureException(e_2);
                                            logger_1.logger.error("ClosedAllOpenTickets -> Verify: error", e_2.message);
                                            throw e_2;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            }); });
            job.start();
            return [2 /*return*/];
        });
    });
}
function handleVerifySchedules(job) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, count, schedules, e_3;
        var _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Schedule_1.default.findAndCountAll({
                            where: {
                                status: "PENDENTE",
                                sentAt: null,
                                sendAt: (_b = {},
                                    _b[sequelize_1.Op.gte] = (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
                                    _b[sequelize_1.Op.lte] = (0, moment_1.default)().add("30", "seconds").format("YYYY-MM-DD HH:mm:ss"),
                                    _b)
                            },
                            include: [{ model: Contact_1.default, as: "contact" }]
                        })];
                case 1:
                    _a = _c.sent(), count = _a.count, schedules = _a.rows;
                    if (count > 0) {
                        schedules.map(function (schedule) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, schedule.update({
                                            status: "AGENDADA"
                                        })];
                                    case 1:
                                        _a.sent();
                                        exports.sendScheduledMessages.add("SendMessage", { schedule: schedule }, { delay: 40000 });
                                        logger_1.logger.info("Disparo agendado para: ".concat(schedule.contact.name));
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _c.sent();
                    Sentry.captureException(e_3);
                    logger_1.logger.error("SendScheduledMessage -> Verify: error", e_3.message);
                    throw e_3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSendScheduledMessage(job) {
    return __awaiter(this, void 0, void 0, function () {
        var schedule, scheduleRecord, e_4, whatsapp, filePath, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    schedule = job.data.schedule;
                    scheduleRecord = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Schedule_1.default.findByPk(schedule.id)];
                case 2:
                    scheduleRecord = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    Sentry.captureException(e_4);
                    logger_1.logger.info("Erro ao tentar consultar agendamento: ".concat(schedule.id));
                    return [3 /*break*/, 4];
                case 4:
                    _a.trys.push([4, 8, , 10]);
                    return [4 /*yield*/, (0, GetDefaultWhatsApp_1.default)(schedule.companyId)];
                case 5:
                    whatsapp = _a.sent();
                    filePath = null;
                    if (schedule.mediaPath) {
                        filePath = path_1.default.resolve("public", schedule.mediaPath);
                    }
                    return [4 /*yield*/, (0, SendMessage_1.SendMessage)(whatsapp, {
                            number: schedule.contact.number,
                            body: (0, Mustache_1.default)(schedule.body, schedule.contact),
                            mediaPath: filePath
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, (scheduleRecord === null || scheduleRecord === void 0 ? void 0 : scheduleRecord.update({
                            sentAt: (0, moment_1.default)().format("YYYY-MM-DD HH:mm"),
                            status: "ENVIADA"
                        }))];
                case 7:
                    _a.sent();
                    logger_1.logger.info("Mensagem agendada enviada para: ".concat(schedule.contact.name));
                    exports.sendScheduledMessages.clean(15000, "completed");
                    return [3 /*break*/, 10];
                case 8:
                    e_5 = _a.sent();
                    Sentry.captureException(e_5);
                    return [4 /*yield*/, (scheduleRecord === null || scheduleRecord === void 0 ? void 0 : scheduleRecord.update({
                            status: "ERRO"
                        }))];
                case 9:
                    _a.sent();
                    logger_1.logger.error("SendScheduledMessage -> SendMessage: error", e_5.message);
                    throw e_5;
                case 10: return [2 /*return*/];
            }
        });
    });
}
function handleVerifyCampaigns(job) {
    return __awaiter(this, void 0, void 0, function () {
        var campaigns, _i, campaigns_1, campaign, now, scheduledAt, delay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.query("select id, \"scheduledAt\" from \"Campaigns\" c\n    where \"scheduledAt\" between now() and now() + '1 hour'::interval and status = 'PROGRAMADA'", { type: sequelize_1.QueryTypes.SELECT })];
                case 1:
                    campaigns = _a.sent();
                    if (campaigns.length > 0)
                        logger_1.logger.info("Campanhas encontradas: ".concat(campaigns.length));
                    for (_i = 0, campaigns_1 = campaigns; _i < campaigns_1.length; _i++) {
                        campaign = campaigns_1[_i];
                        try {
                            now = (0, moment_1.default)();
                            scheduledAt = (0, moment_1.default)(campaign.scheduledAt);
                            delay = scheduledAt.diff(now, "milliseconds");
                            logger_1.logger.info("Campanha enviada para a fila de processamento: Campanha=".concat(campaign.id, ", Delay Inicial=").concat(delay));
                            exports.campaignQueue.add("ProcessCampaign", {
                                id: campaign.id,
                                delay: delay
                            }, {
                                removeOnComplete: true
                            });
                        }
                        catch (err) {
                            Sentry.captureException(err);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getCampaign(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Campaign_1.default.findByPk(id, {
                        include: [
                            {
                                model: ContactList_1.default,
                                as: "contactList",
                                attributes: ["id", "name"],
                                include: [
                                    {
                                        model: ContactListItem_1.default,
                                        as: "contacts",
                                        attributes: ["id", "name", "number", "email", "isWhatsappValid"],
                                        where: { isWhatsappValid: true }
                                    }
                                ]
                            },
                            {
                                model: Whatsapp_1.default,
                                as: "whatsapp",
                                attributes: ["id", "name"]
                            },
                            {
                                model: CampaignShipping_1.default,
                                as: "shipping",
                                include: [{ model: ContactListItem_1.default, as: "contact" }]
                            }
                        ]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getContact(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ContactListItem_1.default.findByPk(id, {
                        attributes: ["id", "name", "number", "email"]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getSettings(campaign) {
    return __awaiter(this, void 0, void 0, function () {
        var settings, messageInterval, longerIntervalAfter, greaterInterval, variables;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CampaignSetting_1.default.findAll({
                        where: { companyId: campaign.companyId },
                        attributes: ["key", "value"]
                    })];
                case 1:
                    settings = _a.sent();
                    messageInterval = 20;
                    longerIntervalAfter = 20;
                    greaterInterval = 60;
                    variables = [];
                    settings.forEach(function (setting) {
                        if (setting.key === "messageInterval") {
                            messageInterval = JSON.parse(setting.value);
                        }
                        if (setting.key === "longerIntervalAfter") {
                            longerIntervalAfter = JSON.parse(setting.value);
                        }
                        if (setting.key === "greaterInterval") {
                            greaterInterval = JSON.parse(setting.value);
                        }
                        if (setting.key === "variables") {
                            variables = JSON.parse(setting.value);
                        }
                    });
                    return [2 /*return*/, {
                            messageInterval: messageInterval,
                            longerIntervalAfter: longerIntervalAfter,
                            greaterInterval: greaterInterval,
                            variables: variables
                        }];
            }
        });
    });
}
function parseToMilliseconds(seconds) {
    return seconds * 1000;
}
function sleep(seconds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            logger_1.logger.info("Sleep de ".concat(seconds, " segundos iniciado: ").concat((0, moment_1.default)().format("HH:mm:ss")));
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        logger_1.logger.info("Sleep de ".concat(seconds, " segundos finalizado: ").concat((0, moment_1.default)().format("HH:mm:ss")));
                        resolve(true);
                    }, parseToMilliseconds(seconds));
                })];
        });
    });
}
function getCampaignValidMessages(campaign) {
    var messages = [];
    if (!(0, lodash_1.isEmpty)(campaign.message1) && !(0, lodash_1.isNil)(campaign.message1)) {
        messages.push(campaign.message1);
    }
    if (!(0, lodash_1.isEmpty)(campaign.message2) && !(0, lodash_1.isNil)(campaign.message2)) {
        messages.push(campaign.message2);
    }
    if (!(0, lodash_1.isEmpty)(campaign.message3) && !(0, lodash_1.isNil)(campaign.message3)) {
        messages.push(campaign.message3);
    }
    if (!(0, lodash_1.isEmpty)(campaign.message4) && !(0, lodash_1.isNil)(campaign.message4)) {
        messages.push(campaign.message4);
    }
    if (!(0, lodash_1.isEmpty)(campaign.message5) && !(0, lodash_1.isNil)(campaign.message5)) {
        messages.push(campaign.message5);
    }
    return messages;
}
function getCampaignValidConfirmationMessages(campaign) {
    var messages = [];
    if (!(0, lodash_1.isEmpty)(campaign.confirmationMessage1) &&
        !(0, lodash_1.isNil)(campaign.confirmationMessage1)) {
        messages.push(campaign.confirmationMessage1);
    }
    if (!(0, lodash_1.isEmpty)(campaign.confirmationMessage2) &&
        !(0, lodash_1.isNil)(campaign.confirmationMessage2)) {
        messages.push(campaign.confirmationMessage2);
    }
    if (!(0, lodash_1.isEmpty)(campaign.confirmationMessage3) &&
        !(0, lodash_1.isNil)(campaign.confirmationMessage3)) {
        messages.push(campaign.confirmationMessage3);
    }
    if (!(0, lodash_1.isEmpty)(campaign.confirmationMessage4) &&
        !(0, lodash_1.isNil)(campaign.confirmationMessage4)) {
        messages.push(campaign.confirmationMessage4);
    }
    if (!(0, lodash_1.isEmpty)(campaign.confirmationMessage5) &&
        !(0, lodash_1.isNil)(campaign.confirmationMessage5)) {
        messages.push(campaign.confirmationMessage5);
    }
    return messages;
}
function getProcessedMessage(msg, variables, contact) {
    var finalMessage = msg;
    if (finalMessage.includes("{nome}")) {
        finalMessage = finalMessage.replace(/{nome}/g, contact.name);
    }
    if (finalMessage.includes("{email}")) {
        finalMessage = finalMessage.replace(/{email}/g, contact.email);
    }
    if (finalMessage.includes("{numero}")) {
        finalMessage = finalMessage.replace(/{numero}/g, contact.number);
    }
    variables.forEach(function (variable) {
        if (finalMessage.includes("{".concat(variable.key, "}"))) {
            var regex = new RegExp("{".concat(variable.key, "}"), "g");
            finalMessage = finalMessage.replace(regex, variable.value);
        }
    });
    return finalMessage;
}
function randomValue(min, max) {
    return Math.floor(Math.random() * max) + min;
}
function verifyAndFinalizeCampaign(campaign) {
    return __awaiter(this, void 0, void 0, function () {
        var contacts, count1, count2, io;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    contacts = campaign.contactList.contacts;
                    count1 = contacts.length;
                    return [4 /*yield*/, CampaignShipping_1.default.count({
                            where: {
                                campaignId: campaign.id,
                                deliveredAt: (_a = {},
                                    _a[sequelize_1.Op.not] = null,
                                    _a)
                            }
                        })];
                case 1:
                    count2 = _b.sent();
                    if (!(count1 === count2)) return [3 /*break*/, 3];
                    return [4 /*yield*/, campaign.update({ status: "FINALIZADA", completedAt: (0, moment_1.default)() })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    io = (0, socket_1.getIO)();
                    io.to("company-".concat(campaign.companyId, "-mainchannel")).emit("company-".concat(campaign.companyId, "-campaign"), {
                        action: "update",
                        record: campaign
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function calculateDelay(index, baseDelay, longerIntervalAfter, greaterInterval, messageInterval) {
    var diffSeconds = (0, date_fns_1.differenceInSeconds)(baseDelay, new Date());
    if (index > longerIntervalAfter) {
        return diffSeconds * 1000 + greaterInterval;
    }
    else {
        return diffSeconds * 1000 + messageInterval;
    }
}
function handleProcessCampaign(job) {
    return __awaiter(this, void 0, void 0, function () {
        var id, campaign_1, settings_1, contacts, contactData, longerIntervalAfter, greaterInterval, messageInterval, baseDelay, queuePromises, i, _a, contactId, campaignId, variables, delay, queuePromise, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    id = job.data.id;
                    return [4 /*yield*/, getCampaign(id)];
                case 1:
                    campaign_1 = _b.sent();
                    return [4 /*yield*/, getSettings(campaign_1)];
                case 2:
                    settings_1 = _b.sent();
                    if (!campaign_1) return [3 /*break*/, 5];
                    contacts = campaign_1.contactList.contacts;
                    if (!(0, lodash_1.isArray)(contacts)) return [3 /*break*/, 5];
                    contactData = contacts.map(function (contact) { return ({
                        contactId: contact.id,
                        campaignId: campaign_1.id,
                        variables: settings_1.variables,
                    }); });
                    longerIntervalAfter = parseToMilliseconds(settings_1.longerIntervalAfter);
                    greaterInterval = parseToMilliseconds(settings_1.greaterInterval);
                    messageInterval = settings_1.messageInterval;
                    baseDelay = campaign_1.scheduledAt;
                    queuePromises = [];
                    for (i = 0; i < contactData.length; i++) {
                        baseDelay = (0, date_fns_1.addSeconds)(baseDelay, i > longerIntervalAfter ? greaterInterval : messageInterval);
                        _a = contactData[i], contactId = _a.contactId, campaignId = _a.campaignId, variables = _a.variables;
                        delay = calculateDelay(i, baseDelay, longerIntervalAfter, greaterInterval, messageInterval);
                        queuePromise = exports.campaignQueue.add("PrepareContact", { contactId: contactId, campaignId: campaignId, variables: variables, delay: delay }, { removeOnComplete: true });
                        queuePromises.push(queuePromise);
                        logger_1.logger.info("Registro enviado pra fila de disparo: Campanha=".concat(campaign_1.id, ";Contato=").concat(contacts[i].name, ";delay=").concat(delay));
                    }
                    return [4 /*yield*/, Promise.all(queuePromises)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, campaign_1.update({ status: "EM_ANDAMENTO" })];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _b.sent();
                    Sentry.captureException(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function handlePrepareContact(job) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, contactId, campaignId, delay, variables, campaign, contact, campaignShipping, messages, radomIndex, message, confirmationMessages, radomIndex, message, _b, record, created, nextJob, err_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 10, , 11]);
                    _a = job.data, contactId = _a.contactId, campaignId = _a.campaignId, delay = _a.delay, variables = _a.variables;
                    return [4 /*yield*/, getCampaign(campaignId)];
                case 1:
                    campaign = _c.sent();
                    return [4 /*yield*/, getContact(contactId)];
                case 2:
                    contact = _c.sent();
                    campaignShipping = {};
                    campaignShipping.number = contact.number;
                    campaignShipping.contactId = contactId;
                    campaignShipping.campaignId = campaignId;
                    messages = getCampaignValidMessages(campaign);
                    if (messages.length) {
                        radomIndex = randomValue(0, messages.length);
                        message = getProcessedMessage(messages[radomIndex], variables, contact);
                        campaignShipping.message = "\u200C ".concat(message);
                    }
                    if (campaign.confirmation) {
                        confirmationMessages = getCampaignValidConfirmationMessages(campaign);
                        if (confirmationMessages.length) {
                            radomIndex = randomValue(0, confirmationMessages.length);
                            message = getProcessedMessage(confirmationMessages[radomIndex], variables, contact);
                            campaignShipping.confirmationMessage = "\u200C ".concat(message);
                        }
                    }
                    return [4 /*yield*/, CampaignShipping_1.default.findOrCreate({
                            where: {
                                campaignId: campaignShipping.campaignId,
                                contactId: campaignShipping.contactId
                            },
                            defaults: campaignShipping
                        })];
                case 3:
                    _b = _c.sent(), record = _b[0], created = _b[1];
                    if (!(!created &&
                        record.deliveredAt === null &&
                        record.confirmationRequestedAt === null)) return [3 /*break*/, 5];
                    record.set(campaignShipping);
                    return [4 /*yield*/, record.save()];
                case 4:
                    _c.sent();
                    _c.label = 5;
                case 5:
                    if (!(record.deliveredAt === null &&
                        record.confirmationRequestedAt === null)) return [3 /*break*/, 8];
                    return [4 /*yield*/, exports.campaignQueue.add("DispatchCampaign", {
                            campaignId: campaign.id,
                            campaignShippingId: record.id,
                            contactListItemId: contactId
                        }, {
                            delay: delay
                        })];
                case 6:
                    nextJob = _c.sent();
                    return [4 /*yield*/, record.update({ jobId: nextJob.id })];
                case 7:
                    _c.sent();
                    _c.label = 8;
                case 8: return [4 /*yield*/, verifyAndFinalizeCampaign(campaign)];
                case 9:
                    _c.sent();
                    return [3 /*break*/, 11];
                case 10:
                    err_2 = _c.sent();
                    Sentry.captureException(err_2);
                    logger_1.logger.error("campaignQueue -> PrepareContact -> error: ".concat(err_2.message));
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function handleDispatchCampaign(job) {
    return __awaiter(this, void 0, void 0, function () {
        var data, campaignShippingId, campaignId, campaign, wbot, campaignShipping, chatId, body, publicFolder, files, folder, _i, _a, _b, index, file, options, error_1, publicFolder, filePath, options, io, err_3;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 24, , 25]);
                    data = job.data;
                    campaignShippingId = data.campaignShippingId, campaignId = data.campaignId;
                    return [4 /*yield*/, getCampaign(campaignId)];
                case 1:
                    campaign = _d.sent();
                    return [4 /*yield*/, (0, GetWhatsappWbot_1.default)(campaign.whatsapp)];
                case 2:
                    wbot = _d.sent();
                    if (!wbot) {
                        logger_1.logger.error("campaignQueue -> DispatchCampaign -> error: wbot not found");
                        return [2 /*return*/];
                    }
                    if (!campaign.whatsapp) {
                        logger_1.logger.error("campaignQueue -> DispatchCampaign -> error: whatsapp not found");
                        return [2 /*return*/];
                    }
                    if (!((_c = wbot === null || wbot === void 0 ? void 0 : wbot.user) === null || _c === void 0 ? void 0 : _c.id)) {
                        logger_1.logger.error("campaignQueue -> DispatchCampaign -> error: wbot user not found");
                        return [2 /*return*/];
                    }
                    logger_1.logger.info("Disparo de campanha solicitado: Campanha=".concat(campaignId, ";Registro=").concat(campaignShippingId));
                    return [4 /*yield*/, CampaignShipping_1.default.findByPk(campaignShippingId, {
                            include: [{ model: ContactListItem_1.default, as: "contact" }]
                        })];
                case 3:
                    campaignShipping = _d.sent();
                    chatId = "".concat(campaignShipping.number, "@s.whatsapp.net");
                    body = campaignShipping.message;
                    if (campaign.confirmation && campaignShipping.confirmation === null) {
                        body = campaignShipping.confirmationMessage;
                    }
                    if (!!(0, lodash_1.isNil)(campaign.fileListId)) return [3 /*break*/, 12];
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 11, , 12]);
                    publicFolder = path_1.default.resolve(__dirname, "..", "public");
                    return [4 /*yield*/, (0, ShowService_1.default)(campaign.fileListId, campaign.companyId)];
                case 5:
                    files = _d.sent();
                    folder = path_1.default.resolve(publicFolder, "fileList", String(files.id));
                    _i = 0, _a = files.options.entries();
                    _d.label = 6;
                case 6:
                    if (!(_i < _a.length)) return [3 /*break*/, 10];
                    _b = _a[_i], index = _b[0], file = _b[1];
                    return [4 /*yield*/, (0, SendWhatsAppMedia_1.getMessageOptions)(file.path, path_1.default.resolve(folder, file.path), file.name)];
                case 7:
                    options = _d.sent();
                    return [4 /*yield*/, wbot.sendMessage(chatId, __assign({}, options))];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 6];
                case 10:
                    ;
                    return [3 /*break*/, 12];
                case 11:
                    error_1 = _d.sent();
                    logger_1.logger.info(error_1);
                    return [3 /*break*/, 12];
                case 12:
                    if (!campaign.mediaPath) return [3 /*break*/, 16];
                    publicFolder = path_1.default.resolve(__dirname, "..", "public");
                    filePath = path_1.default.join(publicFolder, campaign.mediaPath);
                    return [4 /*yield*/, (0, SendWhatsAppMedia_1.getMessageOptions)(campaign.mediaName, filePath, body)];
                case 13:
                    options = _d.sent();
                    if (!Object.keys(options).length) return [3 /*break*/, 15];
                    return [4 /*yield*/, wbot.sendMessage(chatId, __assign({}, options))];
                case 14:
                    _d.sent();
                    _d.label = 15;
                case 15: return [3 /*break*/, 21];
                case 16:
                    if (!(campaign.confirmation && campaignShipping.confirmation === null)) return [3 /*break*/, 19];
                    return [4 /*yield*/, wbot.sendMessage(chatId, {
                            text: body
                        })];
                case 17:
                    _d.sent();
                    return [4 /*yield*/, campaignShipping.update({ confirmationRequestedAt: (0, moment_1.default)() })];
                case 18:
                    _d.sent();
                    return [3 /*break*/, 21];
                case 19: return [4 /*yield*/, wbot.sendMessage(chatId, {
                        text: body
                    })];
                case 20:
                    _d.sent();
                    _d.label = 21;
                case 21: return [4 /*yield*/, campaignShipping.update({ deliveredAt: (0, moment_1.default)() })];
                case 22:
                    _d.sent();
                    return [4 /*yield*/, verifyAndFinalizeCampaign(campaign)];
                case 23:
                    _d.sent();
                    io = (0, socket_1.getIO)();
                    io.to("company-".concat(campaign.companyId, "-mainchannel")).emit("company-".concat(campaign.companyId, "-campaign"), {
                        action: "update",
                        record: campaign
                    });
                    logger_1.logger.info("Campanha enviada para: Campanha=".concat(campaignId, ";Contato=").concat(campaignShipping.contact.name));
                    return [3 /*break*/, 25];
                case 24:
                    err_3 = _d.sent();
                    Sentry.captureException(err_3);
                    logger_1.logger.error(err_3.message);
                    console.log(err_3.stack);
                    return [3 /*break*/, 25];
                case 25: return [2 /*return*/];
            }
        });
    });
}
function handleLoginStatus(job) {
    return __awaiter(this, void 0, void 0, function () {
        var users, _i, users_1, item, user, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.query("select id from \"Users\" where \"updatedAt\" < now() - '5 minutes'::interval and online = true", { type: sequelize_1.QueryTypes.SELECT })];
                case 1:
                    users = _a.sent();
                    _i = 0, users_1 = users;
                    _a.label = 2;
                case 2:
                    if (!(_i < users_1.length)) return [3 /*break*/, 8];
                    item = users_1[_i];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, User_1.default.findByPk(item.id)];
                case 4:
                    user = _a.sent();
                    return [4 /*yield*/, user.update({ online: false })];
                case 5:
                    _a.sent();
                    logger_1.logger.info("Usu\u00E1rio passado para offline: ".concat(item.id));
                    return [3 /*break*/, 7];
                case 6:
                    e_6 = _a.sent();
                    Sentry.captureException(e_6);
                    return [3 /*break*/, 7];
                case 7:
                    _i++;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function handleInvoiceCreate() {
    return __awaiter(this, void 0, void 0, function () {
        var job;
        var _this = this;
        return __generator(this, function (_a) {
            logger_1.logger.info("Iniciando geração de boletos");
            job = new CronJob('*/5 * * * * *', function () { return __awaiter(_this, void 0, void 0, function () {
                var companies;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Company_1.default.findAll()];
                        case 1:
                            companies = _a.sent();
                            companies.map(function (c) { return __awaiter(_this, void 0, void 0, function () {
                                var dueDate, date, timestamp, hoje, vencimento, diff, dias, plan, sql, invoice, sql_1, invoiceInsert;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            dueDate = c.dueDate;
                                            date = (0, moment_1.default)(dueDate).format();
                                            timestamp = (0, moment_1.default)().format();
                                            hoje = (0, moment_1.default)((0, moment_1.default)()).format("DD/MM/yyyy");
                                            vencimento = (0, moment_1.default)(dueDate).format("DD/MM/yyyy");
                                            diff = (0, moment_1.default)(vencimento, "DD/MM/yyyy").diff((0, moment_1.default)(hoje, "DD/MM/yyyy"));
                                            dias = moment_1.default.duration(diff).asDays();
                                            if (!(dias < 20)) return [3 /*break*/, 5];
                                            return [4 /*yield*/, Plan_1.default.findByPk(c.planId)];
                                        case 1:
                                            plan = _a.sent();
                                            sql = "SELECT COUNT(*) mycount FROM \"Invoices\" WHERE \"companyId\" = ".concat(c.id, " AND \"dueDate\"::text LIKE '").concat((0, moment_1.default)(dueDate).format("yyyy-MM-DD"), "%';");
                                            return [4 /*yield*/, database_1.default.query(sql, { type: sequelize_1.QueryTypes.SELECT })];
                                        case 2:
                                            invoice = _a.sent();
                                            if (!(invoice[0]['mycount'] > 0)) return [3 /*break*/, 3];
                                            return [3 /*break*/, 5];
                                        case 3:
                                            sql_1 = "INSERT INTO \"Invoices\" (detail, status, value, \"updatedAt\", \"createdAt\", \"dueDate\", \"companyId\")\n          VALUES ('".concat(plan.name, "', 'open', '").concat(plan.value, "', '").concat(timestamp, "', '").concat(timestamp, "', '").concat(date, "', ").concat(c.id, ");");
                                            return [4 /*yield*/, database_1.default.query(sql_1, { type: sequelize_1.QueryTypes.INSERT })];
                                        case 4:
                                            invoiceInsert = _a.sent();
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            }); });
            job.start();
            return [2 /*return*/];
        });
    });
}
handleCloseTicketsAutomatic();
handleInvoiceCreate();
function startQueueProcess() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            logger_1.logger.info("Iniciando processamento de filas");
            exports.messageQueue.process("SendMessage", handleSendMessage);
            exports.scheduleMonitor.process("Verify", handleVerifySchedules);
            exports.sendScheduledMessages.process("SendMessage", handleSendScheduledMessage);
            exports.campaignQueue.process("VerifyCampaigns", handleVerifyCampaigns);
            exports.campaignQueue.process("ProcessCampaign", handleProcessCampaign);
            exports.campaignQueue.process("PrepareContact", handlePrepareContact);
            exports.campaignQueue.process("DispatchCampaign", handleDispatchCampaign);
            exports.userMonitor.process("VerifyLoginStatus", handleLoginStatus);
            //queueMonitor.process("VerifyQueueStatus", handleVerifyQueue);
            exports.scheduleMonitor.add("Verify", {}, {
                repeat: { cron: "*/5 * * * * *", key: "verify" },
                removeOnComplete: true
            });
            exports.campaignQueue.add("VerifyCampaigns", {}, {
                repeat: { cron: "*/20 * * * * *", key: "verify-campaing" },
                removeOnComplete: true
            });
            exports.userMonitor.add("VerifyLoginStatus", {}, {
                repeat: { cron: "* * * * *", key: "verify-login" },
                removeOnComplete: true
            });
            exports.queueMonitor.add("VerifyQueueStatus", {}, {
                repeat: { cron: "*/20 * * * * *" },
                removeOnComplete: true
            });
            return [2 /*return*/];
        });
    });
}
