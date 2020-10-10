// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const h2 = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const newDate = new Date();

  const gap = xmasDay.getTime() - newDate.getTime();
  const day = Math.floor(gap/(1000*60*60*24));
  const hours = Math.floor(gap/(1000*60*60)%24);
  const minutes = Math.floor(gap/(1000*60)%60);
  const seconds = Math.ceil((gap/1000)%60);

  h2.innerText = `${day < 10 ? `0${day}`: `${day}`}일 ${hours < 10 ? `0${hours}` : `${hours}`}시 ${minutes < 10 ? `0${minutes}` : `${minutes}`}분 ${seconds < 10 ? `0${seconds}` : `${seconds}`}초`;
  
}

function init() {
  getTime();
}
init();

setInterval(init, 1000);

