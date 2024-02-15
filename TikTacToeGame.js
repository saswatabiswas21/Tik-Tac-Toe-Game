let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn"); 
let newGameButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
//let msg=document.querySelector("#msg");

let turn0=true;//Which player turn 0/x?

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("This box was clicked");
        if(turn0){
            //trun 0
            box.innerText="0";
            turn0=false;
        }else{
            //turn X
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWin();
    })
});

const checkWin=()=>{
    for(let i of winPatterns){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("Winner");
                showWinner(pos1);
            }
        }
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congartulation!! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const disableBox=()=>{
    for(let f of boxes){
        f.disabled=true;
    }
};

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
};
const enableBox=()=>{
    for(let f of boxes){
        f.disabled=false;
        f.innerText="";
    }
};
newGameButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

