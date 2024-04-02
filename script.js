const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");



const display = document.getElementById("display");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;

        startBtn.style.cssText = `
        border-color: var(--start);
        color: var(--start);
        `;
        stopBtn.style.cssText = ``;
        resetBtn.style.cssText = ``;
        document.documentElement.style.setProperty('--clock', 'var(--start)');

    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        // elapsedTime = Date.now() - startTime;
        isRunning = false;

        startBtn.style.cssText = ``;
        stopBtn.style.cssText = `
        border-color: var(--stop);
        color: var(--stop);
        `;
        resetBtn.style.cssText = ``;
        document.documentElement.style.setProperty('--clock', 'var(--stop)');
        
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00';

    startBtn.style.cssText = ``;
    stopBtn.style.cssText = ``;
    resetBtn.style.cssText = `
        border-color: var(--reset);
        color: var(--reset);
        `;
        document.documentElement.style.setProperty('--clock', 'var(--reset)');
}

function update() {
    // const currentTime = Date.now();
    elapsedTime = Date.now() - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime / (1000 * 60) % 60)).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime / 1000 % 60)).toString().padStart(2, '0');
    const milliSeconds = Math.floor((elapsedTime % 1000 / 10)).toString().padStart(2, '0');

    display.textContent = `${minutes}:${seconds}:${milliSeconds}`;

}