// menu toggle
let iconMenu = document.querySelector("header .menu")
let menu =  document.querySelector("header ul")

iconMenu.addEventListener("click",(eo) => {
    iconMenu.classList.toggle("active")
    menu.classList.toggle("active")
})

// dark mode switch
let toggleSwitch =  document.querySelector("header ul li i")
let body =  document.querySelector("body");




toggleSwitch.addEventListener("click", (eo) => {
if(body.classList.contains("dark")){
    mode("light");
    localStorage.setItem("theme", "light");
}else{
    mode("dark");
    localStorage.setItem("theme", "dark");
}
});





if (document.body.classList.contains("dark")) {
  mode(localStorage.getItem("theme", "dark"));
} else {
  mode(localStorage.getItem("theme", "light"));
}
onload = (eo) => {
  mode(localStorage.getItem("theme"));
};

// dark mode function
function mode(ld) {
  if (ld === "dark") {
    body.classList.add("dark");
  } else if (ld === "light") {
    body.classList.remove("dark");
  }
}



// menu dott
let menuItem = document.querySelectorAll("header ul li a")

menuItem.forEach(ele => {
  ele.addEventListener("click",(eo) => {
    menuItem.forEach( ele => {
      ele.classList.remove("home")
    })
    ele.classList.add("home")
  })
});