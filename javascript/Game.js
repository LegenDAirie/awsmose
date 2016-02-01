'use strict';

;(function () {
  var Osmos = window.Osmos = window.Osmos || {}

  /* PRETTY MUCH A METATABLE FROM LUA */
  var GAME_PROTOTYPE = {
    start: function () {
      setInterval(this.tick, 1000/60)
    },
    tick: function () {
      console.log('game tick')
    }
  }

  /* GAME CLASS" */
  var Game = Osmos.Game = {
    create: function () {
      var game = Object.create(GAME_PROTOTYPE)

      /* INITIALIZATION CRAP */

      return game
    }
  }

})()
