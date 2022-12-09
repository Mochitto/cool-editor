"use strict";
let currentWordSpan = assertElementById("current_word");
let previousWordSpan = assertElementById("previous_word");
let focus_area = assertElementById("focus_area");
// let stop_button = assertElementById("stop-button")
let textarea = assertElementById("writing_input");
function assertElementById(id) {
    let element = document.getElementById(id);
    if (typeof element !== undefined && element !== null) {
        return element;
    }
    else {
        throw new Error(`Couldn't get element with the id of ${id}.`);
    }
}
// Manage focus events
focus_area.addEventListener("click", (event) => {
    focus_area.classList.add("type_area__focus--ishidden");
    textarea.focus();
});
textarea.addEventListener("focusout", (event) => {
    focus_area.classList.remove("type_area__focus--ishidden");
});
// Manage typing
let text = "";
let [previousWord, currentWord] = ["", ""]; // This is cool!
textarea.addEventListener("keydown", (event) => {
    let key = event.key;
    let content = textarea.value;
    let previousSpace = content.lastIndexOf(" ", content.length - 2);
    if (key == " " && previousSpace != -1) {
        if (previousWord.length > 3) {
            text += " " + previousWord;
            previousWord = currentWord;
        }
        else {
            previousWord += " " + currentWord;
        }
        currentWord = "";
        textarea.value = previousWord + " " + currentWord;
        previousWordSpan.textContent = previousWord;
        currentWordSpan.textContent = currentWord;
    }
    else if (key.length == 1) {
        currentWord += key;
        currentWordSpan.innerText += key;
    }
    else if (key == "Backspace") {
        if (!currentWord) {
            currentWord = previousWord;
            previousWord = "";
        }
        else {
            currentWord = currentWord.slice(0, currentWord.length - 2);
        }
        previousWordSpan.textContent = previousWord;
        currentWordSpan.textContent = currentWord;
    }
});
// stop_button?.addEventListener("click", (event) => {
//     event.preventDefault();
//     focus_div.style.display = "none"
//     text += current_word == "" ? "" : " " + current_word
//     textarea.value = text
//     textarea.style.display = "block"
// })
// focus_div?.addEventListener("keydown", (event) => {
//     event.preventDefault()
//     let key = event.key
//     if (key === "Backspace") {
//         current_word = current_word.slice(0, -1)
//     } else if (key === " ") {
//         text += " " + current_word
//         if (current_word.length > 3) {
//             previous_word = current_word
//         } else {
//             previous_word += " " + current_word
//         }
//         current_word = ""
//     } else {
//         if (key.length == 1) {
//     current_word += key}
//     }
//     type_area.textContent = current_text.join(" ")
//     console.log(text)
// })
