import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/header1/Header';
import Footer from '../../Components/footer/Footer';
import CardProduct from '../../Components/card_product/Card_product';
import './home.css';

import { Button, NavItem } from 'reactstrap';
import img_banner from '../../Img/banner.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, NavLink } from 'react-router-dom';
import '../../Components/testimonial_card/Testimonial'
import Testimonial from '../../Components/testimonial_card/Testimonial';
import BlogCard from '../../Components/blog_card/blog_card';
import { AppContext } from '../../AppContext';
import ButtonGroup from '../../Components/customButton_carousel/ButtonGroup';



const Home = () => {
    const { product,cart } = useContext(AppContext)
    console.log(product)
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
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 3,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1200, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 400 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 4,
            slidesToSlide: 1

        }

    };


    return (
        <div>
            <Header />
            <div className='body'>
                <div className='banner'>
                    <div className='container'>
                        <div className='content_banner'>
                            <div className='content' >
                                <p className='sub_tilte'> New Arrivals</p>
                                <h1 className='tilte' >Perfect Fashions <br /> For Summer</h1>
                                <p className='body_text'>There's nothing like a trend, let's select items to make your
                                    life with a new fashion style!</p>
                                <Button>Explore Now</Button>
                            </div>
                        </div>
                        <img src={img_banner}></img>
                    </div>
                </div>
                <section className='sub_banner'>
                    <div className='container'>
                        <div className='banner1 '>
                            <h3>The oversize favorite <br /> of all time</h3>
                            <p>Take a perfect shape after experiencing our products.
                                <br /> Let’s try it now!</p>
                            <Button><Link to='/Products'>Shop now</Link></Button>
                        </div>
                        <div className='banner2'>
                            <h3>Collection made for <br /> you design</h3>
                            <p>All the procucts in our collection are handcrafted with <br /> great care and precision.</p>
                            <Button><Link to='/Products'>Shop now</Link></Button>
                        </div>
                    </div>
                </section>
                <section className='Discover_our_featured_products'>
                    <div className='container'>
                        <h1>Discover our featured products</h1>
                        

                        <Carousel responsive={responsive}
                            autoPlaySpeed={5000}
                            autoPlay={false}
                            showDots={true}
                            arrows={false}
                            customButtonGroup={<ButtonGroup />}
                            renderButtonGroupOutside={true}>
                            {product != null && product.map((item, index) => (
                                <CardProduct ite={item} key={index} />
                            ))}
                        </Carousel>
                    </div>
                </section>
                <section className='banner_body'>
                    <div className='container'>
                        <h1>Deal of the day upto<br />
                            <span className='phantram'>-40% </span> off</h1>
                        <div className='coutdown'>
                            <div className='day'>
                                <div className='number'><h3>05</h3></div>
                                <p>Day</p>
                            </div>
                            <div className='hours'>
                                <div className='number'><h3>12</h3></div>
                                <p>Hours</p>
                            </div>
                            <div className='minutes'>
                                <div className='number'><h3>35</h3></div>
                                <p>Minutes</p>
                            </div>
                            <div className='seconds'>
                                <div className='number'><h3>25</h3></div>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <Button >Shop now</Button>
                    </div>
                </section>
                <section className='Clientloveus_welovethem'>
                    <div className='container'>
                        <h1>Client love us & we love them</h1>
                        
                        <Carousel
                            responsive={responsive1}
                            showDots={true}


                            renderButtonGroupOutside={true}
                        >
                            <Testimonial />
                            <Testimonial />
                            <Testimonial />
                            <Testimonial />
                            <Testimonial />
                            <Testimonial />
                        </Carousel>
                    </div>

                </section>
                <section className='New_arrival_products'>

                    <div className='container'>
                        <h1 className='title'>New arrival products</h1>
                        <div className='tag'>
                            <NavItem><NavLink>Best seller</NavLink></NavItem>
                            <p>//</p>
                            <NavItem><NavLink>On sale</NavLink></NavItem>
                            <p>//</p>
                            <NavItem><NavLink>New arrivals</NavLink></NavItem>
                        </div>
                        <div className='products row'>
                            {product != null && product.slice(0, 8).map((item, index) => (
                                <CardProduct ite={item} key={index} />
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            <section className='Discoverdressingtipsfromourblog'>
                <div className='container'>
                    <h1>Discover dressing tips from our blog</h1>
                    <div className='row'>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                    <Button>View more</Button>
                </div>
            </section>




            <Footer />

        </div>
    );
}

export default Home;
