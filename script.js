const text = document.getElementById("input")

function showInput(){
    const getInput = text.value
    const splitValue = getInput.split("").reverse().join("")
    
    document.getElementById("show").textContent = `${splitValue}`
}


function reverseInput(str){
    const splitValue = str.split("")
    const reverseValue = splitValue.reverse()
    const joinValue = reverseValue.join("")
    return joinValue
}

function checkValue(){
    const getText = text.value
    const reverse = reverseInput(getText)

    if(getText == reverse){
        alert("This is a palindrome")
    }else{
        alert("This is not a palindrome")
    }
}

showInput();