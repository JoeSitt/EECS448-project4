
'use strict';

class Ai {
  constructor() {
    this.m=function( gameboard){}
    this.name="no name";
  }
}
    var x=-1;
class left extends Ai{
  constructor(){
    super();
    this.m=function( gameboard){

        x=x+1;
        if(x==7){
          x=0;
        }
      return(x);
    }

    this.name="Lefto boto";
  }

}

class randobot extends Ai{
  constructor() {
    super();
    this.m=function(gameboard){
      return getRandInt(0, 7);
    }
    this.name="Randobot";
  }

}

class treeBot extends Ai {
    constructor() {
      super();
      this.m=function(gameboard){
        return getNextMove(gameboard, 7, true);
      }
        this.name="Grootbot";
    }
}

class betterTreeBot extends Ai {
    constructor() {
      super();
      this.m=function(gameboard){
        return getNextMove(gameboard, 7, true, true);
      }
        this.name="Grooterbot";
    }
}



function determineAi(name){
  console.log(name);
if (name=="rando") {
	  return new randobot();
	 //Ai2=new randobot();
}else if (name=="tree") {
	 return new treeBot();
	 //Ai1=new treeBot();
}else if (name=="left") {
	 return new left();
	 //Ai1=new treeBot();
}else if (name=="better") {
	 return new betterTreeBot();
	 //Ai1=new treeBot();
}else {
	 return new Ai();
	 //Ai2=new treeBot();
}

//console.log(Ai1);
//console.log(Ai2);
}
