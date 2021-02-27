import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Menu from './view/Navbar.jsx';
import Home from './view/home';
import Footer from './view/footer.js';
import injectContext from './store/appContext.js';
import PlanetasData from './Components/PlanetasData.jsx';
import CarsData from './Components/CarsData.jsx';
import PersonData from './Components/PersonData.jsx';
import ScrollToTop from './store/scrollToTop';


function App() {
  return (
    <Router>
      <Menu />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chareacters/:index" component={PersonData}>
          </Route>
          <Route path="/planets/:index" component={PlanetasData}>
          </Route>
          <Route path="/vehicles/:index" component={CarsData}>
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>

  )
}

export default injectContext(App);
