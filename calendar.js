const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

/*const day1 = document.querySelector("#day");
const date1 = document.querySelector("#day");
const month1 = document.querySelector("#day");
const year1 = document.querySelector("#day");*/

let today = new Date();

const allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=allDays[today.getDay()];
month.innerHTML=allMonths[today.getMonth()];
year.innerHTML=today.getFullYear();
