let btn1=document.querySelector("#btn1");
// event is object
btn1.onclick = (event) =>{
    console.log("btn1 is click ")
    let a=1;
    a++;
    console.log(a);
};

//ListenerEvvent
let btn2=document.querySelector('#btn2');
btn2.addEventListener("click", ()=>{
    console.log("Button is clicked using Event listener1")
});

btn2.addEventListener("click", ()=>{
    console.log("Button is clicked using Event listener2")
});

let listener3 =()=>btn2.addEventListener("click", ()=>{
    console.log("Button is clicked using Event listener3")
});

btn2.removeEventListener("click",listener3);

// toggle button problem
let modbutton=document.querySelector("#mode");
let currentmode="Light";
modbutton.addEventListener("click",()=>{
    if(currentmode==="Light"){
        currentmode="Dark"
        document.querySelector("body").style.backgroundColor="black";

    }
    else{
        currentmode="Light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currentmode);

});
