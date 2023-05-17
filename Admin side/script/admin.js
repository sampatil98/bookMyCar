
// fetch data om window load...

let mainsection=document.getElementById("cont");
let total=document.getElementById("totalproducts");
let url="https://crimson-clam-hose.cyclic.app/data"
window.addEventListener("load",()=>{
    fetchdata(url);
});

function  fetchdata(url){
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        showdata(data);
    })
}

function showdata(data){
    mainsection.innerHTML=null;
    total.innerHTML=` ${data.length}`;
    
    data.forEach(element => {
        
        let maindiv=document.createElement("div");
        maindiv.setAttribute("class","maindiv");

        let ID=document.createElement("p");
        ID.setAttribute("class","productid")
        ID.innerHTML=`PRODUCT ID :- ${element.id}`;

        let card=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("class","productimage")
        image.src=element.image;

        let name=document.createElement("h2");
        name.setAttribute("class","name");
        name.innerHTML=`${element.name} ${element.year}`;

        let subdata=document.createElement("p");
        subdata.setAttribute("class","subdata");
        subdata.innerHTML=`${element.fueltype}. Seat capacity ${element.seatcapacity}`;

        let price=document.createElement("h3");
        price.innerHTML=`₹ ${element.price}/hr`;

        card.append(image,name,subdata,price);

        maindiv.append(ID,card);

        mainsection.append(maindiv);




    });
}