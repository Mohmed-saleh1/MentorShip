"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authController_1 = require("../controllers/authController");
const authValidations_1 = require("../utils/validations/authValidations");
router.post('/register', authValidations_1.registerValidation, authController_1.register);
router.post('/login', authValidations_1.loginValidation, authController_1.login);
exports.default = router;
