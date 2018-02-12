var ranNumber = $('#random-number');
var currentNumber = $('#current-number');
var winElement = $('#wins');
var lossElement = $('#losses');
var displayNumber = $('#display');
var randomNumber;
var score = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

reset();
ranNumber.text(randomNumber);
currentNumber.text(score);
winElement.text(wins);
lossElement.text(losses);

  for (var i = 0; i < 4; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("id", "crystal" + i);
    crystalImage.attr("src", "assets/images/crystal" + (i + 1) + ".jpg");
    crystalImage.attr("data-crystalvalue", getRandomInt(1,12));
    $("#crystals").append(crystalImage);
  }
  $('.crystal-image').on("click", function () {
    displayNumber.text("");
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    printData();
    if (score > randomNumber) {
        alert("You are an loser!");
        losses ++;
        reset();
    }
    if (score === randomNumber) {
        alert("YOU ARE THE WINNER!");
        wins ++;
        reset();
    }
  })
})
function reset() {
    score = 0;
    randomNumber = getRandomInt(19,120);
    for (i=0; i < 4; i++) {
    $("#crystal"+i).attr("data-crystalvalue", getRandomInt(1,12));
    }  
    printData();
}
    function printData() {
        ranNumber.text(randomNumber);
        currentNumber.text(score);
        winElement.text(wins);
        lossElement.text(losses);
    }
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}