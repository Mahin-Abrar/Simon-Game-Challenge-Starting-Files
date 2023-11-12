let gamePattern = [];
let userClickedPattern=[];
let buttonColor = ["red", "blue", "green", "yellow"];
let level=0;
let started = false;
$(".btn").on("click",function(){
  let userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  fade(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  playSound(userChosenColour);
console.log(userChosenColour);
});
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text(" Level "+level);
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColor[randomNumber];
  
  gamePattern.push(randomChosenColor);
  fade(randomChosenColor);
  playSound(randomChosenColor);
}
function fade (color){
  $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name){
  let audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

$(document).keypress(function(){
  if (!started){
    $("level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
// let level=0;
// $("#level-title").on(keypress,function(){
  
// })
// function checkAnswer(currenLevel) {

// }
// let level=0;
// $("#level-title").on(keypress,function(){
  
// })
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
    console.log("khela");
    if (userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 500);
    } 
  } else {
    playSound("wrong");
    $("#level-title").text("NOOB Khela Pare  ");
    $("body").addClass("game-over");
    console.log("no Khela");
  }
}