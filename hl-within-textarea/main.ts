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
    return textarea.value
}

function debounce(func: Function, timeout = 200) {
    let timer: number;
    return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  }; //FIXME: figure out what type 'this' should have
}

function test() {
    console.log('here')
}

const eventListener = debounce(test); 
textarea.addEventListener("input", eventListener);

interface textNode {
    sentence: string,
    whitespaces: string,
    color?: string
}

function parseText(text: string): textNode[] {
    const sentenceRegex = /([\s\S]+?[!?\.]+)(\s*)/g;

    let results: textNode[] = []
    let matches = text.matchAll(sentenceRegex)  // This returns an iterator. Matches.next() returns an array with [0: full match; 1 (and on): capture groups] 
    for (let [sentenceWithWhitespaces, sentence, whitespaces] of matches) {
        results.push({sentence, whitespaces})
    }
    return results
} 

const parsedText = parseText('The quick brown fox jumps over the lazy dog?!\n It barked..... this is another function.')

// const colorRefs = {
//     '1-2': 'red',
//     '3-4': 'green',
//     '5-6': 'blue',
//     '7-12': 'yellow'
// }

function getColorFromLength(length: number): string {
    switch (true) {
        case (length <= 2):
            return 'red';
        case (length <= 4):
            return 'green';
        case (length <= 6):
            return 'blue';
        case (length < 12):
            return 'yellow';
        default:
            return 'pink';
    }
}

function addColorProp(nodes: textNode[]): textNode[] {
    const coloredNodes = nodes.slice();
    coloredNodes.forEach(node => {
        const sentenceLen = node.sentence.split(/\s+/).length
        node.color = getColorFromLength(sentenceLen);
    })
    return coloredNodes;
}

console.log(addColorProp(parsedText));
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