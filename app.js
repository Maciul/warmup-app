$(document).ready(function() {

  var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Zach's project had nothing at all to do with this..",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
  ];

  var backgroundLinks = [
    'http://hd4wallpapers.net/wp-content/uploads/2014/11/autumn_landscape_desktop_backgrounds.jpg',
    'https://images.alphacoders.com/822/82263.jpg',
    'https://images.alphacoders.com/269/269793.jpg',
    'http://www.amazingwallpaperz.com/wp-content/uploads/Beautiful-Sunset-Landscape-Background-Wallpapers.jpg',
    'https://images7.alphacoders.com/326/326480.jpg',
  ];

  function cookieDeploy() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
  }

  $('button').click(function() {
    $('section').html('<h1>' + cookieDeploy() + '</h1>');
    $('body').css('backgroundImage','url(images/example.jpg)');

});
