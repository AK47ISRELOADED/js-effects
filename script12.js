var c1 = document.querySelector("#circle1");
var c2 = document.querySelector("#circle2");
var c3 = document.querySelector("#circle3");
var c4 = document.querySelector("#circle4");
var content = document.querySelector("#content");

const wi =   content.getBoundingClientRect().width;
const hi =   content.getBoundingClientRect().height;

window.addEventListener("mousemove",function(dets){
    console.log((dets.x - (wi/2))/(wi/100));
    console.log((dets.y - (hi/2))/(hi/100));
    c1.style.transform = `translate(${(dets.x - (wi/2))/(wi/100)}%,${(dets.y - (hi/2))/(hi/100)}%)`;
    c2.style.transform = `translate(${-(dets.x - (wi/2))/(wi/100)}%,${-(dets.y - (hi/2))/(hi/100)}%)`;
    c3.style.transform = `translate(${-(dets.x - (wi/2))/(wi/100)}%,${(dets.y - (hi/2))/(hi/100)}%)`;
    c4.style.transform = `translate(${(dets.x - (wi/2))/(wi/100)}%,${-(dets.y - (hi/2))/(hi/100)}%)`;
   
})