import React from 'react'
import './CampaignCard.css';
import ProgressBar from '../ProgressBar/ProgressBar';
const CampaignCard = (props) => {
    return (
        <div className="product">
            <div className="product-thumb">
                <a href="/"><img src={props.img} alt="" /></a>
            </div>
            <div className="product-body">
                <div className="title">
                    <h5>{props.title}</h5>
                </div>
                <div className="desc">
                    <p>{props.desc}</p>
                </div>
            </div>
            <ProgressBar bgcolor="#26ba8a" progress={props.progress}  height={10} />
            <div className="product-target">
                <div className="target">
                    <h6>Goal:{props.target}</h6>
                </div>
                <div className="days">
                    <h6>{props.days}</h6>
                </div>

            </div>
            <hr />
            <div className="product-btn">
                <div className="donation_no">
                    <h5>{props.amount}+ Donation</h5>
                </div>
                <button className="btn">
                    Donate Now
                </button>
            </div>

        </div>

    )
}

export default CampaignCard;