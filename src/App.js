import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './about';
import About from './about';
import AdminLogin from './Adminlogin';
import Contact from './contact';
import Sidebar from './sidebar';
import Products from './products';
// import Product from "./addcart";
import UserRegister from "./userregister";
import Userlogin from "./userlogin";
import Addproducts from './Addproduct';
import Cart from './cart';


function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/login' component={Login} />
        <Login/> */}
         <Route path="/Adminlogin" exact="true">
            <AdminLogin/>
          </Route>
          <Route path="/userregister" exact="true">
            <UserRegister/>
          </Route>
          <Route path="/userlogin" exact="true">
            <Userlogin/>
          </Route>
          {/* <Route path="/Addproducts" exact="true">
            <Addproducts/>
          </Route> */}
        
          <Route path="/cart" exact="true">
            <Cart/>
          </Route>
        <Route path='/contact' component={Contact} />
        <Route path='/Addproduct' component={Addproducts} />
        <Route path='/products' component={Products} />
       
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;