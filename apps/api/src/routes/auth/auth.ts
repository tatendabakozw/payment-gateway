import express from 'express';
const router = express();

// login user
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    return res.status(200).send({
      message: 'Login of user successful',
      user: {
        username: username,
        password: password,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
