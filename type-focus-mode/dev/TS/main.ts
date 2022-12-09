let currentWordSpan = assertElementById("current_word")
let previousWordSpan = assertElementById("previous_word")
let focus_area = assertElementById("focus_area")
// let stop_button = assertElementById("stop-button")
let textarea = assertElementById("writing_input") as HTMLInputElement

function assertElementById(id: string) {
    let element = document.getElementById(id)
    if (typeof element !== undefined && element !== null) {
        return element
    } else {
        throw new Error(`Couldn't get element with the id of ${id}.`)
    }
}

// Manage focus events
focus_area.addEventListener("click", (event) => {
    focus_area.classList.add("type_area__focus--ishidden")
    textarea.focus();
});

textarea.addEventListener("focusout", (event) => {
    focus_area.classList.remove("type_area__focus--ishidden")
});

// Manage typing
let text = ""
let [previousWord, currentWord] = ["", ""] // This is cool!

textarea.addEventListener("keydown", (event) => {
    let key = event.key
    let content = textarea.value
    let previousSpace = content.lastIndexOf(" ", content.length-2)
    if (key == " " && previousSpace != -1) { 
        if (previousWord.length > 3) {
            text += " " + previousWord
            previousWord = currentWord
        } else {
            previousWord += " " + currentWord
        }
        currentWord = ""
        textarea.value = previousWord + " " + currentWord
        previousWordSpan.textContent = previousWord
        currentWordSpan.textContent = currentWord
    } else if (key.length == 1) {
        currentWord += key
        currentWordSpan.innerText += key
    } else if (key == "Backspace") {
        if (!currentWord) {
            currentWord = previousWord 
            previousWord = ""
        } else {
        currentWord = currentWord.slice(0, currentWord.length - 2)
        }
        previousWordSpan.textContent = previousWord
        currentWordSpan.textContent = currentWord
    }
}) 