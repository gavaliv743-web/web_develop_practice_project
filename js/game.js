let user_score=0;
let computer_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscore=document.querySelector("#user_score");
const compscore=document.querySelector("#comp_score");

const gencompchoice=()=>{
    const options=["Rock","Paper","Scissors"];
    // number printed between 0,1,2
    const randId=Math.floor(Math.random()*3);
    return options[randId];

}
const drawGame=()=>{
    msg.innerText=("Game is Draw");
    msg.style.backgroundColor = "#120759";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user_score++;
        userscore.innerText=user_score;
        msg.innerText="you Win";
        msg.style.backgroundColor ="green";
    }
    else{
        computer_score++;
        compscore.innerText=computer_score;
        // console.log("You loss ${compchoice} beats your choice${userchoice}");
        msg.innerText=("you loss");
        msg.style.backgroundColor="red";
    }
}
//for user
const PlayGame=(userchoice)=>{
    console.log("User selected Choice= ",userchoice);
    // genertate choice
    const compchoice=gencompchoice();
    console.log("Computer selected choice",compchoice);
    
    if(userchoice===compchoice){
        //draw game
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="Rock"){
            userwin=compchoice ==='Paper'? false: true;
        }else if(userchoice==="Paper"){
          //rock,scissor
          userwin=compchoice === "Scissors" ? false : true;
        }
        else{
            userwin=compchoice ==="Rock" ? false: true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        PlayGame(userchoice);

});
});
