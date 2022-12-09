export interface textNode {
    sentence: string,
    whitespaces: string,
    color?: string
}

 function parseText(text: string): textNode[] {
    const sentenceRegex = /([\s\S]+?[!?\.\n]+)(\s+)/g;

    let results: textNode[] = []
    let matches = text.matchAll(sentenceRegex)  // This returns an iterator. Matches.next() returns an array with [0: full match; 1 (and on): capture groups] 
    

    /*  FIXME
        Explanation of lines 20-33:
            Last index and last Length refer to the last match.
            They are overwritten at every iteration; at the end of the loop they will hold the index value of the last match.
            Starting from that, we can get the last sentence.
    */
    let lastIndex: number | undefined = 0// FIXME: VERY QUESTIONABLE 
    let lastLength = 0// FIXME: VERY QUESTIONABLE 

    for (let match of matches) {
        let sentence = match[1]
        let whitespaces = match[2]
        results.push({sentence, whitespaces})

        lastIndex = match.index// FIXME: VERY QUESTIONABLE 
        lastLength = match[0].length // FIXME: VERY QUESTIONABLE 
    }

    lastIndex = lastIndex || 0  // FIXME: VERY QUESTIONABLE 
    results.push({sentence: text.slice(lastIndex+lastLength), whitespaces: ""})// FIXME: VERY QUESTIONABLE 

    return results 
} 

function getColorFromLength(length: number): string {
    const lengthToColorMap = {
        '1-2': 'red',
        '3-4': 'green',
        '5-6': 'blue',
        '7-11': 'yellow',
        '12+': 'pink',
    };

    for (const range in lengthToColorMap) {
        if (range === '12+') {
            if (length >= 12) {
                return lengthToColorMap[range];
            }
        } else {
            const [min, max] = range.split('-');
            if (length >= Number(min) && length <= Number(max)) {
                return lengthToColorMap[range];
            }
        }
    }

    return 'pink'; // length 0
}


function addColorProp(nodes: textNode[]): textNode[] {
    const coloredNodes = nodes.slice();
    coloredNodes.forEach(node => {
        const sentenceLen = node.sentence.split(/\s+/).length
        node.color = getColorFromLength(sentenceLen);
    })
    return coloredNodes;
}

export function getTextNodes(text: string): textNode[] {
    const parsedText = parseText(text)
    const coloredTextNodes = addColorProp(parsedText)
    return coloredTextNodes
}