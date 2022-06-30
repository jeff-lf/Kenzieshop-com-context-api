import { Card } from "../../components/Card"
import { Grid } from '@mui/material'
import { Container } from "./styles"
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products";


export const Home = () => {
 
 const { products } = useContext(ProductsContext);



    return (
        <Container>
        <Grid container spacing={2} width='90vw'>
        {products.map((product, index) => <Grid item xs={3}><Card key={product.id} product={product}/></Grid>)}  
        </Grid> 
        
        </Container>
    )
}