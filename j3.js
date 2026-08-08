const increase=document.getElementById("positive");
const decrease=document.getElementById("negative");
const reset=document.getElementById("zero");
const counter=document.getElementById("count");
let counte=0;
increase.onclick=function(){
    counte++;
    counter.textContent=counte;
    if(counte>0)
    {
        color.style.backgroundColor="green";
    }
}
decrease.onclick=function(){
    counte--;
    counter.textContent=counte;
    if(counte<0)
    {
        color.style.backgroundColor="red";
    }
    else if(counte==0){
        color.style.backgroundColor="black";
    }
}
reset.onclick=function(){
    counte=0;
    counter.textContent=counte;
    color.style.backgroundColor="black";
    
}
 
