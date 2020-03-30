  //draw images function
  //https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/drawImage
  function drawMyImage(url, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    image = new Image();
    image.onload = function(){
      ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
    image.src = url;
  }

  //start game
  function startGame(){
    document.getElementById("startButtonsDiv").style.display = "none";
    runHeroAnimation();
    console.log("startGame ok 4");
  }
//!!!TODO check image generation
  //main character animation
  function runHeroAnimation(){
    drawMyImage("/sprites/hero.png", 0, 0, 100, 100, 0, 0, 120, 120);
    console.log("start animation ok 3");
  }

  //do-pause function
  function pause(){
  }
