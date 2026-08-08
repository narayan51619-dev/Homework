const positive=document.getElementById("like");
const negative=document.getElementById("dislike");
let counter=0;
let counter3=0;
let counter1=document.getElementById("count1");
let counter2=document.getElementById("count2");
positive.onclick=function(){
    counter++;
  counter1.textContent=counter;
  like.style.backgroundColor="green";
}

negative.onclick=function(){
  
  counter3++;
    counter2.textContent=counter3;
  dislike.style.backgroundColor="red";
  
}
let totalr=document.getElementById("total");
let tot=document.getElementById("tr");
let count=0;

let win=document.getElementById("p");
tot.onclick=function(){
  count=counter+counter3;
totalr.textContent=count;
  if(counter>counter3){
    p.innerHTML="Likes are winning"
  }
  else if(counter==counter3){
    p.innerHTML="Tie"
  }
  else{
    p.innerHTML="Dislikes are winning"
  }
}
// let liked=false;
// let likes=document.getElementById("like");
// if(liked === false){
//     likes++;
//     liked = true;
// }
// else{
//     likes--;
//     liked = false;
// }
