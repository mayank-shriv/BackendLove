import registerUser from '../controllers/authControllers.js';
import { Router } from 'express';

const router = Router();

router.post('/register', registerUser);

export default router;