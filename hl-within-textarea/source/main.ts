import {createFragment} from "./libs/elementCreation"

function assertElementById(id: string) {{
    let element = document.getElementById(id)
    if (element) {
        return element
    } else {
        throw new Error(`Element with the id of: ${id} didn't exist.` )
    }
}}

const textarea = <HTMLTextAreaElement>assertElementById("textarea")
const textDiv = assertElementById("text")

function getTextareaVal() {
    return textarea.value;
}

function debounce(func: Function, timeout = 200) {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(args); }, timeout);
    };
}

function main() { 
    let highlightedFragment = createFragment(getTextareaVal())
    textDiv.innerHTML = ""
    textDiv.appendChild(highlightedFragment)
}

textarea.addEventListener("input", debounce(main, 20));