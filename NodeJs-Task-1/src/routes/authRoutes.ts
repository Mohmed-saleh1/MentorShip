import express,{Router} from 'express'
const router:Router = express.Router()

import { register, login } from '../controllers/authController';
import { loginValidation,registerValidation } from '../utils/validations/authValidations';

router.post('/register', registerValidation,register);
router.post('/login',loginValidation, login);

export default router;