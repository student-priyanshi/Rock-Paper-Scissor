let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#comp-score");

const genCompChoice=() => {
    const options =["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() => {
    console.log("game was draw.");
    msg.innerText="Game is Draw..Play again!!";
    msg.style.backgroundColor="black";
};

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText='You Win!';  
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        CompScorePara.innerText=compScore;
        msg.innerText='You Lose.';
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userChoice) => {
    console.log("User Choice=",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock") {
             userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice === "scissors"?false :true;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
    showWinner(userWin,userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       console.log("Choice was Clicked.",userChoice);
       playGame(userChoice);
    });
});