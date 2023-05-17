
let form=document.getElementById("form");
// let password=document.getElementById("password");


 let err=document.getElementById("showerr");

let url="https://crimson-clam-hose.cyclic.app/login"
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        username : username.value,
        password : password.value
    }

   if(obj.username=="admin" && obj.password=="admin"){
    window.location="http://127.0.0.1:5500/admin.html";
   }else{
    let p=document.createElement("h5");
    p.setAttribute("class","errmsg");
    p.innerText= "Wrong Credintials";
    err.append(p);
    form.username.value=null;
    form.password.value=null;

    form.onclick= function () {erase()};
    function erase(){
        err.innerHTML=null;
    }
    
   }
     
});






