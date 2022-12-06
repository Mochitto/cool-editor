import {parseText} from "./highlight"
import {addColorProp} from "./highlight"
import {textNode} from './highlight';

export function createFragment(content: string): DocumentFragment { // TODO: rename function
    const parsedText = parseText(content);
    const parsedTextWithColorProps = addColorProp(parsedText);
    let fragment = createSpansInFragment(parsedTextWithColorProps)
    return fragment
}


function createSpansInFragment(textNodes: textNode[]) {
    const fragment = document.createDocumentFragment()
    for (let textNode of textNodes) {
        let spanContent = document.createTextNode(textNode.sentence)
        let span = document.createElement("span")
        span.style.background = textNode.color || "black" // FIXME: check for color property

        span.appendChild(spanContent)
        fragment.appendChild(span)        

        let whitespaces = document.createTextNode(textNode.whitespaces)
        let whitespacesSpan = document.createElement("span")
        whitespacesSpan.appendChild(whitespaces)
        fragment.appendChild(whitespacesSpan)
    }
    return fragment
}