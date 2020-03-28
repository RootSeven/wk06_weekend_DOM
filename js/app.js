// Listeners

document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for Noun Submit Button Click
    const newNounForm = document.querySelector('#noun-input-form');
    newNounForm.addEventListener('submit', handleNewNounFormSubmit);

    // Listen for Clear Button Click
    const clearButton = document.querySelector('#clear-textarea');
    clearButton.addEventListener('click', handleClearButtonClick);

    // Listen for Delete All Nouns Button Click
    const deleteAllNounsButton = document.querySelector('#delete-all-nouns');
    deleteAllNounsButton.addEventListener('click', handleDeleteAllNounsClick);

    const selectTextAreaButton = document.querySelector('#select-textarea');
    selectTextAreaButton.addEventListener('click', handleSelectTextAreaClick);

    // Listen for Letter Button Clicks
    const upperABreveButton = document.querySelector('#upper-a-breve');
    upperABreveButton.addEventListener('click', handleUpperABreveClick);
    
    const lowerABreveButton = document.querySelector('#lower-a-breve');
    lowerABreveButton.addEventListener('click', handleLowerABreveClick);

    const upperACircumflexButton = document.querySelector('#upper-a-circumflex')
    upperACircumflexButton.addEventListener('click', handleUpperACircumflexClick);

    const lowerACircumflexButton = document.querySelector('#lower-a-circumflex')
    lowerACircumflexButton.addEventListener('click', handleLowerACircumflexClick);

    const upperICircumflexButton = document.querySelector('#upper-i-circumflex')
    upperICircumflexButton.addEventListener('click', handleUpperICircumflexClick);

    const lowerICircumflexButton = document.querySelector('#lower-i-circumflex')
    lowerICircumflexButton.addEventListener('click', handleLowerICircumflexClick);

    const upperSCommaButton = document.querySelector('#upper-s-comma')
    upperSCommaButton.addEventListener('click', handleUpperSCommaClick);

    const lowerSCommaButton = document.querySelector('#lower-s-comma')
    lowerSCommaButton.addEventListener('click', handleLowerSCommaClick);

    const upperTCommaButton = document.querySelector('#upper-t-comma')
    upperTCommaButton.addEventListener('click', handleUpperTCommaClick);

    const lowerTCommaButton = document.querySelector('#lower-t-comma')
    lowerTCommaButton.addEventListener('click', handleLowerTCommaClick);

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

  const handleClearButtonClick = function (event) {
        document.querySelector('#noun-textarea').value = "";
    };

// Letter Buttons
const handleUpperABreveClick = function (event) {
    typeCharacter("Ă");
}

const handleLowerABreveClick = function (event) {
    typeCharacter("ă");
}

const handleUpperACircumflexClick = function (event) {
    typeCharacter("Â");
}

const handleLowerACircumflexClick = function (event) {
    typeCharacter("â");
}

const handleUpperICircumflexClick = function (event) {
    typeCharacter("Î");
}

const handleLowerICircumflexClick = function (event) {
    typeCharacter("î");
}

const handleUpperSCommaClick = function (event) {
    typeCharacter("Ș");
}

const handleLowerSCommaClick = function (event) {
    typeCharacter("ș");
}

const handleUpperTCommaClick = function (event) {
    typeCharacter("Ț");
}

const handleLowerTCommaClick = function (event) {
    typeCharacter("ț");
}

const handleSelectTextAreaClick = function (event) {
    const nounTextArea = document.querySelector('#noun-textarea');
    nounTextArea.select();
}

// Helper Functions
const createNounListElement = function (form) {
    const nounListItem = document.createElement('li');
    const nounTextArea = document.querySelector('#noun-textarea');


    const nounLine = document.createElement('p');
    nounLine.textContent = `${form.english.value}${form.delimiter.value}${form.romanian.value}`
    nounListItem.appendChild(nounLine);
    nounTextArea.value = `${nounTextArea.value}${nounLine.textContent}\n`


    return nounListItem
};

const clearFields = function (form) {
    document.querySelector('#english').value = "";
    document.querySelector('#romanian').value = "";
};

const typeCharacter = function(character) {
    romanian.value = `${romanian.value}${character}`;
    romanian.focus();
};