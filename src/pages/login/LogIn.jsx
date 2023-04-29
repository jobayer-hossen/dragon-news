import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0';

  const handleSignIn =(event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser);
      navigate(from , {replace:true} );
    })
    .catch(error =>{
      console.error(error);
    })
  }

  return (
    <Container className="w-25 mx-auto ">
      <h4>Please Login</h4>
      <Form onSubmit={handleSignIn} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <div>
        <Form.Text className="text-success">
            Don't have an Account <Link to='/resister' >Resister </Link>
          </Form.Text> <br/>
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text> <br/>
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
        </div>
      </Form>
    </Container>
  );
};

export default LogIn;
