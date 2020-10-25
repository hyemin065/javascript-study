let clock = document.querySelector(".clock");
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let time = document.querySelector(".time");

let newDate = new Date();

let getHour = newDate.getHours();
let getMinute = newDate.getMinutes();
let getSecond = newDate.getSeconds();

let h = getHour * 30 ;
let m = getMinute * 6 ;
let s = getSecond * 6 ;
console.log(h);
console.log(m);
console.log(s);

h  = `rotate((${h} + ${m}/12)deg)`;


