const express = require('express') //common js models system, import is ES models
const products = require('./data/products')
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

app.listen(5000, console.log('Server is running on 5000'))