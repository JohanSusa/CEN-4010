const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const menuLinks2 = document.querySelector('.navbar')

const nav = document.querySelector('.navbar')
let lastScrollY = window.scrollY;

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



let infoButton = document.querySelector("#box1");
function showHide(){
    infoButton.classList.toggle("hide");
}
let infoButton1 = document.querySelector("#box2");
function showHide1(){
    infoButton1.classList.toggle("hide");
}
let infoButton2 = document.querySelector("#box3");
function showHide2(){
    infoButton2.classList.toggle("hide");
}
let infoButton4 = document.querySelector("#box4");
function showHide4(){
    infoButton4.classList.toggle("hide");
}
let infoButton5 = document.querySelector("#box5");
function showHide5(){
    infoButton5.classList.toggle("hide");
}
let infoButton6 = document.querySelector("#box6");
function showHide6(){
    infoButton6.classList.toggle("hide");
}
let infoButton7 = document.querySelector("#box7");
function showHide7(){
    infoButton7.classList.toggle("hide");
}
let infoButton8 = document.querySelector("#box8");
function showHide8(){
    infoButton8.classList.toggle("hide");
}
let infoButton9 = document.querySelector("#box9");
function showHide9(){
    infoButton9.classList.toggle("hide");
}
let infoButton10 = document.querySelector("#box10");
function showHide10(){
    infoButton10.classList.toggle("hide");
}
let infoButton11 = document.querySelector("#box11");
function showHide11(){
    infoButton11.classList.toggle("hide");
}
let infoButton12 = document.querySelector("#box12");
function showHide12(){
    infoButton12.classList.toggle("hide");
}
let infoButton13 = document.querySelector("#box13");
function showHide13(){
    infoButton13.classList.toggle("hide");
}
let infoButton14 = document.querySelector("#box14");
function showHide14(){
    infoButton14.classList.toggle("hide");
}
let infoButton15 = document.querySelector("#box15");
function showHide15(){
    infoButton15.classList.toggle("hide");
}
let infoButton16 = document.querySelector("#box16");
function showHide16(){
    infoButton16.classList.toggle("hide");
}
let infoButton17 = document.querySelector("#box17");
function showHide17(){
    infoButton17.classList.toggle("hide");
}
let infoButton18 = document.querySelector("#box18");
function showHide18(){
    infoButton18.classList.toggle("hide");
}

function addTo(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Chest Flys');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo2(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Bench Press');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo3(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Incline Chest Press');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo4(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Shoulder Press');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo5(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Lateral Raises');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo6(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Rear Delts');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo7(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Lat Pulldowns');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo8(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Cable Rows');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo9(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Machine Rows');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo10(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Skull Crusher');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo11(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Seated Dip Machine');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo12(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Tricep Pushdown');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo13(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Hammer Curls');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo14(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Preacher Curls');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo15(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Bicep Curls');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo16(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Leg Extensions');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo17(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Leg Curls');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
function addTo18(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Squats');
    li.appendChild(text);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
const workoutConatiner = document.getElementById("workoutList");
workoutConatiner.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", workoutConatiner.innerHTML);
}
function showList(){
    workoutConatiner.innerHTML = localStorage.getItem("data");
}
showList();


function generateSessionToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 32;
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
}

function store_data(event) {
    event.preventDefault(); 

    var arr = JSON.parse(localStorage.getItem("credentials")) || [];

    let user_name = document.getElementById("username").value;
    let user_paswrd = document.getElementById("password").value;
    let first_name = document.getElementById("firstName").value;
    let last_name = document.getElementById("lastName").value;

    arr.push({
        firstName: first_name,
        lastName: last_name,
        username: user_name,
        password: user_paswrd,
        sessionToken: generateSessionToken()
    });

    localStorage.setItem("credentials", JSON.stringify(arr));

    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function solve(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
    const user = credentials.find(user => user.username === username && user.password === password);

    let errorMessage = document.getElementById("error-message");

    if (user) {
        const sessionToken = generateSessionToken();
        user.sessionToken = sessionToken;
        localStorage.setItem("credentials", JSON.stringify(credentials));
        localStorage.setItem('sessionToken', sessionToken);
        window.location.href = "index.html"; 
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.display = 'block';
    }
}

function togglePassword() {
    let passwordField = document.getElementById("password");
    let toggleButton = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show";
    }
}


function recoverPassword(event) {
    event.preventDefault(); 

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;

    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
    const user = credentials.find(user => user.username === username && user.firstName === firstName && user.lastName === lastName);

    var modal = document.getElementById("myModal");
    var recoveryMessage = document.getElementById("recoveryMessage");

    if (user) {
        recoveryMessage.textContent = `Your password is: ${user.password}`;
    } else {
        recoveryMessage.textContent = "User not found or details do not match.";
    }
    
    modal.style.display = "block";
}

function displayProfileInfo() {
    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
    let sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
        let user = credentials.find(user => user.sessionToken === sessionToken);
        if (user) {
            document.getElementById("profile-firstName").textContent = user.firstName;
            document.getElementById("profile-lastName").textContent = user.lastName;
            document.getElementById("profile-username").textContent = user.username;
        } else {
            // If the user is not found, redirect to sign-in page
            window.location.href = "signIn.html";
        }
    } else {
        // If no session token, redirect to sign-in page
        window.location.href = "signIn.html";
    }
}

function signOut() {
    localStorage.removeItem("sessionToken");
    window.location.href = "signIn.html";
}


