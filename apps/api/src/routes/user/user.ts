/* eslint-disable @typescript-eslint/ban-ts-comment */
import express, { NextFunction, Request, Response } from 'express';
import { requireUserSignIn } from '../../middleware/require_auth';
import { ILoggedUser, IUser } from '../../utils/types';
import { User } from '../../models/User';
const router = express();

// edit user info
// patch request
// /api/user/edit
router.patch(
  '/edit',
  requireUserSignIn,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phone, fullName, photoURL }: IUser = req.body;
      // @ts-ignore
      const _user: ILoggedUser = req.user;
      if (!_user) {
        return res.status(401).send({ message: 'Please sign in' });
      }

      const loggin_in_user = await User.findOne({ email: _user.email });
      if (_user._id !== loggin_in_user._id.toString()) {
        return res
          .status(401)
          .send({ message: 'You are not allowed to perform such action' });
      }
      if (!loggin_in_user) {
        return res.status(401).send({ message: 'User account not found' });
      }

      await User.findOneAndUpdate(
        { _id: loggin_in_user._id },
        {
          phone,
          fullName,
          photoURL,
        },
        { upsert: true }
      );
      return res.status(200).send({ message: 'Account successfully updated' });
    } catch (error) {
      next(error);
    }
  }
);

// delete user user info
// delete request
// /api/user/delete
router.delete(
  '/delete',
  requireUserSignIn,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const _user: ILoggedUser = req.user;
      if (!_user) {
        return res.status(401).send({ message: 'Please sign in' });
      }

      const loggin_in_user = await User.findOne({ email: _user.email });
      if (_user._id !== loggin_in_user._id.toString()) {
        return res
          .status(401)
          .send({ message: 'You are not allowed to perform such action' });
      }
      if (!loggin_in_user) {
        return res.status(401).send({ message: 'User account not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

// get single user
// /api/user/single
// get request
router.get('/single', async (req, res, next) => {
  try {
    console.log('get single user');
  } catch (error) {
    next(error);
  }
});

export default router;
