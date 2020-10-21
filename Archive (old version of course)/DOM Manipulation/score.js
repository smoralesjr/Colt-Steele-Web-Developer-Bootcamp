// Setting variables for each button.
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");

// Creating an object to store the scores.
var scoreObject = {
  player1Score: 0,
  player2Score: 0,
  winningScore: 0
};


var score = document.querySelector("#score");
var winningScore = document.querySelector("#winningScore");

var setWinningScore = function() {
  //   scoreObject.winningScore = document.querySelector("#maxScore").value;
  if (typeof document.querySelector("#maxScore").value === "string") {
    scoreObject.winningScore = 5;
  }
  winningScore.innerText = `Playing to ${scoreObject.winningScore}`;
};

setWinningScore();

var updateScores = function() {
  score.innerText = `${scoreObject.player1Score} to ${scoreObject.player2Score}`;

};

updateScores();

maxScore.addEventListener('keyup', function(number) {
  if (number.keyCode === 13) {
    //     scoreObject.winningScore = number;
    scoreObject.winningScore = parseInt(document.querySelector("#maxScore").value);
  }
  winningScore.innerText = `Playing to ${scoreObject.winningScore}`;
});

player1.addEventListener("click", function() {
  if (scoreObject.player1Score === scoreObject.winningScore) {
    return;
  } else {
    scoreObject.player1Score += 1;
    updateScores();
  }


});

player2.addEventListener("click", function() {
  if (scoreObject.player2Score === scoreObject.winningScore) {
    return;
  } else {
    scoreObject.player2Score += 1;
    updateScores();
  }
});

reset.addEventListener("click", function() {

  scoreObject.player1Score = 0;
  scoreObject.player2Score = 0;
  updateScores();

});