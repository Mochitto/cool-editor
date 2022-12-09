export interface textNode {
    sentence: string,
    whitespaces: string,
    color?: string
}

export function parseText(text: string): textNode[] {
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

const parsedText = parseText('The quick brown fox jumps over the lazy dog?!\n It barked..... this is another function.')

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

export function addColorProp(nodes: textNode[]): textNode[] {
    const coloredNodes = nodes.slice();
    coloredNodes.forEach(node => {
        const sentenceLen = node.sentence.split(/\s+/).length
        node.color = getColorFromLength(sentenceLen);
    })
    return coloredNodes;
}
