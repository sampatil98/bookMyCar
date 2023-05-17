
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close")
let mobile_head = document.getElementById("mobile-head")
let X = document.getElementById("X")
let cards = document.getElementById("cards")
let api = `https://crimson-clam-hose.cyclic.app/data`
let hours = JSON.parse(localStorage.getItem("hours"))
let from  = document.getElementById("from")
let form  = document.querySelector("form")
let locations = JSON.parse(localStorage.getItem("location"))
let host_button = document.getElementById("host-button")
let XX = document.getElementById("XX")
let XXX = document.getElementById("XXX")
let left = document.getElementById("left")
let nine = document.getElementById("nine")
let sort_by = document.getElementById("sort_by")
let banner = document.getElementById("banner")
let right = document.getElementById("right")
let store = left.innerHTML


// filters

let for_you = document.getElementById("for-you")
let Affordable = document.getElementById("Affordable")
let top_10 = document.getElementById("top-10")
let under_199 = document.getElementById("under-199")
let road_trip = document.getElementById("road-trip")
let super_host = document.getElementById("super-host")
let near_you = document.getElementById("near-you")
let popular = document.getElementById("popular")

// side filter
let relevance = document.getElementById("relevance")
let low_to_high = document.getElementById("low-to-high")
let high_to_low = document.getElementById("high-to-low")
let best_rated = document.getElementById("best-rated")
let distance = document.getElementById("distance")
let car_age = document.getElementById("car-age")
let kms_driven = document.getElementById("kms-driven")
let Popularity = document.getElementById("Popularity")
let Hatchback = document.getElementById("Hatchback")
let Sedan = document.getElementById("Sedan")
let suv = document.getElementById("suv")
let luxury  = document.getElementById("luxury")
let four_seats = document.getElementById("4-seats")
let five_seats = document.getElementById("5-seats")
let seven_seats = document.getElementById("7-seats")
let petrol = document.getElementById("petrol")
let diesal = document.getElementById("diesal")
let cng = document.getElementById("cng")
let electricty = document.getElementById("electricty")
let rating_3 = document.getElementById("rating-3")
let rating_4 = document.getElementById("rating-4")
let all = document.getElementById("all")
let search_form = document.getElementById("search-car")
let count = 0
let login_signup_button = document.querySelector(`#login-signup-button>span`);
let loginSign = document.querySelector(
  `#user-css>div:nth-child(1)>div:nth-child(2)>p`
);
let logout = document.querySelector(`#logout>span`);
// banner.addEventListener("click",()=>{
//   if (count%2===0){
//     left.style.width = "10%"
//     sort_by.innerHTML = null
//     nine.innerHTML = null
//     right.style.width = "85%"
//     cards.style.gridTemplateColumns = "repeat(3,1fr)"
//     XXX.style.visibility = "visible"
//     XX.style.visibility = "hidden"    
//     console.log("even")
    
//   }else{
//     console.log("odd")
//     XX.innerText = ">>"
//   left.style.width = "25%"
//   left.innerHTML = store
//   right.style.width = "75%"
//   cards.style.gridTemplateColumns = "repeat(2,1fr)"  
//   XXX.style.visibility = "hidden"
//   XX.style.visibility = "visible"  
//   }
//   count++

// })

XX.addEventListener("click",()=>{
  
  left.style.width = "10%"
  sort_by.innerHTML = null
  nine.innerHTML = null
  right.style.width = "85%"
  cards.style.gridTemplateColumns = "repeat(3,1fr)"
  XXX.style.visibility = "visible"
  XX.style.visibility = "hidden"
})

XXX.addEventListener("click",()=>{
  XX.innerText = ">>"
  left.style.width = "25%"
  left.innerHTML = store
  right.style.width = "65%"
  cards.style.gridTemplateColumns = "repeat(2,1fr)"  
  XXX.style.visibility = "hidden"
  XX.style.visibility = "visible"
})



host_button.addEventListener("click",()=>{
  location.href="Becomehost.html"
})

let index_page = document.getElementById("project-logo");
index_page.addEventListener("click",()=>{
  location.href="index.html"
})
from.placeholder = locations
let d = new Date()


ham_burger_botton.addEventListener("click",()=>{
    side_bar.style.cursor = "pointers"
    side_bar.style.visibility = "visible"
})
app_close.addEventListener("click",()=>{
    mobile_head.style.visibility = "hidden"
})

X.addEventListener("click",()=>{  
  side_bar.style.visibility = "hidden"
})


window.addEventListener("load", () => {
  fetch_data(api);
  login_signup_button.innerHTML = "";
  if (!localStorage.getItem("Name")) {
    login_signup_button.innerText = `Login/Signup`;
    loginSign.innerText = `Login or Signup`;
    logout.parentElement.style.display = `none`;
  } else {
    loginSign.innerText = `${localStorage.getItem("Name")}`;
    login_signup_button.innerHTML = `${localStorage.getItem("Name")}`;
    logout.parentElement.style.display = `flex`;
  }
});

login_signup_button.addEventListener("click", () => {
  if (login_signup_button.innerText === `Login/Signup`) {
    window.location.replace(`/Register.html`);
  }
});
loginSign.addEventListener("click", () => {
  if (loginSign.innerText === `Login or Signup`)
    window.location.replace(`/Register.html`);
});

logout.addEventListener("click", () => {
  localStorage.setItem("Name", "");
  window.location.replace(`/index.html`);
});

