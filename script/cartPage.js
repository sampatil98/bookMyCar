let login_signup_button = document.querySelector(`#login-signup-button>span`);
let loginSign = document.querySelector(
  `#user-css>div:nth-child(1)>div:nth-child(2)>p`
);
let logout = document.querySelector(`#logout>span`);
let ham_burger_botton = document.getElementById("ham-burger-icon");
let side_bar = document.getElementById("side-bar");
let app_close = document.getElementById("close");
let mobile_head = document.getElementById("mobile-head");
let X = document.getElementById("X");
let carImage = document.querySelector(`#box-1>img`);
let carName = document.querySelector(`#Car-info-text>div>h1`);
let spanInfo = document.querySelectorAll(`#Car-info-text>div>p>span`);
let csInfo = document.querySelectorAll(
  `#Car-info-text>div:nth-child(2)>div:nth-child(2)>p`
);
let button = document.querySelector(`#button`);
let priceValue = document.querySelector(`#right-box>div:nth-child(4)>div>h2`);
{
}

let carOwner = [
  { name: "Vishal", zoomHost: `Apr 2021` },
  { name: `Akhtar`, zoomHost: `Mar 2022` },
  { name: "Aman", zoomHost: "Jan 2022" },
];

// window.addEventListener("load", () => {
//   login_signup_button.innerHTML = "";
//   if (!localStorage.getItem("Name")) {
//     login_signup_button.innerText = `Login/Signup`;
//     loginSign.innerText = `Login or Signup`;
//     logout.parentElement.style.display = `none`;
//   } else {
//     loginSign.innerText = `${localStorage.getItem("Name")}`;
//     login_signup_button.innerHTML = `${localStorage.getItem("Name")}`;
//     logout.parentElement.style.display = `flex`;
//   }
// });

// ham_burger_botton.addEventListener("click", () => {
//   side_bar.style.cursor = "pointers";
//   side_bar.style.visibility = "visible";
// });
// app_close.addEventListener("click", () => {
//   mobile_head.style.visibility = "hidden";
// });

// X.addEventListener("click", () => {
//   side_bar.style.visibility = "hidden";
// });

// login_signup_button.addEventListener("click", () => {
//   if (login_signup_button.innerText === `Login/Signup`) {
//     window.location.replace(`/Register.html`);
//   }
// });
// loginSign.addEventListener("click", () => {
//   if (loginSign.innerText === `Login or Signup`)
//     window.location.replace(`/Register.html`);
// });

// logout.addEventListener("click", () => {
//   localStorage.setItem("Name", "");
//   window.location.replace(`/index.html`);
// });

function addData() {
  let carInfo = JSON.parse(localStorage.getItem(`data`));

  let owner = Math.floor(Math.random() * carOwner.length);

  carName.innerText = `${carInfo.name} ${carInfo.year}`;
  carImage.setAttribute(`src`, carInfo.image);

  spanInfo[0].innerText = `* ${carInfo.name
    .charAt(0)
    .toUpperCase()}${carInfo.name.substring(1).toLowerCase()}`;
  spanInfo[2].innerText = `* ${carInfo.fueltype
    .charAt(0)
    .toUpperCase()}${carInfo.fueltype.substring(1).toLowerCase()}`;
  spanInfo[3].innerText = `* ${carInfo.seatcapacity} Seats`;

  csName(carOwner[owner]);
  datePick();
  calculateTotalPrice(+carInfo.price);
}
function csName(data) {
  csInfo[0].innerText = `${data.name}`;
  csInfo[1].innerText = `ZoomHost Since ${data.zoomHost}`;
}

function datePick() {
  let timeStart = document.querySelector(`.time-start>p:nth-child(1)`);

  let timeBegin = localStorage.getItem(`start_date`).split("T");

  let timeEnd = localStorage.getItem(`end_date`).split("T");
  let endTime = document.querySelector(`.time-end>p:nth-child(1)`);
  timeStart.innerText = `${timeBegin[0]} ${timeBegin[1]}`;
  endTime.innerText = `${timeEnd[0]} ${timeEnd[1]}`;
}

function calculateTotalPrice(hourPrice) {
  addTotal(hourPrice, 359);
  let inputChecked = document.querySelectorAll(`input[type='radio']`);
  for (input of inputChecked) {
    input.addEventListener("click", (e) => {
     console.log()
      addTotal(hourPrice, e.target.value);
    });
  }
}
let project_logo = document.getElementById("project-logo")
project_logo.addEventListener("click",()=>{
  location.href = "index.html"
})

function addTotal(hour, extra) {

  priceValue.innerText = `₹ ${
    hour * Number(localStorage.getItem(`hours`)) + Number(extra) + 99
  }`;
  button.innerText = priceValue.innerText;
  localStorage.setItem(`totalPrice`,`${
    hour * Number(localStorage.getItem(`hours`)) + Number(extra) + 99
  }`)
}
button.addEventListener("click", () => {
  window.location.replace(`/payment.html`)
});
addData();
