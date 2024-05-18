
let randomNumber = Math.floor(Math.random() * 100) + 1;
let button = document.getElementById("submit");
let result = document.getElementById("result");
let attempts = 0;

button.addEventListener("click", function(){
    let userNumber = Number(document.getElementById("userNumber").value);
    attempts++;
    if(userNumber === randomNumber){
        result.innerHTML = `Congrats you guessed the correct number ${userNumber} in ${attempts} attempts.`
    }
    else if(userNumber < randomNumber){
        result.innerHTML = `Your guessed Number ${userNumber} is low in.`
    }
    else if(userNumber >= 101){
        result.innerHTML = `Please enter the number below 100.`
    }
    else if(userNumber > randomNumber){
        result.innerHTML = `Your guessed number ${userNumber} is high.`

    }
    else{
        result.innerHTML = `Please enter the valid number.`
    }

})

