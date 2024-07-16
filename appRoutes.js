const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const menuLinks2 = document.querySelector('.navbar')

const nav = document.querySelector('.navbar')
let lastScrollY = window.scrollY;

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menuLinks2.classList.toggle('active');
});

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY){
        nav.classList.add("navHidden");
    } else {
        nav.classList.remove("navHidden")
    }
    lastScrollY = window.scrollY;
});


//GOOGLE API        https://developers.google.com/maps/documentation/javascript/overview#javascript
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 25.75798389937088, lng: -80.37469065220539 },
    zoom: 18,
  });
}
initMap();

document.addEventListener('DOMContentLoaded', (event) => {
  let signInLink = document.getElementById("signInLink").querySelector("a");
  if (localStorage.getItem("sessionToken")) {
      signInLink.textContent = "Profile";
      signInLink.href = "profile.html";
  } else {
      signInLink.textContent = "Sign In";
      signInLink.href = "signIn.html";
  }

  // Profile page specific logic
  if (window.location.pathname.endsWith('profile.html')) {
      displayProfileInfo();
  }
});