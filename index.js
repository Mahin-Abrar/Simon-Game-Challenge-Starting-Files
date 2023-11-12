var gamePattern = [];
var userClickedPattern=[];
var buttonColor = ["red", "blue", "green", "yellow"];
var level=0;
var started = false;
$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
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
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColor[randomNumber];
  
  gamePattern.push(randomChosenColor);
  fade(randomChosenColor);
  playSound(randomChosenColor);
}
function fade (color){
  $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(document).keypress(function(){
  if (!started){
    $("level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
// var level=0;
// $("#level-title").on(keypress,function(){
  
// })
// function checkAnswer(currenLevel) {

// }
// var level=0;
// $("#level-title").on(keypress,function(){
  
// })
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel]==gamePattern[currentLevel]) {
    console.log("khela");
    if (userClickedPattern.length===gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    } 
  } else {
    console.log("no Khela");
  }
}

