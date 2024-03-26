import React from 'react'

export default function HomePage(props) {
  return (
    <div style={{
        height: '420px',
        width: '70%',
        border: 'black 1px solid',
       backgroundImage: `url(${props.topThree[0].imageUrl})`,
       backgroundSize: 'cover', 
      backgroundPosition: 'center',
      color: 'black',
      fontWeight:'bold' ,
       display: 'inline-flex', marginLeft: '10%',

       alignItems: 'center',
       justifyContent: 'center'
      }}>{props.topThree[0].name}</div>
        
        
  )
}
