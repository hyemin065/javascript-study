const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const time = document.querySelector(".time");

function timer(){
    let newDate = new Date();

    let getHour = newDate.getHours();
    let getMinute = newDate.getMinutes();
    let getSecond = newDate.getSeconds();
    
    let h = getHour * 30 ;
    let m = getMinute * 6 ;
    let s = getSecond * 6 ;
    
    time.style.transform = `rotate(${h + (m/12)}deg)`;
    minute.style.transform = `rotate(${m}deg)`
    second.style.transform = `rotate(${s}deg)`
}

timer();
setInterval(timer, 1000);



