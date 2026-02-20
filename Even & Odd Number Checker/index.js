const output = document.getElementById("output");
const input = document.getElementById("input");
const subBtn = document.getElementById("subBtn");

subBtn.addEventListener("click", function(){
    const inputValue = input.value.trim();

    if(inputValue === ""){
        output.textContent = "Enter a number";
        output.style.opacity = "1";
        return;
    }

    const theNum = Number(inputValue);

    if(isNaN(theNum)){
        output.textContent = `${inputValue} is NOT a number`;
    }else if(theNum % 2 === 0){
        output.textContent = `${inputValue} is Even`;
    }else {
        output.textContent = `${inputValue} is Odd`;
    }
    output.style.opacity = "1";
})