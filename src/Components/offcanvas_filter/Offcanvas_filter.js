import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import './offcanvas_filter.css'
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import RcSlider from '../../Components/rc_slider/Rc_slider';
const OffcanvasFilter = (props) => {
    const{toge,open}=props;
    return (

        <Offcanvas isOpen={open} toggle={toge}>
            <OffcanvasHeader toggle={toge}>
                Filler
            </OffcanvasHeader>
            <OffcanvasBody>
                <strong>
                <div className='filter'>
                            <div className='Box'>
                                <h3>Catagories</h3>
                                <div className='kind'>
                                    <Link><h4 className='kind_name'>Tops</h4> <h4>[12]</h4></Link>
                                    <Link><h4 className='kind_name'>T- shirt & polo</h4> <h4>[5]</h4></Link>
                                    <Link><h4 className='kind_name'>Shoes</h4> <h4>[9]</h4></Link>
                                    <Link><h4 className='kind_name'>Bags</h4> <h4>[10]</h4></Link>
                                    <Link><h4 className='kind_name'>Jean</h4> <h4>[2]</h4></Link>
                                    <Link><h4 className='kind_name'>Hats</h4> <h4>[9]</h4></Link>
                                    <Link><h4 className='kind_name'>Coatch & jacket</h4> <h4>[5]</h4></Link>
                                    <Link><h4 className='kind_name'>Accessories</h4> <h4>[7]</h4></Link>
                                </div>

                            </div>
                            <div className='Box'>
                                <h3>PRICE</h3>
                                <div className='kind'>
                                    <RcSlider />

                                </div>

                            </div>
                            <div className='Box'>
                                <h3>Size</h3>
                                <div className='button_size'>
                                    <button>Xs</button>
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>Xl</button>
                                    <button>2Xl</button>
                                    <button>3Xl</button>
                                </div>

                            </div>
                            <div className='Box brand'>
                                <h3>Brand</h3>
                                <div className='checkbox'>
                                    <div className='group_check'>


                                        <input id='Elle' type={'checkbox'}></input>
                                        <label for='Elle'>Elle</label>
                                        <input id='h&M' type={'checkbox'}></input>
                                        <label for='h&M'>h&M</label>

                                    </div>
                                    <div className='group_check'>


                                        <input id='Genith' type={'checkbox'}></input>
                                        <label for='Genith' >Genith</label>
                                        <input id='Vogue' type={'checkbox'}></input>
                                        <label for='Vogue'>Vogue</label>

                                    </div>
                                    <div className='group_check'>


                                        <input id='Yody' type={'checkbox'}></input>
                                        <label for='Yody'>Yody</label>
                                        <input id='Marni' type={'checkbox'}></input>
                                        <label for='Marni'>Marni</label>

                                    </div>

                                </div>

                            </div>
                        </div>
                </strong>
            </OffcanvasBody>
        </Offcanvas>

    );
}

export default OffcanvasFilter;
