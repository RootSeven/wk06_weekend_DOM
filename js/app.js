// Listeners

document.addEventListener('DOMContentLoaded', () => {
    
    const newNounForm = document.querySelector('#noun-input-form');
    newNounForm.addEventListener('submit', handleNewNounFormSubmit);

    const clearButton = document.querySelector('#clear-textarea');
    clearButton.addEventListener('click', handleClearButtonClick);

    const deleteAllNounsButton = document.querySelector('#delete-all-nouns');
    deleteAllNounsButton.addEventListener('click', handleDeleteAllNounsClick);

    const selectTextAreaButton = document.querySelector('#select-textarea');
    selectTextAreaButton.addEventListener('click', handleSelectTextAreaClick);

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
    const nounListElement = createNounListElement(this);
    const nounList = document.querySelector('#noun-list');
    nounList.appendChild(nounListElement);

    clearFields(this, ['english', 'romanian']);
    this.english.focus();
};

const handleDeleteAllNounsClick = function () {
    const nounList = document.querySelector('#noun-list');
    nounList.innerHTML = '';
  }

  const handleClearButtonClick = function () {
        document.querySelector('#noun-textarea').value = "";
    };

// Letter Buttons
const handleUpperABreveClick = function () {
    thisForm = document.querySelector('#noun-input-form');
    typeCharacter("Ă", thisForm, 'romanian');
}

const handleLowerABreveClick = function () {
    thisForm = document.querySelector('#noun-input-form');
    typeCharacter("ă", thisForm, 'romanian');
}

const handleUpperACircumflexClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("Â", thisForm, 'romanian');
}

const handleLowerACircumflexClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("â", thisForm, 'romanian');
}

const handleUpperICircumflexClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("Î", thisForm, 'romanian');
}

const handleLowerICircumflexClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("î", thisForm, 'romanian');
}

const handleUpperSCommaClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("Ș", thisForm, 'romanian');
}

const handleLowerSCommaClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("ș", thisForm, 'romanian');
}

const handleUpperTCommaClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("Ț", thisForm, 'romanian');
}

const handleLowerTCommaClick = function () {
    let thisForm = document.querySelector('#noun-input-form');
    typeCharacter("ț", thisForm, 'romanian');
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

const clearFields = function (form, clearThese) {
    clearThese.forEach ( field => {
        form.querySelector(`#${field}`).value = "";
    })
};

const typeCharacter = function(character, form, field) {
    formField = form.querySelector(`#${field}`)
    formField.value = `${formField.value}${character}`;
    formField.focus();
};