const foodItems = [
	"🌭",
	"🍔",
	"🥙",
	"🌶️",
	"🥖",
];

const hotdog = "🌭";

let grill;
let result;
let resultCorrect;
let resultIncorrect;

let correctCount = 0;
let incorrectCount = 0;

let counterCorrect;
let counterIncorrect;
let counterTotal;
let counterAccuracy;
let counterSpeed;

let startTime;

addEventListener("DOMContentLoaded", (event) => {
	grill = document.getElementById("grill");
	result = document.getElementsByClassName("result");
	resultCorrect = document.getElementById("result-correct");
	resultIncorrect = document.getElementById("result-incorrect");
	counterCorrect = document.getElementById("counter-correct");
	counterIncorrect = document.getElementById("counter-incorrect");
	counterTotal = document.getElementById("counter-total");
	counterAccuracy = document.getElementById("counter-accuracy");
	counterSpeed = document.getElementById("counter-speed");
	startTime = new Date();
	showItem();
});

function showItem() {
	const index = Math.floor(Math.random() * foodItems.length);
	if (grill) {
		grill.innerHTML = foodItems[index];
	}
}

function yes() {
	clearResults();
	if (grill.innerHTML == hotdog) {
		resultCorrect.classList.add("current");
		correctCount++;
	} else {
		resultIncorrect.classList.add("current");
		incorrectCount++;
	}
	updateCounterDisplay();
	showItem();
}

function no() {
	clearResults();
	if (grill.innerHTML != hotdog) {
		resultCorrect.classList.add("current");
		correctCount++;
	} else {
		resultIncorrect.classList.add("current");
		incorrectCount++;
	}
	updateCounterDisplay();
	showItem();
}

function clearResults() {
	for (const r of result) {
		r.classList.remove("current");
	}
}

function updateCounterDisplay() {
	counterCorrect.innerHTML = correctCount;
	counterIncorrect.innerHTML = incorrectCount;
	const total = correctCount + incorrectCount;
	counterTotal.innerHTML = total;
	const elapsed = ((new Date()).getTime() - startTime.getTime()) / 1000 / 60;
	
	counterAccuracy.innerHTML = Math.round(correctCount / total * 100);
	counterSpeed.innerHTML = Math.round(total / elapsed);
}
