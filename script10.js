var h1 = document.querySelector("h1")

var clutter = ""

h1.textContent
.split("")
.forEach(function(c){
   clutter += ` <span>${c}</span>`
})

h1.innerHTML = clutter;

gsap.to("h1 span", {
   y:0,
   ease:Expo,
   duration:1,
   opacity:1,
   stagger:0.1

})