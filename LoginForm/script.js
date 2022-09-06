function myFunction(){
    let x = document.getElementById("myInput");
    let y = document.getElementById("hide1");
    let z = document.getElementById("hide2");

    if(x.type === "password"){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
        console.log(x.type)
    }
    else /*if(x.type = "text")*/{
        console.log("else")
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}


//Password Verify: in this task in email and password input should be 
//entered same symbols (no matter which).
/*
let log = document.querySelector(".login-btn");
log.onclick = "passwordVerify()"

function passwordVerify(){
    let a = document.getElementById("myInput");
    let b = document.getElementById("emailInput");
    let errorText = document.getElementById("errorText");
    let inputBox = document.querySelector(".input-box")
    let hOne = document.querySelector("h1");

    if(a.value==b.value){
        errorText.textContent = "Inputs in the fields are same!"
        errorText.style.color = "rgb(0, 235, 0)";
        errorText.style.display = "block";
        inputBox.style.margin = "21px auto";
        hOne.style.margin = "0px 0px 30px";

    }else{
        errorText.textContent = 
        "Inputs in the fields aren't same! Please  enter again.";
        errorText.style.color = "rgb(196, 0, 0)"
        errorText.style.display = "block";
        inputBox.style.margin = "21px auto";
        hOne.style.margin = "0px 0px 30px";
    }
}*/