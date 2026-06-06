 


let title =document.getElementById("title");
let input =document.getElementById("input");
let button =document.getElementById("button");


input.addEventListener("keyup",() =>{
    if ( input.value == "vhifwef") {
        button.disabled= false;
    }
    else{
        button.disabled=true;
    }
})

button.addEventListener("click",()=>{
    title.style.display="none";
    input.value="";
    button.disabled=true;
})









