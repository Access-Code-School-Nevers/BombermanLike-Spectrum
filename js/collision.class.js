function isCollide(a, b) {

    if(
        ((a.y + a.height) <= (b.y)) ||
        (a.y >= (b.y + b.height)) ||
        ((a.x + a.width) <= b.x) ||
        (a.x >= (b.x + b.width))
    ) {

      return false
  }
  else {
    return true;

  };
}

function addRectToObject(a) {
  a.x = parseFloat(a.style.left.replace("px",""));
  a.y = parseFloat(a.style.top.replace("px",""));
  
  a.width = playerPercent/gameContainerWidth;
  a.height = playerPercent/gameContainerHeight;
}