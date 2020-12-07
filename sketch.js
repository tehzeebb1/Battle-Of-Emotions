var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;

function preload()
{
   
}

function setup()
{
    canvas=createCanvas(500, 500);
    database=firebase.database();
   

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 1)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}