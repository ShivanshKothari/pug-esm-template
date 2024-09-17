import express from 'express';
import { dashboardController } from '../controllers/usersController.js';

const router = express.Router();

/* GET users listing. */
router.get('/', dashboardController);

export default router;
