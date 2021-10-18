import React from 'react'
import { Rating } from 'react-simple-star-rating';

const MovieCard=({movies}) => {
    return(
      <div>
        <div class="movie">       
        <div class="menu"><i class="material-icons"></i></div>
        <div class="movie-img"></div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>{movie.titel}</h1>
              <ul class="movie-gen">
                <li>PG-13  /</li>
                <li>{movie.duration}  /</li>
                <li>{movie.genre}</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
            <div class="col2">
               <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>124</li>
                <li><i class="material-icons">&#xE813;</i>3</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">{movie.description} </p>
            </div>
            </div>
        <div class="blur_back  "></div>
      </div>
      </div>
      </div>
         
    )

}
export default MovieCard;
