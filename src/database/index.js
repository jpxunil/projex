"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var User_1 = require("../models/User");
var Setting_1 = require("../models/Setting");
var Contact_1 = require("../models/Contact");
var Ticket_1 = require("../models/Ticket");
var Whatsapp_1 = require("../models/Whatsapp");
var ContactCustomField_1 = require("../models/ContactCustomField");
var Message_1 = require("../models/Message");
var Queue_1 = require("../models/Queue");
var WhatsappQueue_1 = require("../models/WhatsappQueue");
var UserQueue_1 = require("../models/UserQueue");
var Company_1 = require("../models/Company");
var Plan_1 = require("../models/Plan");
var TicketNote_1 = require("../models/TicketNote");
var QuickMessage_1 = require("../models/QuickMessage");
var Help_1 = require("../models/Help");
var TicketTraking_1 = require("../models/TicketTraking");
var UserRating_1 = require("../models/UserRating");
var QueueOption_1 = require("../models/QueueOption");
var Schedule_1 = require("../models/Schedule");
var Tag_1 = require("../models/Tag");
var TicketTag_1 = require("../models/TicketTag");
var ContactList_1 = require("../models/ContactList");
var ContactListItem_1 = require("../models/ContactListItem");
var Campaign_1 = require("../models/Campaign");
var CampaignSetting_1 = require("../models/CampaignSetting");
var Baileys_1 = require("../models/Baileys");
var CampaignShipping_1 = require("../models/CampaignShipping");
var Announcement_1 = require("../models/Announcement");
var Chat_1 = require("../models/Chat");
var ChatUser_1 = require("../models/ChatUser");
var ChatMessage_1 = require("../models/ChatMessage");
var Invoices_1 = require("../models/Invoices");
var Subscriptions_1 = require("../models/Subscriptions");
var BaileysChats_1 = require("../models/BaileysChats");
var Files_1 = require("../models/Files");
var FilesOptions_1 = require("../models/FilesOptions");
var Prompt_1 = require("../models/Prompt");
var QueueIntegrations_1 = require("../models/QueueIntegrations");
// eslint-disable-next-line
var dbConfig = require("../config/database");
// import dbConfig from "../config/database";
var sequelize = new sequelize_typescript_1.Sequelize(dbConfig);
var models = [
    Company_1.default,
    User_1.default,
    Contact_1.default,
    Ticket_1.default,
    Message_1.default,
    Whatsapp_1.default,
    ContactCustomField_1.default,
    Setting_1.default,
    Queue_1.default,
    WhatsappQueue_1.default,
    UserQueue_1.default,
    Plan_1.default,
    TicketNote_1.default,
    QuickMessage_1.default,
    Help_1.default,
    TicketTraking_1.default,
    UserRating_1.default,
    QueueOption_1.default,
    Schedule_1.default,
    Tag_1.default,
    TicketTag_1.default,
    ContactList_1.default,
    ContactListItem_1.default,
    Campaign_1.default,
    CampaignSetting_1.default,
    Baileys_1.default,
    CampaignShipping_1.default,
    Announcement_1.default,
    Chat_1.default,
    ChatUser_1.default,
    ChatMessage_1.default,
    Invoices_1.default,
    Subscriptions_1.default,
    BaileysChats_1.default,
    Files_1.default,
    FilesOptions_1.default,
    Prompt_1.default,
    QueueIntegrations_1.default,
];
sequelize.addModels(models);
exports.default = sequelize;
