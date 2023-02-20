//SELECTORS
const ballSelector = document.querySelector('#ball');

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
const showAnswer = answer => {
    setTimeout(() => {
        document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
        ballSelector.classList.remove('shake__ball');
    }, 1000);
};

const fetchAnswer = () => {
    ballSelector.classList.add('shake__ball');
    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showAnswer(data.answer));
};

const handleKeyEnter = e => {
    if(e.keyCode === 13){
        fetchAnswer();
    }
}

document.querySelector('#button').addEventListener('click', () => {
    fetchAnswer();
});
