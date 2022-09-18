"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var OpenApiValidator = __importStar(require("express-openapi-validator"));
var logger_1 = __importDefault(require("./util/logger"));
var express_winston_1 = __importDefault(require("express-winston"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_winston_1.default.logger({
    winstonInstance: logger_1.default.getLogger('express'),
    msg: '{{req.hostname}} - - - "{{req.method}} {{req.url}} HTTP{{req.httpVersion}}" {{res.statusCode}} -',
    colorize: true
}));
// app.get('/', (req, res) => {
//     return res.status(200).json({
//         apiVersion: 1.0
//     })
// })
// endpoint for dumping all of the data from all of the levels
// endpoint for saving the user's reflection
//     - string array, answers
// endpoint for getting a list of all the reflections done by other people
//     - array of questions and then array of array of answers
app.use(OpenApiValidator.middleware({
    apiSpec: './spec.yaml',
    validateRequests: true,
    validateResponses: true,
}));
var reflections_1 = require("./controllers/reflections");
app.get('/reflections', reflections_1.getReflections);
app.post('/reflections', reflections_1.createReflection);
app.use(function (err, req, res, next) {
    if (!(err.status && err.errors)) {
        return next(err);
    }
    var verror = err;
    if (res.headersSent) {
        return next(verror);
    }
    logger_1.default.getLogger('validation').warn("".concat(verror.errors[0].path, " ").concat(verror.errors[0].message));
    return res.status(verror.status).json({
        error: verror
    });
});
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    logger_1.default.getLogger('controller').error("".concat(err.stack));
    var displayError = process.env.NODE_ENV === 'production'
        ? 'An unexpected error has occurred. Please try again later.'
        : err.stack;
    return res.status(500).json({
        error: displayError
    });
});
if (!process.env.DB_URL) {
    logger_1.default.getLogger('express').error('Environment variable "PORT" not found');
    process.exit(1);
}
app.listen(process.env.PORT, function () {
    logger_1.default.getLogger('express').info("Server started at port ".concat(process.env.PORT));
});
var signals = [
    'SIGHUP',
    'SIGINT',
    'SIGQUIT',
    'SIGILL',
    'SIGTRAP',
    'SIGABRT',
    'SIGBUS',
    'SIGFPE',
    'SIGUSR1',
    'SIGSEGV',
    'SIGUSR2',
    'SIGTERM'
];
signals.forEach(function (signal) {
    process.on(signal, function () {
        logger_1.default.getLogger('general').info("Received ".concat(signal, ", closing server..."));
        process.exit(1);
    });
});
