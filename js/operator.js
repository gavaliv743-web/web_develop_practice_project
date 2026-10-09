//This is the comment
let a=5;
let b=90;
let c=a+b;
console.log(c);

//conditional statement
let age=25;
if(age>=18){
    console.log("You can voting");
}
else{
    console.log("you can not voting");
}
//even or odd
let num=1;
if(num%2==0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");

}
//ternary operator
let age1=45;
let result=age1>=18?"Adult":"Not Adult";
console.log(result);

//switch case
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday")
        break;
    default:
        console.log("Invalid day")

}

//prompt
//let name=prompt("Enter the name");
//console.log(name);

let number=prompt("Enter the Number");
if(number%5==0){
    console.log(number,"Number is multiple by 5");
}
else{
    console.log(number,"is not multiple by 5");
}



