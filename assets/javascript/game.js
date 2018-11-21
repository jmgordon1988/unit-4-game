var wins = 0
var losses = 0
var score = 0
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var yourNumber = getRandomInt(19, 120);
$("#yourNumber").text(yourNumber);

var crystalNumber1 = getRandomInt(1, 12);
var crystalNumber2 = getRandomInt(1, 12);
var crystalNumber3 = getRandomInt(1, 12);
var crystalNumber4 = getRandomInt(1, 12);
function winLossCheck() {
    if (score === yourNumber) {
        wins++;
        $("#winshere").text(wins);
        score = 0;
        $("#yourScore").text(score);
        yourNumber = getRandomInt(19, 120);
        $("#yourNumber").text(yourNumber);
        crystalNumber1 = getRandomInt(1, 12);
        crystalNumber2 = getRandomInt(1, 12);
        crystalNumber3 = getRandomInt(1, 12);
        crystalNumber4 = getRandomInt(1, 12);
        reset();
    }
    
    if (score > yourNumber) {
        losses++;
        score = 0;
        $("#yourScore").text(score);
        $("#losseshere").text(losses);
        yourNumber = getRandomInt(19, 120);
        $("#yourNumber").text(yourNumber);
        crystalNumber1 = getRandomInt(1, 12);
        crystalNumber2 = getRandomInt(1, 12);
        crystalNumber3 = getRandomInt(1, 12);
        crystalNumber4 = getRandomInt(1, 12);
        reset();
    }
}

$(document).ready(function(){
$("#winshere").text(wins);
$("#losseshere").text(losses);
$("#yourScore").text(score);

$("#button1").on("click", function () {
    score += crystalNumber1;
    $("#yourScore").text(score);
    winLossCheck();
    
})

$("#button2").on("click", function () {
    score += crystalNumber2;
    $("#yourScore").text(score);
    winLossCheck();
})

$("#button3").on("click", function () {
    score += crystalNumber3;
    $("#yourScore").text(score);
    winLossCheck();
})

$("#button4").on("click", function () {
    score += crystalNumber4;
    $("#yourScore").text(score);
    winLossCheck();
})
})