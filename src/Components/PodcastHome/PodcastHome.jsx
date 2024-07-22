import React from 'react'
import './PodcastHome.css'
import { FaMicrophoneAlt } from "react-icons/fa";
import PopularPodcast from '../../Helpers/PopularPodcast'
import PodcastList from '../PodcastList/PodcastList'

const PodcastHome = () => {
  return (
    <div className='podcasthome'>
        <div className="podcasthome-heading-container">
            

            <div className="podcasthome-title">
              <FaMicrophoneAlt className='mic-icon'/>

              <div>
                <h2>Latest Podcast</h2>
                <p>Get started on latest episodes</p>
              </div>
            </div>

            <p>See all Podcast</p>
        </div>

        <div className="podcasts">
          {PopularPodcast.map((value, index)=> {
            return <PodcastList key={value.id} id={value.id} img={value.img} author={value.author} title={value.title} />
          })}
        </div>
    </div>
  )
}

export default PodcastHome