const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores"));
console.log(highScores);

const MAX_HIGH_SCORES = 5;

localStorage.setItem("highScores" , JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem("highScores"))) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
   // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("Clicked Save Button");
    e.preventDefault();

const score = {
   // score: Math.floor(Math.random()*100),
   score: mostRecentScore,
    name: username.value
};
highScores.push(score);
console.log(highScores);

highScores.sort( (a,b) => b.score - a.score)
highScores.splice(5);
localStorage.setItem("highScores" , JSON.stringify(highScores));
window.location.assign('/');
console.log(highScores);

};
