$(document).ready(function() {

  var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Zach's project had nothing at all to do with this..",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
  ];

  function cookieDeploy() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
  }

  $('button').click(function() {
    $('section').html('<h1>' + cookieDeploy() + '</h1>');
    $('body').css('background-color: red');
  });

  

});
