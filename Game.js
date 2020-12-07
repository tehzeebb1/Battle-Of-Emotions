class Game{
   constructor()
   {
       
   }
   getState()
   {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
   }
   update(state)
   {
    database.ref('/').update({
        gameState:state
       });
   }
   async start()
   {
    if (gameState === 0)
    {
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        player.getCount();
        }
        form=new Form();
        form.display();     
    }
    //add players here
   }
   

   play()
   {
       form.hide();
       textSize(30);
       text("Game Start", 120, 100);

      
      Player.getPlayerInfo();
      if(allPlayers !== undefined)
      {
         //add background

          var index=0;
          var x=150;
          var y;

     

           if(index === player.index)
           {
               stroke(10);
               fill("Red");
               ellipse(x, y, 65, 65);
               camera.position.x = displayWidth/2;
               camera.position.y = cars[index-1].y;
           }
        }
        
        if(keyIsDown(UP_ARROW)&& player.index != null)
        {
            player.distance = player.distance+10;
            player.update();
        }
        

      drawSprites();
   }
   end()
   {
    camera.position.x =0;
    camera.position.y = 0;
    imageMode(CENTER);
    Player.getPlayerInfo();  
    console.log("Game Ended");
    fill("red");
    textAlign(CENTER);
    textSize(50);
    // Add ending rank here 
   } 
} 