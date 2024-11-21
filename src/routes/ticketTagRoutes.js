"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var TicketTagController = require("../controllers/TicketTagController");
var ticketTagRoutes = express_1.default.Router();
ticketTagRoutes.put("/ticket-tags/:ticketId/:tagId", isAuth_1.default, TicketTagController.store);
ticketTagRoutes.delete("/ticket-tags/:ticketId", isAuth_1.default, TicketTagController.remove);
exports.default = ticketTagRoutes;
