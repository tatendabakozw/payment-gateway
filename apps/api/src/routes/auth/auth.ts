import express from 'express';
import { body } from 'express-validator';
import { loginUser, registerUser } from '../../controllers/authController';
const router = express();

// register user
// post request
// /api/auth/register
router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  registerUser
);

// login user
// post request
// /api/auth/login
router.post('/login', loginUser)

export default router;
