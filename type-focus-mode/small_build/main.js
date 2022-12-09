"use strict";
function assertElementById(id) {
    let element = document.getElementById(id);
    if (typeof element !== undefined && element !== null) {
        return element;
    }
    else {
        throw new Error(`Couldn't get element with the id of ${id}.`);
    }
}
const textInput = assertElementById("text_input");
const textOutput = assertElementById("text");
textInput.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key.length > 1 && !"TabBackspaceShiftCapsLockEnter".includes(key)) {
        event.preventDefault();
        console.log("hit!" + key);
    }
    if (key == "Enter") {
        textOutput.value += textInput.value + "\n";
        // This should leave a mark like "<newline>" as previous word
        // Have special span for those marks? so that they don't get pushed to text
        textInput.value = "";
    }
    if (key === " ") {
        let [previousWord, currentWord] = getPreviousAndCurrentWords(textInput.value);
        if (previousWord.length > 3) {
            textInput.value = currentWord;
            textOutput.value += previousWord;
        }
    }
});
function getPreviousAndCurrentWords(words) {
    let lastSpaceIndex = words.lastIndexOf(" ");
    let previousWords = words.slice(0, lastSpaceIndex);
    let currentWord = words.slice(lastSpaceIndex);
    return [previousWords, currentWord];
}
function updateInputOutput() {
}
