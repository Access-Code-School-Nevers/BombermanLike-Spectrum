var ennemies = document.getElementsByClassName("ennemy");

function randomIntFromInterval(min,max,step)
{
    return Math.floor(Math.random()*((max-min+1)+min)/step)*step;
}

function moveEnnemies(ennemies,direction) {

  if(i) {

    direction = randomIntFromInterval(1,4,1);

    ennemyPos =  parseInt(ennemies[i].style.left.replace("px",""),10);
    ennemyPosTop = parseInt(ennemies[i].style.top.replace("px",""),10);

    switch (direction) {
      case 1:
      var nextPosEnnemy = ennemyPos+gameContainerWidth/playerPercent;
      var nextPosTopEnnemy = ennemyPosTop;
     break;
      case 2:
      var nextPosEnnemy = ennemyPos-gameContainerWidth/playerPercent;
      var nextPosTopEnnemy = ennemyPosTop;
     break;
      case 3:
      var nextPosEnnemy = ennemyPos;
      var nextPosTopEnnemy = ennemyPosTop+gameContainerWidth/playerPercent;
     break;
      case 4:
      var nextPosEnnemy = ennemyPos;
      var nextPosTopEnnemy = ennemyPosTop-gameContainerWidth/playerPercent;
     break;
      default:
    }

    

    if(nextPosEnnemy >= 0 && nextPosEnnemy < gameContainerWidth && nextPosTopEnnemy >= 0 && nextPosTopEnnemy < gameContainerHeight) {
      ennemies[i].style.left = nextPosEnnemy+"px";
      ennemies[i].style.top = nextPosTopEnnemy+"px";
    }
    else {
      moveEnnemies(ennemies[i]);
    }
  }
  else {

    for (var i = 0; i < ennemies.length; i++) {

      direction = randomIntFromInterval(1,4,1);
  
      ennemyPos =  parseInt(ennemies[i].style.left.replace("px",""),10);
      ennemyPosTop = parseInt(ennemies[i].style.top.replace("px",""),10);
  
      switch (direction) {
        case 1:
        var nextPosEnnemy = ennemyPos+gameContainerWidth/playerPercent;
        var nextPosTopEnnemy = ennemyPosTop;
       break;
        case 2:
        var nextPosEnnemy = ennemyPos-gameContainerWidth/playerPercent;
        var nextPosTopEnnemy = ennemyPosTop;
       break;
        case 3:
        var nextPosEnnemy = ennemyPos;
        var nextPosTopEnnemy = ennemyPosTop+gameContainerWidth/playerPercent;
       break;
        case 4:
        var nextPosEnnemy = ennemyPos;
        var nextPosTopEnnemy = ennemyPosTop-gameContainerWidth/playerPercent;
       break;
        default:
      }
  
      
  
      if(nextPosEnnemy >= 0 && nextPosEnnemy < gameContainerWidth && nextPosTopEnnemy >= 0 && nextPosTopEnnemy < gameContainerHeight) {
        ennemies[i].style.left = nextPosEnnemy+"px";
        ennemies[i].style.top = nextPosTopEnnemy+"px";
      }
      else {
        moveEnnemies(ennemies[i]);
      }
      
    }
  }
  

}

function createEnnemies(max,container) {
  


  for (var i = 0; i < max; i++) {
   var ennemyToAdd = document.createElement("div");
   ennemyToAdd.className = "ennemy";
   var ennemyLeft = randomIntFromInterval(0,450,50);
   var ennemyTop = randomIntFromInterval(0,450,50);
   var lastEnnemy = container.appendChild(ennemyToAdd);
   lastEnnemy.style.left = ennemyLeft+"px";
   lastEnnemy.style.top = ennemyTop+"px";
  }
}



var inter = setInterval(function(){
  ennemies = document.getElementsByClassName("ennemy");
  
  moveEnnemies(ennemies);
  
},1000)