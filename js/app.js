// Listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for Noun Submit Button Click
    const newNounForm = document.querySelector('#noun-input-form');
    newNounForm.addEventListener('submit', handleNewNounFormSubmit);

    const deleteAllNounsButton = document.querySelector('#delete-all-nouns')
    deleteAllNounsButton.addEventListener('click', handleDeleteAllNounsClick);

});

// Handling
const handleNewNounFormSubmit = function (event) {
    event.preventDefault();

    const nounListElement = createNounListElement(event.target);
    const nounList = document.querySelector('#noun-list');
    nounList.appendChild(nounListElement);

    clearFields(event.target);
};

const handleDeleteAllNounsClick = function (event) {
    const nounList = document.querySelector('#noun-list');
    nounList.innerHTML = '';
  }

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