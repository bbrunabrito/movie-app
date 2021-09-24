import { useEffect, useState} from 'react'
import Movie from './components/Movie';


const FEATURE_API ="https://api.themoviedb.org/3/movie/popular?api_key=af36a644608250b100a7260d79a21674&language=en-US&page=1"

const SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=af36a644608250b100a7260d79a21674&query="


function App() {
    const [ movies, setMovies] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(FEATURE_API)
    }, [])

    const getMovies = (API)  => {
        fetch(API)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(setSearchTerm){
        getMovies(SEARCH + searchTerm)
            
        setSearchTerm('')
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const setVoteClass = (vote) => {
        if(vote >= 7) {
            return 'green'
        } else if (vote >= 6 ) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return ( 
        <>
        <div>
        <header >
            <form className="search-container" onSubmit={handleOnSubmit}>
        <input type="search" placeholder="Search..." className="search" value={searchTerm} 
        onChange={handleOnChange}/>

        </form>
    </header>
    
    </div>
    
    
    
    <div className="movie-container">


        {movies.length > 0 && movies.map((movie) => (
           
            <div className="movie">
            <img src={movie.poster_path ? 
            "http://image.tmdb.org/t/p/w500" + movie.poster_path
            : "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=428&q=80"}
             alt={movie.title} />
            <p className="movie-overview">
                {movie.overview}
            </p>
            <div className="movie-info">
                <p>{movie.title}</p>
                <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
            </div>
            </div>
           
        ))}
    </div>
    </>
     )

    
}


export default App;