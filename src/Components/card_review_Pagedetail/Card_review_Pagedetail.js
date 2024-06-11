import React from 'react';
import avatar from '../../Img/avarta.jpg'
import'./Card_review_Pagedetail.css'
const CardReviewPagedetail = () => {
    return (
        <div>
            
            <div className='Customer_reviews_card'>
                                    <div className='infor_Customer'>
                                        <div className='anh'> <img alt='avarta' src={avatar}></img></div>
                                        <div className='name_Customer'>
                                            <div className='nameAndstart'>
                                               <p className='name_user'> Julian Schofield</p>
                                                <div className='start'>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <p>May 19, 2022 - 19:30</p>

                                        </div>
                                    </div>
                                    <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear
                                        it to know because this is my first purchase, quite satisfied :")))</p>
                                </div>
        </div>
    );
}

export default CardReviewPagedetail;
