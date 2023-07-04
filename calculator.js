const buttons = document.querySelectorAll("button");
const input = document.getElementById("result");

for(let i =0; i < buttons.length;i=i+1){
    buttons[i].addEventListener("click",()=>{
    const buttonsValue= buttons[i].textContent;
    if(buttonsValue==="C"){
        clear();
    }else if(buttonsValue=== "="){
        calculate();
    }else if(buttonsValue==="D"){
        del();
    }
    else{
        appendvalue(buttonsValue);
    }
    });
}
function calculate(){
    try{
    input.value=eval(input.value);
    }
    catch{
        input.value="Invalid Input" ;
    }
}
function clear(){
    input.value="";
}
function del(){
    input.value = input.value.slice(0,-1);
}
function appendvalue(buttonsValue){
    input.value=input.value+buttonsValue;
}