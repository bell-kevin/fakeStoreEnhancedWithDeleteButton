import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import "./global.css";

const App = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(productsArray => { setProductsState(productsArray) })
    }, []);

    const hasProducts = productsState.length > 0;

    const deleteProduct = (id) => {
        const newProductsState = productsState.filter(product => product.id !== id);
        setProductsState(newProductsState);
    }

    return (
        <div>
            <h1>Fake Store Products with Deletion</h1>
            {hasProducts ? <SearchBar products={productsState} deleteProduct={deleteProduct} /> : <p>Loading...</p>}
        </div>
    );
};

export default App;