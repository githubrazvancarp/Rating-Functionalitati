// Intotdeauna cand vrei sa dai click pe un buton si 
// sa se intample ceva trebuie sa:
// 1) sa iti selectezi butonul intr-o constanta
// 2) adaugam un event listener de tip click
// 3) creeaza functia care sa se execute pe click

// ----- Butoane rating -----
const buttonRatingOne = document.querySelector('.button-rating-one');
const buttonRatingTwo = document.querySelector('.button-rating-two');
const buttonRatingThree = document.querySelector('.button-rating-three');
const buttonRatingFour = document.querySelector('.button-rating-four');
const buttonRatingFive = document.querySelector('.button-rating-five');

let selectedRating = 0;

const selectRatingOne = () => {
    selectedRating = 1;

    buttonRatingOne.style.backgroundColor = "red";
    buttonRatingOne.style.color = "white";

    buttonRatingTwo.style.backgroundColor = "lightgray";
    buttonRatingTwo.style.color = "black";

    buttonRatingThree.style.backgroundColor = "lightgray";
    buttonRatingThree.style.color = "black";

    buttonRatingFour.style.backgroundColor = "lightgray";
    buttonRatingFour.style.color = "black";

    buttonRatingFive.style.backgroundColor = "lightgray";
    buttonRatingFive.style.color = "black";
};

buttonRatingOne.addEventListener('click', selectRatingOne);

const selectRatingTwo = () => {
    selectedRating = 2;

    buttonRatingTwo.style.backgroundColor = "red";
    buttonRatingTwo.style.color = "white";

    buttonRatingOne.style.backgroundColor = "lightgray";
    buttonRatingOne.style.color = "black";

    buttonRatingThree.style.backgroundColor = "lightgray";
    buttonRatingThree.style.color = "black";

    buttonRatingFour.style.backgroundColor = "lightgray";
    buttonRatingFour.style.color = "black";

    buttonRatingFive.style.backgroundColor = "lightgray";
    buttonRatingFive.style.color = "black";
};

buttonRatingTwo.addEventListener('click', selectRatingTwo);

const selectRatingThree = () => {
    selectedRating = 3;

    buttonRatingThree.style.backgroundColor = "red";
    buttonRatingThree.style.color = "white";

    buttonRatingOne.style.backgroundColor = "lightgray";
    buttonRatingOne.style.color = "black";

    buttonRatingTwo.style.backgroundColor = "lightgray";
    buttonRatingTwo.style.color = "black";

    buttonRatingFour.style.backgroundColor = "lightgray";
    buttonRatingFour.style.color = "black";

    buttonRatingFive.style.backgroundColor = "lightgray";
    buttonRatingFive.style.color = "black";
};

buttonRatingThree.addEventListener('click', selectRatingThree);

const selectRatingFour = () => {
    selectedRating = 4;

    buttonRatingFour.style.backgroundColor = "red";
    buttonRatingFour.style.color = "white";

    buttonRatingOne.style.backgroundColor = "lightgray";
    buttonRatingOne.style.color = "black";

    buttonRatingThree.style.backgroundColor = "lightgray";
    buttonRatingThree.style.color = "black";

    buttonRatingTwo.style.backgroundColor = "lightgray";
    buttonRatingTwo.style.color = "black";

    buttonRatingFive.style.backgroundColor = "lightgray";
    buttonRatingFive.style.color = "black";
};

buttonRatingFour.addEventListener('click', selectRatingFour);

const selectRatingFive = () => {
    selectedRating = 5;

    buttonRatingFive.style.backgroundColor = "red";
    buttonRatingFive.style.color = "white";

    buttonRatingOne.style.backgroundColor = "lightgray";
    buttonRatingOne.style.color = "black";

    buttonRatingThree.style.backgroundColor = "lightgray";
    buttonRatingThree.style.color = "black";

    buttonRatingTwo.style.backgroundColor = "lightgray";
    buttonRatingTwo.style.color = "black";

    buttonRatingFour.style.backgroundColor = "lightgray";
    buttonRatingFour.style.color = "black";
};

buttonRatingFive.addEventListener('click', selectRatingFive);

// ----- Submit -----
// Atunci cand vrei sa faci vreo modificare asupra unul element din HTML
// folosind javascript trebuie sa creezi o constanta in care selectezi
// elementul. Apoi folosesti constanta ca sa aplici modificarile pe care
// le vrei
const buttonSubmit = document.querySelector('.change-to-step-two-button');
const cardStepOne = document.querySelector('.card-step-one');
const cardStepTwo = document.querySelector('.card-step-two');
const cardStepTwoSelectedRating = document.querySelector('.card-step-two-selected-rating');

const changeToStepTwo = () => {
    cardStepOne.style.display = 'none'; // single quote
    cardStepTwo.style.display = "block"; // double quotes
    
    cardStepTwoSelectedRating.innerText = `You selected ${selectedRating} out of 5`; // backticks
};

buttonSubmit.addEventListener('click', changeToStepTwo);