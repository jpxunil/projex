"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var QueueIntegrationController = require("../controllers/QueueIntegrationController");
var queueIntegrationRoutes = (0, express_1.Router)();
queueIntegrationRoutes.get("/queueIntegration", isAuth_1.default, QueueIntegrationController.index);
queueIntegrationRoutes.post("/queueIntegration", isAuth_1.default, QueueIntegrationController.store);
queueIntegrationRoutes.get("/queueIntegration/:integrationId", isAuth_1.default, QueueIntegrationController.show);
queueIntegrationRoutes.put("/queueIntegration/:integrationId", isAuth_1.default, QueueIntegrationController.update);
queueIntegrationRoutes.delete("/queueIntegration/:integrationId", isAuth_1.default, QueueIntegrationController.remove);
exports.default = queueIntegrationRoutes;
