"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var QueueOptionController = require("../controllers/QueueOptionController");
var queueOptionRoutes = (0, express_1.Router)();
queueOptionRoutes.get("/queue-options", isAuth_1.default, QueueOptionController.index);
queueOptionRoutes.post("/queue-options", isAuth_1.default, QueueOptionController.store);
queueOptionRoutes.get("/queue-options/:queueOptionId", isAuth_1.default, QueueOptionController.show);
queueOptionRoutes.put("/queue-options/:queueOptionId", isAuth_1.default, QueueOptionController.update);
queueOptionRoutes.delete("/queue-options/:queueOptionId", isAuth_1.default, QueueOptionController.remove);
exports.default = queueOptionRoutes;
