// Librairies
import React from 'react';
import Connexion from './Connexion';
import SignUp from './SignUp';
import Cinemas from '../pages/Cinemas';

class Nav extends React.Component {

  render() {

    return (

      <div>

        <div className="ui inverted vertical center aligned segment">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
                <a className="toc item">
                  <i className="sidebar icon"></i>
                </a>
                <a className="active item" href="/">Accueil</a>
                <a className="item" href="/cinemas">Cinémas</a>
              <a className="item" href="/services">Services</a>
              <a className="item" href="/contact">Contact</a>
              <div className="right item">
                <a className="ui inverted button connexion connexion-btn">Connexion</a>
                <a className="ui inverted button signUp-btn">Inscription</a>
              </div>
            </div>
          </div>
        </div>

        <section>
          <Connexion />
          <SignUp />
        </section>

      </div>


    );

  }
}

export default Nav;