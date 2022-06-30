import { Container } from "./styles"
import { Button } from '@mui/material'
import { useContext } from "react"
import { CartProductsContext } from "../../contexts/cart"


export const Card = ({product, isRemovable = false }) => {


    const {id, name, author, price, image} = product

     const {addCartProduct, subCartProduct} = useContext(CartProductsContext)

    return (
        <Container>
            <img src={image}/>
            <h3>{name}</h3>
            <p>Autor: {author}</p>
            <span>R$ {price.toFixed(2)}</span>

            {isRemovable ? (
                <Button onClick={() => subCartProduct(id)} variant="contained" size='small'>Remover Item</Button>
            ) : (
                <Button onClick={() => addCartProduct(product)} variant="contained" size='small'>Adicionar Item</Button>
            )}
        </Container>
    )    
}