// prototype
const employee={
    calculate(){
        age: 23;
        console.log(age);
    },
};

const vaibhav={
    salary: 500000,
};

const Dipak={
    salary: 500000,
};

const sachin={
    salary: 500000,
};

vaibhav.__proto__ =employee;
Dipak.__proto__=employee;
sachin.__proto__ =employee;

//class concept
class Toyota{
    start(){
        console.log("car is start");
    }
    //constuctor
    constructor(){
        console.log("This is the constuctor")
    }
    stop(){
        console.log("car is stop")
    }
};
let fortuner = new Toyota();

//inheritance
class person{
    constructor(){
        this.name="vaibhav";
    }
    eat(){
        console.log("Person Eating something")
    }
}
class child extends person{
    constructor(branch){
        super();// to envoke parent class constructor
        this.branch=branch;
    }
    work(){
        console.log("Person is continuosly work")
    }
}
let obj= new child("Computer Engineer");

//error handling
let a=12;
let b=20;
console.log(a+b);
try{
console.log(a+c);//error
}catch(err){
    console.log(err);
}