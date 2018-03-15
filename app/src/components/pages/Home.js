// Librairies
import React from 'react';

class  Home extends React.Component {

  render() {

    return (

      <div>

        {/* Page Contents */}
        <div className="pusher">

          <div className="ui inverted vertical masthead center aligned segment home-start">

            <div id="background-home" className="background-home">
              <img src="../images/sharingan.png" alt="" />
            </div>

            <div className="ui text container home-presentation">
              <h1 className="ui inverted header"> Izanami</h1>
              <h2>Choisissez le cinéma le plus proche de chez vous !</h2>
              <div className="ui huge primary button home-button-1">Voir les cinémas<i className="right arrow icon"></i></div>
            </div>

          </div>

          <div className="parallax-image background-batman"></div>

          <div id="home-description" className="ui vertical stripe segment home-description">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">Nous vous aidons à trouver le cinéma le plus proche de chez vous</h3>
                  <p>Ne perdez plus de temps à rechercher le meilleur cinéma du coin !</p>
                  <p> <i className="fas fa-quote-left citation citation-left"></i>  Je ne veux parler que de cinéma, pourquoi parler d'autre chose ? Avec le cinéma on parle de tout, on arrive à tout <i className="fas fa-quote-right citation citation-right"></i> - <span classNameName="citation-name">Jean-Luc Godard</span></p>
                </div>
                <div className="six wide right floated column">
                  <img src="../images/seats.jpg" className="ui large bordered rounded image" />
                </div>
              </div>
              <div className="row">
                <div className="center aligned column">
                  <a className="ui huge button" href="/cinemas">Voir les cinémas</a>
                </div>
              </div>
            </div>
          </div>

          <div classNameName="parallax-image background-storm-trooper-beach"></div>

          <div className="ui vertical stripe quote segment home-services">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <h3>"Innovant et utile"</h3>
                  <p>Izanami  est une entreprise dont les services sont innovants.</p>
                  <p>Trouvez les cinémas les mieux notés près de chez vous en un temps record !</p>
                </div>
                <div className="column">
                  <h3>Beaucoup de cinémas mais toujours pleins de monde lors des grosses sorties de films</h3>
                  <p>Izanami permet de trouver le cinéma le plus proche de chez vous en étant sur d'avoir une place pour regarder le dernier film du moment !</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment home-services">
            <div className="ui text container">
              <h3 className="ui header">Gagnez du temps</h3>
              <p>On perd souvent énorméménet de temps lorsqu'on souhaite aller voir un film avec nos amis.</p>
              <p>Il est rare qu'il reste des places disponibles alors Izanami est fait pour vous !</p>
              <a className="ui large button">Voir plus</a>
              <h4 className="ui horizontal header divider">
                <a href="#">Izanami</a>
              </h4>
              <h3 className="ui header">Gagnez de l'argent</h3>
              <p>Economisez de l'argent sur vos places de cinéma grâce à nos tarifs préférentiels en partenariat avec les plus grandes enseignes !</p>
              <a className="ui large button">Rejoignez nous !</a>
            </div>
          </div>

        </div>

      </div>


    );

  }
}

export default Home;