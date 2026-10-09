let Score=75;
if(Score>=90 && score<=100){
    console.log("Grade A");
}
else if(Score>=70 && Score<=89){
    console.log("Grade B");
}
else if(Score>=50 && Score<=69){
    console.log("Grade C")
}

//loop
for(let i=0;i<=5;i++){
    console.log(i);
}

//calculate sum of n number
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log("sum of 10 number",sum);

//while loop
let i=1;
while(i<11){
    console.log(i);
    i++;
}

// do while loop
let a=95;
do{
    console.log(a);
    a++;
}while(a<=100);

//for-of loop
let str="Vaibhav";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("String size",size);

//for in loop
let student={
    name: "vaibhav",
    roll_no:52,
    cgpa:8.9,
    ispass:true,
};
for(let i in student){
    console.log(i);
}

//even number
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("Even number=",i);
    }
}

//random game number
let Gamenumber=48;
let usernum=prompt("Guess the Game Number: ");
console.log(usernum);
while(usernum != Gamenumber){
   usernum= prompt("You Enter Wrong number.Guess new number");
}
console.log("Congratulation, You Enter Right number");


