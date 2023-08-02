const buttonDm = document.querySelector(".darkMode");
const colorBlack = document.body;

buttonDm.addEventListener("click", function(){
  colorBlack.classList.toggle("dark_mode");

  let theme;
  
  if (colorBlack.classList.contains("dark_mode")){

    theme = "Dark";
    buttonDm.textContent = "Light mode";

  } else{

    theme = "Light";
    buttonDm.textContent = "Dark mode";

  }

  localStorage.setItem("PageTheme", theme);


})

let getTheme = localStorage.getItem("PageTheme");

if (getTheme === "Dark") {
  document.body.classList = "dark_mode";
  buttonDm.textContent = "Light mode";
}