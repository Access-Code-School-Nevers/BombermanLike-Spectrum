function init(width,height,player) {
	var bombs = document.getElementsByClassName("bomb");
	bombs[0].parentNode.removeChild(bombs[0]);
  var blocks = document.getElementsByClassName("block");
  blocks[0].parentNode.removeChild(blocks[0]);
	var explosions = document.getElementsByClassName("explosion");
	explosions[0].parentNode.removeChild(explosions[0]);
  var ennemies = document.getElementsByClassName("ennemy");
  ennemies[0].parentNode.removeChild(ennemies[0]);
	player.style.top = height-player.offsetHeight+"px";
	player.style.left = 0;
}


var joueur = document.getElementById("player");
var marcheJoueur = 0;

var gameContainer = document.getElementById("gameContainer");
var gameContainerWidth = gameContainer.offsetWidth;
var gameContainerHeight = gameContainer.offsetHeight;
var playerPercent = 10;

var explosionTimer = 2000;
var test = 0;

var bombLimit = 1;

init(gameContainerWidth,gameContainerHeight,player);

createLevel(9);
createEnnemies(5,gameContainer);


function actionPlayer(player,keyDown) {
	var playerLeft = parseInt(player.style.left.replace("px",""),10);
	var playerTop = parseInt(player.style.top.replace("px",""),10);
  var blocks = document.getElementsByClassName("block");
  var collision = false;


	switch (keyDown.keyCode) {
  	  case 40:
			playerTop = playerTop + ((playerPercent/100) * gameContainerHeight);
      addRectToObject(player);
      player.y = playerTop;
			if(playerTop < gameContainerHeight) {
        for (var i = 0; i < blocks.length; i++) {
          addRectToObject(blocks[i]);

          if(isCollide(player,blocks[i])) {
            collision = true;
          }
        }
        if(collision === false) {
                marcheJoueur = marcheJoueur + 1;
                modulo = marcheJoueur % 2;
                if(modulo === 0){
                    player.style.backgroundImage = "url(img/face.png)";
                } else {
                    player.style.backgroundImage = "url(img/face2.png)";
                }
          player.style.top = playerTop+"px";
        }
        else{
          playerTop = playerTop - ((playerPercent/100) * gameContainerHeight);
        }	
			}
  	    break;
      
  	  case 38:
			playerTop = playerTop - ((playerPercent/100) * gameContainerHeight);
      addRectToObject(player);
      player.y = playerTop;
			if(playerTop >= 0) {
				for (var i = 0; i < blocks.length; i++) {
          addRectToObject(blocks[i]);

          if(isCollide(player,blocks[i])) {
            collision = true;
          }
        }
        if(collision === false) {
                marcheJoueur = marcheJoueur + 1;
                modulo = marcheJoueur % 2;
                if(modulo === 0){
                    player.style.backgroundImage = "url(img/dos.png)";
                } else {
                    player.style.backgroundImage = "url(img/dos2.png)";
                }
          player.style.top = playerTop+"px";
        }
        else{
          playerTop = playerTop - ((playerPercent/100) * gameContainerHeight);
        }
			}
			
  	    break;
  	  case 37:
			playerLeft = playerLeft - ((playerPercent/100) * gameContainerWidth);
      addRectToObject(player);
      player.x= playerLeft;

			if(playerLeft >= 0) {
				for (var i = 0; i < blocks.length; i++) {
          addRectToObject(blocks[i]);

          if(isCollide(player,blocks[i])) {
            collision = true;
          }
        }
        if(collision === false) {
                marcheJoueur = marcheJoueur + 1;
                modulo = marcheJoueur % 2;
                if(modulo === 0){
                    player.style.backgroundImage = "url(img/gauche.png)";
                } else {
                    player.style.backgroundImage = "url(img/gauche2.png)";
                }
          player.style.left = playerLeft+"px";
        }
        else{
          playerLeft = playerLeft + ((playerPercent/100) * gameContainerHeight);
        }
			}
  	    break;
  	  case 39:
			playerLeft = playerLeft + ((playerPercent/100) * gameContainerWidth);
      addRectToObject(player);
			if(playerLeft < gameContainerWidth) {
				for (var i = 0; i < blocks.length; i++) {
          addRectToObject(blocks[i]);
          player.x= playerLeft;

          if(isCollide(player,blocks[i])) {
            collision = true;
          }
        }
        if(collision === false) {
                marcheJoueur = marcheJoueur + 1;
                modulo = marcheJoueur % 2;
                if(modulo === 0){
                    player.style.backgroundImage = "url(img/droite.png)";
                } else {
                    player.style.backgroundImage = "url(img/droite2.png)";
                }
          player.style.left = playerLeft+"px";
        }
        else{
          playerLeft = playerLeft - ((playerPercent/100) * gameContainerHeight);
        }
			}
  	    break;
  	  case 32:
  		var bombNumber = document.getElementsByClassName("bomb").length;
        if(bombNumber < bombLimit) {
          var bombToAdd = document.createElement("div");
  	  			bombToAdd.className = "bomb";
  	  			gameContainer.appendChild(bombToAdd);
  	    		var bombs = document.getElementsByClassName("bomb");
  	    		i = bombs.length-1;
  	    		var lastBomb = bombs[i];
  	    		lastBomb.style.left = playerLeft+"px";
  	    		lastBomb.style.top = playerTop+"px";
  	    		var timeoutBomb = setTimeout(function(){
  	    			destroyBomb(lastBomb);
  	    		},explosionTimer);
            }

  	    break;
  	  default:
  	    return; // Quit when this doesn't handle the key event.
  	}

}

window.addEventListener("keydown", function (event) {

  	if (event.defaultPrevented) {
  	  return; // Do nothing if the event was already processed
  	}
  	actionPlayer(player,event);
	
  	event.preventDefault();
}, true);