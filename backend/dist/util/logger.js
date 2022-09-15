"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getLogger = function (label) {
        if (!winston_1.default.loggers.has(label)) {
            winston_1.default.loggers.add(label, {
                transports: Logger.transports,
                format: winston_1.default.format.label({ label: label })
            });
        }
        return winston_1.default.loggers.get(label);
    };
    Logger.logFormat = winston_1.default.format.printf(function (info) { return "".concat(info.timestamp, " ").concat(info.level, " [").concat(info.label, "]: ").concat(info.message); });
    Logger.transports = [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.default.format.colorize(), Logger.logFormat)
        }),
        new winston_1.default.transports.File({
            filename: 'logs/combined.log',
            format: winston_1.default.format.json()
        }),
        new winston_1.default.transports.File({
            level: 'error',
            filename: 'logs/error.log',
            format: winston_1.default.format.json()
        })
    ];
    return Logger;
}());
exports.default = Logger;
