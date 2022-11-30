import React, { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import ProductData from '../data/ProductData'
function Products() {
    const productItem = ProductData.proData.map((item, index) => {
        return(<ProductItem key={index} {...item}/>)
    })
    useEffect(() => {
        localStorage.removeItem('proData')
    }, []);
    return (
        <section className='section'>
            <div className='container'>
                <ul className='product-list'>
                    {productItem}
                </ul>
            </div>
        </section>
    )
}

export default Products