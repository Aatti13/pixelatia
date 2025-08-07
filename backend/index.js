import express from 'express';
import dotenv from 'dotenv';

import Database from './config/database/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const database = new Database();

app.listen(PORT, ()=>{
  database.connectDB();
  console.log(`Listening on: http://localhost:${PORT}`);
});