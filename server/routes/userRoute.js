import express from 'express';
import { create, deleteu, getall, getone, update } from '../controller/userController.js';


const route = express.Router();
route.post('/create',create);
route.get('/getall', getall);
route.get('/getone/:id',getone);
route.put('/update/:id',update);
route.delete('/delete/:id', deleteu);
export default route;