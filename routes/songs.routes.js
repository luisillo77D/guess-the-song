import express from 'express';
import { getSongs, createSong } from '../controllers/songs.controller.js';
import { getDailySong } from '../controllers/dailySong.controller.js';


const router = express.Router();

// Obtener todas las canciones
router.get('/', getSongs);
router.post('/', createSong);
router.get('/daily', getDailySong);


export default router;