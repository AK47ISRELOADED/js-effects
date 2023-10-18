var gola = document.querySelector("#gola");
var but = document.querySelector("button");





but.addEventListener("click",function(){
    
    red = Math.floor(Math.random()*256);
     green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);

    gola.style.backgroundColor = `rgb(${red},${green},${blue})`;
    gola.style.boxShadow = `${0} ${0} ${70}px ${0} rgba(${red},${green},${blue})`

})

var leftbtn = document.querySelector("#leftbtn")
var right = document.querySelector("#rightbtn")
var gola = document.querySelector("#gola");


leftbtn.addEventListener("click",function(){
    
    gola.style.left = `30px`
})