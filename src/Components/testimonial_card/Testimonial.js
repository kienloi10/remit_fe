import React from 'react';
import './testimonial.css'
import avatar from '../../Img/avarta.jpg'
import non from'../../Img/testimonal_img.png'
const Testimonial = () => {
    return (
        <div className='testimonial_card'>
            <div className='infor_user'>
                <div className='img_and_name'>
                    <div className='anh'><img alt='avarta' className='avarta' src={avatar}></img></div>
                    <div className='name_and_start'>
                        <p>William Hallen</p>
                        <div className='start'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>

                </div>
                <div className='img_product'></div>
            </div>
            <p className='review'>The standard chunk of Lorem Ipsum used since the
                1500s es is reproduced below for those interested.
                Sections 1.10.32 and 1.10.33 from de Finibus amet
                Bonorum et Malorum</p>

        </div>
    );
}

export default Testimonial;
