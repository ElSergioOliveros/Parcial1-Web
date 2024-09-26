import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SportCard(user){
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sport Event</Card.Title>
        <Card.Text>
          <p>{user.bestRunTime}</p>
          <p>{user.bestSwimTime}</p>
          <p>{user.bestCicleTime}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default SportCard;