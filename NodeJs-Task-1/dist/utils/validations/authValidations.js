"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
const express_validator_1 = require("express-validator");
const validator_1 = __importDefault(require("../../middlewares/validator"));
exports.registerValidation = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('Name is required'),
    (0, express_validator_1.check)('email').isEmail().withMessage('Invalid email address'),
    (0, express_validator_1.check)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validator_1.default
];
exports.loginValidation = [
    (0, express_validator_1.check)('email').isEmail().withMessage('Invalid email address'),
    (0, express_validator_1.check)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validator_1.default
];
