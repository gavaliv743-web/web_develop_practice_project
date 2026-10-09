//string 
let str="vaibhav";
a=str.length;
console.log(a);
console.log(str[0]);

//template literal
let speacialstring=`this is the template `;
console.log(speacialstring);
//concept
let obj={
    item:"pen",
    price:10,
    color:"red",
};
console.log(`The item name is ${obj.item} color is ${obj.color} price is ${obj.price}`);


//methode in js
let str1="vaibhav";
let str2="     Gavali"
a=str1.toUpperCase();
b=str1.toLowerCase();
c=str2.trim();
console.log(a);
console.log(b);
console.log(c);

//problem solve
let fullname=prompt("Enter you full name without spaces");
let username="@"+fullname+fullname.length;
console.log(username);
