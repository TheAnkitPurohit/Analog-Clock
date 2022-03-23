const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
  let d = new Date();
  let getHour = d.getHours();
  let getMinute = d.getMinutes();
  let getSecond = d.getSeconds();
  let hrotation = 30 * getHour + getMinute / 2;
  let mrotation = 6 * getMinute;
  let srotation = 6 * getSecond;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
