const submitButton = document.querySelector("#submitButton");
const inputBox = document.querySelector("#inputBox");
const wordSearched = document.querySelector("#wordSearched");
const results = document.querySelector("#results");
const wordSearched2 = document.querySelector('#word-searched');
const searchResults2 = document.querySelector('#search-results');
const findExactMatch = document.querySelector('#exactMatch');
const clearResults = document.querySelector('#clear');

function exactMatch() {
    results.innerText = '';
    wordSearched2.classList.remove("hidden");
    wordSearched2.innerText = "Exact match sought for:";
    searchResults2.classList.remove("hidden");
    const word = data.find(word => word.key === inputBox.value);
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
    wordSearched2.classList.remove("hidden");
    searchResults2.classList.remove("hidden");
    wordSearched.innerText = inputBox.value;
    const searchResults = [];
    for (let entry of data) {
        if (entry.key.includes(inputBox.value)) {
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
    wordSearched2.classList.add("hidden");
    searchResults2.classList.add("hidden");
};

inputBox.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        searchWord();
    }
});

submitButton.addEventListener('click', searchWord);

findExactMatch.addEventListener('click', exactMatch);

clearResults.addEventListener('click', clear);