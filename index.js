const btn = document.getElementById("btn");
const div = document.querySelector(".harsh");
const text = document.querySelector(".text");
const btny = document.getElementById("btny");
const lovebtn = document.getElementById("lovebtn");
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const a=document.querySelector(".a");
const b=document.querySelector(".b");
const c=document.querySelector(".c");
const intro=document.querySelector(".intro");




btn.addEventListener("mouseover",(e)=>{
    if(div.getAttribute("id") == "a"){div.setAttribute("id","b")}
    else if(div.getAttribute("id") == "b"){
        div.setAttribute("id","a")
    }
})

btny.addEventListener("click",(e)=>{

    text.style.display = "block";
    // if(text.style.display === "none"){
    // text.style.display = "block";}
    // else {
    //     text.style.display = "none";
    // }
})

lovebtn.addEventListener("click",(e)=>{
    // text.style.display = "block";
    img1.style.display = "block";
})
lovebtn.addEventListener("click",(e)=>{
    // text.style.display = "block";
    img2.style.display = "block";
})
lovebtn.addEventListener("click",(e)=>{
    // text.style.display = "block";
    img3.style.display = "block";
})
btny.addEventListener("click",(e)=>{
    // text.style.display = "block";
    lovebtn.style.display = "block";
})
lovebtn.addEventListener("click",(e)=>{
    // text.style.display = "block";
  a.style.display = "block";
})
lovebtn.addEventListener("click",(e)=>{
    // text.style.display = "block";
b.style.display = "block";
})
lovebtn.addEventListener("click",(e)=>{
    // text.style.display = "block";
    c.style.display = "block";
})

// lovebtn.addEventListener("click",(e)=>{
//     // text.style.display = "block";
//   .style.display = "block";
// })

