import React, { useState } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
// import { saveShippingAddress } from '../actions/cartActions';

const PlaceOrderScreen = () => {
  const cart = useSelector(state => state.cart)
  const { cartItems, shippingAddress, paymentMethod } = cart
  //calculate prices
  const addDecemals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemPrice = addDecemals(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
  cart.shippingPrice = addDecemals(cart.itemPrice > 100 ? 0 : 10);
  cart.taxPrice = addDecemals(Number(0.15 * cart.itemPrice));
  cart.totalPrice = addDecemals(Number(cart.itemPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice));
 
  const placeOrderHandler = () => {

  }
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {shippingAddress.address}, {shippingAddress.city},{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Item</h2>
              {cartItems.length === 0 ? <Message>Your cart is empty</Message> :
                (
                  <ListGroup variant="flush">
                    {cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                          </Col>
                          <Col>
                              <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x ${item.price} = ${item.qty * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )
              }
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className="btn-block" disabled={cartItems.length === 0} onClick={placeOrderHandler}>Place Order</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PlaceOrderScreen;
