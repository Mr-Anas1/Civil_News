import React from 'react'
import './Home.css'
import PodcastHome from '../../Components/PodcastHome/PodcastHome'
import MainPage from '../../Components/MainPage/MainPage'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Reviews from '../../Components/Reviews/Reviews'

const Home = () => {
  return (
    <div className='home'>
      <MainPage />
      <PodcastHome />
      <Reviews />
      <Newsletter />
    </div>
  )
}

export default Home