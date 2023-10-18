var main = document.querySelector("#main");



main.addEventListener("keydown",function(dets){
    var red = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    main.style.backgroundColor = `rgb(${red},${green},${blue})`;
})