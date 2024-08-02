import express from 'express';
import HomeController from '../controllers/home_controller.mjs';
const router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/sobre', HomeController.sobre);

export default router;
