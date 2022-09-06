//sort
/*let persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
];


let l = [];

let sort = (list, argument) => {
    for(i in list){
        l.push(list[i][argument]);
        console.log(l)
}

};

l = sort(persons, "age");  

console.log(l);
*/



//array map
/*let list = ["1", {}, null, undefined, "500", 700];


let l = list.map((e)=>{return e * 1 || e});

console.log(l);
*/


//array reduce
/*let l = ["0", 5, 3, "string", null];
/*
let sortInt = (list,type) => {
    let li = [];
    for(i in list){
        if(Number.isInteger(i)){
            console.log(typeof i);
            li.push(i);
        }
        console.log(typeof i);
    }
    console.log(li);
}

sortInt(l,"integer");
*/
/*

let lx = l.reduce((sum, current)=>{
    if(isNaN(current)){
        return sum;
    }
    return sum + current * 1;
});


console.log(lx);

/**/




//objets filter
/*
let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

let pphone = Object.entries(phone); //makes i8t as array

let filter = (object, code) => {
    let cde = code;
    let obj = [];
    console.log(typeof obj)

    for(i in object){
        if(cde(i, object[i])){
            console.log(true);
            obj.push([i,object[i]])
        };

   }
   console.log(obj);
   return obj;
}


let p = filter(phone,(key,value) => key == "color" || value == 2);
Object.fromEntries(p);

console.log(typeof p);
*/




//object map
/*
let map = (object, code) => {
    let obj = object;
    let cde = code; //function
    let rslt = [];
    for(i in object){
        cde(i,object[i]);
        rslt.push([i,object[i]]);
    }
    console.log(rslt);
    return rslt;

}



let p = map({name: "Иван", age: 17},function(key,value){
    var result = {};
    result[key+"_"] = value + "$";
    return result;
}) //должен вернуть {name_: "Иван$", age_: "17$"}


p = Object.fromEntries(p); // converts an array to object

console.log(p);
*/




//Sum
/*let sum = (array) => {
    let sum = 0;
    for(i in array){
        sum += sum + array[i];
        console.log(array[i]);
        console.log(typeof sum);
    }
    console.log(sum);
    return sum;
}

let arr = [1,2,3,4,5];

sum(arr);
*/




//Blue belt /recursion
/*let someTree = {
    tagName: "table", //html tag
    children: [ //вложенные тэги
        {
                    tagName: "tr",
                    children: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        }
                    ]
        }
    ],
    attrs: 
    {
        border: 1,
    },
}


let addTree = (arr) =>{
    let body = document.querySelector("body");
    let table = document.createElement(arr.tagName);
    let tr = document.createElement(arr.children[0].tagName);
    let tdOne = document.createElement(arr.children[0].children[0].tagName);
    let tdTwo = document.createElement(arr.children[0].children[1].tagName);  
    //
    let key = Object.keys(arr.attrs)[0];
    console.log(typeof key);
    table.setAttribute(key, arr.attrs.border);
    //
    tdOne.textContent = arr.children[0].children[0].text;
    tdTwo.textContent = arr.children[0].children[1].text;
    //
    //console.log(typeof table)
    body.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);

} 

addTree(someTree);
*/































































