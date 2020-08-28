import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return(
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/create-point" exact component={CreatePoint} />
        </BrowserRouter>
    )
}

export default Routes;