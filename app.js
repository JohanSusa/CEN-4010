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



const ageInput = document.getElementById("age");
const genderSelect = document.getElementById("gender");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculate-bmi");
const bmiResult = document.getElementById("bmi-result");

calculateBtn.addEventListener("click", () => {
    const age = parseInt(ageInput.value);
    const gender = genderSelect.value;
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; 

    if (isValidInput(age, weight, height)) {
        const bmi = weight / (height * height);
        const category = getBMICategory(bmi, age, gender);
        bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)} - ${category}`;
    } else {
        bmiResult.textContent = "Please enter valid age, weight, and height.";
    }
});

function isValidInput(age, weight, height) {
    return !isNaN(age) && age > 0 && !isNaN(weight) && weight > 0 && !isNaN(height) && height > 0;
}

function getBMICategory(bmi, age, gender) {
    if (age < 18) {
        
    } else {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal";
        if (bmi < 30) return "Overweight";
        return "Obese";
    }
}



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
}
function addTo2(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Bench Press');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo3(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Incline Chest Press');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo4(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Shoulder Press');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo5(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Lateral Raises');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo6(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Rear Delts');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo7(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Lat Pulldowns');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo8(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Cable Rows');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo9(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Machine Rows');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo10(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Skull Crusher');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo11(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Seated Dip Machine');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo12(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Tricep Pushdown');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo13(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Hammer Curls');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo14(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Preacher Curls');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo15(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Bicep Curls');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo16(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Leg Extensions');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo17(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Leg Curls');
    li.appendChild(text);
    ul.appendChild(li);
}
function addTo18(){
    var ul = document.getElementById('workoutList');
    var li = document.createElement('li');
    var text = document.createTextNode('Squats');
    li.appendChild(text);
    ul.appendChild(li);
}