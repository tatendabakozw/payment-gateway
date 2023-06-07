import { validationResult } from 'express-validator';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// register user
// post request
// /api/auth/register
export const registerUser = async (req, res, next) => {
  const { email, password, fullName, agreed } = req.body;

  const result = validationResult(req);
  const errors: any[] = result.array();

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: 'User already exists' });
    }

    // validate forms
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

    // create new user
    const newUser = new User({
      email,
      password,
      fullName,
    });

    // save user
    const savedUser = await newUser.save();

    return res
      .status(200)
      .send({ message: 'User saved successfully', user: savedUser });
  } catch (error) {
    next(error);
  }
};

// login user
// post request
// /api/auth/login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      return res.status(400).send({ message: 'Please enter password' });
    }
    if (!email) {
      return res.status(400).send({ message: 'Please enter password' });
    }

    const _user = await User.findOne({ email });

    if (!_user) {
      return res.status(404).send({ message: 'Account does not exist!' });
    }
    if (!_user.emailVerified) {
      return res.status(403).send({ message: 'Please verify your email' });
    }
    // do other checks here before allowing user to login

    const password_correct = await bcrypt.compare(password, _user.password);

    if (password_correct) {
      const token = await jwt.sign(
        {
          email: _user.email,
          _id: _user._id,
          role: _user.role,
          emailVerified: _user.emailVerified,
          photoURL: _user.photoURL,
        },
        process.env.JWT_SECRET
      );
      if (token) {
        const user = {
          email: _user.email,
          _id: _user._id,
          role: _user.role,
          emailVerified: _user.emailVerified,
          photoURL: _user.photoURL,
          token: token,
        };

        return res.send({ ...user, message: 'logged in sucessfully' });
      } else {
        return res
          .status(422)
          .send({ message: 'Failed to login, Wrong details!' });
      }
    } else {
      return res.status(400).send({ message: 'Wrong login details' });
    }
  } catch (error) {
    next(error);
  }
};
