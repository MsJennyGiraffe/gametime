require('./style.scss');

var $ = require("jquery");
var Game = require("./game");
var Menu = require("./menu");
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var menu = new Menu();

function setupPregameDisplay() {
  menu.setup();
  $("#restartButton").on("click", gameLoop);
}

function setupGameDisplay() {
  menu.prepareForGame();
}

function setupPostgameDisplay(score) {
  $("#restartButton").show();
  menu.scoreBoard.getLeaderName(score);
}

function gameLoop() {
  var game = new Game(canvas, context);
  setupGameDisplay();
  game.setup();
  requestAnimationFrame(function gamePlay() {
    if (game.inProgress()) {
      game.gameLoop();
      setTimeout(function(){
        requestAnimationFrame(gamePlay);
      }, game.speed * 50);
    }
    else {
      game.render.displayGameOver();
      setupPostgameDisplay(game.score);
    }
  });
}

setupPregameDisplay();

window.addEventListener("keydown", function(e) {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
