const submitButton = document.querySelector("#submitButton");
const inputBox = document.querySelector("#inputBox");
const wordSearched = document.querySelector("#wordSearched");
const results = document.querySelector("#results");
const results2 = document.querySelector("#results2");

// const searchWord = () => {
//     for (let entry of data) {
//         if (entry.key === inputBox.value) {
//             wordSearched.innerText = entry.key;
//             results2.innerText = entry.senses;
//             break;
//         } else {
//             wordSearched.innerText = '';
//             results2.innerText = "Sorry, no results found"
//         }
//     }
// }

function searchWord () {
    const word = data.find(word => word.key === inputBox.value);
    if (!word) {
        wordSearched.innerText = inputBox.value;
        results.innerText = "Sorry, no results found"
    } else {
        wordSearched.innerText = word.key;
        results.innerText = word.senses;
    }
};

inputBox.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        searchWord();
    }
});

submitButton.addEventListener('click', searchWord);