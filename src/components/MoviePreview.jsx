import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviePreview(props) {
  return (
    <Link to={`/${props.movie.name}`} style={{display:'inline-flex', textDecoration: 'none', width: '80px'}}>
    <div style={{
      height: '80px',
      width: '80px',
      border: 'black 1px solid',
      borderRadius:'15px',
     backgroundImage: `url(${props.movie.imageUrl})`,
     backgroundSize: 'cover', 
    backgroundPosition: 'center',
    color: 'black',
    fontWeight:'bold' ,
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
    }}>{props.movie.name}</div>
    </Link>
  )
}
