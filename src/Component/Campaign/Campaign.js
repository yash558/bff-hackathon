import React from 'react'
import CampaignCard from './Campaigncard'
import child from '../../assets/child.jpg'
import './Campaign.css';
const Campaign = () => {
    return (
        <div className="campaign p-5">
            <div className="campaign_title">
                <h1>Our Recent <span>Campaign</span></h1>
            </div>
            <div className="campaign_card">
                <CampaignCard title="Fund For Children Education" desc="pls support for the children education and make the new future for this country by small contribution in funding" target="Rs 2,00,000" days="30 days" img={child} progress={30} amount={200} />
                <CampaignCard title="Fund For Children Education" desc="pls support for the children education and make the new future for this country by small contribution in funding" target="Rs 2,00,000" days="30 days" img={child} progress={60} amount={300}/>
                <CampaignCard title="Fund For Children Education" desc="pls support for the children education and make the new future for this country by small contribution in funding" target="Rs 2,00,000" days="30 days" img={child} progress={90} amount={400}/>
            </div>

        </div>
    )
}

export default Campaign