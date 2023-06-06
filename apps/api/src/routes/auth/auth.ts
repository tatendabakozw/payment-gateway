import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { User } from '../../models/User';
const router = express();

// register user
// post request
// /api/auth/register
router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res, next) => {
    const { email, password, fullName, agreed } = req.body;

    const result = validationResult(req);
    const errors: any[] = result.array();

    try {
      if (!agreed) {
        return res
          .status(401)
          .send({ message: 'You have to agree to our terms and conditions' });
      }

      if (errors.length && errors[0].path === 'email') {
        return res
          .status(400)
          .send({ message: 'Invalid email address. Please try again.' });
      }
      if (errors.length && errors[0].path === 'password') {
        return res
          .status(400)
          .send({ message: 'Password must be longer than 6 characters.' });
      }

      const newUser = new User({
        email,
        password: bcrypt.hashSync(password, 12),
        fullName,
      });

      const savedUser = await newUser.save();

      return res.status(200).send({ message: 'User saved successfully', user: savedUser });

      // return res.status(200).send({message: errors})

      // return res.status(200).send({
      //   message: 'Login of user successful',
      //   user: {
      //     email,
      //     password,
      //     fullName,
      //   },
      // });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
