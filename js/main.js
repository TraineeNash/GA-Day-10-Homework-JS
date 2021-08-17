let popup = document.querySelector("#popup")

//not recommended. do not know why will ask later
document.querySelector("#num2").onclick = function(){
    popup.style.display = "block"
}

document.querySelector("#num1").addEventListener("click", function(e){
    popup.style.display = "block"
})

document.querySelector("#num12").addEventListener("click", function(e){
    popup.style.display = "block"
})

document.querySelector("#close").addEventListener("click", function(){
    popup.style.display = "none"
})

document.querySelector("#num3").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num4").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num5").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num6").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num7").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num8").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num9").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num10").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num11").addEventListener("click", function(){
    popup.style.display = "block"
})

document.querySelector("#num12").addEventListener("click", function(){
    popup.style.display = "block"
})

window.addEventListener("click", function(event){
    console.log(event.target);
    if(event.target == popup){
    popup.style.display = "none"
    }
})