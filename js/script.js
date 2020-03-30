  ﻿var  mainCanvas = document.createElement("canvas");
  var ctx = mainCanvas.getContext("2d");

  // var score = 0;
  // var enemies = [];
  // var lives = 3;//?

  //create start div and buttons
  ﻿var  startButton = document.createElement("button");
  ﻿var  restartButton = document.createElement("button");
  var  startButtonsDiv = document.createElement("div");

  //buttons text
  var startText = document.createTextNode("Start Game");
  var restartText = document.createTextNode("Restart Game");
  var brElement = document.createTextNode(" ");

  //add canvas id
  mainCanvas.setAttribute("id", "mainCanvas");
  //add canvas
  document.body.appendChild(mainCanvas);
  //start-button
  startButton.appendChild(startText);
  startButton.setAttribute("id", "startButton");
  startButton.setAttribute("onclick", "startGame()");
  //restart-button
  restartButton.appendChild(restartText);
  restartButton.setAttribute("id", "restartButton");
  restartButton.setAttribute("onclick", "startGame()");
  //start-buttons div
  startButtonsDiv.setAttribute("id", "startButtonsDiv");
  startButtonsDiv.appendChild(startButton);
  startButtonsDiv.appendChild(brElement);
  startButtonsDiv.appendChild(restartButton);
  //add start-buttons div
  document.body.appendChild(startButtonsDiv);

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
