const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
const specialCharacters = ["%","/","*","-","+","="];
let result ="";
const calculate =(btnValue)=>{
    display.focus();
    if(btnValue==="=" && result!==""){
        result=eval(result.replace("%","/100"));
    } else if(btnValue==="AC"){
        result="";
    } else if(btnValue==="DEL"){
        result=result.toString().slice(0.-1);
    } else {
        if(result==="" && specialCharacters.includes(btnValue)) return;
        result += btnValue;
    }
    display.value=result;
};
button.forEach((button)=>{
    button.addEventListener("click", (e)=>calculate(e.target.dataset.value));
});

