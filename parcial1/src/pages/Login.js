import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./Login.css"

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    function handleSubmit(e){
        e.preventDefault();
        let alertMsg = "";
        let notCorrect= false;
        if (password.length !== 8){
            alertMsg+="The password is not 8 characters long\n";
            notCorrect = true;
        }
        if(!emailRegex.test(email)){
            alertMsg+="The email does not have the expected format\n";
            notCorrect = true;
        }

        if(notCorrect){
          alert(alertMsg);  
        }
        else{
         navigate("/Home");
        }
    }

    return (
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
          <h3>
              Login
          </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ width: '200px' }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: '200px' }}
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Submit
              </Button>   
  
            </Form>
          </Col>
        </Row>
      </Container>  
      );
};


export default Login;