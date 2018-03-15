$(document).ready( () => {

  const cinemasUrl = "http://localhost:3000/cinemas";
  const redirectTime = 2000;

  $(".home-button-1").click( () => {
    $(".background-home").addClass("rotating");
    setTimeout("location.href = 'cinemasUrl';" , redirectTime);
  });

});

