
import Header from '../../Components/header1/Header';
import Footer from '../../Components/footer/Footer';
import './products.css';
import Breadcrumbs from '../../Components/breadcrumb/Breadcrumbs';
import content_banner from '../../Img/Content_banner_productsPage.png'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import grid_3_icon from '../../Img/gird-3.svg';
import list_icon from '../../Img/List.svg';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import RcSlider from '../../Components/rc_slider/Rc_slider';




import { AppContext } from '../../AppContext';
import { useContext, useState } from 'react';
import NumberPage from '../../Components/number_page/Number_page';
import CardProductPage from '../../Components/cardProduct_page/CardProduct_page';
import OffcanvasFilter from '../../Components/offcanvas_filter/Offcanvas_filter';

const Products = () => {
    const { product } = useContext(AppContext)
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleOffcanvas1 = () => {
        setIsOpen1(!isOpen1);
    };



    return (
        <div>

            <Header />
            <div className='Breadcrumb container'><Breadcrumbs /></div>
            <div className='banner_products container'>
                <img src={content_banner}></img>
            </div>
            <section className='all_products'>
                <div className='container'>
                    <div className='tilte_funtionTop'>
                        <div className='tilte_With_dropdown'>
                            <div className='tilte'>
                                <h1 >All Products</h1>
                                <h3 className='numberOfproduct'>[12]</h3>
                            </div>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sort by: Default sorting
                                    <i class="fa-solid fa-angle-down"></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </div>
                        <div className='setting_colum'>
                            <button><img src={grid_3_icon}></img></button>
                            <button><img src={list_icon}></img></button>
                        </div>

                    </div>
                    <div className='filter_products'>
                        <button onClick={toggleOffcanvas1} className='btn_filter'><i class="fa-solid fa-filter"></i>Filter</button>
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
                        <div className='products row'>

                            <NumberPage />



                        </div>
                    </div>
                </div>
            </section>
            <OffcanvasFilter open={isOpen1} toge={toggleOffcanvas1} />


            <Footer />
        </div>
    );
}

export default Products;
