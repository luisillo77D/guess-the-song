import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Rutas
import authRoutes from './routes/auth.routes.js';
import gameRoutes from './routes/game.routes.js';
import songsRoutes from './routes/songs.routes.js';

// Configuración
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/songs', songsRoutes);

export default app;