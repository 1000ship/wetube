import express from 'express';
import routes from '../routes';

const userRouter = express.Router();

export default userRouter;

/*// keep
userRouter.get('/', (req, res) => res.send('user index'));
userRouter.get('/edit', (req, res) => res.send('user edit'));
userRouter.get('/password', (req, res) => res.send('user password'));
*/