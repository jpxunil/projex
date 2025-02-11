"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var UserController = require("../controllers/UserController");
var userRoutes = (0, express_1.Router)();
userRoutes.get("/users", isAuth_1.default, UserController.index);
userRoutes.get("/users/list", isAuth_1.default, UserController.list);
userRoutes.post("/users", isAuth_1.default, UserController.store);
userRoutes.put("/users/:userId", isAuth_1.default, UserController.update);
userRoutes.get("/users/:userId", isAuth_1.default, UserController.show);
userRoutes.delete("/users/:userId", isAuth_1.default, UserController.remove);
exports.default = userRoutes;
