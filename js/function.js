//function
function vaibhav(){
    console.log("This is the function");
}
vaibhav();

function sachin(message){
    console.log(message);
}
sachin("My name is sachin")

function sum(x,y){
    s=x+y;
    return s;
}
let value=sum(12,23)
console.log(value);

//Arrow function
const Arrowsum=(a,b)=>{
    console.log(a+b);
}
Arrowsum(10,20);

const V=(a,b,c)=>{
    return a*b;
};
let result=V(10,20);
console.log(result);

//check vowel 
function vowel(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
vowel("abghio");

//foreach
let roomate=['Swapnil','sumit','vaibhav']
roomate.forEach((val)=>{
    console.log(val);
})
//square using for
let nums=[1,2,3,4,5];
nums.forEach((ele)=>{
    console.log(ele*ele);
})
//map methode
let newarr=nums.map((element)=>{
    return element*10;
})
console.log(newarr);
//filter
let even=[12,56,89,55,67,34,55,66];
let evenarr=even.filter((val)=>{
    return val%2===0;
    // odd return val%2 !==0;
})
console.log(evenarr);

//reduce 
let arr3=[1,2,3,4];
const output=arr3.reduce((pre,curr)=>{
    return pre+curr;
})
console.log(output);

//print arr outputin arr
let n=prompt("Enter the number: ");
let arr4=[]
for(let i=1;i<=n;i++){
    arr4[i-1]=i;
}
console.log(arr4);

//factorial
let factorial=arr4.reduce((res,curr)=>{
    return res *curr;
})
console.log(factorial);