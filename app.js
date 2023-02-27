let homeScore = 0;
let awayScore = 0;
let guestScore = 0;
let totalPoints = 0;

drawScore()

function resetHomeScore() {
  homeScore = 0;
  drawScore();
}

function resetAwayScore() {
  awayScore = 0;
  drawScore();
}

function resetGuestScore() {
  guestScore = 0;
  drawScore();
}

function resetScores() {
  homeScore = 0;
  awayScore = 0;
  guestScore = 0;
  drawScore();
}

function drawScore() {
  document.getElementById("home-score").innerText = homeScore.toString();
  document.getElementById("away-score").innerText = awayScore.toString();
  document.getElementById("guest-score").innerText = guestScore.toString();
  document.getElementById("total-points").innerText = totalPoints.toString();

  if (homeScore >= 20) {
    window.alert("Home team wins!");
    resetScores();
  }
  if (awayScore >= 20) {
    window.alert("Away team wins!");
    resetScores();
  }
  if (guestScore >= 20) {
    window.alert("Guest team wins!");
    resetScores();
  }
}

function homeTeamScore() {
  homeScore++;
  totalPoints++;
  console.log("the home team scored one point");
  drawScore();
}

function homeTeamScoreThree() {
  homeScore += 3;
  totalPoints += 3;
  console.log("the home team scored three points");
  drawScore();
}

function homeTeamPenalty() {
  homeScore--;
  totalPoints--;
  console.log("the home team lost a point due to penalty");
  drawScore();
}

function awayTeamScore() {
  awayScore++;
  totalPoints++;
  console.log("the away team scored one point");
  drawScore();
}

function awayTeamScoreThree() {
  awayScore += 3;
  totalPoints += 3;
  console.log("the away team score three points");
  drawScore();
}

function awayTeamPenalty() {
  awayScore--;
  totalPoints--;
  console.log("the away team lost a point due to penalty");
  drawScore();
}

function addPlayer() {
  document.getElementById("guest-player").classList.remove("hidden");
  document.getElementById("guest-buttons").classList.remove("hidden");
  document.getElementById("reset-guest-btn").classList.remove("hidden");
  document.getElementById("add-player-btn").classList.add("hidden");
  console.log("Guest has been added");
  drawScore();
}

function guestTeamScore() {
  guestScore++;
  totalPoints++;
  console.log("the guest team scored one point");
  drawScore();
}

function guestTeamScoreThree() {
  guestScore += 3;
  totalPoints += 3;
  console.log("the guest team scored three points");
  drawScore();
}

function guestTeamPenalty() {
  guestScore--;
  totalPoints--;
  console.log("the guest team lost a point due to penalty");
  drawScore();
}
