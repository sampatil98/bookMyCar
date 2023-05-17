let form=document.getElementById("form");
let container=document.getElementById("data_container");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
   
    let obj={
        
      "image": form.image.value,
      "rating": form.rating.value,
      "name": form.name.value,
      "fueltype": form.fuel.value,
      "seatcapacity":form.capacity.value,
      "year": form.year.value,
      "cartype": form.cartype.value,
      "price":form.price.value,
      "distance": form.distance.value,
      "location":form.location.value,
    }
    addtodatabase(obj);
})

function addtodatabase(obj){
    let url="http://localhost:3000/data";
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        alert("Data Added Successfully");
    });
}
