import React from 'react'
import video from '../../assets/video.mp4'
import './Feature.css'
const Feature = () => {
    return (
        <div className='feature'>
            <div className="feature_left">
                <video src={video} loop autoPlay></video>
            </div>
            <div className="feature_right">
                <div className="feature_title">
                    <h2>When People  <span>help people</span> change happens</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias veniam ipsa quam quisquam voluptatem, error nesciunt veritatis aliquid quibusdam, doloremque reiciendis nihil possimus, cupiditate ipsum? Ut mollitia debitis itaque.</p>
                </div>

                <div className="feature_data">
                    <div className="data1">
                        <h1>12+</h1>
                        <p>Year Experience</p>
                    </div>
                    <div className="data2">
                        <h1>250+</h1>
                        <p>Volunteer</p>
                    </div>
                    <div className="data3">
                        <h1>29+</h1>
                        <p>Complete Project</p>
                    </div>
                </div>

                <button className="btn">Explore More</button>
            </div>
        </div>
    )
}

export default Feature