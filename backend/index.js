import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';

import Database from './config/database/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const database = new Database();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoutes);

app.listen(PORT, ()=>{
  database.connectDB();
  console.log(`Listening on: http://localhost:${PORT}`);
});