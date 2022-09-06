//make Profile Timer
/*let showDuration = () => {
    let start = Date.now();
    alert("Hello");
    let drtn = Date.now();
    alert(drtn - start);
}
showDuration();
*/


//makeSaver
/*let makeSaver = (value, returnValue) => {
    let valueS = value;
    if(value){
        console.log(valueS);
    }

}

makeSaver("HI",true);
*/


//Final Countdown
/*let stoooop = () => {
    let l = [5,4,3,2,1,"go!"];
    let ll = 0;

    let delay = (arg) => {
        setTimeout(()=>{console.log(`${l[arg]}`)},1000*arg);
    };

    for(i = 0;i < l.length; i++){
        delay(i);
    }
    
    
}

stoooop();
*/




//MyBind
/*function myBind(func,context,bindArgs){
    function wrapper(){
        let args = Object.assign(bindArgs, arguments);
        return func.apply(context,args)
        
    }
    return wrapper;
}

*/


/*
function myBind(func, context , bindArgs) {
    //console.log(arguments)  
    function wrapper() {
        let args = Object.assign(bindArgs,arguments);
        console.log(arguments)
        return func.apply(context, args);
      }
      return wrapper;
    }
let pow5 = myBind(Math.pow, Math, [undefined, 5])
let cube = myBind(Math.pow, Math, [undefined, 3]);
alert(pow5(2));//32
alert(cube(3));//27
let zeroPrompt = myBind(prompt, window, [undefined, "0"])
let someNumber = zeroPrompt("Введите число")
//alert(someNumber);
    */






//bind by Vladilen
/*
const person = {
    name: "Vlad",
}

function info(phone,email){
    console.log(`${this.name}, ${phone}, ${email}`);

}
*/
//Demo
/*info.bind(person)("12345","v@gmail.com")
info.bind(person,"12345")("v@gmail.com")
info.bind(person,"12345","v@gmail.com")*/

//1st simple way to create your  own bind function
/*function Mybind(fn,context,...rest){
    return fn.bind(context,...rest);
}*/

//2 without native methods
/*function bind(fn, context,...rest){
    return function() {
        const uniqId = Date.now()//.toString();

        context[uniqId] = fn

        const result = context[uniqId](...rest)
        delete context[uniqId];
        return result;

    }
}




bind(info,person)("12345","v@gmail.com")
bind(info,person,"12345")("v@gmail.com")
bind(info,person,"12345","v@gmail.com")

*/




//OOP

//Password
/*function Password(parent, open,id){
    parent.insertAdjacentHTML("afterbegin",`<input type = "text" oninput = onInput() size = "40" 
    value = "" id = ${id}>`);
    let input = document.querySelector("input");

    let pass = "";
    let current = "";

    this.setValue = function(vlue){
        input.value = vlue;
        pass = vlue;
        current = vlue;
        return this.value;
    };

    this.getValue = function(){
        return input.value;
    };

    this.setOpen = function(boolean){ //This function makes the password showed on the screen
        if(boolean===false){
            open = false;
            for(i in current){
                current.replace(current[i],".");
                console.log(current[i]);
                
            }
            let pss = pass;
            let cc = "";     
            for(i in current){
                cc += "."
            }
            console.log(cc);
            current = cc;
            this.setValue(current);
            pass = pss;
        }
        else{
            open = true;
        }
    };

    this.getOpen = function(){ //This function tells if the pass is showed or not
        return open;
    }

    /*this.onChange = function(){
        addEventListener("oninput",(call)=>{console.log(call);});
    }

   this.onOpenChange = function(func){
        /if(smth != true){
            console.log(func);
        }
        else{
            console.log("open isn't  changed");
        }*//*
        let chng = 
    }

};*/



function Password(parent, open, id, makeEye,divId){//makeEye - boolean, which certains if the func creates EYE-icon.
    parent.insertAdjacentHTML("afterbegin",
    `<div id = ${divId}>
    <input type = "text" oninput = "p.onChange()" size = "40" value = "" id = ${id}>
    <button id = "eye"><img src = "img/favicon-16x16.png"></button>
    </div>`);

    let input = document.querySelector(`#${id}`);
    let pass = "";
    let current = "";

    /*this.setValue = function(value){
        input.value = value;
        pass = value;
        if(open===true){current = value;}
        return this.value;
    };
    this.getValue = function(){
        return input.value;
    };*/

    this.setOpen = function(boolean){ //This function makes the password showed on the screen
        if(boolean===false){
            open = false;
            for(i in current){
                current.replace(current[i],".");
                
            }
            let pss = pass;
            let cc = "";     
            for(i in current){
                cc += "."
            }
            console.log(cc);
            current = cc;
            this.setValue(current);
            pass = pss;
        }
        else{
            open = true;
        }
    };



    this.onChange = function(){
        let inpLen = input.value.length;
        let currLen = current.length;
        if(inpLen>currLen){
        current = input.value;
        let c = current[current.length-1];
        console.log(c)
        pass = pass.concat(current[current.length-1]);
        if(open===false){
            //current = input.value;
           
            
            console.log(pass);
            setTimeout(()=>{             
            
            let cc = current.replace(c, ".");
            current = cc;
            console.log(current);
            input.value = current}
            ,700)}
        console.log("oninput");
            }else{
                current.length = inpLen;
            }
    };

    /*input.addEventListener("oninput",()=>{
        this.onChange();
        console.log("oninput");
    });*/

}


let p = new Password(document.body, false,"pass",true,"divPass");

//p.onChange = data => console.log(data)
//p.onOpenChange = open => console.log(open)


//p.setValue('qwerty')
//console.log(p.getValue())

//p.setOpen(false);
//console.log(p.getOpen())
















/*
let body = document.querySelector("body");
let pass = new Password(document.body, false, "pss");
let login = new Password(document.body, false, "lgin");
pass = document.querySelector("#pss");
login = document.querySelector("#lgin");
let check = document.createElement("button");
body.appendChild(check);


let onInput = () => {
    let curr = this.value;
    console.log(curr);
    console.log("gut");
};
*/
/*
check.addEventListener("click",()=>{
    if(pc == "" || lc == ""){
        alert("Fill all fields.");
    }else{
        return true;
    }

})*/

































