import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((prod) => (
            <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
              <Product prod={prod} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

//will get error because back end and front end pointed to different points 3000 and 5000
// thats why we add proxy to jason file
