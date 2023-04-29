import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";

const Resister = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleAccepted =(event)=>{
    setAccepted(event.target.checked);
  }

  const handleResister = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error =>{
      console.error(error);
    })
  }


  return (
    <Container className="w-25 mx-auto ">
      <h4>Please Resister</h4>
      <Form onSubmit={handleResister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo</Form.Label>
          <Form.Control name="photo" type="text" placeholder="Enter Your Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms' >Check me out</Link> </>} />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Resister
        </Button>
        <div>
          <Form.Text className="text-success">
            Already have an Account <Link to="/login">Login </Link>
          </Form.Text>
          <br />
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
          <br />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default Resister;
