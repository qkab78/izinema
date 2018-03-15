import React, { Component } from 'react';

class signUp extends Component {

  render() {
    return (

      <div className="signUp-global">

        <div className="signUp-box">

          {/* Logo */}
          <div className="signUp-logo-box">
            <img className="connexion-logo rotating" src="../images/sharingan.png" alt="sharingan" />
          </div>

          <div className="signUp-inputs">

            <form action="">

              {/* Champ nom d'utilisateur */}
              <input type="text" className="fontAwesome signUp-input" placeholder="  &#xf007; Nom d'utilisateur" />

              {/* Champ mot de passe */}
              <input type="text" className="fontAwesome signUp-input" placeholder="  &#xf023; Mot de passe" />

              {/* Champ adresse */}
              <input type="text" className="fontAwesome signUp-input" placeholder="  &#xf041; Adresse : La casa dou poupelle" />

              {/* Champ Mail */}
              <input type="text" className="fontAwesome signUp-input" placeholder="  &#xf0e0; Mail : casapoupelle@gmail.com" />

              <div className="signUp-btn-box">
                {/* Boutton de signUp */}
                <button className="signUp-btn-2">S'inscrire</button>
              </div>

            </form>

          </div>

        </div>

      </div>


    );
  }
}

export default signUp;