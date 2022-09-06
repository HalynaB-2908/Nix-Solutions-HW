//Table -> tr -> th(Headlines) or td(RegularBox)
//Multiply Table
/*

let box = null;
let row = null;

let createNumArr  = () => {
    let list = [];
    
    for(i = 1; i != 10; i++){
        list.push([i]);
        //console.log(Array.isArray(list[i]));
        //console.log(list[i-1]);
        for(j = 1;j != 10;j++){
            list[i-1].push(j * list[i-1][0]);
        }
    }
    //console.log(list);
    return list;
};

let numList = createNumArr();
//console.log(numList[0][0]);


let addNum = (arr) => {
    let body = document.querySelector("body");
    let table = document.createElement("table");
    let num = ["one", "two", "three", "four", "five", "six", "seven", "eight",
"nine"];
    //console.log(typeof body);
    body.appendChild(table);
    let tbl = document.querySelector("table");
    //
    let id = 0;
    for(i in numList){
        tbl.insertAdjacentHTML("beforeend",`<tr id = "${num[i]}"></tr>`);
        for(j in numList[i]){
            id = document.querySelector(`#${num[i]}`);
            id.insertAdjacentHTML("beforeend",`<td>${numList[i][j]}</td>`)
        }
    //console.log(i);
    }
   
    
};
console.log(numList);
addNum(numList);
*/





//Color box and column
/*
let attr = 0;

document.addEventListener("mousemove", (eventor)=>{
    
    document.querySelector("table").style.color = "red";
    document.querySelectorAll("td").style.border = "15px"
});
*/


//Calc live
/*
let body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", `<input type = "number" id = "one">`);
body.insertAdjacentHTML("beforeend", `<input type = "number" id = "two">
<br></br>`);
let oneValue = document.querySelector("#one").value;
let twoValue = document.querySelector("#two").value; 
let calc = () => {
    oneValue = document.querySelector("#one").value || 0;
    twoValue = document.querySelector("#two").value || 0; 
    console.log(oneValue * 1 + twoValue * 1);
}

body.insertAdjacentHTML("beforeend", `<button type = "button" id = "btn"
onclick = "calc()">calc</button>`);

let one = document.querySelector("#one");
let two = document.querySelector("#two");

one.addEventListener("click", ()=>{
    calc();
    console.log("event1");
});

two.addEventListener("click", ()=>{
    calc();
    console.log("event2");
});

*/

/*
let table = document.createElement("table");
body.appendChild(table);
table = document.querySelector("table");





let btns = [["C","<","/","x^2"],["7","8","9","x"],
["4","5","6","-"],["1","2","3","+"],["+/-","0",".","="]];
let num = ["one","two","three","four","five"];

let tr = 0;
*/

/*for(i in btns){
    table.insertAdjacentHTML("beforeend",`<tr id = "${num[i]}"></tr>`);
    tr = document.querySelector(`#${num[i]}`);
    for(j in btns[i]){
        tr.insertAdjacentHTML("beforeend",`<button type = "button">
        ${btns[i][j]}</button>`)
    }
    
}

table.insertAdjacentHTML("afterbegin",`<input type = "text">`);

//body.appendChild(table);
*/


