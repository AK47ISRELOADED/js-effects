var cur = document.querySelector("#cur")
window.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px"
})