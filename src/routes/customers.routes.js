import {Router} from 'express';
import customersControllers from '../controllers/customer.controllers.js';

const router = Router();

router.get('/getAll', customersControllers.getAll);
router.get('/getOne/:id',customersControllers.getOne);
router.post('/create',customersControllers.insertOne);
router.put('/update/:id',customersControllers.update);
router.delete('/delete/:id',customersControllers.delete);


export default router;