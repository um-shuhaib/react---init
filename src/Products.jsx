import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => (res.json())).then((result) => {
            setProduct(result)
        })
    }, [])


    console.log(products);


    return (
        <div>
            {
                products.length > 0 ?
                    products.map((prod) => (
                        <div className="card d-flex" style={{ width: "18rem" }}>
                            <img src={prod.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{prod.title}</h5>
                                <p className="card-text">{prod.description}</p>
                                <a href="#" className="btn btn-primary">Details</a>
                            </div>
                        </div>

                    ))
                    : <h1>no products</h1>
            }
        </div>

    )
}

export default Products