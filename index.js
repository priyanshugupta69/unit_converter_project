let bt = document.getElementById("b1")

bt.addEventListener("click" , function(){
    let val = document.getElementById("in").value
    let length = val
 let volume = val
 let mass = val
 let linm = (1/3.281)*val
 let linf = 3.821*val
 let vinl = (1/0.264)*val
 let ving = 0.264*val
 let mink = (1/2.204)*val
 let minp = 2.264*val
    document.getElementById("len").innerHTML = `${val} meters = ${linf} feet | ${val} feet = ${linm} meters`
    document.getElementById("vol").innerHTML = `${val} liters = ${ving} gallons | ${val} gallons = ${vinl} liters`
    document.getElementById("mass").innerHTML = `${val} kg = ${minp} pounds | ${val} pounds = ${mink} kg`
 
 
 


})


// meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

