
/*
let primeirotexto = "hello word"

console.log (primeirotexto)*/

//let numero1= 1

/*var demonstrador = document.getElementsByName("place")[0].placeholder;
console.log (demonstrador)*/

//function demonstrar1(){(demonstrador + numero1)}

//console.log (demonstrar1)

function append(value) {
document.getElementById('dysplay').value += value;
}

function calculate() {
let expression = document.getElementById('dysplay').value;
let result = eval(expression);
document.getElementById('dysplay').value = result;
}

const tira = document.getElementById("dysplay").value

function refresh () {location.reload()}


