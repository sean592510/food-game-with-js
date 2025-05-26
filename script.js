const foodItems = ["🌭", "🍔", "🥙", "🌶️", "🥖"];

let grill;
let optionsContainer;
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
let currentCorrectItem; 

addEventListener("DOMContentLoaded", (event) => {
    grill = document.getElementById("grill");
    optionsContainer = document.getElementById("options");
    resultCorrect = document.getElementById("result-correct");
    resultIncorrect = document.getElementById("result-incorrect");
    counterCorrect = document.getElementById("counter-correct");
    counterIncorrect = document.getElementById("counter-incorrect");
    counterTotal = document.getElementById("counter-total");
    counterAccuracy = document.getElementById("counter-accuracy");
    counterSpeed = document.getElementById("counter-speed");
    startTime = new Date();
    showItems();
});

function showItems() {
    grill.innerHTML = "";
    optionsContainer.innerHTML = "";
    
    const shuffledItems = [...foodItems].sort(() => Math.random() - 0.5);
    
    
    currentCorrectItem = shuffledItems[Math.floor(Math.random() * shuffledItems.length)];
    grill.innerHTML = currentCorrectItem; 
    grill.title = `Click an emoji that matches this one: ${currentCorrectItem}`; 
    shuffledItems.forEach((item) => {
        const option = document.createElement("span");
        option.classList.add("option");
        option.innerHTML = item;
        option.addEventListener("click", () => handleGuess(item));
        optionsContainer.appendChild(option);
    });
}

function handleGuess(selectedItem) {
     resultCorrect.classList.remove("current");
    resultIncorrect.classList.remove("current");
    
        const options = document.getElementsByClassName("option");
    
    
    const isCorrect = selectedItem === currentCorrectItem;
    if (isCorrect) {
        resultCorrect.classList.add("current");
        correctCount++;
            for (const option of options) {
            if (option.innerHTML === currentCorrectItem) {
                option.classList.add("correct");
            } else {
                // Apply explosion animation to incorrect options
                option.classList.add("explode");
            }
        }
    } else {
        resultIncorrect.classList.add("current");
        incorrectCount++;
    
        for (const option of options) {
            if (option.innerHTML === currentCorrectItem) {
                option.classList.add("correct");
            } else {
                option.classList.add("explode");
            }
        }
    }
    
    
    updateCounterDisplay();
    
    setTimeout(showItems, 1000); 
}

function updateCounterDisplay() {
    counterCorrect.innerHTML = correctCount;
    counterIncorrect.innerHTML = incorrectCount;
    const total = correctCount + incorrectCount;
    counterTotal.innerHTML = total;
    const elapsed = ((new Date()).getTime() - startTime.getTime()) / 1000 / 60;
    counterAccuracy.innerHTML = total > 0 ? Math.round(correctCount / total * 100) : 0;
    counterSpeed.innerHTML = Math.round(total / elapsed) || 0;
}
