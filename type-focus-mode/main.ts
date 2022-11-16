let type_area = document.getElementById("type-area")
let focus_div = document.getElementById("focus-div")
let stop_button = document.getElementById("stop-button")
let textarea = document.getElementById("target-textarea")

focus_div?.focus()
let text = ""
let [previous_word, current_word] = ["", ""] // This is cool!

setTimeout(() => {type_area?.textContent += " >:("}, 3000)

stop_button?.addEventListener("click", (event) => {
    event.preventDefault();

    focus_div.style.display = "none"
    text += current_word == "" ? "" : " " + current_word
    textarea.value = text
    textarea?.style.display = "block"
})

focus_div?.addEventListener("keydown", (event) => {
    event.preventDefault()
    let key = event.key
    if (key === "Backspace") {
        current_word = current_word.slice(0, -1)
    } else if (key === " ") {
        text += " " + current_word
        if (current_word.length > 3) {
            previous_word = current_word
        } else {
            previous_word += " " + current_word
        }
        current_word = ""
    } else {
        if (key.length == 1) {
    current_word += key}
    }
    type_area?.textContent = current_text.join(" ")
    console.log(text)
})