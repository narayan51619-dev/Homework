// console.log("Hello");
// window.alert("This is an alert!");
// //this is a comment
// /* this ia a comment*/
// document.getElementById("myH1").textContent='Hello';
// document.getElementById("myP").textContent="I like pizza";
// // let age= 25;
// // console.log( ` Your age is ${age}`);
// // let email= "Bro@123.com";
// // console.log(`${email}`);
// let name= "Gayathri";
// let age= 20;
// let cla="3rd BCA";
// // document.getElementById("p1").textContent=name;
// // document.getElementById("p2").textContent=age;
// // document.getElementById("p3").textContent=cla;
// document.getElementById("p1").textContent=`Your name is ${name}`;
// document.getElementById("p2").textContent=` Your age is ${age}`;
// document.getElementById("p3").textContent=` your class is ${cla}`;
// let students=32+3-(67*5);
// students=students+3;
// console.log(students)
// let username;
// username=window.prompt("What is your name?");
// console.log(username);

// document.getElementById("my").onclick=function(){
//     username=document.getElementById("in").value;
//     console.log(username);
//     document.getElementById("myH1").textContent=`hello ${username}`;

// }
// let aged= window.prompt("How old are you");
// aged=Number
// (aged);
// console.log(aged);
// console.log(typeof(aged));
// const pi=3.14;
// let radius;
// let circumferance;

// radius= window.prompt("Eneter the radius and a circle");
// radius=Number(radius);
// circumferance=2*pi*radius;
// console.log(circumferance);
// document.getElementById("but").onclick=function(){
//     radius=document.getElementById("myin").value;
//   radius=Number(radius);
// circumferance=2*pi*radius;
// document.getElementById("mh3").textContent=circumferance;
    
// }

const decrese=document.getElementById("decre");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");
const countlabel=document.getElementById("counter");
let count=0;
increase.onclick=function(){
    count++;
   
    countlabel.textContent=count;
}
decrese.onclick=function(){
    count--;
    countlabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
