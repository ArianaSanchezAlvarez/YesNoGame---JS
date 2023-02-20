//SELECTORS
const ballSelector = document.querySelector('#ball');
const buttonSelector = document.querySelector('#button');
const inputSelector = document.querySelector('#input');

// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const disableButton = () => {
    buttonSelector.setAttribute('disabled', 'disabled');
}

const cleanupResponses = () => {
    setTimeout(() => {
        document.querySelector('#answer').innerHTML = '';
        inputSelector.value = '';
    }, 3000);
}

const showAnswer = answer => {
    setTimeout(() => {
        document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
        ballSelector.classList.remove('shake__ball');
        cleanupResponses();
    }, 1000);
};

const fetchAnswer = () => {
    disableButton();
    ballSelector.classList.add('shake__ball');

    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showAnswer(data.answer));
};

const handleKeyEnter = e => {
    if(!inputSelector.value) return;
    if(e.keyCode === 13){
        fetchAnswer();
    }
}

buttonSelector.addEventListener('click', () => {
    fetchAnswer();
});
