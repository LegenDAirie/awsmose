'use strict';

;(function () {
  /* pull out namespace variable */
  var Osmos = window.Osmos = window.Osmos || {}

  /* localize modules/classes w/e */
  var Game = Osmos.Game;

  // var canvas = document.getElementById('canvas');

  /* initialize game */
  var game = Game.create();
  game.start();
})()
