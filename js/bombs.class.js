function createExplosionTile(bomb,direction) {
	var bombLeft =  parseInt(bomb.style.left.replace("px",""),10);
	var bombTop =  parseInt(bomb.style.top.replace("px",""),10);

	var explosionToAdd = document.createElement("div");
  	explosionToAdd.className = "explosion"; 

	
	switch(direction) {
		case 0 :
			
			var nextPositionLeft  = bombLeft;
			var nextPositionTop  = bombTop;
      explosionToAdd.style.backgroundImage = "url(img/openPokeball.png)";
			explosionToAdd.style.left = nextPositionLeft+"px";
			explosionToAdd.style.top = nextPositionTop+"px";
			
			
	  break;
		case 1 :

			var nextPositionLeft = bombLeft-(playerPercent/100) * gameContainerWidth;
			var nextPositionTop = bombTop;

			explosionToAdd.style.left = nextPositionLeft+"px";
			explosionToAdd.style.top = nextPositionTop+"px";
			

	  break;
		case 2 :

			var nextPositionLeft  = bombLeft+(playerPercent/100) * gameContainerWidth;
			var nextPositionTop = bombTop;

			explosionToAdd.style.left = nextPositionLeft+"px";
			explosionToAdd.style.top = nextPositionTop+"px";

	  break;
		case 3 :

			var nextPositionLeft  = bombLeft;
			var nextPositionTop = bombTop+(playerPercent/100) * gameContainerWidth;

			explosionToAdd.style.left = nextPositionLeft+"px";
			explosionToAdd.style.top = nextPositionTop+"px";
			
	  break;
		case 4 :

			var nextPositionLeft = bombLeft;
			var nextPositionTop  = bombTop-(playerPercent/100) * gameContainerWidth;

			explosionToAdd.style.left = nextPositionLeft+"px";
			explosionToAdd.style.top = nextPositionTop+"px";
			


	  break;
		default:
	}

	if(nextPositionLeft >= 0 && nextPositionLeft < gameContainerWidth && nextPositionTop >= 0 && nextPositionTop < gameContainerHeight) {

		gameContainer.appendChild(explosionToAdd);
		addRectToObject(explosionToAdd);

		var blocks = document.getElementsByClassName("block");

		for (var i = 0; i < blocks.length; i++) {
			addRectToObject(blocks[i]);

			if(isCollide(blocks[i],explosionToAdd)) {
				blocks[i].parentNode.removeChild(blocks[i]);
			}

		}

		ennemies = document.getElementsByClassName("ennemy");

		for (var i = 0; i < ennemies.length; i++) {
			addRectToObject(ennemies[i]);
			/*console.log(ennemies[i].x);
			console.log(ennemies[i].y);
			console.log(ennemies[i].width);
			console.log(ennemies[i].height);*/

			if(isCollide(ennemies[i],explosionToAdd)) {
				ennemies[i].parentNode.removeChild(ennemies[i]);
			}

		}

		var timeoutExplosion = setTimeout(function(){
			explosionToAdd.parentNode.removeChild(explosionToAdd);
		},explosionTimer);

	}
}

function destroyBomb(bomb) {
  	for (var i = 0; i <= 4 ; i++) {
		createExplosionTile(bomb,i);
  	}
	
	bomb.parentNode.removeChild(bomb);
	
}