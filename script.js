// Task 1 start
const milesCof = 0.621371

let inputKilometres = document.getElementById('inputKilometres')
let countMiles = document.getElementById('countMiles')
let milesResult = document.getElementById('milesResult')

countMiles.onclick = function (){
   let inputKilometresValue = +inputKilometres.value

    if(isNaN(inputKilometresValue) === true){
        milesResult.innerHTML = 'Please, write a number!'
    }else{
        milesResult.innerHTML = inputKilometresValue * milesCof
    }
}
// Task 1 end

// Task 2 start
let inputNumberOne = document.getElementById('inputNumberOne')
let inputNumberTwo = document.getElementById('inputNumberTwo')
let selectGeneral = document.getElementById('selectGeneral')
let count = document.getElementById('count')
let showResult = document.getElementById('showResult')

count.onclick = function() {
    let inputNumberValueFirst = +inputNumberOne.value
    let inputNumberValueSecond = +inputNumberTwo.value
    let selectGeneralValue = selectGeneral.value

    if (isNaN(inputNumberValueFirst) === true && isNaN(inputNumberValueSecond) === true){
        showResult.innerHTML = 'Please,write a number!'
    }else if(selectGeneralValue === '+'){
        showResult.innerHTML = inputNumberValueFirst + inputNumberValueSecond
    }else if(selectGeneralValue === '-'){
        showResult.innerHTML = inputNumberValueFirst - inputNumberValueSecond
    }else if(selectGeneralValue === '*'){
        showResult.innerHTML = inputNumberValueFirst * inputNumberValueSecond
    }else{
        if (inputNumberValueSecond === 0){
            showResult.innerHTML = 'Cannot be divided by zero!'
        }else{
            showResult.innerHTML = inputNumberValueFirst / inputNumberValueSecond
        }
    }
}
// Task 2 end

// Task 3 start
let inputAge = document.getElementById('inputAge')
let outputAge = document.getElementById('outputAge')
let showAge = document.getElementById('showAge')

outputAge.onclick = function (){
    let inputAgeValue = +inputAge.value

    if(isNaN(inputAgeValue)){
        showAge.innerHTML = 'Please,write a number!'
    }else if(inputAgeValue < 12){
        showAge.innerHTML = 'CHILD'
    }else if(inputAgeValue < 18){
        showAge.innerHTML = 'TEENAGER'
    }else if(inputAgeValue < 60){
        showAge.innerHTML = 'ADULT'
    }else{
        showAge.innerHTML = 'PENSIONER'
    }
}
// Task 3 end

