function red(x,y){

  var b= document.getElementById("b"+x+y);
  var r= document.getElementById('r'+x+y);
  var n= document.getElementById('n'+x+y);
  if(n.hidden!=0){
    return 0;
  }else{
    r.hidden=0;
    n.hidden=1;
    return 1;
  }
}

function black(x,y){

  var b= document.getElementById("b"+x+y);
  var r= document.getElementById('r'+x+y);
  var n= document.getElementById('n'+x+y);
  if(n.hidden!=0){
    return 0;
  }else {
    b.hidden=0;
    n.hidden=1;
    return 1;
  }
}

function b(x){

for (var i = 1; i < 7; i++) {
  var b= document.getElementById("b"+x+i);
  var r= document.getElementById('r'+x+i);
  var n= document.getElementById('n'+x+i);

  if(n.hidden!=0){

  }else {
    b.hidden=0;
    n.hidden=1;
    return 1;
  }
}
return 0;
}

function r(x){

for (var i = 1; i < 7; i++) {
  var b= document.getElementById("b"+x+i);
  var r= document.getElementById('r'+x+i);
  var n= document.getElementById('n'+x+i);

  if(n.hidden!=0){

  }else {
    r.hidden=0;
    n.hidden=1;
    return 1;
  }
}
return 0;
}
