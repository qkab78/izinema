import React, { Component } from 'react';
import SignUp from './SignUp';

class Connexion extends Component {

  render() {
    return (

      <div className="connexion-global">

        <div className="connexion-box">

          {/* Logo */}
          <div className="connexion-logo-box">
            <img className="connexion-logo rotating" src="../images/sharingan.png" alt="sharingan"/>
          </div>

          <div className="connexion-inputs">

            <form action="">

              {/* Champ nom d'utilisateur */}
              <input type="text" className="fontAwesome connexion-input" placeholder="  &#xf007; Nom d'utilisateur" />

              {/* Champ mot de passe */}
              <input type="text" className="fontAwesome connexion-input" placeholder="  &#xf023; Mot de passe" />
              <p>Mot de passe oublié ?</p>

              <div className="connexion-btn-box">
                {/* Boutton de connexion */}
                <button className="connexion-btn-2">Connexion</button>
              </div>

            </form>

            <div className="connexion-checkbox">
              <form>
                <div>
                  <input type="checkbox" id="savedPassword" name="password" value="" />
                  <label className="connexion-label" htmlFor="savedPassword">Se souvenir de moi ?</label>
                </div>
              </form>
            </div>

            <div className="connexion-signUp-btn-box">
              <button className="btn signUp-btn"><i className="fas fa-sign-in-alt" aria-hidden="true"></i> S'inscrire ? </button>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default Connexion;