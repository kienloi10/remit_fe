import React, { useContext } from 'react';
import img_product from '../../Img/product.jpg'
import './product_cart.css'
import { AppContext } from '../../AppContext';
const ProductCart = (pros) => {
    const { ite } = pros
    const { removeByid, updateSl } = useContext(AppContext)
    return (
        <div className='product_cart'>
            <img src={img_product}></img>
            <div className='name_product_Addnumberproduct'>
                <div className='name_productAnd'>
                    <h4>{ite.name}</h4>
                    <p>Color: gray // Size: M</p>
                </div>
                <div className='Addnumberproduct'>
                    <div className='group_cost'> <div className='Addnumber'>
                        <button onClick={() => updateSl(ite.id, -1)}><i class="fa-solid fa-minus"></i></button>
                        <p className='number'>{ite.Sl}</p>
                        <button onClick={() => updateSl(ite.id, 1)}><i class="fa-solid fa-plus"></i></button>
                    </div>
                        <p className='cost'>${ite.cost*ite.Sl}</p></div>
                    <button className='deleted' onClick={() => removeByid(ite.id)} ><i class="fa-solid fa-trash"></i></button>

                </div>

            </div>

        </div>
    );
}

export default ProductCart;
