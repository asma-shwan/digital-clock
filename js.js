setInterval(()=>{
let time1=document.getElementById("num1")
let time2=document.getElementById("num2")
let time3=document.getElementById("num3")
let time4=document.getElementById("num4")
let hours=new Date().getHours()
let min=new Date().getMinutes()
let seconds=new Date().getSeconds()
let day="AM"
if(hours>12){
    day="PM"
    hours=hours-12
}
if(seconds<10){
    seconds="0"+seconds
}
if(min<10){
min="0"+min
}
if(hours<10){
    hours="0"+hours
}
time1.innerHTML=hours
time2.innerHTML=min
time3.innerHTML=seconds
time4.innerHTML=day})
setInterval()