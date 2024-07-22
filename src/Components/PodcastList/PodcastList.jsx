import React from 'react'
import "./PodcastList.css"

const PodcastList = (props) => {
  return (
    <div className='podcastlist'>
        <img src={props.img} alt="img" />
        <h3>{props.title}</h3>
        <p>{props.author}</p>
    </div>  
  )
}

export default PodcastList