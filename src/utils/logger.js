"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var pino_1 = require("pino");
var logger = (0, pino_1.default)({
    transport: {
        target: 'pino-pretty',
        options: {
            levelFirst: true,
            translateTime: true,
            colorize: true,
        }
    }
});
exports.logger = logger;
