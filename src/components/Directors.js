import React from "react";
import { directors } from "../data";

function Directors() {

console.log(directors);

return (
 <>

   <h1> Directors Page </h1>

     {directors.map((director, index) => (
       <div key={index} className ="directors">

           <h4>Name: {director.name}</h4>

           <p>Movies: </p>
            
            <ul>
              {director.movies.map((movie, index) => (
               <li key={index} >{movie}</li>
              ))}
            </ul>

       </div>
     ))}
   </>
  );
}

export default Directors;
