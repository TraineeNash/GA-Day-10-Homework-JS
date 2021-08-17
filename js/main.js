document.querySelector("#num1").addEventListener("click", function(e){
    console.log("button press")
    console.log(e);
    console.log(e.target);
})

document.querySelector("#num12").addEventListener("click", function(e){
    console.log("button 12 press")
    console.log(e);
    console.log(e.target);
})