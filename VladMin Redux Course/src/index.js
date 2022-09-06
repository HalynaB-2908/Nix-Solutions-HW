import "styles.css"; 
import {createStore} from "redux"

let counter = document.getElementById("counter");
let addBtn = document.getElementById("add");
let subBtn = document.getElementById("sub");
let theme = document.getElementById("theme");


const store = createStore(rootReducer,0);



console.log("hbjbjkbkj");



console.log(counter.textContent)

addBtn.addEventListener("onclick",()=>{
   store.dispatch({type:"INCREMENT"})

})

addBtn.addEventListener("onclick",()=>{
    store.dispatch({type:"DECREMENT"})

})

addBtn.addEventListener("onclick",()=>{
    setTimeout(()=>{
        store.dispatch({type:"INCREMENT"})
    },2000)
})

store.subscribe(()=>{
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type:"INIT_APPLICATION"});

theme.addEventListener("click",()=>{
    //document.body.classList.toggle("dark")

//42;30


})




























