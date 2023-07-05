let buttons=document.querySelectorAll("button");
const resultField=document.getElementById("result");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",()=>{
        if(buttons[i].textContent==="C"){
            clearField();
        }
        else if(buttons[i].textContent==="="){
            calculate();
        }
        else{
            appendResultField(buttons[i].textContent);
        }
    })
}

function clearField(){
    resultField.value="";
}
function appendResultField(buttonValue){
    resultField.value+=buttonValue;
}
function calculate(){
    resultField.value=eval(resultField.value);
}
