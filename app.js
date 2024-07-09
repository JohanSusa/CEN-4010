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