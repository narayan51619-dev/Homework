const increase=document.getElementById("plus");
const decrease=document.getElementById("minus");
const reset=document.getElementById("reset");
const counter=document.getElementById("count");
let counte=0;
increase.onclick=function(){
    counte+=5;
    counter.textContent=counte;
}
decrease.onclick=function(){
    counte-=5;
    counter.textContent=counte;
}
reset.onclick=function(){
    counte=0;
    counter.textContent=counte;
}