const submitButton = document.querySelector("#submitButton");
const inputBox = document.querySelector("#inputBox");
const wordSearched = document.querySelector("#wordSearched");
const results = document.querySelector("#results");
const results2 = document.querySelector("#results2");

const searchWord = () => {
    for (let entry of data) {
        if (entry.key === inputBox.value) {
            results.innerText = entry.key;
            results2.innerText = entry.senses;
            break;
        } else {
            results2.innerText = "Sorry, no results found"
        }
    }
}
submitButton.addEventListener('click', searchWord);