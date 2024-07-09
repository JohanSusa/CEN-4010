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
