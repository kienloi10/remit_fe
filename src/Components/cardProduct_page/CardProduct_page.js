import React, { useContext } from 'react';
import './cardProduct_page.css'
import { AppContext } from '../../AppContext';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import img_product from '../../Img/product.jpg'
import { Link } from 'react-router-dom';
const CardProductPage = (pros) => {
    const{ite}=pros;
    const{addCart}=useContext(AppContext)
    
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-6'>



        <Card
        
            style={{
                width: '18rem'
            }}
        >
            <Link to={`/Products/${ite.id}`}><img alt="Sample" src={img_product} /></Link>
            <div className={ite.status?"status":"statusactive"}>{ite.status}</div>
            <CardBody>

                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {ite.collection}
                </CardSubtitle>
                <div className='quality'>
                    <div className='star'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p>(123)</p>
                </div>
                <CardTitle tag="h5">
                <Link to={`/Products/${ite.id}`}>{ite.name}</Link>
                </CardTitle>
                <CardText>
                    USD${ite.cost}.00
                </CardText>
                <Button onClick={()=>addCart(ite.id)}>
                    Add to cart
                </Button>
            </CardBody>
        </Card>
    </div>
    );
}

export default CardProductPage;
