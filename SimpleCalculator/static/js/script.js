let numKeys = [];
let ops = [];
const opsAll = ["+", "-", "*", "/"];

let res = document.querySelector("#txtResult");
let btnClear = document.querySelector("#btnClear");
let btnDelete = document.querySelector("#btnDelete");
let btnEqual = document.querySelector("#btnEq");
let btnDecimal = document.querySelector("#btnDeci");

for(let i=0;i<10;i++){
    (function(i){
        qs = "#btn" + i;
        numKeys.push(document.querySelector(qs));
        numKeys[i].addEventListener("click", function(){
            res.textContent += i;
        })
    }(i))
}

for(let i=0;i<4;i++){
    (function(i){
        qs = "#btnOp" + i;
        ops.push(document.querySelector(qs));
        ops[i].addEventListener("click", function(){
            res.textContent += opsAll[i];
        })
    }(i))
}

btnClear.addEventListener("click", function(){
    res.textContent = "";
})

btnDelete.addEventListener("click", function(){
    res.textContent = res.textContent.substring(0, res.textContent.length-1);
})

btnDecimal.addEventListener("click", function(){
    res.textContent += ".";
})

btnEqual.addEventListener("click", function(){
    try{
        res.textContent = eval(res.textContent);
    }catch(e){
        res.textContent = "Invalid Syntax";
    }
})