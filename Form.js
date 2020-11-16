class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
  
  play(){
    form.hide();
    textSize(30);
    text("GAME START", 120,100);
    Player.getPlayerInfo();
    if(allPlayers !== undifined){
      var display_position = 130;
      for(var plr in allPlayers){
      if(plr === "player" + player.index)
      fill("red");
      else
      fill("black");
      display_position += 20;
      textSize(15);
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position)
    }
  }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50,
      player.update();
    }
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
    }
    }
    form = new Form();
    form.display(); 
  }
}
