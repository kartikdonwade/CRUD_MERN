import express from 'express';
import { create, getall, getone } from '../controller/userController.js';


const route = express.Router();
route.post('/create',create);
route.get('/getall', getall);
route.get('/getone',getone);
export default route;