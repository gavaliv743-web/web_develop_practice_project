console.log("This text from javascript");
// alert("This is java script");
//window concept
console.log(document.body);
let heading =document.getElementById("header");
console.dir(heading);

// access by clas
 let paragraph=document.getElementsByClassName("para");
 console.log(paragraph);
 console.dir(paragraph);

 //acces by queryselector
 let element=document.querySelectorAll("h");
 console.dir(element);
 //let element=document.querySelectorAll(".heading");
 console.dir(element);
 //
 let div=document.querySelector("div");
 console.dir(div);

 //div 
 let divs=document.querySelectorAll(".box");
 let index=1;
 for(div of divs){
    div.innerText=`New Unique value ${index}`;
    index++;
 }
 //attribute 
 let attribute=div.getAttribute("class");
 console.log(attribute)
//attribute change
let para=document.querySelector("p");
console.log(para.setAttribute("class","new class"));
//style 
let divchange=document.querySelector("div");
divchange.style.backgroundColor="pink";
// div.style.visibility="hidden";

//insert  element
let newbutton=document.createElement("button");
newbutton.innerText="new button";
console.log(newbutton);
let btn=document.querySelector("div")
div.append(btn);//ending in div
div.prepend(btn);

//element
let para1=document.querySelector("p");
// para1.remove()