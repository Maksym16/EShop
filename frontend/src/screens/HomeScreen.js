import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, getProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const products = await axios.get('/api/products')

    if (products && products.data) {
      getProducts(products.data);
    }
  }
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((prod) => (
          <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
            <Product prod={prod} />
          </Col>
        )
        )}
      </Row>
    </>
  );
}

export default HomeScreen;

  //will get error because back end and front end pointed to different points 3000 and 5000
    // thats why we add proxy to jason file
