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
exports.TicketsDayService = void 0;
var index_1 = require("../../database/index");
var sequelize_1 = require("sequelize");
var TicketsDayService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var sql, count, data;
    var initialDate = _b.initialDate, finalDate = _b.finalDate, companyId = _b.companyId;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                sql = '';
                count = 0;
                if (initialDate && initialDate.trim() === finalDate && finalDate.trim()) {
                    sql = "\n    SELECT\n      COUNT(*) AS total,\n      extract(hour from tick.\"createdAt\") AS horario\n      --to_char(DATE(tick.\"createdAt\"), 'dd-mm-YYYY') as horario\n    FROM\n      \"TicketTraking\" tick\n    WHERE\n      tick.\"companyId\" = ".concat(companyId, "\n      and DATE(tick.\"createdAt\") >= '").concat(initialDate, " 00:00:00'\n      AND DATE(tick.\"createdAt\") <= '").concat(finalDate, " 23:59:59'\n    GROUP BY\n      extract(hour from tick.\"createdAt\")\n      --to_char(DATE(tick.\"createdAt\"), 'dd-mm-YYYY')\n    ORDER BY\n      horario asc;\n    ");
                }
                else {
                    sql = "\n    SELECT\n    COUNT(*) AS total,\n    to_char(DATE(tick.\"createdAt\"), 'dd/mm/YYYY') as data\n  FROM\n    \"TicketTraking\" tick\n  WHERE\n    tick.\"companyId\" = ".concat(companyId, "\n    and DATE(tick.\"createdAt\") >= '").concat(initialDate, "'\n    AND DATE(tick.\"createdAt\") <= '").concat(finalDate, "'\n  GROUP BY\n    to_char(DATE(tick.\"createdAt\"), 'dd/mm/YYYY')\n  ORDER BY\n    data asc;\n  ");
                }
                return [4 /*yield*/, index_1.default.query(sql, { type: sequelize_1.QueryTypes.SELECT })];
            case 1:
                data = _c.sent();
                data.forEach(function (register) {
                    count += Number(register.total);
                });
                return [2 /*return*/, { data: data, count: count }];
        }
    });
}); };
exports.TicketsDayService = TicketsDayService;
