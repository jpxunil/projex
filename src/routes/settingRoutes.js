"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var SettingController = require("../controllers/SettingController");
var settingRoutes = (0, express_1.Router)();
settingRoutes.get("/settings", isAuth_1.default, SettingController.index);
// routes.get("/settings/:settingKey", isAuth, SettingsController.show);
// change setting key to key in future
settingRoutes.put("/settings/:settingKey", isAuth_1.default, SettingController.update);
exports.default = settingRoutes;
