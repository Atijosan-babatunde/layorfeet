import React from 'react';
import { Route, Switch, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import LandingPage from '../page/LandingPage';
import About from '../page/About';
import Shop from '../page/Shop';
import Contact from '../page/Contact';
import Cart from '../page/Cart';
import Shoes from '../page/Shoes';
import Heels from '../page/Heels';
import Slippers from '../page/Slippers';
import Sandals from '../page/Sandals';
import Product1 from '../page/Product1';
import Product2 from '../page/Product2';
import Product3 from '../page/Product3';
import Product4 from '../page/Product4';
import Product5 from '../page/Product5';
import Product6 from '../page/Product6';
import Product7 from '../page/Product7';
import Product8 from '../page/Product8';
import Product9 from '../page/Product9';



function Approuter(){
    const history = createBrowserHistory();


    return(
        <Router history={history}>
            <Switch>
                <Route exact path ='/' component={LandingPage}/>
                <Route path ='/about' component={About}/>
                <Route path ='/shop' component={Shop}/>
                <Route path ='/contact' component={Contact}/>
                <Route path ='/cart' component={Cart}/>
                <Route path ='/shoes' component ={Shoes}/>
                <Route path ='/Heels' component={Heels}/>
                <Route path ='/slippers' component={Slippers}/>
                <Route path ='/Sandals' component={Sandals}/>
                <Route path  ='/Product1' component ={Product1}/>
                <Route path  ='/Product2' component ={Product2}/>
                <Route path  ='/Product3' component ={Product3}/>
                <Route path  ='/Product4' component ={Product4}/>
                <Route path  ='/Product5' component ={Product5}/>
                <Route path  ='/Product6' component ={Product6}/>
                <Route path  ='/Product7' component ={Product7}/>
                <Route path  ='/Product8' component ={Product8}/>
                <Route path  ='/Product9' component ={Product9}/>
            </Switch>
        </Router>
    )
}

export default Approuter 