let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");

let turnO=true; //there is a player X and player O
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.style.backgroundColor="white";
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; //you cant change your value once you put
    checkWinner();
    });
});
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkWinner=()=>{
    for(let pattern of winningPattern){
        console.log(pattern);
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText==="X" && boxes[pattern[1]].innerText==="X" && boxes[pattern[2]].innerText==="X"){
               console.log("player x is the winner");
               disableBox();
               showWinner(boxes[pattern[0]].innerText);
            }
            if(boxes[pattern[0]].innerText==="O" && boxes[pattern[1]].innerText==="O" && boxes[pattern[2]].innerText==="O"){
                console.log("player O is the winner");
                disableBox();
                showWinner(boxes[pattern[0]].innerText);   
            }   
        }
    }
}
let msgBox=document.querySelector(".msgBox");
let msg=document.querySelector("#msg");
let newGame=document.querySelector(".newGame");
let resetGame=document.querySelector("#reset");
// let reset_box=document.querySelector(".reset-box");

const showWinner=(winner)=>{
   msg.innerText=`Congratulation! The winner is ${winner}...`;
   msgBox.classList.remove("hide");
//msg.prepend(msg);
//    console.log(reset_box.classList);
   resetGame.className="resetGame hide";
}


newGame.addEventListener("click",()=>{
    // boxes.style.backgroundColor="#FCA311"
    boxes.forEach((box)=>{
        box.style.backgroundColor="#FCA311"
    });
    resetGame.className="resetGame";
    enableGame();
});
const enableGame=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;   
    }
    msgBox.classList.add("hide");
}
resetGame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.style.backgroundColor="#FCA311"
    });
    enableGame();
});





