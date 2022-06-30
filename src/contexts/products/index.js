import { createContext, useState } from "react";
import {productsData} from '../../productsData'

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(productsData);

    const addProduct = () => {
        setProducts();
    };

    const subProduct = () => {
        setProducts();
    }

    return (
        <ProductsContext.Provider value={{ products, addProduct, subProduct}}>
            {children}
        </ProductsContext.Provider>    
    );
};
