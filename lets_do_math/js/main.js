// Addtion Section
document.querySelector('#addtion').addEventListener('click', add)

function add(){ 
    let num1= Number(document.querySelector('#numberOne').value)
    let num2= Number(document.querySelector('#numberTwo').value)
    let numSum1 = num1 + num2
    document.querySelector('#sum').innerText=numSum1
}
// Subtraction Section
document.querySelector('#subtract').addEventListener('click', subtract)

function subtract(){ 
    let num3= Number(document.querySelector('#numberThree').value)
    let num4= Number(document.querySelector('#numberFour').value)
    let numSum2 = num3 - num4
    document.querySelector('#sum2').innerText=numSum2
}

// Multplication Section
document.querySelector('#multiply').addEventListener('click', multiply)

function multiply(){ 
    let num5= Number(document.querySelector('#numberFive').value)
    let num6= Number(document.querySelector('#numberSix').value)
    let numSum3 = num5 * num6
    document.querySelector('#sum3').innerText=numSum3
}

//  Division Section 
document.querySelector('#divide').addEventListener('click', divide)

function divide(){ 
    let num7= Number(document.querySelector('#numberSeven').value)
    let num8= Number(document.querySelector('#numberEight').value)
    let numSum4 = num7 / num8
    document.querySelector('#sum4').innerText=numSum4
}



