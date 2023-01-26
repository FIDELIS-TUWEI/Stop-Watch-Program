// Container
const stopWatch = document.createElement('div');
stopWatch.setAttribute('id', 'stopwatch');
document.body.append(stopWatch);

// Time
const time = document.createElement('div');
time.setAttribute('id', 'time');
time.innerHTML = `00:00:00`;
stopWatch.appendChild(time);

// Start
const startBtn = document.createElement('button');
startBtn.setAttribute('id', 'start');
startBtn.innerText = `Start`;
stopWatch.appendChild(startBtn);

// Stop
const stopBtn = document.createElement('button');
stopBtn.setAttribute('id', 'stop');
stopBtn.innerText = `Stop`;
stopWatch.appendChild(stopBtn);

// Reset
const resetBtn = document.createElement('button');
resetBtn.setAttribute('id', 'reset');
resetBtn.innerText = `Reset`;
stopWatch.appendChild(resetBtn);