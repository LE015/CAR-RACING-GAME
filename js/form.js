class Form{

    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){

        var title = createElement('h2');
        title.html("Welcome Car Racing Game");
        title.position(130,10);

        
        this.input.position(130,150);
        this.button.position(250,200);

        this.button.mousePressed(() => {
           this.input.hide(); 
           this.button.hide(); 

            player.name = this.input.value();

            playercount = playercount+1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);

            this.greeting.html("Hello"+ player.name);
            this.greeting.position(130,160);



        });



    }




}