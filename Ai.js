
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
        this.name="Randobot";
    }
}
