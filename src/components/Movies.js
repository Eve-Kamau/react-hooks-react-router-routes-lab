import React from "react";
import { movies } from "../data";

function Movies() {

console.log(movies);

return (
<>
 <h1> Movies Page </h1>
  {movies.map((movie, index) => (
    <div key={index} className="movies">

         <h3>Name:{movie.title}</h3>
         
         <p>Time:{movie.time}</p>
         
         <p>Genres: </p>

          <ul>
             {movie.genres.map((movie, index) => (
               <li key={index}>{movie}</li>
              ))}
           </ul>
           
      </div>
  ))}
</>
);
}

export default Movies;

