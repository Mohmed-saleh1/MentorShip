import { check } from "express-validator";
import validationMiddleware from '../../middlewares/validator'


export const registerValidation = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
validationMiddleware  ];


export const loginValidation = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  validationMiddleware]

  export const getUserInfoValidation = [
    check('userId').notEmpty().withMessage('User Id is required'),
  validationMiddleware]


