$(document).ready(function(){

  $(".datos").hide();
  $("#datos").click(function(){
    $(".datos").fadeToggle();
    $(".experiencia").hide();
    $(".estudios").hide();
    $(".redes").hide();
  });


  $(".estudios").hide();
  $("#estudios").click(function(){
    $(".estudios").fadeToggle();
    $(".datos").hide();
    $(".experiencia").hide();
    $(".redes").hide();
  });


  $(".experiencia").hide();
  $("#experiencia").click(function(){
    $(".experiencia").fadeToggle();
    $(".datos").hide();
    $(".estudios").hide();
    $(".redes").hide();
  });



  $(".redes").hide();
  $("#redes").click(function(){
    $(".redes").fadeToggle();
    $(".datos").hide();
    $(".estudios").hide();
    $(".experiencia").hide();
  });

});