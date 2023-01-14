var filter_btns = document.querySelectorAll(".filter-btn");

window.addEventListener("load", (event) => {
  console.log(document.getElementById("all"))
  document.getElementById("all").click();
});


var loader = document.getElementById("preloader")
window.addEventListener("load",function(){
  setTimeout(stoploaderfun, 2000)
})

function stoploaderfun() {
  $(loader).fadeOut(1500);
}

// Slideranime
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  
  pagination: {
    el: ".swiper-pagination",
   
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filtervalue = btn.dataset.filter;
    $(".grid").isotope({
      filter: filtervalue,
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
      transitionDuration: "0.6s",
    });
  })
);
// Form Handling
async function handleFormSubmit(event) {
  
  // Fields
  let name_field = document.getElementById("inputName");
  let phone_field = document.getElementById("inputPhone");
  let email_field = document.getElementById("inputEmail");
  let message_field = document.getElementById("validationTextarea");
  let category_field = document.getElementById("inputCategory");


  let condition = true;
  
  // Values
  let name = name_field.value;
  let phone = phone_field.value;
  let email = email_field.value;
  let message = message_field.value;
  let category = category_field.value;
  
  
  if(phone.length != 10){
    condition = false;
  }
  
  if(condition === false){
    alert("Invalid Mobile Number")
  }
  else{

    const post_data = { 
        name: name,
        email: email,
        message: message,
        phone: phone,
        category: category,
      }
      console.log(post_data);
    
    // Sending 
    console.log('Submitting');
    const response = await fetch("https://og-backend.onrender.com/sendmail/", {
    method: "POST",
    body: JSON.stringify(post_data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    const data = await response.json();
    
    if(data.status){
      alert("Submitted");
      name_field.innerText = ""; name_field.innerHTML = "";
      email_field.innerText = ""; email_field.innerHTML = "";
      phone_field.innerText = ""; phone_field.innerHTML = "";
      message_field.innerText = ""; message_field.innerHTML = "";
    }

  }

  return condition;
}