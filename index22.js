let login= document.getElementById("logi");
let loginp=document.getElementById("loginpage");
let fullpage=document.getElementById("fullpage");
let wrong=document.getElementById("wrong");
let signup=document.getElementById("signup");

login.onclick=function(){
   loginp.style.display="block";
   fullpage.style.opacity="0.04";
   loginp.style.position="relative";
   loginp.style.bottom="1500px";
}
wrong.onclick=function(){
    fullpage.style.opacity="1";
    loginp.style.display="none";
}
signup.onclick=function(){
}
let shop=document.getElementById("shop");
let cat=document.getElementById("cat");
let link=document.createElement("a1");
cat.onclick=function(){
   
    shop.innerHTML= "";
    shop.innerHTML="";
    shop.innerHTML="";
    shop.innerHTML="";
    shop.innerHTML="";
    shop.innerHTML="";


    let p=document.createElement("p");
    p.innerHTML= "Search By Category ♡";

    p.style.fontSize= "30px";
    p.style.color= "white";
    p.style.margin = "0";
    p.style.fontSize="35px" ;
    p.style.border="1px solid white";
    p.style.backgroundColor= "rgb(104, 204, 5)";

    shop.appendChild(p);
    
    let p1=document.createElement("p");
    let l1=document.createElement("a");
    l1.href="index51.html";
    l1.innerHTML="Leafy Vegetables";
    shop.appendChild(p1);
    p1.appendChild(l1);
    p1.style.border="1px white";
    l1.style.color="white";
    l1.style.fontSize="30px";
    
    let p2=document.createElement("p");
    let l2=document.createElement("a");
    l2.href="index52.html";
    l2.innerHTML="Root Vegetables";
    shop.appendChild(p2);
    p2.appendChild(l2);
    p2.style.border="1px white";
    l2.style.color="white";
    l2.style.fontSize="30px";
    
    let p3=document.createElement("p");
    let l3=document.createElement("a");
    l3.href="index53.html";
    l3.innerHTML="Seasonal Vegetables";
    shop.appendChild(p3);
    p3.appendChild(l3);
    p3.style.border="1px white";
    l3.style.color="white";
    l3.style.fontSize="30px";
    
    let p4=document.createElement("p");
    let l4=document.createElement("a");
    l4.href="index54.html";
    l4.innerHTML="Exotic Vegetables";
    shop.appendChild(p4);
    p4.appendChild(l4);
    p4.style.border="1px white";
    l4.style.color="white";
    l4.style.fontSize="30px";

    let p5=document.createElement("p");
    let l5=document.createElement("a");
    l5.href="index22.html";
    l5.innerHTML="Back";
    shop.appendChild(p5);
    p5.appendChild(l5);
    p5.style.border="1px white";
    l5.style.color="white";
    l5.style.fontSize="30px";
    
    shop.style.display= "grid";
    shop.style.justifyContent= "center";
    shop.style.alignContent = "center";
    shop.style.border="1px";
    shop.style.backgroundColor= "black" ;
    shop.style.height= "500px";
    shop.style.width= "400px";
    shop.style.borderRadius= "10px";
    shop.style.position="relative";
    shop.style.top="200px";
    
};
