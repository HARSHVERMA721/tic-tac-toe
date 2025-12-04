let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#rst-btn");
let newGamebtn=document.querySelector("#new-game");
let messageContainer=document.querySelector(".msg-container");
let meSsage=document.querySelector("#msg");


let turnO= true;

let winningPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

const resetBoxes=()=>{
    turnO=true;
    enableBoxes();
}

boxes.forEach((box) => {
      box.addEventListener("click",()=>{
         console.log("button was clicked");
         if (turnO){
            box.innerText="O";
            turnO=false;
         }
         else { 
            box.innerText="X";
            turnO=true;
        };
         box.disabled=true;
         cheakWinner();
       });
     });

const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
     }     

const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
     }
const showWinner=(winner)=>{
   meSsage.innerText=`congratulations winner is ${winner}`;
   messageContainer.classList.remove("hide");
}


const cheakWinner=()=>{
        for(let pattern of winningPatterns){
            let pas1val=boxes[pattern[0]].innerText;
             let pas2val=boxes[pattern[1]].innerText;
              let pas3val=boxes[pattern[2]].innerText;

              if (pas1val !="" && pas2val !="" && pas3val !="") {
                 if (pas1val===pas2val && pas2val===pas3val){
                    console.log("winner",pas1val);
                    showWinner(pas1val);
                    disableBoxes();
                 }
                 else{
                    console.log("draw")
                 }
              } 
           }
     };


resetBtn.addEventListener("click",resetBoxes);
newGamebtn.addEventListener("click",resetBoxes);
