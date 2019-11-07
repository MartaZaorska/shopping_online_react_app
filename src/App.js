import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/products/:category' component={Products} />
        <Route exact path='/product/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
