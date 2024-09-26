import 'bootstrap/dist/css/bootstrap.css';

import SportCard from '../components/SportCard';

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
        bestCicleTime: generateRandomNumber(),
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"

    }
    return user;
}

function Home(){
    const user = getMockUser();
    return(
        <div class="container">
            <div class="row">
                <SportCard/>
            </div>
            <div class="row">
                <div class="col-md">
                    <img src={user.imgUrl} alt="img"/>
                </div>
                <div class="col-md">
                    <h2>
                        {user.name}
                    </h2>
                </div>
                <div class="col-md">
                    {user.bestRunTime}
                </div>
                <div class="col-md">
                    {user.bestSwimTime}
                </div>
                <div class="col-md">
                    {user.bestCicleTime}
                </div>
            </div>
        </div>
    );
}
export default Home;