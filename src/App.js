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


function App() {
  return (
    <div className="App">


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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
