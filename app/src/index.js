// Librairies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

// Components
import Home from './components/pages/Home';
import Cinemas from './components/pages/Cinemas';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

// Components statics
import Nav from './components/static/Nav';
import Footer from './components/static/Footer';
import Connexion from './components/static/Connexion';
import SignUp from './components/static/SignUp';

const Root = () => {

  return (

    <div>

      <Nav />


      <Router history={browserHistory}>

        <Route path="/" component={Home} />
        <Route path="/cinemas" component={Cinemas} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

      </Router>

      <Footer />

    </div>

  )
}

ReactDOM.render(<Root />, document.getElementById('root'));


