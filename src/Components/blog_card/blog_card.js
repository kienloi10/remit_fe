import React from 'react';
import './blog_card.css'
import img_blog from'../../Img/img_blog.png'

const BlogCard = () => {
    return (
        <div className='blog_card col-xl-4 col-lg-12'>
            <img src={img_blog}></img>
            <div className='content'>
                <p className='day_submit'>May 10, 2022</p>
                <h4 className='blog_title'>To dress well, modern men need to have the following 8 savings items</h4>
            </div>
            
        </div>
    );
}

export default BlogCard;
