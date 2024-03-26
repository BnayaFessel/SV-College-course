import React from 'react'
import { useParams } from 'react-router-dom'

export default function MoviePage(props) {
    const {movieName} = useParams();
    const movie = props.getMovieByName(movieName)
  return (
    <div style={{marginLeft: '15%', color: 'white'}}>
        <h3>movie name: {movie.name}</h3>
    <div style={{
        height: '250px',
        width: '80%',
        border: 'black 1px solid',
        borderRadius: '40px',
        backgroundImage: `url(${movie.imageUrl})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: 'black',
        fontWeight:'bold' ,
        display: 'inline-flex', marginLeft: 'auto',
        
        alignItems: 'center',
        justifyContent: 'center'
    }}></div>
    <h4>rating: {movie.avg.toFixed(1)}</h4>
    <h5>{movie.discription}</h5>
    rate: 
    <button onClick={()=> props.addRateToArr(movie.name, 1)}>1</button>- 
    <button onClick={()=> props.addRateToArr(movie.name, 2)}>2</button>-
    <button onClick={()=> props.addRateToArr(movie.name, 3)}>3</button>-
    <button onClick={()=> props.addRateToArr(movie.name, 4)}>4</button>-
    <button onClick={()=> props.addRateToArr(movie.name, 5)}>5</button>
    </div>
  )
}
