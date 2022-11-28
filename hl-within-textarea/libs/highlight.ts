interface textNode {
    sentence: string,
    whitespaces: string,
    color?: string
}

export function parseText(text: string): textNode[] {
    const sentenceRegex = /([\s\S]+?[!?\.]+)(\s*)/g;

    let results: textNode[] = []
    let matches = text.matchAll(sentenceRegex)  // This returns an iterator. Matches.next() returns an array with [0: full match; 1 (and on): capture groups] 
    for (let [sentenceWithWhitespaces, sentence, whitespaces] of matches) {
        results.push({sentence, whitespaces})
    }
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
