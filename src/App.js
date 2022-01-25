import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Login from './Component/LOGIN/Login/Login';
import Register from './Component/LOGIN/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Component/LOGIN/PrivateRoute/PrivateRoute';
import Learnmore from './Component/Pages/Learnmore/Learnmore';
import MoreDetails from './Component/Pages/AllService/ServicePageDetails/MoreDetails';
import OrderReview from './Component/Order/OrderReview';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';


function App() {


  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/learnmore">
              <Learnmore></Learnmore>
            </Route>
            <Route path="/moredetails">
              <MoreDetails></MoreDetails>
            </Route>
            <PrivateRoute path="/orders">
              <OrderReview></OrderReview>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
