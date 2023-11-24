import express,{Router} from 'express'
const router:Router = express.Router()

import { register, login, getUserInfo } from '../controllers/authController';
import { loginValidation,registerValidation , getUserInfoValidation} from '../utils/validations/authValidations';
import { authenticateToken } from '../middlewares/coockies';

router.post('/register', registerValidation,register);
router.post('/login',loginValidation, login);
router.post('/login/:id',authenticateToken,getUserInfoValidation, getUserInfo);

export default router;