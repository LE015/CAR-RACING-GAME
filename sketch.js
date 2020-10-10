var Canvas,backgroundimage;
var GameState=0;
var playercount;
var database;
var form,game,player;
var allplayers;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();  
  
}

function draw(){
  if(playercount === 4){
    game.update(1);
  }
  if(GameState === 1){
    clear();
    game.play();
  }
}

