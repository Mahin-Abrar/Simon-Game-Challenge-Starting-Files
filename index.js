var gamePattern = [];
var userClickedPattern=[];
var buttonColor = ["red", "blue", "green", "yellow"];
var level=0;
$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  fade(userChosenColour);
  playSound(userChosenColour);
console.log(userChosenColour);
});
function nextSequence() {
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

$(document).keypress(nextSequence);
// var level=0;
// $("#level-title").on(keypress,function(){
  
// })
// function checkAnswer(currenLevel) {

// }
// var level=0;
// $("#level-title").on(keypress,function(){
  
// })
// function checkAnswer(currenLevel) {