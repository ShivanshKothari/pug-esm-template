import express from 'express';
import { homeController } from '../controllers/indexController.js';

const router = express.Router();

/* GET home page. */
router.get('/', homeController);

export default router;
