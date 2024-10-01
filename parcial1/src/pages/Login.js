import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./Login.css"
import { FormattedMessage, useIntl } from "react-intl";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const intl = useIntl();

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    function handleSubmit(e){
        e.preventDefault();
        let alertMsg = "";
        let notCorrect= false;
        if (password.length !== 8){
            alertMsg+=intl.formatMessage({ id:"passwordNot8Char"});
            notCorrect = true;
        }
        if(!emailRegex.test(email)){
            alertMsg+=intl.formatMessage({ id:"emailWrongFormat"});
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
            <FormattedMessage id="login" />
          </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><FormattedMessage id="email" /></Form.Label>
                <Form.Control
                  type="text"
                  placeholder={intl.formatMessage({ id:"enterEmail"})}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ width: '200px' }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label><FormattedMessage id="password" /></Form.Label>
                <Form.Control
                  type="password"
                  placeholder={intl.formatMessage({ id:"password"})}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: '200px' }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
              <FormattedMessage id="submit"/>
              </Button> 
            </Form>
          </Col>
        </Row>
      </Container>  
      );
};


export default Login;