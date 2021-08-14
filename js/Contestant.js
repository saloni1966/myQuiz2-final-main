class Contestant{
  constructor(){
      this.name = null;
      this.index = null;
      this.answer = null;
  }
  constCount(){
      database.ref('contestantCount').on("value",(data)=>{
          contestantCount = data.val();
      })
  }
  updateCount(count){
      database.ref('/').update({
          contestantCount : count
      })
  }
  update(){
      var info = "players/player" + this.index;
      database.ref(info).update({
          name : this.name,
          answer : this.answer
      })

  }
  static getPlayerInfo(){
      
      database.ref('players').on("value",(data)=>{
          allPlayers = data.val();
      })
  }
  
}