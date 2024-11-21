"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var TicketController = require("../controllers/TicketController");
var ticketRoutes = express_1.default.Router();
ticketRoutes.get("/tickets", isAuth_1.default, TicketController.index);
ticketRoutes.get("/tickets/:ticketId", isAuth_1.default, TicketController.show);
ticketRoutes.get("/ticket/kanban", isAuth_1.default, TicketController.kanban);
ticketRoutes.get("/tickets/u/:uuid", isAuth_1.default, TicketController.showFromUUID);
ticketRoutes.post("/tickets", isAuth_1.default, TicketController.store);
ticketRoutes.put("/tickets/:ticketId", isAuth_1.default, TicketController.update);
ticketRoutes.delete("/tickets/:ticketId", isAuth_1.default, TicketController.remove);
exports.default = ticketRoutes;
