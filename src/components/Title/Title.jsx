import React from 'react'
import './Title.css'

const Title = ({subTtile, title}) => {
  return (
    <div className='title'>
        <p>{title}</p>
        <h2>{subTtile}</h2>
    </div>
  )
}

export default Title