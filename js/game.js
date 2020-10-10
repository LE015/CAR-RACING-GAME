class Game{
    constructor(){
    
    }
    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value",function(data){
            GameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }

    

    async start(){
        if(GameState === 0){
            player = new Player();
            var playercountref = await database.ref('playercount').once('value');
            if(playercountref.exists()){
                playercount = playercountref.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);

    cars = [car1,car2,car3,car4]

    }
    play(){
        form.hide();
        textSize(30);
        text("gamestart",120,100);
        Player.getplayerinfo();
        if(allplayers !== undefined){
            //var displayposition = 130;
            //for(var plr in allplayers){
                //if(plr === "Player"+player.index)
                //fill("red")
                //else
                //fill("black");
                //displayposition = displayposition+20;
                //text(allplayers[plr].name+":"+allplayers[plr].distance,120,50)
            //}

            var index = 0;
            var x = 0;
            var y;
            for(var plr in allplayers){
                x = x+200;
                y = displayHeight-allplayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if (index === player.index){
                    cars[index-1].shapeColor = "red"

                }


            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance = player.distance+50;
            player.update();
        }
        drawSprites();
    }
}