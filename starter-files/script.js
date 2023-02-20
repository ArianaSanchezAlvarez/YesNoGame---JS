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
    document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
};

const fetchAnswer = () => {
    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showAnswer(data.answer));
};

document.querySelector('#button').addEventListener('click', () => {
    fetchAnswer();
});
