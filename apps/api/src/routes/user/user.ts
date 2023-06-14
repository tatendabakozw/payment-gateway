/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { requireUserSignIn } from '../../middleware/require_auth';
import {
  deleteUser,
  editUser,
  getSingleUser,
} from '../../controllers/userController';
const router = express();

// edit user info
// patch request
// /api/user/edit
router.patch('/edit', requireUserSignIn, editUser);

// delete user user info
// delete request
// /api/user/delete
router.delete('/delete', requireUserSignIn, deleteUser);

// get single user
// /api/user/single
// get request
router.get('/single', requireUserSignIn, getSingleUser);

export default router;
