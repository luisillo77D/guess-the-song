import express from 'express';
import { getSongs, createSong } from '../controllers/songs.controller.js';

const router = express.Router();

// Obtener todas las canciones
router.get('/', getSongs);
router.post('/', createSong);

export default router;