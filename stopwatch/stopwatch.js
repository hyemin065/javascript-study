let min = 00;
let seconds = 00;
let tens = 00;
let interval;

const mins = document.querySelector("#min");
const msec = document.querySelector("#tens");
const sec = document.querySelector("#seconds");
const startBtn = document.querySelector("#button-start");
const stopBtn = document.querySelector("#button-stop");
const resetBtn = document.querySelector("#button-reset");

function timer(){
    tens++;
    if(tens < 10) msec.innerText =`0${tens}`;
    if(tens >= 10) msec.innerText = tens;
    if(tens > 99) {
        seconds++;
        sec.innerText = `0${seconds}`;
        tens = 0;
        msec.inneText = "00";
    }
    if(seconds > 9) sec.innerText = `${seconds}`;
    if(seconds > 59) {
        min++
        mins.innerText = `0${min}`;
        seconds = 0;
        sec.innerText = "00";
    }
    if(min > 9) mins.innerText = min;
}

const start = ()=>{
    clearInterval(interval);
    interval = setInterval(timer, 10);
}

const stop = ()=>{
    clearInterval(interval);
}

const reset = ()=>{
    clearInterval(interval);
    tens =0;
    seconds =0;
    min =0;
    msec.innerText="00";
    sec.innerText="00";
    mins.innerText="00";
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);