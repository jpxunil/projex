"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var VerssionController = require("../controllers/VersionController");
var versionRouter = (0, express_1.Router)();
versionRouter.get("/version", VerssionController.index);
exports.default = versionRouter;
