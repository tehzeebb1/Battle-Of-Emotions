class Form
{
    constructor()
    {
        this.input=createInput("Name");
        this.button=createButton("Play"); 
        this.greeting=createElement('h3');
        this.reset=createButton("Reset");
        this.rules=createElement("h3");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.rules.hide();
      }
    display()
    {
        var title=createElement('h2'); 
        title.html("Battle of Emotions");
        title.position(displayWidth/2-100,0);

        this.reset.position(displayWidth-100, 20);
       
        this.input.position(displayWidth/2-100,displayHeight/2-80);

        this.button.position(displayWidth/2+30,displayHeight/2);

        this.rules.position(displayWidth/2-200,displayHeight/2+20);
        
        this.rules.html("<p>CLICK ON RESET BEFORE GAME START(TOP RIGHT CORNER)</p><p>1. Register yourself.</p><p>2. Use ARROW Keys to move player</p><p>3. Save the player from touching wall and getting RESET</p> <p>4. Avoid eating a spitball of ANGER(ANGER is BAD)</p><p>5. Hurry can be slippery! Don't touch the ice monster!</p>")
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hey! Welcome To The Battle of Emotions!: "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);



        });
        
        
        this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.playersGone();
        })
   
   
   
   
    }
}
