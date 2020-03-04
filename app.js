const submitButton = document.querySelector("#submitButton");
const inputBox = document.querySelector("#inputBox");
const wordSearched = document.querySelector("#wordSearched");
const results = document.querySelector("#results");
const results2 = document.querySelector("#results2");

// const searchWord = () => {
//     let latinWord = inputBox.value;
//     wordSearched.innerText= latinWord;
//     $.ajax({
//         url: "https://glosbe.com/gapi/translate?from=la&dest=eng&format=json&phrase="+latinWord,
//         dataType: 'jsonp',
//         success: function(json) {
//             results.innerText="";
//             results2.innerText="";
//             if (json.tuc.length < 1) {
//                 results.innerText = "Sorry, no results found."
//             } else {
//                 if (json.tuc[0].phrase) {
//                     results.innerText = json.tuc[0].phrase.text;
//                 }
//                 if (json.tuc[0].meanings[0].text) {
//                     results2.innerHTML = json.tuc[0].meanings[0].text;
//                 }
//             }
//         }
//     });
// };

console.log(ls_a);

const searchWord = () => {
    for (let entry of ls_a) {
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