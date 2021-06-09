var game,player,form;
var database;
var gameState = 0;
var playerCount;
var canvas;
var allPlayers;
var distance=0;
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

 game = new Game()
 game.gameState();
 game.start();

}

function draw(){
if(playerCount===4){
  game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
