import React from 'react';
import './Card.css'

const Card = (props) => {
    const { products, deleteProduct } = props;

    return (
        <div>
            {
                products.map(product => (
                    <div className="card" key={product.id}>
                        <div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <button onClick={() => deleteProduct(product.id)} >Delete This Product</button>
                        </div>
                        <div>
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;