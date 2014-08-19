var $bird = $('#bird');
var $beak = $('.beak');
var $cloud1 = $('#cloud1');
var $cloud2 = $('#cloud2');
var $bg = $('#bg');
var $fg = $('#fg');
var $chirp = $('.chirp');
var $flyBtn = $('#fly');
var $poopBtn = $('#poop');
var $planeBtn = $('#planeBtn');

$bird.hover(function() {
  $(this).find('.head').toggleClass('turned');
});

window.onkeydown = function(e) {
  e.preventDefault();
  var key = e.which;
  switch (key) {
    case 32:
      $beak.addClass('open');
      $chirp.css('opacity', 1);
      break;
    case 38:
      $bird.removeClass('bob');
      $bird.addClass('up');
      break;
    case 40:
      $bird.removeClass('bob');
      $bird.addClass('down');
      break;
    default:
      console.log('invalid key');
  }
};

window.onkeyup = function(e) {
  e.preventDefault();
  var key = e.which;
  switch (key) {
    case 32:
      $beak.removeClass('open');
      $chirp.css('opacity', 0);
      break;
    case 38:
      $bird.removeClass('up');
      $bird.addClass('bob');
      break;
    case 40:
      $bird.removeClass('down');
      $bird.addClass('bob');
      break;
    default:
      console.log('something went wrong');
  }
};

var cloud1 = '<object id="cloud1" class="cloud" data="images/cloud1-o.svg" type="image/svg+xml"></object>';
var cloud2 = '<object id="cloud2" class="cloud" data="images/cloud2-o.svg" type="image/svg+xml"></object>';
var cloud3 = '<object id="cloud3" class="cloud" data="images/cloud2-o.svg" type="image/svg+xml"></object>';
var addClouds = function(id, el, interval) {
  setInterval(function() {
    var x = -1 * window.innerWidth - 300;
    $bg.append(el);
    $(id).css('transform', 'translate3d(' + x + 'px, 0, 0');
    setTimeout(function() {
      $(id).remove();
    }, 6000);
  }, interval);
};

addClouds('#cloud1', cloud1, 7000);
addClouds('#cloud2', cloud2, 10000);
addClouds('#cloud3', cloud3, 9000);

var nomNom = function() {
  $('.nom').remove();
  var nom = '<div class="nom"><span class="one">NOM</span> <span class="two">NOM</span></div>';
  $beak.append(nom);
};


var fly = '<div class="fly"><div class="fly-wing"></div></div>';
$flyBtn.click(function() {
  $bg.append(fly);
  setTimeout(function() {
    $beak.addClass('open');
    setTimeout(function() {
      $beak.removeClass('open');
      $('.fly').remove();
      nomNom();
    }, 400);
  }, 2250);
});

var poop = '<div class="poop"></div>';
$poopBtn.click(function() {
  $bg.append(poop);
  setTimeout(function() {
    $('.poop').remove();
  }, 1900);
});

var plane = '<object class="plane" data="images/plane-o.svg" type="image/svg+xml"></object>';
var ship = '<object id="#ship" class="ship" data="images/ship-o.svg" type="image/svg+xml"></object>';
var rock = '<object id="#rock" class="rock" data="images/rock-o.svg" type="image/svg+xml"></object>';

var addObstacle = function() {
  var d = Math.random();
  var x = -1 * window.innerWidth - 400;

  if(d <= 0.4) {
    $bg.append(plane);
    $('.plane').css('transform', 'translate3d(' + x + 'px, 0, 0');
    setTimeout(function() {
      $('.plane').remove();
    }, 7000);
  } else if (d > 0.4 && d < 0.7) {
    $bg.append(ship);
    $('.ship').css('transform', 'translate3d(' + x + 'px, 0, 0');
    setTimeout(function() {
      $('.ship').remove();
    }, 7000);
  } else {
    $bg.append(rock);
    $('.rock').css('transform', 'translate3d(' + x + 'px, 0, 0');
    setTimeout(function() {
      $('.rock').remove();
    }, 7000);
  }

};

$planeBtn.click(addObstacle);
























