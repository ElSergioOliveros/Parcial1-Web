import SportCard from "./SportCard"
import "./SportCol.css"
function SportCol(imgURL){
    console.log(imgURL); 
    return(
    <div className="sport-container">
      <h2>
       hola
      </h2>
      <div className="sports">
        {Array.from({ length: 1 }).map((_, i) => (
          <img key={i} src={imgURL} width="60" height="60" className="d-inline-block align-top"alt=""/>
          //<SportCard key={i} sport={sport} img={imgURL}></SportCard>
        ))}
        
      </div>
    </div>
    );
}
export default SportCol;