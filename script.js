const easySolvedElement = document.getElementById("easy-solved");
const mediumSolvedElement = document.getElementById("medium-solved");
const hardSolvedElement = document.getElementById("hard-solved");
const totalEasyElement = document.getElementById("total-easy");
const totalMediumElement = document.getElementById("total-medium");
const totalHardElement = document.getElementById("total-hard");
const totalSolvedElement = document.getElementById("total-solved");
const totalQuestionsElement = document.getElementById("total-questions");
const acceptanceRateElement = document.getElementById("acceptance-rate");
const rankingElement = document.getElementById("ranking");

const inputField = document.getElementById("input-field");
const btn = document.getElementById("user-btn");

let stats = document.getElementById("stats");
let content = document.getElementById("content");
let message = document.getElementById("message");
const loader = document.getElementsByClassName("loader")[0];
const url = "https://leetcode-stats-api.herokuapp.com/";

loader.style.display = "none";
stats.style.display = "none";

btn.addEventListener("click", async () => {

    loader.style.display = "block";
    stats.style.display = "none";
    if(content.contains(message)) {
        content.removeChild(message);
    }

    const username = inputField.value;
    let response = await fetch(url + username);
    let data = await response.json();
    
    loader.style.display = "none";

    if(data.status === "success") {
        easySolvedElement.textContent = data.easySolved;
        mediumSolvedElement.textContent = data.mediumSolved;
        hardSolvedElement.textContent = data.hardSolved;
        totalEasyElement.textContent = data.totalEasy;
        totalMediumElement.textContent = data.totalMedium;
        totalHardElement.textContent = data.totalHard;
        totalSolvedElement.textContent = data.totalSolved;
        totalQuestionsElement.textContent = data.totalQuestions;
        acceptanceRateElement.textContent = data.acceptanceRate;
        rankingElement.textContent = data.ranking;

        stats.style.display = "block";
    }
    else {
        message.textContent = data.message;
        content.appendChild(message);
    }
    
});