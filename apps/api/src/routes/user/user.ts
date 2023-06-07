import express from 'express';
const router = express();

// edit user info
// patch request
// /api/user/edit
router.patch('/edit', async (req, res, next) =>{
    try {
        console.log('edit single user')
    } catch (error) {
        next(error)
    }
})

export default router