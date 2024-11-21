"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var WhatsAppSessionController_1 = require("../controllers/WhatsAppSessionController");
var whatsappSessionRoutes = (0, express_1.Router)();
whatsappSessionRoutes.post("/whatsappsession/:whatsappId", isAuth_1.default, WhatsAppSessionController_1.default.store);
whatsappSessionRoutes.put("/whatsappsession/:whatsappId", isAuth_1.default, WhatsAppSessionController_1.default.update);
whatsappSessionRoutes.delete("/whatsappsession/:whatsappId", isAuth_1.default, WhatsAppSessionController_1.default.remove);
exports.default = whatsappSessionRoutes;
