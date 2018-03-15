$(document).ready( () => {

  // Fonction servant à afficher les informations du bouton aide et à cacher la div block-info afin d'avoir une meilleure lisibilité
  const connexion = () => {
    $(".connexion-box").hide();
    $(".connexion-btn").click( () => {
      $(".background-home").hide(1500);
      $(".connexion-box").show(1500);
    });
  };

  connexion();

});






