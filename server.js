import express from'express';
import cors from'cors'
const app = express();

import dotenv from'dotenv';
dotenv.config();
import db from './db/db.js';
import productRouter from './routes/productRoutes.js';


// connect wit mongodb
db()
// middleware for creating and updating 
app.use([cors(),express.json(),express.urlencoded({extended:true})])
 //main routes
app.get('/',(req,res)=>{
  // console.log(req.params.name)
  res.send('hellow guys welcom to my mern stack project')
})

// userte 
app.use('/api/product/',productRouter)
// port
const PORT = process.env.PORT || 5000;
//linsten to port 
app.listen(PORT,()=>{
  console.log('server is runnig')
})