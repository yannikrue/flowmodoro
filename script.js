let timerInterval;
let isRunning = false;

const startStopButton = document.getElementById("start-stop-button");
const timerText = document.getElementById("timer-text");
const audio = document.getElementById("audio");

function playSound() {
    audio.currentTime = 0;
    audio.play();
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startStopButton.textContent = "Stop";
        timerText.textContent = "Arbeiten...";
        

        const minTime = 1000; // 4 minutes in milliseconds
        const maxTime = 5000; // 8 minutes in milliseconds
        // const minTime = 4 * 60 * 1000; // 4 minutes in milliseconds
        // const maxTime = 8 * 60 * 1000; // 8 minutes in milliseconds
        const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
        
        timerInterval = setTimeout(() => {
            playSound();
            timerText.textContent = "Starte den Gap Timer";
            startStopButton.textContent = "Start";
            isRunning = false;
            startTimer();
        }, randomTime);
    } else {
        clearTimeout(timerInterval);
        timerText.textContent = "Starte den Gap Timer";
        startStopButton.textContent = "Start";
        isRunning = false;
    }
}

startStopButton.addEventListener("click", startTimer);
