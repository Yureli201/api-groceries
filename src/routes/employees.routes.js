import {Router} from 'express';
import employeesControllers from '../controllers/employee.controller.js';

const router = Router();

router.get('/getAll', employeesControllers.getAll);
router.get('/getOne/:id',employeesControllers.getOne);
router.post('/create',employeesControllers.insertOne);
router.put('/update/:id',employeesControllers.update);
router.delete('/delete/:id',employeesControllers.delete);

export default router;