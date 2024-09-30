import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import "./SportCard.css";

function SportCard(sport, img){
    return(
    <Card className ="sport-card">
      <Card.Img src={img} alt="Card image"
      width="60"
      height="60"/>
        <Card.ImgOverlay>
        <Card.Title>
          Title
        </Card.Title>    
        </Card.ImgOverlay>
    </Card>
    );
}

export default SportCard;