import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
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
    const sportList = ["cycling", "running", "swimming"];
    const sportImgs = [
        "https://www.kitzbuehel.com/fileadmin/_processed_/7/4/csm_Rennrad_Fr%C3%BChling_Kitzb%C3%BChel__c__Kitzb%C3%BChel_Tourismus_-_Thomas_Griesbeck__2__86fe21c4a7.jpg",
        "https://www.sundried.com/cdn/shop/articles/c27ddca5b9550a6940dfef2581b6c38d_1100x.jpg",
        "https://c1.wallpaperflare.com/preview/956/982/551/life-beauty-scene-swim.jpg"
    ]    
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
        <div className="home-container">
            {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="sport-container">
            <h2>
             hola
            </h2>
            <div className="sports">
              {Array.from({ length: 10 }).map((_, j) => (
                <Card className ="sport-card">
                    <Card.Img src={sportImgs[i]} alt="Card image"
                    width="60"
                    height="60"/>
                    <Card.ImgOverlay>
                    <Card.Title>
                        Title
                    </Card.Title>    
                  </Card.ImgOverlay>
              </Card>
              ))}
              
            </div>
          </div>
            ))}
        </div>
    </>
    );
}
export default Home;