"use strict";
const highlight_1 = require("./libs/highlight");
const highlight_2 = require("./libs/highlight");
function assertElementById(id) {
    {
        let element = document.getElementById(id);
        if (element) {
            return element;
        }
        else {
            throw new Error(`Element with the id of: ${id} didn't exist.`);
        }
    }
}
const textarea = assertElementById("textarea");
const textDiv = assertElementById("text");
function getTextareaVal() {
    return textarea.value;
}
function debounce(func, timeout = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(args); }, timeout);
    };
}
textarea.addEventListener("keypress", debounce(main, 500));
function main() {
    const content = getTextareaVal();
    const parsedText = (0, highlight_1.parseText)(content);
    const parsedTextWithColorProps = (0, highlight_2.addColorProp)(parsedText);
    console.log(parsedTextWithColorProps);
}
/*
1. Get the text from textarea
    1.1 Create function to get the text
    1.2 put it in a debouncer function
    1.3 Apply it on "input" event

2. Parse text
    2.1 Split it with regex
        
        ([\s\S]+? Match anything, not greedy
        [!?\.]+) Either . ? !
        (\s*)  Match zero or more whitespaces

    2.2 Store in array as [{sentence: $1, whitespace: $2}...]

3. Add color properties to text array
    3.1 Create reference object with different colors
    3.2 Function that returns a new array of objects as {sentence, whitespaces, color}

4. Re-render the div with the new spans
    4.1 Create new docFragment
    4.2 Function to build the spans (textnodes, spaces, color/class) from the array of objects
        !!! Transform \n into <br>
    4.3 Put spans in the docFragment
    4.4 Get div children and check for equality with the docFrag
        if differences:
            Clear the div
            Div = docFragment
        else:
            nothing :)
*/ 
