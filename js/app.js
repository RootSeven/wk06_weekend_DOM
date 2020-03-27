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

    clearFields(event.target);
};

// Helper Functions
const createNounListElement = function (form) {
    const nounListItem = document.createElement('li');

    const nounLine = document.createElement('p');
    nounLine.textContent = `${form.english.value}${form.delimiter.value}${form.romanian.value}`

    nounListItem.appendChild(nounLine);

    return nounListItem
}

const clearFields = function (form) {
    document.querySelector('#english').value = "";
    document.querySelector('#romanian').value = "";

}