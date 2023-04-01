import React from 'react'

import child from '../../assets/child.jpg'
import BlogCard from './BlogCard';
import person from '../../assets/person.jpg'
const Blog = () => {
    return (
        <div className="campaign justify-content-center">
            <div className="campaign_title">
                <h1>Read Our <span> Latest Blog</span></h1>
            </div>
            <div className="campaign_card d-flex justify-content-center">
                <BlogCard title="Fund For Children Education" name="yash" user={person} desc="pls support for the children education and make the new future for this country by small contribution in funding" img={child} />
                <BlogCard title="Fund For Children Education" name="yash" user={person} desc="pls support for the children education and make the new future for this country by small contribution in funding" img={child} />
                <BlogCard title="Fund For Children Education" name="yash" user={person} desc="pls support for the children education and make the new future for this country by small contribution in funding" img={child} />
            </div>
        </div>
    )
}

export default Blog;