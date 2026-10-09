// arrays
let marks=[12,90,52,78,44];
let cricketer=["virat","Dhoni","vaibhav Gavali"];
console.log(marks);
console.log(cricketer);
// for loop used in Array
let brothers=["kiran","dipak","Ganesh","Bharat"];
for(let i=0;i<=brothers.length;i++){
    console.log(brothers[i]);
}
//average
let sum=0;
for(let element of marks){
    sum=sum+element;
}
let average=sum/marks.length;
console.log(average);

//method 
let fruits=["apple","banana","coconut","cherry"];
fruits.push("Grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.toString());

//concat
let a=cricketer.concat(fruits);
console.log(a);

//ushift and shift
let addfirst=cricketer.unshift("Dhavan");
console.log(addfirst);
//let remove=cricketer.shift();

//slice
console.log(fruits.slice(1,3));
let arr=[12,89,55,6,3];
console.log(arr)
arr.splice(2,2,78,89);
console.log(arr)

