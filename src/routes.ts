import {Router, Request, Response} from 'express'

import { CreateUserController } from './controllers/user/CreateUserControllers';

import { AuthUserController } from './controllers/user/AuthUserController'

import { DetailuserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post('/users', new CreateUserController().handle )
router.post('/session', new AuthUserController().handle )
router.get('/me',   new DetailuserController().handle )

export { router }

/* Reciclagem 
router.get('/teste', (req: Request, res: Response) => {
    return res.json({ Sujeito:'pizza '})
})
*/ 