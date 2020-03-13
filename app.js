const submitButton = document.querySelector("#submitButton");
const inputBox = document.querySelector("#inputBox");
const wordSearched = document.querySelector("#wordSearched");
const results = document.querySelector("#results");
const wordSearched2 = document.querySelector('#word-searched');
const searchResults2 = document.querySelector('#search-results');
const findExactMatch = document.querySelector('#exactMatch');
const clearResults = document.querySelector('#clear');
const resultsField = document.querySelector('#results-field');

function exactMatch() {
    results.innerText = '';
    resultsField.classList.remove("hidden");
    wordSearched2.innerText = "Exact match sought for:";
    const word = data.find(word => word.key.toLowerCase() === inputBox.value.toLowerCase());
    if (!word) {
        wordSearched.innerText = inputBox.value;
        results.innerHTML = "<p>Sorry, exact match not found.</p>";
    } else {
        wordSearched.innerText = word.key;
        results.innerHTML = `<p>${word.senses}</p>`;
    }
}

function searchWord() {
    results.innerText = '';
    resultsField.classList.remove("hidden");
    wordSearched.innerText = inputBox.value;
    const searchResults = [];
    for (let entry of data) {
        if (entry.key.toLowerCase().includes(inputBox.value.toLowerCase())) {
            searchResults.push(entry);
        }
    }
    for (result of searchResults) {
        const header = document.createElement('h2');
        const paragraph = document.createElement('p');
        header.innerText = result.key;
        paragraph.innerText = result.senses;
        results.appendChild(header);
        results.appendChild(paragraph);
    }
    if (searchResults.length === 0) {
        results.innerHTML = "<p>Sorry, no results found.</p>";
    }
}

function clear () {
    wordSearched.innerText = '';
    results.innerText = '';
    inputBox.value = '';
    resultsField.classList.add("hidden");
};

inputBox.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        searchWord();
    }
});

submitButton.addEventListener('click', searchWord);

findExactMatch.addEventListener('click', exactMatch);

clearResults.addEventListener('click', clear);