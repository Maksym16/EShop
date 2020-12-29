const express = require('express') //common js models system, import is ES models
const products = require('./data/products')
const dotenv = require('dotenv')

dotenv.config()

 const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products) //will convert arr of prodacts into json format
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id)
  res.json(product); //will convert arr of prodacts into json format
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))