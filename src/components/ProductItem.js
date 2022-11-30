import React from 'react'
import { Link } from "react-router-dom";
function ProductItem(props) {
    const handleClick = (data) => {
        localStorage.setItem('proData', JSON.stringify(data));
    }
    return (
        <>
            <li className='product-item' onClick = {() => handleClick(props)}>
                <Link className="link" to={`/product-details/${props.id}`}></Link>
                <div className='img-wrap'>
                    <img src={props.img} alt='product' />
                </div>
                <h3 className='product-name'>{props.name}</h3>
                <span className='product-price'>$ {props.price}</span>
            </li>
        </>
    )
}

export default ProductItem