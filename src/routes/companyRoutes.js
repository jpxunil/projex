"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isAuth_1 = require("../middleware/isAuth");
var isSuper_1 = require("../middleware/isSuper");
var CompanyController = require("../controllers/CompanyController");
var companyRoutes = express_1.default.Router();
companyRoutes.get("/companies/list", isAuth_1.default, isSuper_1.default, CompanyController.list);
companyRoutes.get("/companies", isAuth_1.default, isSuper_1.default, CompanyController.index);
companyRoutes.get("/companies/:id", isAuth_1.default, CompanyController.show);
companyRoutes.post("/companies", isAuth_1.default, isSuper_1.default, CompanyController.store);
companyRoutes.put("/companies/:id", isAuth_1.default, isSuper_1.default, CompanyController.update);
companyRoutes.put("/companies/:id/schedules", isAuth_1.default, CompanyController.updateSchedules);
companyRoutes.delete("/companies/:id", isAuth_1.default, isSuper_1.default, CompanyController.remove);
companyRoutes.post("/companies/cadastro", CompanyController.store);
// Rota para listar o plano da empresa
companyRoutes.get("/companies/listPlan/:id", isAuth_1.default, CompanyController.listPlan);
companyRoutes.get("/companiesPlan", isAuth_1.default, CompanyController.indexPlan);
exports.default = companyRoutes;
