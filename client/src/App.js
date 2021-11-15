
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Products from './components/user/layout/Products';
import ProductContextProvider from './components/user/contexts/ProductContext';
import Login from './components/user/Login';
import View from './components/user/View';
import AuthContextPorvider from './components/user/contexts/AuthContext';
import CartContextProvider from './components/user/contexts/AddToCart';



function App() {
  return (
    <AuthContextPorvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={View}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Login}/>
                <Route exact path="/test" component={Products} />
                </Switch>
            </Router>
          </CartContextProvider>
        </ProductContextProvider>
    </AuthContextPorvider>
  );
}

export default App;
