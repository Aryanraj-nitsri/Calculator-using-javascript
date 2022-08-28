const nodeList=document.getElementsByClassName("unit");
const display=document.getElementById("screen");
let oprand1=null;
let oprand2=null;
let op=null;
let op2=null;
let count=0;
for(let i=0; i<nodeList.length ;i++){
  nodeList[i].addEventListener("click",function(e){
    let value=e.target.innerText;
    if(value==="+" || value==="-" || value==="*"|| value==="/" ){
      
        op?op2=value:op=value;
oprand1 && !oprand1===display.innerText?oprand2=display.innerText:oprand1=display.innerText;
        
        display.innerText="";
        if(op && op2){
oprand1=eval(parseInt(oprand1) + op  + parseInt(oprand2))
      op=op2;
      op2=null;
        }
        
    }
    else if(value==="="){
      oprand2? display.innerText=`${oprand1}`:oprand2=display.innerText;
     oprand1=eval(parseInt(oprand1)+op+parseInt(oprand2));
     op=null;
     oprand2=null;
     display.innerText=`${oprand1}`
        
    }
    else if(value==="+/-"){
   if(parseInt(display.innerText)>0){
    display.innerText="-"+display.innerText;
   }
   else{
    display.innerText="+"+display.innerText;
   }
    }
    else if(value==="AC"){
display.innerText="";
oprand1=null;
oprand2=null;
op=null;
    }
    else{
        display.innerText+=e.target.innerText;

        
    }
  })
}
