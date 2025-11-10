import {Router} from 'express';
import productsControllers from '../controllers/product.controllers.js';

const router = Router();

router.get('/getAll', productsControllers.getAll);
router.get('/getOne/:barcode', productsControllers.getOne);
router.post('/insertOne', productsControllers.insertOne);
router.put('/update/:barcode',productsControllers.update);
router.delete('/delete/:barcode', productsControllers.delete);

export default router;