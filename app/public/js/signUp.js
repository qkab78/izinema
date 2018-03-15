$(document).ready( () => {

  // Fonction servant à afficher les informations du bouton aide et à cacher la div block-info afin d'avoir une meilleure lisibilité
  const signUp = () => {
    $(".signUp-global").hide();
    $(".signUp-btn").click( () => {
      $(".connexion-global").hide(1500);
      $(".signUp-global").show(1500);
    });
  };

  signUp();

});






