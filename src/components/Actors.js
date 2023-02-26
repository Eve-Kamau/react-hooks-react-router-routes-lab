import React from "react";
import { actors } from "../data";

function Actors() {

console.log(actors);
  
return (
  <>

     <h1> Actors Page </h1>

       {actors.map((actor, index) => (
         <div key={index} className ="actors">

           <h4> Name: {actor.name}</h4>
          
           <p>Movies: </p>

           <ul>
              {actor.movies.map((movie, index) => (
                  <li key={index} >{movie}</li>
              ))}
           </ul>

          </div>
       ))}
  </>
);
}
  
  export default Actors;
  
