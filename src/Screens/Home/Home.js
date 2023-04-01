import React from 'react'
import Hero from '../../Component/Hero/Hero'
import Campaign from '../../Component/Campaign/Campaign'
import Blog from '../../Component/Blog/Blog'
import Feature from '../../Component/Feature/Feature'
import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Feature/>
        <Campaign/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home