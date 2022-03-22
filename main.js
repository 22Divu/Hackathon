const show=(id)=>{
    document.getElementById(id).style.display='block';
}
const hide=(id)=>{
    document.getElementById(id).style.display='none';
    console.log("this");
}
document.body.addEventListener('click', ()=>{
    document.getElementById("profile").style.display='none';
},true);
document.getElementById("showProfile").addEventListener('click', ()=>{
    document.getElementById("profile").style.display='block';
},false);