let input = document.getElementById("input");
let submitBtn = document.getElementById("submit");
let taskOutput = document.getElementById("taskOutput");

submitBtn.addEventListener("click", function(){
    let userinput = input.value;
    if(userinput === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = userinput;
        taskOutput.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<img src="images/remove.png" alt="remove">';
        li.appendChild(span);

    }
    input.value = "";

    
})

taskOutput.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
    }
}, false);

