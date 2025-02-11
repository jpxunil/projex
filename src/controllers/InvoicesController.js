"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.list = exports.show = exports.index = void 0;
var Yup = require("yup");
// import { getIO } from "../libs/socket";
var AppError_1 = require("../errors/AppError");
var FindAllInvoiceService_1 = require("../services/InvoicesService/FindAllInvoiceService");
var ListInvoicesServices_1 = require("../services/InvoicesService/ListInvoicesServices");
var ShowInvoiceService_1 = require("../services/InvoicesService/ShowInvoiceService");
var UpdateInvoiceService_1 = require("../services/InvoicesService/UpdateInvoiceService");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, searchParam, pageNumber, _b, invoices, count, hasMore;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, searchParam = _a.searchParam, pageNumber = _a.pageNumber;
                return [4 /*yield*/, (0, ListInvoicesServices_1.default)({
                        searchParam: searchParam,
                        pageNumber: pageNumber
                    })];
            case 1:
                _b = _c.sent(), invoices = _b.invoices, count = _b.count, hasMore = _b.hasMore;
                return [2 /*return*/, res.json({ invoices: invoices, count: count, hasMore: hasMore })];
        }
    });
}); };
exports.index = index;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Invoiceid, invoice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Invoiceid = req.params.Invoiceid;
                return [4 /*yield*/, (0, ShowInvoiceService_1.default)(Invoiceid)];
            case 1:
                invoice = _a.sent();
                return [2 /*return*/, res.status(200).json(invoice)];
        }
    });
}); };
exports.show = show;
var list = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var companyId, invoice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                companyId = req.user.companyId;
                return [4 /*yield*/, (0, FindAllInvoiceService_1.default)(companyId)];
            case 1:
                invoice = _a.sent();
                return [2 /*return*/, res.status(200).json(invoice)];
        }
    });
}); };
exports.list = list;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var InvoiceData, schema, err_1, id, status, plan;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                InvoiceData = req.body;
                schema = Yup.object().shape({
                    name: Yup.string()
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema.validate(InvoiceData)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                throw new AppError_1.default(err_1.message);
            case 4:
                id = InvoiceData.id, status = InvoiceData.status;
                return [4 /*yield*/, (0, UpdateInvoiceService_1.default)({
                        id: id,
                        status: status,
                    })];
            case 5:
                plan = _a.sent();
                // const io = getIO();
                // io.emit("plan", {
                //   action: "update",
                //   plan
                // });
                return [2 /*return*/, res.status(200).json(plan)];
        }
    });
}); };
exports.update = update;
/* export const store = async (req: Request, res: Response): Promise<Response> => {
  const newPlan: StorePlanData = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required()
  });

  try {
    await schema.validate(newPlan);
  } catch (err) {
    throw new AppError(err.message);
  }

  const plan = await CreatePlanService(newPlan);

  // const io = getIO();
  // io.emit("plan", {
  //   action: "create",
  //   plan
  // });

  return res.status(200).json(plan);
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  const plan = await ShowPlanService(id);

  return res.status(200).json(plan);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const planData: UpdateInvoiceData = req.body;

  const schema = Yup.object().shape({
    name: Yup.string()
  });

  try {
    await schema.validate(planData);
  } catch (err) {
    throw new AppError(err.message);
  }

  const { id, name, users, connections, queues, value } = planData;

  const plan = await UpdatePlanService({
    id,
    name,
    users,
    connections,
    queues,
    value
  });

  // const io = getIO();
  // io.emit("plan", {
  //   action: "update",
  //   plan
  // });

  return res.status(200).json(plan);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const plan = await DeletePlanService(id);

  return res.status(200).json(plan);
}; */
