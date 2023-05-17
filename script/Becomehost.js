

        // ----------------------------logo redirection-------------
        let index_page = document.getElementById("project-logo");
        index_page.addEventListener("click", () => {
          location.href = "index.html"
        })
        



        let Policies = document.getElementById("Policies")
        Policies.addEventListener("click", function () {
        location.href = "policy.html"
        })
        



        // let body = document.querySelector("body")

        let Refer = document.getElementById("refer")
        Refer.addEventListener("click", function () {
          let refer = document.getElementById("refer")
          refer.style.display = "block";

          // body.innerHTML=Refer.style.visibility="visible"
        })




        
        let button = document.getElementById("button")
        button.addEventListener("click", function () {
          refer.style.display = "none"
        })
        let option = document.querySelector(".padright")
        option.addEventListener("change", function () {
          let demo = document.getElementById("demo")
          demo.innerHTML = Math.floor(Math.random() * 9054)
        })





        // ---------------------------
        let ham_burger_botton = document.getElementById("ham-burger-icon");
        let side_bar = document.getElementById("side-bar");
        let app_close = document.getElementById("close")
        let mobile_head = document.getElementById("mobile-head")
        let X = document.getElementById("X")

        ham_burger_botton.addEventListener("click", () => {
          side_bar.style.cursor = "pointers"
          side_bar.style.visibility = "visible"
        })
        app_close.addEventListener("click", () => {
          mobile_head.style.visibility = "hidden"
        })

        X.addEventListener("click", () => {
          side_bar.style.visibility = "hidden"
        })



        // -------------------------------

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

        // -----------------------------------------
        let klick = document.getElementById("FAQ")
        klick.addEventListener("click", function () {
          location.href = faq.html;
        })


        // _________________sliderpart______________________

        let arr = [
          "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner2.jpg",
          "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner4.jpg",
          "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner-1.png",
          "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner3.jpg"

        ]

        let images = document.getElementById("sliding");
        let count = 0;
        setInterval(function () {
          images.innerHTML = `<img src="${arr[count]}" alt=""></img>`
          count++
          if (count == 3) {
            count = 0
          }
        }, 2000)

        let form = getElementById("vishal")
        form.addEventListener()


