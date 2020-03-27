// Listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for Noun Submit Button Click
    const newNounForm = document.querySelector('#noun-input-form');
    newNounForm.addEventListener('submit', handleNewNounFormSubmit);

});

// Handling
const handleNewNounFormSubmit = function (event) {
    event.preventDefault();

    const nounListElement = createNounListElement(event.target);
    const nounList = document.querySelector('#noun-list');
    nounList.appendChild(nounListElement);

    event.target.reset();
};

// Helper Functions
const createNounListElement = function (form) {
    const nounListItem = document.createElement('li');

    const nounLine = document.createElement('p');
    nounLine.textContent = `${form.english.value}:::${form.romanian.value}`

    nounListItem.appendChild(nounLine);

    return nounListItem
}




