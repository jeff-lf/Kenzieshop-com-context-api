import { ProductsProvider } from "./products";
import { CartProductsProvider } from "./cart";

const Providers = ({ children }) => {
    return(
        <CartProductsProvider>
            <ProductsProvider>
            {children}
            </ProductsProvider>
        </CartProductsProvider>
    )
};

export default Providers;