import express,{Router} from 'express'
const router:Router = express.Router()

import { register, login, getUserInfo } from '../controllers/authController';
import { loginValidation,registerValidation , getUserInfoValidation} from '../utils/validations/authValidations';

router.post('/register', registerValidation,register);
router.post('/login',loginValidation, login);
router.post('/login/:id',getUserInfoValidation, getUserInfo);

export default router;