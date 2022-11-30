import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
function ProductDetails() {
    const [prodData, setProdData] = useState([]);

    useEffect(() => {
        const proData = JSON.parse(localStorage.getItem('proData'));
        if (proData) {
            setProdData(proData);
        }
    }, []);
    return (
        <section className='section'>
            <div className='container'>
                <Link className="back-btn" to={`/`}>Back</Link>
                <div className='product-details'>
                    <div className='img-wrap'>
                        <img src={prodData.img} alt='product' />
                    </div>
                    <div className='info-wrap'>
                        <h3 className='name'>{prodData.name}</h3>
                        <h4 className='price'>${prodData.price}</h4>
                        <p>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
                        <div className='action-wrap'>
                            <div className='select-wrap'>
                                <label for="quantity">Quantity</label>
                                <select id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <button className='btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails