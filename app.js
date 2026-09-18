let boxes=document.querySelectorAll(".box");
let resBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-btn");
let hide=document.querySelector(".hide");

let turn0=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    hide.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        chkWinner();
    })
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    hide.classList.remove("hide");
    disableBoxes();
};

const chkWinner=()=>{
    for (let pattern of winPattern){
        
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;
        
        if(val1!="" && val2!="" && val3!=""){
            if(val1 == val2 && val2 == val3){
                
                showWinner(val1);
            }
        }
    }

};

newGameBtn.addEventListener("click",resetGame);
resBtn.addEventListener("click",resetGame);

