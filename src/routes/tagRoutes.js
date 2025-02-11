"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var TagController = require("../controllers/TagController");
var tagRoutes = express_1.default.Router();
tagRoutes.get("/tags/list", isAuth_1.default, TagController.list);
tagRoutes.get("/tags", isAuth_1.default, TagController.index);
tagRoutes.get("/tags/kanban", isAuth_1.default, TagController.kanban);
tagRoutes.post("/tags", isAuth_1.default, TagController.store);
tagRoutes.put("/tags/:tagId", isAuth_1.default, TagController.update);
tagRoutes.get("/tags/:tagId", isAuth_1.default, TagController.show);
tagRoutes.delete("/tags/:tagId", isAuth_1.default, TagController.remove);
tagRoutes.post("/tags/sync", isAuth_1.default, TagController.syncTags);
exports.default = tagRoutes;
