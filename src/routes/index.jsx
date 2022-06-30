import {Route, Switch} from 'react-router-dom'
import { Home } from '../pages/Home'
import  Cart  from '../pages/Cart'
import {NavBar} from '../components/NavBar'

export const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <NavBar />
                <Home />
            </Route>
            <Route path='/cart'>
                <NavBar />
                <Cart />
            </Route>
        </Switch>
    )
}
