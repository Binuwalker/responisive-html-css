function onServices(){
    alert("Services are not available now!!");
}

let date = new Date();
let newDate = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let finalDate= newDate+"/"+month+"/"+year;
function onClick(){
    document.getElementById("date").innerHTML = finalDate;
}
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = hours+":"+minutes+":"+seconds;

function disTime(){
    document.getElementById("time").innerHTML = time;
    return time;
}