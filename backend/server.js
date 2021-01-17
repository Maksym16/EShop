import express from 'express' //common js models system, import is ES models
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middlewares/errorM.js';

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products/', productRoutes) //mount it, so if anything will go to products will mount to this router

app.use(notFound);

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))