function createLevel(size) {
	var top = 0;
	var left = 0;
	var blockSize = gameContainerWidth/playerPercent;

	var level = [];
	for(i=0;i < size;i++) {
		level[i] = []
		for(j=0;j<size;j++) {
			level[i][j] = Math.random() < 0.5 ? true : false;
			console.log(i + " - i")	;
			console.log(j + " - j")	;
		}
	}

	for(i=0;i<size;i++) {
		left = 0;
		if(i > 0 ) {
			top += blockSize;
		}
		for(j=0;j<size;j++) {
			if(level[i][j]) {
				gameContainer.innerHTML = gameContainer.innerHTML + "<div class='block' id='block-"+(i+1)+"-"+(j+1)+"'></div>";
				var lastBlock = document.getElementById("block-"+(i+1)+"-"+(j+1));
				lastBlock.style.top = top+"px";
				lastBlock.style.left = left+"px";
				
			}
			left += blockSize;
		}

	}
	

}
