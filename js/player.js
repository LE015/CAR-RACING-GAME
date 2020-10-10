class Player{
 constructor(){
   this.index = null;
   this.name = null;
   this.distance = 0;
 }
getCount(){

var playercountref = database.ref('playercount');
playercountref.on("value",function(data){
    playercount = data.val();
})


}
 updateCount(count){
     database.ref('/').update({
         playercount:count
     });
 }

 update(){
     var playerIndex = "player"+ this.index;
     database.ref(playerIndex).set({
         name:this.name,
         distance:this.distance,

     });
 }
   static getplayerinfo(){
       var playerinforef = database.ref('players');
       playerinforef.on("value",(data)=>{
           allplayers = data.val();
       })
   }

}