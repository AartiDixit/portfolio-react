import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Body from '../Body'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
    <div>
        <Header/>
    </div>
    <div>
        <Body/>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  )
}

export default Home
