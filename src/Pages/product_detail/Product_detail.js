import React, { useState, useEffect } from 'react';
import Header from '../../Components/header1/Header';
import Footer from '../../Components/footer/Footer';
import Breadcrumbs from '../../Components/breadcrumb/Breadcrumbs';
import './detail_product.css'
import img_product from '../../Img/product.jpg'
import img_product2 from '../../Img/Product2.jpg'
import img_product3 from '../../Img/Product3.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import CardProduct from '../../Components/card_product/Card_product';
import avatar from '../../Img/avarta.jpg'
import CardReviewPagedetail from '../../Components/card_review_Pagedetail/Card_review_Pagedetail';
import ButtonGroup from '../../Components/customButton_carousel/ButtonGroup';

const ProductDetail = (pros) => {
    const { ite } = pros;
    const [img, setImg] = useState(img_product)

    const changeImg = (e) => {
        const id = e.target.getAttribute('id');
        if (id != '') {
            setImg(e.target.src)
        }
        else if (id === '') {
            setImg(img)

        }
    }
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 4,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1200, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 4
        }

    };
    const [product, setProduct] = useState(null)
    function getData() {
        const url = "https://661b930865444945d04fca10.mockapi.io/ps"
        axios.get(url)
            .then(function (res) {
                setProduct(res.data)

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])



    return (
        <div>
            <Header />
            <div className='breadcrumbs container'> <Breadcrumbs /></div>
            <div className='infor_detail_product container'>
                <div className='img'>
                    <img alt='product' className='main_img' src={img}></img>
                    <div className='sub_img'>
                        <img alt='product' className='sub' onClick={changeImg} id="1" src={img_product}></img>
                        <img alt='product' className='sub' onClick={changeImg} id="2" src={img_product3}></img>
                        <img alt='product' className='sub' onClick={changeImg} id="3" src={img_product2}></img>
                        <img alt='product' className='sub' onClick={changeImg} id="4" src={img_product3}></img>
                    </div>
                </div>
                <div className='content_infor'>
                    <div className='name_cost'>
                        <h1>ZARA romper dress pink size XS - $12</h1>
                        <div className='cost_review'>
                            <div className='cost'>
                                <p className='cost_close'>$129.05</p>
                                <h5>$90.65</h5>
                                <div className='discout'><p>30%</p></div>
                            </div>
                            <div className='line'></div>
                            <div className='review'>
                                <i class="fa-solid fa-star"></i>
                                <p>4.7 of 579 reviews</p>
                            </div>
                        </div>

                        <p className='text_describe'>The short skirt with the round neck has a cotton double-layered, sexy figure, off-shoulder design, and flared long sleeves with pink and white stripes pattern. Committed
                            100% soft cotton yarn, bring you a comfortable
                            wearing feeling.</p>
                    </div>
                    <div className='funtion_product'>
                        <div className='Size'>
                            <label for='size'>Size</label>
                            <select id="size">
                                <option>S</option>
                                <option>XS</option>
                                <option>XL</option>
                                <option>2XL</option>
                            </select>
                        </div>
                        <div className='Color'>
                            <label for='color'>Color</label>
                            <select id="color">
                                <option>Green</option>
                                <option>Red</option>
                                <option>Orange</option>
                                <option>Blue</option>
                            </select>
                        </div>
                        <div className='number_ofProduct_buttonAdd'>
                            <div className='number_ofProduct'>
                                <Button className='down'><i class="fa-solid fa-minus"></i></Button>
                                <p className='numberofProduct'>2</p>
                                <Button className='up'><i class="fa-solid fa-plus"></i></Button>
                            </div>
                            <Button className='Add_to_cart'> Add to cart</Button>

                        </div>
                        <div>
                            <h5 className='SKU'>SKU:<span className='SKU_number'>KUMO42568</span> </h5>
                            <div className='Category_link'>
                                <h5>Category:</h5>
                                <Link>Clothing</Link>
                                <Link>Women</Link>
                                <Link>Hot</Link>
                                
                                <Link>Clothing</Link>
                                <Link> Dresses</Link>
                            </div>
                            <div className='tag_category'>
                                <Link>Clothing</Link>
                                <Link>Women</Link>

                                <Link>Cotton</Link>
                                <Link>Sticker</Link>

                            </div>
                            <Link className='wishlist'><i class="fa-regular fa-heart"></i>Add to wishlist</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tab container'>
                <Tabs>
                    <TabList>
                        <Tab><p>Description</p></Tab>
                        <Tab><p>Additional information</p></Tab>
                        <Tab><p>Reviews <span>123</span></p></Tab>
                    </TabList>

                    <TabPanel className='Description'>
                        <h5>Overview:</h5>
                        <p>Short skirt with round neck has cotton double-layered, sexy figure, off-shoulder design, long-sleeve design, flared sleeves
                            with pink and white stripes pattern.</p>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>100% soft cotton.</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>A mini dress with a voluminous, tiered style.</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>Comes with an inner layer camisole.</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>Perfect for wearing on its own or in layered looks.</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>Body: 100% Cotton</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>Inner: 100% Polyester</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>Model wears: UK 10/ EU 38/ US 6</p>
                        </div>
                        <div className='note'>
                            <i class="fa-solid fa-circle"></i>
                            <p>Made in Italy</p>
                        </div>
                        <div className='Washing_instructions:'>
                            <h5>Washing instructions:</h5>
                            <p>Machine wash, no ironing, don’t dry clean, don’t tumble dry and turn it
                                upside down when drying to avoid color fading.</p>
                        </div>
                        <div className='Warranty_&_customer_care'>
                            <h5>Warranty & customer care:</h5>
                            <p>- Committed to product quality and design similar to the picture.</p>
                            <p>- Guaranteed to be returned within 5 days and item must be new and unused.</p>
                            <p>- Product is defective due to shipping and manufacturer</p>
                        </div>
                        <p className='Please_note'>Please note: The images shown may include colors that are not available.</p>
                    </TabPanel>
                    <TabPanel className='Additional_information'> 
                        <p>Round neck dress 85cm long, dear customers. The material of the product is soft and beautiful, and the nose is pretty standard, only a little extra. The 2-layer dress is super beautiful, with no wrinkles, no ruffles. The shop's women's goods are free-size, women's height m65 52kg in weight, it's beautiful. Designed with the same
                            color as the photo: Female: height m65, weight 48kg, please wear it well.</p>
                        <div className='list_style'>
                            <div className='list'>
                                <p className='tilte_list'>Product ID</p>
                                <p className='content_list'>#83518358539</p>
                            </div>
                            <div className='list'>
                                <p className='tilte_list'>Material</p>
                                <p className='content_list'>100% Cotton</p>
                            </div>
                            <div className='list'>
                                <p className='tilte_list'>Color</p>
                                <p className='content_list'>Pink, white, red, black</p>
                            </div>
                            <div className='list'>
                                <p className='tilte_list'>Size</p>
                                <p className='content_list'>Freesize</p>
                            </div>
                            <div className='list'>
                                <p className='tilte_list'>Jacket length</p>
                                <p className='content_list'>114 cm</p>
                            </div>
                            <div className='list'>
                                <p className='tilte_list'>Weight</p>
                                <p className='content_list'>450 gr</p>
                            </div>
                            <div className='list'>
                                <p className='tilte_list'>Other info</p>
                                <p className='content_list'>-</p>
                            </div>
                            <p>Guarantee product as photo, return products in 7 days, fast service, quality is number 1.<br />
                                If you have any questions, don't hesitate to reach out to our team.</p>
                        </div>
                    </TabPanel>
                    <TabPanel className='Reviews'>
                        <div className='review'>
                            <div className='Customer_reviews'>
                                <h1>Customer reviews</h1>
                                <div className='select_group'>
                                    <select>
                                        <option>Recent reviews</option>
                                        <option>Latest reviews</option>
                                        <option>Yesterday reviews</option>
                                    </select>
                                    <select>
                                        <option>Show 5 start only</option>
                                        <option>Show 4 start only</option>
                                        <option>Show 3 start only</option>
                                    </select>
                                </div>
                                <CardReviewPagedetail />
                                <CardReviewPagedetail />
                                <CardReviewPagedetail />
                                <CardReviewPagedetail />
                                <CardReviewPagedetail />
                                


                            </div>
                            <div className='Average_score'>
                                <div className='tilteAndstart'>
                                    <h1>Average score</h1>
                                    <div className='start'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='comment_start'>
                                        <p>Your ratings:</p>
                                    <div className='start'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    </div>
                                    <div className='Group_input'>
                                        <form>
                                        <div className='full_nameAndemai_ldress'>
                                            <div className='full_name'>
                                                <label for='full_name' >Full Name</label>
                                                <input id='full_name' placeholder='Enter your full name'></input>
                                            </div>
                                            <div className='emai_ldress'>
                                                <label for='emai_ldress' >Email Address</label>
                                                <input id='emai_ldress' placeholder='Enter your email address'></input>
                                            </div>
                                        </div>
                                        <div className='your_Review'>
                                            <label for='your_Review'>Your Review</label>
                                            <textarea id='your_Review' placeholder='Write your review'></textarea>
                                        </div>
                                        <button>Submit Review</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <section className='Related_products'>
                <div className='container'>
                    <h1>Related products</h1>

                    <Carousel responsive={responsive}
                        autoPlaySpeed={5000}
                        autoPlay={false}
                        showDots={true}
                        customButtonGroup={<ButtonGroup/>}
                        renderButtonGroupOutside={true}
                        arrows={false}
                        
                        >
                        {product != null && product.map((item, index) => (
                            <CardProduct ite={item} key={index} />
                        ))}
                    </Carousel>
                </div>
            </section>





            <Footer />
        </div>
    );
}

export default ProductDetail;
