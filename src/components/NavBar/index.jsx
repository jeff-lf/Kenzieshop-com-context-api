import { useHistory } from 'react-router-dom'
import {Container} from './style'
import {AiOutlineShoppingCart, AiOutlineRollback} from 'react-icons/ai'

export const NavBar = () => {

    const history = useHistory('')

    return (
        <Container>
            <h2>Kenzie Shop</h2>
            {history.location.pathname === '/cart' ? (
                <button onClick={() => history.push('/')}> <AiOutlineRollback/> Voltar</button>
            ) : (
                    <button onClick={() => history.push('/cart')}> <AiOutlineShoppingCart /> Carrinho</button>
            )}
        </Container>
    )
}