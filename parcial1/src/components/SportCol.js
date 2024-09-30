import SportCard from "./SportCard"
import "./SportCol.css"
function SportCol(sport, img){
    return(
    <div className="sport-container">
      <h2>
       hola
      </h2>
      <div className="sports">
        {Array.from({ length: 1 }).map((_, i) => (
          <SportCard key={i} sport={sport} img={img}></SportCard>
        ))}
      </div>
    </div>
    );
    
}
export default SportCol;