// Pre-req. Libraries
import express from "express";
import dotenv from 'dotenv'; 

dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Pre-defined middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Custom middlewares

app.listen(PORT, ()=>{
  console.log(`Listening: http://localhost:${PORT}`)
});