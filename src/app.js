import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productsRoutes from './routes/products.routes.js'; 
import customersRoutes from './routes/customers.routes.js'
import employeesRoutes from './routes/employees.routes.js'

import './database.js';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use('/api/products',productsRoutes);
app.use('/api/customers',customersRoutes);
app.use('/api/employees',employeesRoutes);

export default app;