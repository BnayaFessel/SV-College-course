import React from 'react'
import MoviePreview from './MoviePreview'

export default function AllMovies(props) {
  return (
    <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        width: '80px',
        marginRight: '0%',
        gap: '10px',
      }}>
       {props.listByName.map((movie) =>(
        <MoviePreview movie={movie}/>
       )

        )}
    </div>
  )
}
