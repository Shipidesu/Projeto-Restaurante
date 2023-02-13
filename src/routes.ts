import {Router, Request, Response} from 'express'
import { CreateUserController } from './controllers/user/CreateUserControllers';
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import uploadConfig from './config/multer'
import multer from 'multer';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

router.post('/users', new CreateUserController().handle )
router.post('/session', new AuthUserController().handle )
router.get('/me', isAuthenticated, new DetailuserController().handle )
router.post('/category',isAuthenticated, new CreateCategoryController().handle )
router.get('/category', isAuthenticated, new ListCategoryController().handle )
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

export { router }
