// Get all elements
const stopwatch = document.getElementById('stopwatch');
const timer = document.getElementById('time');
const start = document.getElementById('start');
const stopButton = document.getElementById('stop');
const reset = document.getElementById('reset');

// Set interval
let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to start Timer
startTimer = () => {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }, 1000);
};

// Function to stop Timer
stopTimer = () => {
    clearInterval(interval);
};

// Function to reset Timer
resetTimer = () => {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = `00:00:00`;
};

// Event listener when button clicked
start.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);