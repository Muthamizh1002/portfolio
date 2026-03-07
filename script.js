
const text="Hello, I'm Muthamizh";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,70);
}
}
typing();

document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("dark");
};

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

menuToggle.onclick=()=>{
navLinks.classList.toggle("show");
};

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){
el.classList.add("active");
}

});

const scrollTop=document.documentElement.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

document.getElementById("progress").style.width=(scrollTop/height)*100+"%";

});
