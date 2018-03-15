// Librairies
import React from 'react';

class Footer extends React.Component {

  render() {

    return (

      <div>

        {/* Page Contents */}
        <div className="pusher">

          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">A propos</h4>
                  <div className="ui inverted link list">
                    <a href="#" className="item">Sitemap</a>
                    <a href="#" className="item">Nous contacter</a>
                    <a href="#" className="item">Nos partenaires</a>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div className="ui inverted link list">
                    <a href="#" className="item">Tarifs préférentiels</a>
                    <a href="#" className="item">FAQ</a>
                    <a href="#" className="item">Comment nous rejoindre</a>
                  </div>
                </div>
                <div className="seven wide column">
                  <h4 className="ui inverted header">Nous suivre</h4>
                  <a href="#"><i className="fab fa-facebook-square icons"></i></a>
                  <a href="#"><i className="fab fa-twitter-square icons"></i></a>
                  <a href="#"><i className="fab fa-linkedin icons"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    );

  }
}

export default Footer;