function fetch_data(params){
  

  fetch(params)
  .then((res)=> res.json())
  .then((data)=>{
    let arr = data
    search_form.addEventListener("submit",(e)=>{
      e.preventDefault()
      let input = search_form.search_box.value.toLowerCase()
      let filtered = arr.filter((el)=>{return el.name.toLowerCase().includes(input)})
      dom_data(filtered)
      
    })
        login_signup_button.addEventListener("click", () => {
          if (login_signup_button.innerText === `Login/Signup`) {
            window.location.replace(`/Register.html`);
          }
        });
        loginSign.addEventListener("click", () => {
          if (loginSign.innerText === `Login or Signup`)
            window.location.replace(`/Register.html`);
        });

        logout.addEventListener("click", () => {
          localStorage.setItem("Name", "");
          window.location.replace(`/index.html`);
        });

    popular.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.year > 2020})
      dom_data(filtered)
    })

    near_you.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.location === "mumbai"})
      dom_data(filtered)
    })
    super_host.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.name.includes("Mahindra")})
      dom_data(filtered)
    })
    road_trip.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.cartype === "suv"})
      dom_data(filtered)
    })
    under_199.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.price < 199})
      dom_data(filtered)
    })
    top_10.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.price > 300})
      dom_data(filtered)
    })
    Affordable.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.price < 160})
      dom_data(filtered)
    })
    for_you.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.name === "Renault Duster"})
      dom_data(filtered)
    })
    relevance.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.price < 160})
      dom_data(filtered)
    })

    low_to_high.addEventListener("click",()=>{
      let filtered = arr.sort((a,b)=>{return a.price - b.price})
      dom_data(filtered)
    })
    high_to_low.addEventListener("click",()=>{
      let filtered = arr.sort((a,b)=>{return b.price - a.price})
      dom_data(filtered)
    })
    best_rated.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.rating === "5"})
      dom_data(filtered)
    })

    distance.addEventListener("click",()=>{
      let filtered = arr.sort((a,b)=>{return a.distance - b.distance})
      dom_data(filtered)
    })

    car_age.addEventListener("click",()=>{
      let filtered = arr.sort((a,b)=>{return a.year - b.year})
      dom_data(filtered)
    })
    kms_driven.addEventListener("click",()=>{
      let filtered = arr.sort((a,b)=>{return a.distance - b.distance})
      dom_data(filtered)
    })
    Popularity.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.year > 2020})
      dom_data(filtered)
    })

    Hatchback.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.cartype === "hatchback"})
      dom_data(filtered)
    })
    Sedan.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.cartype === "sedan"})
      dom_data(filtered)
    })
    suv.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.cartype === "suv"})
      dom_data(filtered)
    })

    luxury.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.cartype === "luxury"})
      dom_data(filtered)
    })
    rating_3.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.rating >= 3})
      dom_data(filtered)
    })
    rating_4.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.rating >= 4})
      dom_data(filtered)
    })
    all.addEventListener("click",()=>{
      dom_data(data)
    })
    cng.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.fueltype === "cng"})
      dom_data(filtered)
    })
    petrol.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.fueltype === "petrol"})
      dom_data(filtered)
    })
    diesal.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.fueltype === "diseal"})
      dom_data(filtered)
    })
    electricty.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.fueltype === "electricity"})
      dom_data(filtered)
    })
    four_seats.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.seatcapacity === "4"})
      dom_data(filtered)
    })
    five_seats.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.seatcapacity === "5"})
      dom_data(filtered)
    })
    seven_seats.addEventListener("click",()=>{
      let filtered = arr.filter((el)=>{return el.seatcapacity === "7"})
      dom_data(filtered)
    })

    
    dom_data(data)
  })
}

function dom_data(params) {
  cards.innerHTML = ""
  params.forEach(element => {
    cards.innerHTML += `
                             <div id="card">
                                <div>
                                    <img src="${element.image}" alt="">
                                </div>
                                <div id="pad">
                                    <div id="bottom">
                                        <div>
                                            <img src="./images/icons8-star-filled-48.png" alt=""><span>${element.rating} (${Math.floor(Math.random() * 99)})</span>
                                        </div>
                                        <img id="carts" data-id="${element.id}" src="./images/cart.png" alt="">
                                    </div>
                                    <h1>${element.name} ${element.year}</h1>
                                    <p>Manual - ${element.fueltype} - ${element.seatcapacity} Seats</p>
                                    <div id="line"></div>
                                    <div>
                                       <div id="price">
                                            <div>
                                                <h2>Rs.${element.price}/hr</h2>
                                                <h3>Rs.${element.price+166}/hr</h3>
                                            </div>
                                            <div>
                                            <img src="./images/icons8-walking-50.png" alt=""><span>${element.distance} Km away</span>
                                            </div>
                                      </div>
                                    <span><u>Rs.${24*element.price} total</u></span>     
                                </div>
                                </div>

                            </div>
    `
    
  });
  
  let card = document.querySelectorAll("#carts");
  for (let i = 0 ; i < card.length;i++){
    
    card[i].addEventListener("click",(e)=>{
      let a=e.target.attributes["data-id"].value
       if (localStorage.getItem("Name")) {
         fetch(`${api}/${a}`)
           .then((res) => res.json())
           .then((data) => {
             localStorage.setItem("data", JSON.stringify(data));
             window.location.replace(`/cartPage.html`);
           });
       } else {
         window.location.replace(`/Register.html`);
       } 
     
      
    })

  }
  
}

