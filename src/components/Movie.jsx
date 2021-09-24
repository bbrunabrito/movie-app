import { useState, useEffect} from 'react';

const IMAGES = 'http://image.tmdb.org/t/p/w500'


function Movie (title, poster_path, overview, vote_average) 
{
   

return <div className="movie"> 
    <img src={IMAGES + poster_path} alt={title} />
    <div className="movie-info">
    <p>{title}</p>
    <span>{vote_average}</span>
    </div>
</div>
}



export default Movie;