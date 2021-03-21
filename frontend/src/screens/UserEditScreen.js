import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, editUser } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { USER_EDIT_RESET } from '../constants/userConstants';

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  console.log(userDetails);
  const userEdit = useSelector((state) => state.userEdit);
  const {
    loading: loadingEdit,
    error: errorEdit,
    success: editSuccess,
  } = userEdit;
  console.log(!user.user.name || (user.user._id !== userId));
  useEffect(() => {
    if (editSuccess) {
      dispatch({ type: USER_EDIT_RESET });
      history.push(`/admin/userList`);
    } else {
      // if (!user.user.name || (user.user._id !== userId)) {
        dispatch(getUserDetails(userId));
      // } else {
      //   setName(user.user.name);
      //   setEmail(user.user.email);
      //   setIsAdmin(user.user.isAdmin);
      // }
    }
  }, [user, dispatch, editSuccess]);


  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        _id: userId,
        name,
        email,
        isAdmin,
      })
    );
  };

  return (
    <FormContainer>
      <>
        <Link to="/admin/userList" className="btn btn-light my-3">
          Go Back
        </Link>
        <h1>Edit User</h1>
        {errorEdit && <Message variant="danger">{errorEdit}</Message>}
        {editSuccess && <Message variant="success">User Updated</Message>}
        {loadingEdit && <Loader />}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </>
    </FormContainer>
  );
};

export default UserEditScreen;
