import React from 'react'
import MoviePreview from './MoviePreview'

export default function BestMovies(props) {
  return (
    <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
        {props.topThree.map((movie) =>(
            <div>
         <MoviePreview movie={movie}/>
         <div>{movie.avg}</div>
            </div>
        ))}
    </div>
  )
}
