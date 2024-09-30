import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import "./Home.css"
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
//import SportCol from "./SportCol";
//import { FormattedMessage } from "react-intl";

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function generateRandomNumber(min=1, max=15){
    return Math.floor(Math.random()* (max - min + 1)) + min;
};

function getMockUser(){
    let user = {
        name: generateRandomString(generateRandomNumber()),
        bestRunTime: generateRandomNumber(),
        bestSwimTime: generateRandomNumber(),
        bestCycleTime: generateRandomNumber(),
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
    }
    return user;
}

function Home(){
    const user = getMockUser();
    const [display, setDisplay] = useState(false);
    const [displayData, setDisplayData] = useState({});
    const modalHide = () => setDisplay(false);
    const modalSet = (displayData) => {setDisplayData(displayData);
        setDisplay(true);
    };
    const sportList = ["cycling", "running", "swimming"];
    const sportImgs = [
        "https://www.alpecincycling.com/wp-content/uploads/2021/08/AlpecinRideClub_Lene_Gardasee-171-1536x1022.jpg",
        "https://www.sundried.com/cdn/shop/articles/c27ddca5b9550a6940dfef2581b6c38d_1100x.jpg",
        "https://c1.wallpaperflare.com/preview/956/982/551/life-beauty-scene-swim.jpg"
    ];
    const cityList = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"
      ];
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-container">
                <img
                src={user.imgUrl}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt=""
                />
                <span className="navbar-text">
                    <b>{user.name}</b> - Best Run Time: {user.bestRunTime}s - Best Swim Time: {user.bestSwimTime}s - Best Cycle Time: {user.bestCycleTime}s
                </span>
            </div>
        </nav>
        <div className="home-div">
            {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="sport-container">
            <h2>
                {sportList[i]}
            </h2>
            <div className="sport-col-div">
              {Array.from({ length: 10 }).map((_, j) => (
                <Card key={j} className ="sport-card" onClick={() => (modalSet({
                    sportTitle: sportList[i],
                    imgUrl: sportImgs[i],
                    city: cityList[j]
                }))}>
                    <Card.Img src={sportImgs[i]} alt="Card image"
                    width="120"
                    height="120"/>
                    <Card.ImgOverlay>
                    <Card.Title className="text-white">
                        {sportList[i]}
                    </Card.Title>   
                    <Card.Text className="text-white" >
                    Training session in {cityList[j]}
                    </Card.Text>
                    <Card.Text className="text-white">
                        {generateRandomNumber(10, 40)}Km - {generateRandomNumber(3600,3600*4)}s 
                    </Card.Text> 
                  </Card.ImgOverlay>
              </Card>
              ))}
            </div>
          </div>
            ))}
        </div>
        <Modal show={display} onHide={modalHide} centered className="sport-modal">
            <Card className ="sport-card">
                <Card.Img src={displayData.imgUrl} alt="Card image"
                    width="120"
                    height="120"/>
                <Card.ImgOverlay>
                    <Card.Title className="text-white">
                        {displayData.sportTitle}
                    </Card.Title>   
                    <Card.Text className="text-white" >
                        Training session in {displayData.city}
                    </Card.Text>
                    <Card.Text className="text-white">
                        {generateRandomNumber(10, 40)}Km - {generateRandomNumber(3600,3600*4 )}s 
                    </Card.Text> 
                </Card.ImgOverlay>
            </Card>
        <button className="btn btn-primary" onClick={modalHide}>
          Close
        </button>
      </Modal>
    </>
    );
}
export default Home;