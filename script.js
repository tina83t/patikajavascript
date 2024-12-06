let userName =prompt("lütfen isminizi girin:");

if (!userName){
    userName = "ziyaretçi";
}
const greetingElement = document.getElementById("greeting");
const timeElement = document.getElementById("time");
greetingElement.innerText = `Merhaba, ${userName}! hoş geldin!`;

function showTime(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const days =["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];
    const day = days[now.getDay()];

    timeElement.innerText =`${hours}:${minutes}:${seconds} ${day}`;
}
setInterval(showTime,1000);