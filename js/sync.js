// function hello(){
//     console.log("Code is execute time");
// }
// setTimeout(hello,2000)//timeout is function 2s=2000ms
// //callback
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// // nesting 
// let age=20;
// if(age>=18){
//     if(age==30){
//         console.log("person in the middle phase");
//     }
//     else{
//         console.log("person age above 50");
//     }
// }else{
//     console.log("age is not greater than 18");
// }

// //data
// function getdata(dataId){
//     console.log("data id is:",dataId);
// }
// //using arrow settimeout 
// function givedata(dataid){
//     setTimeout(()=>{
//         console.log("data: ",dataid);
//     },2000);
// }

// //datafetch one by one
// //callback hell
// function datafetch(dataid,secounddata,thirddata){
//     setTimeout(()=>{
//         console.log("data: ",dataid)
//         if(secounddata){
//             secounddata();
//         }
//      },2000)
// }
// datafetch(1,()=>{
//     datafetch(2,()=>{
//         datafetch(3);
//     });
// });

// //promises sove problem of callback hell
// // let promise=new Promise((resolve, reject)=>{
// //     console.log("I am promise");
// //     // resolve("vaibhav");
// //     reject("some eroor is occur");
// // })
// //Api gives promises
// function apidata(dataid, nextdata){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data: ",dataid);
//             resolve("Successfully");
//             if(nextdata){
//                 nextdata();
//             }
//         },5000);

//     });
// }

// //promise then catch
// const getpromise1=() =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise")
//         // resolve("successful_1");
//         reject("network erroe");
//     });
// };

// let promise1=getpromise1();
// promise1.then((res)=>{
//     console.log("promise fulfielled",res);

// });

// promise1.catch((err)=>{
//     console.log("rejected",err);
// });

//chaining fetching
const async1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DATA1");
            resolve("Succesfull");
        }, 6000)
    }); 
}
const async2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DATA2");
            resolve("Succesfull");
        },6000) 
    });
}


console.log("DATA FETCHING 1");
let p1=async1();
p1.then((res)=>{
    console.log(res)
    console.log("FETCHING DATA 2");
    let p2=async2();
    p2.then((res)=>{
        console.log(res);
    })
})

//Async wait
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Wether data");
            resolve(100);
        },2000);
    });
}

async function getwetherdata(){
    await api(); //1st data fetch
    await api();//2nd data fetch
}