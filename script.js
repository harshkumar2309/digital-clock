const clock = document.getElementById("clock");
const dateDisplay = document.getElementById("date");
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    dateDisplay.innerHTML = date.toDateString();
}, 1000)
