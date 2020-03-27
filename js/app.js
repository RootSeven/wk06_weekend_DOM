// Listeners

document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for Noun Submit Button Click
    const newNounForm = document.querySelector('#noun-input-form');
    newNounForm.addEventListener('submit', handleNewNounFormSubmit);

    // Listen for Delete All Nouns Button Click
    const deleteAllNounsButton = document.querySelector('#delete-all-nouns')
    deleteAllNounsButton.addEventListener('click', handleDeleteAllNounsClick);

    // Listen for Letter Button Clicks
    const upperABreveButton = document.querySelector('#upper-a-breve')
    upperABreveButton.addEventListener('click', handleUpperABreveClick);
    
    const lowerABreveButton = document.querySelector('#lower-a-breve')
    lowerABreveButton.addEventListener('click', handleLowerABreveClick);
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
    console.log("delete click!");
    const nounList = document.querySelector('#noun-list');
    nounList.innerHTML = '';
  }

// Letter Buttons
const handleUpperABreveClick = function (event) {
    romanianInputBox = document.querySelector('#romanian');
    romanian.value = `${romanian.value}Ă`;
}

const handleLowerABreveClick = function (event) {
    romanianInputBox = document.querySelector('#romanian');
    romanian.value = `${romanian.value}ă`;
}

// Helper Functions
const createNounListElement = function (form) {
    const nounListItem = document.createElement('li');

    const nounLine = document.createElement('p');
    nounLine.textContent = `${form.english.value}${form.delimiter.value}${form.romanian.value}`

    nounListItem.appendChild(nounLine);

    return nounListItem
};

const clearFields = function (form) {
    document.querySelector('#english').value = "";
    document.querySelector('#romanian').value = "";
};

const typeCharacter = function(character) {
    
};