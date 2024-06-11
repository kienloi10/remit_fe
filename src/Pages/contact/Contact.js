import React from 'react';
import Header from '../../Components/header1/Header';
import Footer from '../../Components/footer/Footer';
import Breadcrumbs from '../../Components/breadcrumb/Breadcrumbs';
import './contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <Header />
            <main className='container'>
                <Breadcrumbs />
                <div className='Group_inputAndMap'>
                    <div className='Group_input'>
                        <div className='Tilte_contact'>
                            <h1>We’re here to help you!</h1>
                            <p>Have a question, comment, or brilliant idea you'd like to share?
                                Please contact Remit using the most convenient way below:</p>
                        </div>
                        <div className='infor_store'>
                            <h4>Call us today:<span>6-146-389-574</span></h4>
                            <h4>Send us an email:<span>support@remit.com</span></h4>
                        </div>
                        <p className='note_contact'>Or fill out the form below 
                        and we’ll get back to you as soon as possible.</p>
                        <div className='Group_input'>
                        <form>
                            <div className='full_nameAndPhone_number'>
                                <div className='input'>
                                    <label for='full_name' >Full Name</label>
                                    <input id='full_name' placeholder='Enter your full name'></input>
                                </div>
                                <div className='input'>
                                    <label for='Phone_number' >Phone number*</label>
                                    <input id='Phone_number' placeholder='Enter phone number'></input>
                                </div>
                            </div>
                            <div className='SubjectAndemai_ldress'>
                                <div className='input'>
                                    <label for='emai_ldress' >Email address*</label>
                                    <input id='emai_ldress' placeholder='Enter email address'></input>
                                </div>
                                <div className='input'>
                                    <label for='Subject' >Subject*</label>
                                    <input id='Subject' placeholder='Select yours season'></input>
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
                    
                    <div className='map'>
                        <div className='adress'>
                            <h4>Remit Store</h4>
                            <p className='adressDetail'>70 Washington Square South New York, NY 10012, United States</p>
                            <Link>View larger map</Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Contact;
