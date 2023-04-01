import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
const Hero = () => {
    return (
        <div className="Hero d-flex align-items-center">
            <div className="container">
                <div className="hero_section">
                    <div className="col-lg-7 col-md-7">
                        <div className="hero-text">
                            <h1>Make A Big <br /> Difference by <br /> <span>Small Effort</span></h1>
                            <p>We are very much grateful to you for your donation. Your little effort help us to change big community life.</p>
                            <div className="hero-btn">
                                <button className='btn mx-2 my-2'><a href="/" >Donate Now <i class="uil uil-heartbeat"></i></a></button>
                                <button className='video-play-btn'>
                                    <i class="uil uil-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 text-center">
                        <div className="hero_img">
                            <img src={hero} alt="" />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero