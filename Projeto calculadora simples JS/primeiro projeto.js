
/*
let primeirotexto = "hello word"

console.log (primeirotexto)*/

//let numero1= 1

/*var demonstrador = document.getElementsByName("place")[0].placeholder;
console.log (demonstrador)*/

//function demonstrar1(){(demonstrador + numero1)}

//console.log (demonstrar1)

function append(value) {
document.getElementById('dysplay').value += value;// acresenta o valor de dysplay ao dysplay
}

function calculate() {
let expression = document.getElementById('dysplay').value; //pega o valor em dysplay
let result = eval(expression); //faz a conta dos itens que constam e dysplay
document.getElementById('dysplay').value = result; // acrescenta o resultado da variavel result no dysplay
}


function refresh(){
let deixa = document.getElementById('dysplay').value;//pega valor em dysplay
let refresh = parseInt(deixa) - parseInt(deixa); //subtrai dysplay por ele mesmo
let final = eval(refresh) //faz a operação acima
document.getElementById('dysplay').value = final;}// acresenta o resultado no dysplay




