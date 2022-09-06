//IntRandom
/*let intRandom = (a, b) => {
    let r = 0;
    if(b===undefined){
        b = a;
        a = 0
    }

    for(i = a;i<b; i++){
        c = Math.random();
        console.log(c);
        r+=c;
    }

    let rr = Math.round(r);
    alert(rr);


} 

intRandom(8);
*/


//greetAll
/*
let greetAll = (a,b,c) => {
    let l = [a,b,c];
    let d = l.filter(i => i != undefined);
    alert(`Hello ${d}`);
}

greetAll(1,"tt","yy");
*/




//sum
/*function sum() {
    var args = [].slice.call(arguments);//calls function's arguments
    if (args.length === 0) return 0;
    if (args.length === 1) return args[0];
    return args.reduce(function(previous, current){
        return previous + current;
    },0);
    //return args.shift() + sum.apply(sum, args); // -> complicated solution
}

//console.log(sum(4, 8, 7, 9, 2));
*/



//union declarative 
/*
let a = {
    "sum" : sum(4,6),
}

let p = prompt("taskl");

console.log(a[p])

*/


























