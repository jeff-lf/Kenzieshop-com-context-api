import { createContext, useState } from "react";


export const CartProductsContext = createContext();

export const CartProductsProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('@Cart')) || [])

    const addCartProduct = (product) => {
        if(cartProducts.every((elem) => elem.id !== product.id)){
            setCartProducts([...cartProducts, product])
            localStorage.setItem('@Cart', JSON.stringify([...cartProducts, product]))
        }
        
    };

    const subCartProduct = (id) => {
        const newCartProducts = cartProducts.filter((elem) => elem.id !== id)
        setCartProducts(newCartProducts);
        localStorage.setItem('@Cart', JSON.stringify(newCartProducts))
    }

    return (
        <CartProductsContext.Provider value={{ cartProducts, addCartProduct, subCartProduct}}>
            {children}
        </CartProductsContext.Provider>    
    );
};
