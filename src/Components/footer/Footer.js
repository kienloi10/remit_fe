import React, { useState } from 'react';
import './footer.css'
import mail from '../../Img/envolop.svg'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, NavItem, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../style.css'
import logo from '../../Img/logo.png'
import delivery_icon from '../../Img/delivery-icon.svg'
import refund_icon from '../../Img/refund-icon.svg'
import support_icon from '../../Img/support-icon.svg'
import tracking_icon from '../../Img/tracking-icon.svg' 
const Footer = () => {


    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }

    return (
        <div className='footer'>
            <div className='service'>
                <div className='service_detail container'>
                    <div className='box'>
                        <div className='icon_box'><img src={delivery_icon}></img></div>
                        <div className='content_box'>
                            <h5>Fast delivery</h5>
                            <p>Free Shipping for order over $49</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'><img src={tracking_icon}></img></div>
                        <div className='content_box'>
                            <h5>Order tracking</h5>
                            <p>Check your order status online</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'><img src={refund_icon}></img></div>
                        <div className='content_box'>
                            <h5>Refunds</h5>
                            <p>Free 100% money back guarantee</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'><img src={support_icon}></img></div>
                        <div className='content_box'>
                            <h5>Quality support</h5>
                            <p>Our team is always feedback 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='box_main'>
                    <NavbarBrand href="/"><img src={logo}></img></NavbarBrand>
                    <p className='address'>102 Washington Square South<br /> New York, NY 10012</p>
                    <p className='phone_number'>+91-80-6156-1999</p>
                    <p className='mail'>support@remitstore.com</p>
                    <div className='icon'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>

                    </div>
                </div>
                <div>
                    <Accordion open={open} toggle={toggle} >
                        <AccordionItem>
                            <AccordionHeader targetId="1">Account</AccordionHeader>
                            <AccordionBody accordionId="1">
                                <NavItem><NavLink>Login/register</NavLink></NavItem>
                                <NavItem><NavLink>View cart</NavLink></NavItem>
                                <NavItem><NavLink>My wishlist</NavLink></NavItem>
                                <NavItem><NavLink>Check out</NavLink></NavItem>
                                <NavItem><NavLink>Order tracking</NavLink></NavItem>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">Services</AccordionHeader>
                            <AccordionBody accordionId="2">
                                <NavItem><NavLink>About us</NavLink></NavItem>
                                <NavItem><NavLink>FAQ’s</NavLink></NavItem>
                                <NavItem><NavLink>Returns & refund</NavLink></NavItem>
                                <NavItem><NavLink>Free shipping</NavLink></NavItem>
                                <NavItem><NavLink>Careers</NavLink></NavItem>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem >
                            <AccordionHeader className='collap_cuoi' targetId="3">Newsletter</AccordionHeader>
                            <AccordionBody accordionId="3">

                                <p>Enter your email below to be the first to know about new <br />collections and product launches.</p>
                                <div className='input'>
                                    <img src={mail}></img>
                                    <input placeholder='Enter your email'></input>
                                    <Button>Submit</Button>
                                </div>
                                <p className='sub_input'>We promise not send spam to you!</p>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='box'>
                    <h5>Account</h5>
                    <NavItem><NavLink>Login/register</NavLink></NavItem>
                    <NavItem><NavLink>View cart</NavLink></NavItem>
                    <NavItem><NavLink>My wishlist</NavLink></NavItem>
                    <NavItem><NavLink>Check out</NavLink></NavItem>
                    <NavItem><NavLink>Order tracking</NavLink></NavItem>
                </div>
                <div className='box'>
                    <h5>Services</h5>
                    <NavItem><NavLink>About us</NavLink></NavItem>
                    <NavItem><NavLink>FAQ’s</NavLink></NavItem>
                    <NavItem><NavLink>Returns & refund</NavLink></NavItem>
                    <NavItem><NavLink>Free shipping</NavLink></NavItem>
                    <NavItem><NavLink>Careers</NavLink></NavItem>
                </div>
                <div className='box_infor'>
                    <h5>Newsletter</h5>
                    <p>Enter your email below to be the first to know about new <br />collections and product launches.</p>
                    <div className='input'>
                        <img src={mail}></img>
                        <input placeholder='Enter your email'></input>
                        <Button>Submit</Button>
                    </div>
                    <p className='sub_input'>We promise not send spam to you!</p>
                </div>
            </div>

            <div className='bottom_footer'>
                <div className='container'>
                    <p>Copyright © 2022 <span>RemitStore</span>. All Rights Reserved.</p>
                </div>

            </div>

        </div>
    );
}

export default Footer;
