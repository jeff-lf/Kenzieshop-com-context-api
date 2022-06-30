import { Card } from "../../components/Card"
import { Grid } from '@mui/material'
import { Container } from "./style"
import { CartProductsContext } from "../../contexts/cart"
import { useContext } from "react"

const Cart = () => {
    
    const {cartProducts} = useContext(CartProductsContext)
    
   
  

    return (
        <Container>
            <Grid container spacing={2} width='90vw'>
            {cartProducts?.map((product,index) => <Grid item xs={3}><Card key={product.id} product={product} isRemovable/></Grid>)}
            </Grid>
        </Container>
    )

}

export default Cart 