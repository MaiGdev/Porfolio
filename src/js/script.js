function copyFunction() {
  var copyText = document.getElementById("myInput");
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("copyTooltip");
  tooltip.innerHTML = "Copiado";
}

function copyToolTipFunc() {
  var tooltip = document.getElementById("copyTooltip");
  tooltip.innerHTML = "Copiar";
}
function sendToolTipFunc() {
  var tool = document.getElementById("sendTooltip");
  tool.innerHTML = "Enviar";
}

document.addEventListener("DOMContentLoaded", function () {
  // Verifica si la resolución de la pantalla es de escritorio
  var isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  // Si es de escritorio, aplica el código para el nav
  if (isDesktop) {
    var scrollNav = document.getElementById("scrollNav");

    window.addEventListener("scroll", function () {
      // Verifica si el scroll es mayor a 200px (ajusta según tus necesidades)
      if (window.scrollY > 200) {
        scrollNav.style.transform = "translateY(0)";
      } else {
        scrollNav.style.transform = "translateY(-400%)";
        scrollNav.classList.add = "hidden";
      }
    });
  }
});

/* Dark - Light mode */

//icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const blackFillProfileImage = document.querySelector(".blackFillProfileImage");
const whiteFillProfileImage = document.querySelector(".whiteFillProfileImage");
//theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-schema: dark)").matches;

//icon toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");

  whiteFillProfileImage.classList.toggle("display-none");
  blackFillProfileImage.classList.toggle("display-none");
};

// Initial Theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");

    moonIcon.classList.add("display-none");
    blackFillProfileImage.classList.add("display-none");

    return;
  }
  sunIcon.classList.add("display-none");
  whiteFillProfileImage.classList.add("display-none");
};

// Manual Theme Switch

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    console.log("Changing to Light Theme");
    // Cambiar a tema claro
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    /*     blackFillProfileImage.classList.remove("block");
    blackFillProfileImage.classList.add("hidden"); */
    return;
  }
  console.log("Changing to Dark Theme");
  // Cambiar a tema oscuro
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();

  /*   whiteFillProfileImage.classList.add("block");
  whiteFillProfileImage.classList.remove("hidden"); */
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

// invoke theme check on initial load
themeCheck();
