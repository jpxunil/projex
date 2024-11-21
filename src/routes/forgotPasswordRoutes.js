"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ForgotController = require("../controllers/ForgotController");
var forgotsRoutes = express_1.default.Router();
forgotsRoutes.post("/forgetpassword/:email", ForgotController.store);
forgotsRoutes.post("/resetpasswords/:email/:token/:password", ForgotController.resetPasswords);
exports.default = forgotsRoutes;
